// const fs = require("fs");
// const contents = fs.readFileSync("a.txt", "utf-8");
// console.log(contents);

// const map = new Map();
// map.set("name", "alice");
// map.set("age", 30);
// console.log(map.get("name"));
// console.log(map.get("age"));

// function setTimeoutPromisified(ms) {
// 	return new Promise((resolve) => setTimeout(resolve, ms));
// }
// function callBack() {
// 	console.log("3 seconds have passed");
// }
// console.log("async code example");
// setTimeoutPromisified(3000).then(callBack);

// async function solve() {
// 	await setTimeoutPromisified(6000);
// 	console.log("hi");
// 	await setTimeoutPromisified(3000);
// 	console.log("helloo");
// 	await setTimeoutPromisified(1000);
// 	console.log("hello there");
// }

// solve();

// const fs = require("fs");
// function afterdone(err, data) {
// 	if (err) {
// 		console.log("error innreading the file");
// 	} else {
// 		console.log(data);
// 	}
// }
// fs.readFile("a.txt", "utf-8", afterdone);

const fs = require("fs");
function readFilePromisified(filePath) {
	return new Promise(function (resolve, reject) {
		fs.readFile(filePath, "utf-8", function (err, data) {
			if (err) {
				reject("error while reading file");
			} else {
				resolve(data);
			}
		});
	});
}
function onDone(data) {
	console.log(data);
}
function onError() {
	console.log("Error:" + err);
}
readFilePromisified("a.txt").then(onDone).catch(onError);
