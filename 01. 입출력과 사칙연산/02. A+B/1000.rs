use std::io::stdin;

fn main() {
    let mut input_numbers = String::new();

    stdin().read_line(&mut input_numbers).unwrap();

    let sum: i32 = input_numbers
        .split_ascii_whitespace()
        .flat_map(str::parse::<i32>)
        .sum();

    println!("{}", sum);
}
