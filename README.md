# School of Rust

This is the full source code for [School of Rust](https://rust-school.io), an educational website with lessons and tutorials to help people learn the Rust programming language.

Rust can be hard to learn, but it is beloved by those who use it (including myself). My goal is to provide a variety of lessons to help you get coding proficiently in Rust.

Let's create fast, secure, and high quality software together!

## Whomst?

This website and its content is created by [Chevy Ray](https://github.com/chevyray) (:wave: hi!). I am a [game developer](https://ikenfell.jp/) by day, but when the stars come out I am an online educator, creator of [free tools](https://github.com/chevyray/crunch-rs), and probably the internet's most reputed [pixel font](http://pixel-fonts.com/) designer!

## Feedback & Contributions

By open sourcing the site, I'm hoping that I can use *Github* to get continual feedback on the website, and also correct any confusing or incorrect information in any of the articles or tutorials.

At the bottom of every page on the site, you will see something like this:

> If you have a suggested change or have found an error, you can also visit the [source code for this page](/), where you can file an issue directly or submit a pull request.

I'm also encouraging readers to join our [Discord](https://discord.gg/vdPK7ztcD2), both to get assistance and to help others.

## How the Website is Built

School of Rust is built with a *static site generator* called [Zola](https://www.getzola.org/), which is why the source code may look unfamiliar if you were expecting an actual website. Zola is also [developed in Rust](https://github.com/getzola/zola)!

Zola takes this repository's source code and parses it, generating a static website (which is essentially a bunch of pre-baked HTML files). I use a [Cloudflare](https://www.cloudflare.com/) deployment script to run Zola every time the repository updates, which updates the website.

To create content for the site, I create pages in [markdown](https://commonmark.org/), which Zola then parses and turns into HTML pages using templates I have provided. You probably won't be surprised to learn that the template engine is [also coded in Rust](https://tera.netlify.app/).

Because markdown is so simple and easy to write, I am able to write and revise and edit articles and tutorials much more efficiently.

## Some Idiosyncrasies

There are a couple tricks (*ahem*... hacks) I use to give myself a bit more flexibility when writing code tutorials, which I will document here... even if just for myself!

### Regular Headers

In articles, I use `##` for large headers, and `###` for small headers.

![a large and a small header](/img/header_sizes.png)

But inside blockquotes, all headers `#`, `##`, `###`, and `####` are interpreted as different colors of header (rather than size), as demonstrated on the home page:

![3 blockquotes with different header colors](/img/blockquotes.png)

They are `blue`, `purple`, `red`, and `grey` respectively. This allows me to use blockquotes as different types of *"info"* boxes for different purposes.

For example, if I wanted to briefly mention something tangential in the middle of a tutorial, I might put it in a purple `Did You Know?` blockquote to indicate that it's not essential to the lesson.

### Colored Code Tags

Similar to how headers are treated in blockquotes, `code` tags also have a special treatment. Surrounding a code tag with *emphasis* using `*` will color it yellow, and surrounding it with **bold** using `**` will color it green.

![3 differently colored code tags](/img/colored_code_tags.png)

These are to match two of the main colors in the [syntax coloring theme](https://github.com/morhetz/gruvbox) I am using. When I want to reference an item in the code, I'm hoping that by matching their color, I can make it easier for some readers to connect the code and its explanations.