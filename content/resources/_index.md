+++
title = "Resources"
description = "Other helpful resources and places for learning Rust."
template = "section.html"
page_template = "page.html"
sort_by = "date"
weight = 40

[extra]
icon = "fa-solid fa-book"
+++

There are a lot of other great resources for learning Rust, so I want
to highlight some of the best ones here!

> # Something to Add?
> If you know a website or channel that would fit here, you can recommend
> it in our [#feedback](https://discord.gg/vdPK7ztcD2) Discord channel, or
> submit a [Github pull request](https://github.com/School-of-Rust/school-of-rust/blob/main/content/resources/_index.md)
> directly to this page!

> ## Something to Add?
> If you know a website or channel that would fit here, you can recommend it directly to this page!

> ### Something to Add?
> If you know a website or channel that would fit here, you can recommend it directly to this page!

### Code Editors

- [Visual Studio Code](https://visualstudiomagazine.com/articles/2020/04/22/rust-vs-code.aspx) has great Rust support
and is the [most-used](https://visualstudiomagazine.com/articles/2020/04/22/rust-vs-code.aspx) code editor in the Rust community.

- [IntelliJ](https://www.jetbrains.com/rust/) also has great Rust features, and *CLion* is my personal editor of
choice.

- [Vim](https://github.com/rust-lang/rust.vim) users will be pleased to know there is good support for Rust, and it is
also one of the most popular choices.

- The [Rust Tools](https://www.rust-lang.org/tools) page on the offical website has more options if you don't use any
of the above.

## Other Header

Testing another header with some `SpecialCode` blocks *`LikeThis`* and **`ThisOneToo`** after it, and some extra words at the end of this sentences so
that it wraps around at least once.

```rust
fn main() {
    // and a comment!
    println!("With some rust code in it!");
    println!("Let's do a few lines so we can test how compact it is.");
}
```

```rust,linenos
fn main() {
    /* and a block
    comment here! */
    println!("And this time with line numbers!");
    println!("Let's do a few lines so we can test how compact it is.");
}
```

Followed by a table to make sure I'm not breaking this...

| type    | pixel format         | something else |
|---------|----------------------|----------------|
| u8      | TextureId::default() | blah           |
| sampler | Sampler::new()       | 12345          |
| float   | 0.0                  | "a string"     |

And some text afterwards.

### Other Websites

- [Crates.io](https://crates.io/) is the official Rust package depository. It seems obvious to put here, but everyone
uploads their crates here and you can often find amazing crates just by searching keywords!

- [Read Rust](https://readrust.net/) is a website that aggregates interesting posts related to the Rust programming
language. It is organized into sections based on different interests.

- [Are We Game Yet?](https://arewegameyet.rs/) is a collection of several crates useful for game developers using
Rust. You'll find crates for vector math, graphics, networking, entities, scripting, and more.

- [Are We Learning Yet?](https://www.arewelearningyet.com/) is similar to the above, but for those interested in
using Rust for machine learning.

- [Are We Web Yet?](https://www.arewewebyet.org/) is another collection, but for web development.

### Video

- [Jon Gjengset](https://www.youtube.com/c/JonGjengset) has a YouTube channel where he uploads his entire coding
streams. These are often videos of him developing entire crates or systems, and walking the viewer through it
every step of the way and answering questions.

- [Let's Get Rusty](https://www.youtube.com/channel/UCSp-OaMpsO8K0KkOqyBl7_w) is a YouTube channel with many
videos demonstrating various features of Rust and how to code idiomatically.

### Conferences

- [RustConf](https://rustconf.com/) is an annual conference for Rust held in Portland.

- [RustFest](https://rustfest.global/) is Europe's largest Rust conference.

### Communities

- [The Offical Rust Discord](https://discord.com/invite/rust-lang) is a place you can get help, but also keep tabs
on the development of Rust itself, as well as see what people are doing in different domains.

- [Game Development in Rust](https://discord.gg/yNtPTb2) is a Discord server specifically for those interested in
creating games. You can share your works-in-progress, tools, crates, and even join their monthly meetups.

### Practice & Exercises

- [Rustlings](https://github.com/rust-lang/rustlings) is a Github repository with several small exercises to get
you used to reading and writing Rust code. This includes reading and responding to compiler messages.

- [Advent of Code](https://adventofcode.com/) is a yearly event where you can solve small (but high quality)
programming puzzles in any language you want. There is one puzzle for each of the 25 days leading up to Christmas.