use std::io::{self, Read};

fn main() {
    let mut input = String::new();

    io::stdin().read_to_string(&mut input).unwrap();

    let input_number: i32 = input.trim().parse().expect("num_err");

    println!("{}", input_number - 543);
}
