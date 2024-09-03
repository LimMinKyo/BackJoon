use std::io::{stdin, Read};

fn main() {
    let mut input = String::new();

    stdin().read_to_string(&mut input).unwrap();

    let input_numbers: Vec<i32> = input
        .split_ascii_whitespace()
        .flat_map(str::parse::<i32>)
        .collect();

    let (num1, num2) = (input_numbers[0], input_numbers[1]);

    let (num2_1, num2_10, num2_100) = (num2 % 10, (num2 / 10) % 10, num2 / 100);

    println!("{}", num1 * num2_1);
    println!("{}", num1 * num2_10);
    println!("{}", num1 * num2_100);
    println!("{}", num1 * num2);
}
