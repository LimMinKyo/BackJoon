use std::io::stdin;

fn main() {
    let mut input = String::new();

    stdin().read_line(&mut input).unwrap();

    let numbers: Vec<i32> = input
        .split_ascii_whitespace()
        .flat_map(str::parse::<i32>)
        .collect();

    let (a, b) = (numbers[0], numbers[1]);

    match a.cmp(&b) {
        std::cmp::Ordering::Less => println!("<"),
        std::cmp::Ordering::Greater => println!(">"),
        std::cmp::Ordering::Equal => println!("=="),
    }
}
