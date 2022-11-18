+++
title = "Overcoming Lifetimes & the Baggage of OOP"
slug = "overcoming-lifetimes"
description = "Rust's similarity to languages like C++ often set beginners on a pitfall-ridden path, and unlearning some of those patterns is a big step in overcoming that."
date = 2022-11-18
[extra]
icon = "fa-solid fa-circle-nodes"
+++

Gather around the fire, kids, because it's time to talk about *lifetimes*! Or, as we'll soon discover, perhaps the lack thereof.

- [Lifetimes? What Lifetimes?](#lifetimes-what-lifetimes)
- [Rust is a Language in Disguise](#rust-is-a-language-in-disguise)
  - [Hammering a Nail with a Stapler](#hammering-a-nail-with-a-stapler)
- [The C# Coder Makes a Graph of Nodes](#the-c-coder-makes-a-graph-of-nodes)
  - [Object-Oriented Freedom](#object-oriented-freedom)
  - [What Does This Look Like In Rust?](#what-does-this-look-like-in-rust)
  - ["Just Don't"](#just-dont)
- [The C# Coder Tries Again](#the-c-coder-tries-again)
  - [No More Lifetimes](#no-more-lifetimes)
  - [Rephrasing the Problem](#rephrasing-the-problem)
- [Conclusion & Advice](#conclusion--advice)

## Lifetimes? What Lifetimes?

A thing I’ve noticed about a large amount of my Rust code, now that I’ve been using it for many years now, is how little I actually use lifetime-annotated references or smart pointers such as *`Box`*, *`Rc`*, and the like.

Very rarely in my code does a reference outlive the function that it entered, and when they do, it’s usually in a tiny portion of a library that doesn’t end up infecting its way into the client-side code anyway.

> Lifetimes can become kind of viral, forcing any code touching them to also require annotations, and resulting in a big tangled mess that can be difficult to reason about.

Yet, I’ve written many useful libraries and most of an entire game engine in Rust (rather performantly) and find myself reaching for lifetimes seldomly, and usually because a small section of hot code would benefit from their performance.

It wasn't like that at the start. It wasn't as fun.

## Rust is a Language in Disguise

One thing I’ve been thinking about recently is how Rust’s syntax being so similar to languages like C++ and C# occasionally does it a disservice. Because it looks like them, beginners expect it to act like them.

> The similar syntax is a trade-off, something [Bob Nystrom](http://journal.stuffwithstuff.com/) has mentioned about working on the *Dart* programming language, as this familiarity does have the benefit of making the language less intimidating to newcomers.

A beginner might say, *Oh, references! Those are in C++ and C#, I know those! And because I know those, I will try to use them like how I use them in those languages!*

So they try it, and try to create a web of structs that reference each other, because that works in those languages. But they quickly find themself in a frustrating tornado of lifetimes and very difficult to understand (and fix) errors. Even worse, in my opinion, is they’ll try to resort to ugly nests of *`Rc`*’s and *`RefCell`*’s and find that it’s hardly less confusing.

I think this is a big tipping point for beginners, and where a lot of people get frustrated and quit (if not at least temporarily, then for good). Because it appears, in that moment, that Rust does not let you code these basic patterns, and lifetimes restrict the power of references too much.

> Despite the fact that lifetimes are Rust's most notorious roadblock for beginners, they're not introduced in the official *Rust Book* until [chapter 10.3](https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html), with only a single page dedicated to them. 
> 
> I don't think this is bad, but their tiny section in the book does not seem proportional to their reputation and established difficulty to learn.

### Hammering a Nail with a Stapler

But Rust *does* have mechanisms to solve those problems. The issue is that, often, references are simply not the tool for the job. In other languages like C++ and C# they *would* be! But in Rust, references are not the same tool. ... Okay, well, sometimes they are. But I posit that *lifetime-annotated references* are entirely different creatures and should be treated as such.

It took me awhile to come to this realization, and it helped me grow very rapidly as a Rust programmer when I accepted that. When, I find myself trying to code in Rust the fast-and-loose way way I would in C++/C#, I remember to ask myself:

> "If the problem I encounter requires me to store a reference in a struct with an annotated lifetime, is it *essential* to code it this way, or is there another way to solve the problem?"

I have been pleasantly surprised to learn that the answer is often: *actually, no*.

Don't get me wrong: lifetimes are important! But I don't think of them as an "an annoying restriction tacked onto references" anymore. Now, they are a tool I reach for when I need them: when I want to make a hot section of code extra performant by reducing allocations (hello [Cow](https://doc.rust-lang.org/std/borrow/enum.Cow.html)), or when I want to implement an especially helpful iterator over a custom data structure.

> The `image` crate's [Pixels](https://docs.rs/image/0.24.5/image/struct.Pixels.html) iterator is a great example of this. Notice how there are no cyclic web of references: just one reference, borrowed for a short period of time, and serving a single boilerplate-reducing purpose. *Beautiful.*

## The C# Coder Makes a Graph of Nodes

Let's walk through a hypothetical beginner's experience in Rust. They're a programmer coming from C#. They are fairly familiar with C++ as well, but they keep seeing all this hype about *Rust* and decided to try out the hot new thing.

> # OK, This programmer is not hypothetical
> 
> It was me. I was the programmer.

### Object-Oriented Freedom

Object-oriented programming, pointers, and garbage-collected references have given me a lot of freedom. Sometimes I think this freedom has just *let me get away with* structuring my data... poorly.

Here's an example of a simple structure a game developer might cook up:

```cs
// We'll use C# as an example:

class Graph {
    List<Node> nodes;
}

class Node {
    List<Node> connections;
}
```

You might already be [turning your nose up](https://en.wikipedia.org/wiki/Code_smell) at this, but this is just a simple example, so stick with me.

Also, while *you* might already know the problems with it, this is entirely understandable code for a novice to write. Because... it kind of *makes sense*, doesn't it? They think of the problem:

> "I need a graph with a bunch of nodes. Each of these nodes is connected to other nodes."

And that code, whether you like it or not, absolutely represents that sentence. Also... it *does* work! It's just probably not the best approach to the problem.

We'll get to alternatives, but first...

### What Does This Look Like In Rust?

So this programmer (not a AAA tech lead, just some kid who makes games between college classes), wants to pick up the hot new language: Rust!

They start coding their ol' reliable graph:

```rust
struct Graph {
    nodes: Vec<Node>,
}

struct Node {
    connections: Vec<Node>,
}
```

> "Dang, this is easy! It looks basically just the same as my C# code!"

But anyone who knows Rust better already is wincing at this, knowing what is to come. This coder, working their way through the problem, encounters several problems and will learn a few things..

> "Hmm so Rust is *moving* these into the vectors, so I can't have nodes in 2 places at once. I could `Copy` them, but then they're de-synced, which is not what I want. Oh, wait! I kind of know C++, I will make the connections into *pointers*!"

The C++ version of this might look like this:

```cpp
struct Graph {
    vector<Node*> nodes;
};

struct Node {
    vector<Node*> connections;
};
```

Other than having to remember to manually free the nodes, this isn't too different from the C# version.

So our ambitious coder thinks: *hmm, maybe I could use pointers?* This leads them to Rust's references, and they cook up something like this:

```rust
struct Graph {
    // okay so the nodes are "allocated" here
    nodes: Vec<Node>,
}

struct Node {
    // and these will be pointers to the allocated nodes
    connections: Vec<&Node>
}
```

Uh oh, they can't just put a reference there like they do in a function. The compiler tells them how to fix this:

```rust
struct Node<'a> {
    connections: Vec<&'a Node<'a>>,
}
```

Wait or is it...

```rust
struct Node<'a> {
    // "aaaaa" is probably what they are screaming in their head by now
    connections: Vec<&'a Node<'a>>, 
}
```

What is going on!? This is starting to look very different from C++, let's try compiling– oh. Well since **`Node`** has a lifetime, then **`Graph`** has to as well...

```rust
struct Graph<'a> {
    nodes: Vec<Node<'a>>,
}
```

Their brow is staring to furrow, they are starting to bead with sweat. Rust is a bit *weird* and this syntax is a bit alien.

They compile an empty graph, but as soon as they try to populate it, things get hairy. They find out they have to add a node to the graph before connecting it, but they can't get a reference to a node and add new nodes at the same time! As soon as any node has a reference, the graph is completely locked!

They're stuck.

> They might also reach for *`Box`*, *`Rc`*, and *`RefCell`*... only to be lost in a different kind of tangled mess of mutability, borrowing, and layers of ugly nested types.

### "Just Don't"

At this point they maybe reach out for help, and are met with a true but frustrating answer:

> "Why are you trying to code it this way? Don't code it this way. This is not how you code in Rust."

Maybe the reply is a lot more polite than this, but the message is there. And what a frustrating message it is. *Don't code this way.* Don't code the way you do in every other language. The way that *works just fine* in those languages!

Don't code the way your brain literally worded the problem:

> "I need a graph with a bunch of nodes. Each of these nodes is connected to other nodes."

This was the first time I quit Rust. I had other things to do and it was frying my brain.

## The C# Coder Tries Again

Some time has passed and I've had the chance to cool my head.

A year later I keep [hearing about](https://survey.stackoverflow.co/2022/#section-most-loved-dreaded-and-wanted-programming-scripting-and-markup-languages) Rust, and everyone using it seems to be having the time of their life. I've also spent *another year* with C++, I am not enjoying it, and I *really* want an alternative. Rust still seems like the most promising candidate.

And I did enjoy my time with it. Until the *indicent*.

### No More Lifetimes

Okay, if what I've been told is true, I was approaching the problem wrong. So let's try a different approach: **Let's get rid of the lifetimes. No references!**

But how can we tell each node which connections it has if we don't use references?

```rust
struct Graph {
    nodes: Vec<Node>,
}

struct Node {
    // what goes in here?
    connections: Vec<___>,
}
```

It didn't take me too long to come up with an answer: each node has a *position* in the `nodes` vector. I'll just use that position (or *index*) to reference a node's connections.

```rust
struct Graph {
    nodes: Vec<Node>,
}

struct Node {
    // so if `2` is in this list, this node is connected to `nodes[2]`
    connections: Vec<usize>,
}
```

Well... that works. The level of indirection is maybe a bit awkward, but way less awkward than a haystack of lifetime annotations.

Then it hit me: this also works in C#.

```cs
class Graph {
    List<Node> nodes;
}

class Node {
    List<int> connections;
}
```

And if I do this in C++, I don't even have to individually heap-allocate the nodes. They can just live in the vector:

```cpp
struct Graph {
    vector<Node> nodes;
};

struct Node {
    vector<size_t> connections;
};
```

This also completely removes the need to manually free every node, no smart pointers required.

> Cool.

Of course, there is (at least) one major caveat here: if a node is removed, the indices become incorrect. We have to be careful about making sure that indices are always valid and the graph doesn't become invalid.

But in my opinion, the earlier versions of this also had some major caveats. This version just has different considerations. Just like the first C# one we saw, it may not be the best code, but it does at least accurately represent our problem:

> "I need a graph with a bunch of nodes. Each of these nodes is connected to other nodes."

So there was one different way to approach the problem. I suddenly started thinking: maybe there are more ways!

### Rephrasing the Problem

Because object-oriented programming gives so much freedom to the coder, I was able to easily represent the problem I posed and move on. I never thought to stop and ask myself: *is this the only way to represent the problem?*

Well, I never had to, until I tried to code it in Rust. *"Don't code it this way."*

So I thought about it and realized that I could actually phrase the problem differently:

> "I need a graph with a bunch of nodes, and a bunch of connections between nodes."

It's subtle. But let's represent this slightly different problem in code:

```rust
struct Graph {
    nodes: Vec<Node>,
    connections: Vec<Connection>,
}

struct Node {
    // ...
}

struct Connection {
    from: usize,
    to: usize,
}
```

You see, I was thinking of a *connection* as a thing that a **`Node`** had. Because object-oriented programming let me represent it so easily, it felt like the Truth™.

But just as easily, I can think of a **`Connection`** as a thing that a **`Graph`** has instead. Suddenly, I had theoretically the exact same thing as before, but there were a bunch of logistical differences!

- Now there are just two `Vec`'s, instead of one inside every node. Not only does this mean way less heap allocations, but it also means that detecting and preventing invalid indices is much simpler, since there are less lists to traverse.

- With information nested less deeply, it's very easy to find and iterate this graph. Want to draw all connections in the graph? Just iterate over the `connections` list! With the previous approach, nested iterations were required.

And guess what? This *exact same code* works in C# as well:

```cs
class Graph {
    List<Node> nodes;
    List<Connection> connections;
}

class Node {
    // ...
}

class Connection {
    int from;
    int to;
}
```

I get the exact same benefits for using this structure in C#, but I had never thought of coding it this way. I can even make the **`Node`** and **`Connection`** classes into structs now and remove a bunch of heap allocations if I wanted to. Less heap allocations? Less garbage collection runs. Suddenly, even my C# code is feeling a lot nicer.

There are all kind of different things we can try as well. For example, we could use a `HashSet` for connections to ensure prevention of duplicates. We could make the node list a `HashMap` using GUIDS as keys, to prevent index invalidation completely.

And if there was one spicy new way to approach this problem, it suddenly becomes easy to get motivated to search for more.

## Conclusion & Advice

Maybe you're smarter than me and this approach was always obvious to you, but just remember that this is one example. I have enountered many instances of this situation since I started using Rust regularly.

I'm hoping that my tutorial coverage on this site will be a great benefit to beginners, as I struggled with the language a lot when learning it and I hope my empathy with how difficult it can be will make its way into the lessons.

> ## So My Advice for Beginners
> If you're having difficulty modelling the problem in Rust, try changing how you structure the problem in your head first. See how you can *flatten* your structures, remove nesting, and reduce the need for references.
>
> Without references, there are no lifetimes to fight with. You might even occasionally get lucky and end up with nicer code to work with, both in Rust and in other languages.
> 
> The more you use Rust, the more lifetimes will start to make sense and they will slowly settle into your mind. You will eventually understand them, and learn that they are not just a limitation, but a wonderfully powerful feature.

In the meanwhile, enjoy all the [many](https://web.mit.edu/rust-lang_v1.25/arch/amd64_ubuntu1404/share/doc/rust/html/book/first-edition/enums.html) [other](https://doc.rust-lang.org/book/ch18-03-pattern-syntax.html) [amazing](https://doc.rust-lang.org/book/ch10-02-traits.html) [features](https://crates.io/crates/serde) that Rust has, because it truly is a fantastic language.