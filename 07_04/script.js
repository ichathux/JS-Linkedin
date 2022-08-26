/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

let arr = ["Jack", "Harry", "Rossy", 3, 7, 5, "red", 22];
console.log("Build an array with 8 items : ", arr);
arr.pop();
console.log("Remove the last item ", arr);
arr.unshift(arr.pop());
console.log("Add the last item as the first item on the array", arr);
arr.sort();
console.log("Sort the items by alphabetical order", arr);
const found = arr.find((element) => element === "Rossy");
console.log(
  "Use the find() method to find a specific item in the array ",
  found
);
// arr.splice(2, 14;

// function arrayRemove(arr, value) {
//   return arr.filter(function (ele) {
//     return ele != value;
//   });
// }

// console.log(
//   "Remove the item you found using the find method from the array",
//   arrayRemove(arr, found)
// );

arr.splice(arr.indexOf(found), 1);
console.log(
  "Remove the item you found using the find method from the array",
  arr
);
