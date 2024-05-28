use std::io::{self, Read};

fn main() {
    let mut input_numbers = String::new();

    io::stdin().read_to_string(&mut input_numbers).unwrap();

    let numbers: Vec<f64> = input_numbers
        .split_whitespace()
        .map(|x| x.parse().expect("num_err"))
        .collect();

    println!("{}", numbers[0] / numbers[1]);
}
