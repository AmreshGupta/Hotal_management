// function callBack() {
//   console.log("My an is amresh kumar Btech from oist Bhopal.");
// }
// function add(a, b, c) {
//   let result = a + b;
//   console.log(result);
//   return c();
// }
// add(3, 5, callBack);
// let fs = require("fs");
// let os = require("os");
// let user = os.userInfo();
// // console.log(user);
// // fs.appendFile("greating.text", "Hi Amresh " + user.username + "!\n", () =>
// //   console.log("Amresh!")
// // );
// // console.log(os);
// console.log(fs);
let _ = require("loadsh");
let arr = ["amresh", 1, 2, 3, 4, 1, 2, 2, 3, 4, "amresh", "kumar", "kumar"];
let filter = _.uniq(arr);
console.log(filter);

let droup = _.toNumber(arr);
console.log(droup);
