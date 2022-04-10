+++
title = "Building a house"
description = "We are going to build a house."
weight = 30
date = 2021-08-26
[extra]
icon = "fa-home"
+++

This is the first tutorial!

## This is a section

Here is [a link](http://) in some text. I'm going to keep adding more text so
it will line-wrap and we'll have some text below it!

### This is a sub-section

Here is some *italic text* in this section.

> <i class="fa fa-quote-left"></i>
> Here is a quotation,
> it can span multiple lines
> and can be quite long, so it has to wrap nicely! **&mdash; Albert Einstein**

### Sub-section 2

Here is some **bold text** in this section.

Here is a different blockquote:

> <i class="fa fa-exclamation-triangle"></i>
> This is a **warning** block! There is some `CodeStuff` in it!

## Another Section

Here is a `CodeTag` in this section.

### Part 1

Here is some text.

### Part 2

Here is a code block:

```rust,linenos
fn main() {
    println!("Hello, world!");
}
```

```rust,linenos
fn factorial(i: u64) -> u64 {
    match i {
        0 => 1,
        n => n * factorial(n-1)
    }
}
```

Here is some text.