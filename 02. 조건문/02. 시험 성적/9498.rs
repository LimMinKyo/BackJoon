use std::io::stdin;

fn main() {
    let mut input = String::new();

    stdin().read_line(&mut input).unwrap();

    let score: i32 = input.trim().parse().unwrap();

    match score {
        90..=100 => println!("A"),
        80..=89 => println!("B"),
        70..=79 => println!("C"),
        60..=69 => println!("D"),
        _ => println!("F"),
    }
}
