const fs = require("fs");
fs.appendFile("input.js", "  Be Patient", function (err) {
  if (err) console.log("error");
});
console.log("success");
console.log("Hello");
