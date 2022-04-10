+++
title = "Getting Started"
description = "So you want to learn Rust! Let's get you set up with everything you need."
weight = 10
date = 2021-08-26
[extra]
icon = "fa-door-open"
+++

This is the first tutorial!

## This is a section

Here is [a link](http://) in some text. I'm going to keep adding more text so
it will line-wrap and we'll have some text below it!

### This is a sub-section

Here is some *italic text* in this section.

> Here is a quotation,
> it can span multiple lines
> and can be quite long, so it has to wrap nicely! **&mdash; Albert Einstein**

### Sub-section 2

Here is some **bold text** in this section.

## Another Section

Here is a `CodeTag` in this section.

### Part 1

Here is some text.

### Part 2

Here is a code block:

```rust,linenos
fn factorial(i: u64) -> u64 {
    match i {
        0 => 1,
        n => n * factorial(n-1)
    }
}
```

Here is some text.