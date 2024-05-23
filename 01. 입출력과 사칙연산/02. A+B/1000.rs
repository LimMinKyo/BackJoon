use std::io;

fn main() {
    let mut input_numbers = String::new();

    io::stdin().read_line(&mut input_numbers).unwrap();

    let numbers: Vec<u32> = input_numbers
        .trim()
        .split_whitespace()
        .map(|x| x.parse().expect("num_error"))
        .collect();

    println!("{}", numbers[0] + numbers[1]);
}
