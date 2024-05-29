use std::io::{self, Read};

fn main() {
    let mut input_numbers = String::new();

    io::stdin().read_to_string(&mut input_numbers).unwrap();

    let numbers: Vec<i32> = input_numbers
        .split_ascii_whitespace()
        .flat_map(str::parse::<i32>)
        .collect();

    println!("{}", numbers[0] + numbers[1]);
    println!("{}", numbers[0] - numbers[1]);
    println!("{}", numbers[0] * numbers[1]);
    println!("{}", numbers[0] / numbers[1]);
    println!("{}", numbers[0] % numbers[1]);
}
