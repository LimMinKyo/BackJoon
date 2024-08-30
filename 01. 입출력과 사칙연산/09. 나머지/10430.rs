use std::io::{self, Read};

fn main() {
    let mut input = String::new();

    io::stdin().read_to_string(&mut input).unwrap();

    let input_numbers: Vec<i32> = input
        .split_ascii_whitespace()
        .flat_map(str::parse::<i32>)
        .collect();

    let (a, b, c) = (input_numbers[0], input_numbers[1], input_numbers[2]);
    
    println!("{}", (a + b) % c);
    println!("{}", ((a % c) + (b % c)) % c);
    println!("{}", (a * b) % c);
    println!("{}", ((a % c) * (b % c)) % c);
}
