+++
title = "Soft Launch"
slug = "soft-launch"
description = "Content plans, site design, feedback, and suggestions."
date = 2022-11-16
[extra]
icon = "fa-solid fa-hand-sparkles"
+++

I think I am quite happy with the current state of the website's look and feel, so consider this a quiet soft-launch for *School of Rust*.

- [Content Plans](#content-plans)
- [Site Design](#site-design)
  - [Increased Spacing](#increased-spacing)
  - [Dark/Light Mode Toggle](#darklight-mode-toggle)
- [Content Quality](#content-quality)
  - [Entirely Open Source](#entirely-open-source)
  - [Page Source Links](#page-source-links)
- ["How Can I Help?"](#how-can-i-help)

## Content Plans

It is very difficult deciding on the lesson structure I want to proceed with, what content I want to cover, and to what degree. I have lots of ideas, but finalizing a structure and getting to work is the next major step for the site.

For official launch, I would like to have at least 2-3 [lesson series](/lessons) finished so that there is a decent amount of tutorial content for visitors.

In the meanwhile, I plan on using the site as a home base for some [writing](/writing), as I have several ideas for what I think are compelling and educational articles and tutorials.

> I've got my work cut out for me <i class="fa fa-face-grin-beam-sweat"></i>

## Site Design

I have made a few changes to the site's design and it is feeling very near completion to me. A few things I have added recently:

### Increased Spacing

I like things very compact, so the initial design was a lot tighter. To improve general readability and make the content easier to read for the people who *aren't* me, I have increased the line spacing and put larger gaps between sections.

I hope this improves things a lot. There will probably be a few changes to this here and there as I get more feedback and find ways to improve readability even more.

### Dark/Light Mode Toggle {#darklight-mode-toggle}

I have also added a light mode to the site, which can be toggled using the little <i class="fa fa-sun"></i> and <i class="fa fa-moon"></i> icons at the very bottom of the page.

> The toggle buttons are kind of hidden away down there, so it might be worth finding a place to fit them at the top of the page.

As a longtime dark mode user, the dark theme for the site was developed first and I spent a lot of time polishing it. I am less opinionated about light themes, so that one probably needs more work.

## Content Quality

I am very concerned with creating high quality learning material for *School of Rust*, and have made a few key decisions to help with that.

### Entirely Open Source

This entire website is open-source, something I decided to do early on, and can be found at [<i class="fa-brands fa-github"></i> School-of-Rust/school-of-rust](https://github.com/School-of-Rust/school-of-rust).

Rust's notorious difficulty for beginners (even those transitioning from difficult languages like C++) is something that I believe can be overcome with great care put into our learning material.

To help with this, I decided that I could try leveraging *Github* directly as a tool to get feedback and accept pull-requests to fix innacuracies or mark confusing information as issues.

### Page Source Links

To make this as straightforward as possible for readers, I added a feature I am quite proud of: *every page* on the site has a link at the bottom directly to the *source code for that page*. If you scroll down, you will see it:

> *If you have a suggested change or have found an error, you can also visit the [<i class="fa-brands fa-github"></i> source code for this page](https://github.com/School-of-Rust/school-of-rust/tree/main/content/writing/001-soft-launch.md), where you can file an issue directly or submit a pull request.*

This is automatically created by the templating system, so I do not have to manually write every one of these. Because the site is generated directly from the repository via *Cloudflare*, the source code will always reflect the current state of the site. 

> <i class="fa fa-skull"></i> Unless the site is failing to build, in which case I have a bigger problem.

## "How Can I Help?"

When I work on big, polished, exciting educational stuff like this, I always find there are folks offering help and wondering how they can contribute. I've already had several for this site and it hadn't even launched yet.

I appreciate it! At this point in time, I don't need any help with anything directly, but I am always open to feedback on the site, fixes for any bugs you might find (even things like typos), and especially interested if you have suggestions for specific topics and learning material you would like to see covered.

Until then, give the [<i class="fa-brands fa-github"></i> source code](https://github.com/School-of-Rust/school-of-rust) a star on *Github*, and read how the site works if you are interested in that. Also, join the [<i class="fa-brands fa-discord"></i> Discord server](https://discord.gg/vdPK7ztcD2), where you are always welcome to ask me questions directly, and eventually help others who are working their way through the lessons (once they are up).

I'm excited to get more folks using Rust, which I think is a beautiful and fun language with a very promising future. Thanks for visiting!