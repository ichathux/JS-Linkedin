import Book from "./Book.js";

const book1 = new Book(
  "The Lightning Thief",
  "Disney Hyperion",
  "Rick Jordan",
  "December 5, 2005 12:00:00 PST",
  595,
  "Adventure",
  234,
  false
);

const book2 = new Book(
  "The Sea of Monsters",
  "Disney Hyperion",
  "Rick Jordan",
  "March 5, 2007 12:00:00 PST",
  809,
  "Adventure",
  0,
  false
);

const book3 = new Book(
  "The Battle of the Labyrinth",
  "Disney Hyperion",
  "Rick Jordan",
  "December 5, 2016 12:00:00 PST",
  595,
  "Adventure",
  276,
  true
);

const book4 = new Book(
  "The Titan’s Curse",
  "Disney Hyperion",
  "Rick Jordan",
  "May 5, 2018 12:00:00 PST",
  1278,
  "Adventure",
  1278,
  false
);
const book5 = new Book(
  "The Lost Hero",
  "Disney Hyperion",
  "Rick Jordan",
  "February 5, 2011 12:00:00 PST",
  595,
  "Adventure",
  234,
  false
);

console.log("First book is : ", book1);
console.log("Second book is : ", book2);
console.log("Third book is : ", book3);
console.log("Fourth book is : ", book4);
console.log("Fifth book is : ", book5);

console.log("Book none age : ", book1.getBookAge(), " days");
