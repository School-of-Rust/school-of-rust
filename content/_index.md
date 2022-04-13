+++
title = "Home"
sort_by = "weight"

[extra]
icon = "fa-solid fa-home"
+++


# Learn Rust & Get Creative

Lorem ipsum dolor sit amet, *consectetur* adipiscing elit. Fusce non eros sit amet est dapibus imperdiet. Nam ut ex molestie, *`Vec<T>`* tortor vel, tempor urna. Nunc ultrices odio sit amet mi condimentum, eu `pretium` neque auctor. Suspendisse **dapibus** rutrum felis, quis porttitor dui efficitur volutpat. Cras eleifend magna et lacus pellentesque dapibus. Nullam **`fringilla`** sodales ipsum. Vivamus a mi [https://google.com](https://google.com) eget nunc laoreet elementum et sit amet justo.

```rs,linenos
use std::io;
use rand::Rng;

fn main() {
    println!("Guess the number!");

    let secret_number = rand::thread_rng().gen_range(1..101);

    println!("The secret number is: {}", secret_number);
    println!("Please input your guess.");

    let mut guess = String::new();

    io::stdin()
        .read_line(&mut guess)
        .expect("Failed to read line");

    println!("You guessed: {}", guess);
}
```

## A Second Section

Vestibulum placerat sed nisl eget [maximus](https://#). Nam non purus erat. Aenean pellentesque rhoncus varius. Donec `malesuada` bibendum felis at vehicula. Suspendisse scelerisque mauris quis nibh congue interdum. Sed eu hendrerit nulla.

- First item in the list
- Second item
- The last item

In vel sem ornare, varius dolor non, dignissim arcu. Proin quis magna nec sapien rutrum pharetra sit amet nec velit. Duis efficitur mi in consectetur cursus. Nulla molestie mi ligula, ac luctus mauris tempus ac.

### Subsection 1

Praesent tempor gravida leo, in pulvinar ex fermentum ut. Aenean in imperdiet turpis. Curabitur eleifend sollicitudin orci ut tempor. Aenean cursus egestas lacus at porta. Aenean a ex at nibh laoreet condimentum. Cras gravida nec turpis ut sodales.

> Donec in elementum urna. In faucibus non risus eu tempus. In elementum suscipit ipsum ultrices venenatis.

> "Donec in elementum urna. In faucibus non risus eu tempus. In elementum suscipit ipsum ultrices venenatis."
> 
> &#8212; *Chevy Ray Johnston*

> # HEADER 1
> Donec in elementum urna. In faucibus non risus eu tempus. In elementum suscipit ipsum ultrices venenatis.
>
> Pellentesque condimentum ante ac elementum venenatis. Sed eget orci vel elit iaculis vulputate ut at mauris.

> ## LINGO
> Donec in elementum urna. In faucibus non risus eu tempus. In elementum suscipit ipsum ultrices venenatis.

> ### A WORD OF WARNING
> Donec in elementum urna. In faucibus non risus eu tempus. In elementum suscipit ipsum ultrices venenatis.

Aliquam dapibus nunc vel sapien posuere fermentum. Vivamus quis sapien sollicitudin, consequat risus vitae, volutpat felis. Mauris odio erat, ultrices sit amet bibendum a, varius ut neque. Morbi fringilla condimentum ante, non efficitur odio volutpat a. Maecenas eget ante in leo commodo aliquet.

### Subsection 2

Sed luctus diam at faucibus placerat. Praesent finibus libero nec ultrices porta. Proin eu pretium enim. Sed sit amet nunc quis dui venenatis volutpat vel non felis. Integer dignissim dignissim enim ultricies ornare. Sed in justo ac velit fringilla posuere.

| Name    | Hex Code      |
|:-------:|:-------------:|
| red     | 0xff0000      |
| green   | 0x00ff00      |
| blue    | 0x0000ff      |

Here is a table with 3 columns:

| Name    | Hex Code      | Cost  |
| ------- | ------------- | ----- |
| red     | 0xff0000      | $1600 |
| green   | 0x00ff00      |   $12 |
| blue    | 0x0000ff      |    $1 |

> # Table In Block Quote
> 
> | Name    | Hex Code      | Cost  |
> | ------- | ------------- | ----- |
> | red     | 0xff0000      | $1600 |
> | green   | 0x00ff00      |   $12 |
> | blue    | 0x0000ff      |    $1 |

Maecenas quis maximus erat. Aliquam massa tellus, consequat in tortor ac, consequat vestibulum lectus. Proin et imperdiet arcu. Duis tempor massa at tortor mollis posuere. Sed in nisi dolor.

## A Third Section

Donec in elementum urna. In faucibus non risus eu tempus. In elementum suscipit ipsum ultrices venenatis. In at blandit elit. Sed ac gravida dui. Nunc blandit lacus vitae turpis tempor, sit amet elementum elit ornare. Aenean porta pharetra tincidunt. Fusce vel est consequat, fermentum orci vel, posuere justo. Sed volutpat nisl ipsum, vitae sollicitudin velit eleifend sollicitudin. Nam dictum quam sit amet libero imperdiet, et congue risus lacinia. Duis consectetur dui ut diam dictum gravida. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque condimentum ante ac elementum venenatis. Sed eget orci vel elit iaculis vulputate ut at mauris.