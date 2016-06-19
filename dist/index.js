let fs_9 = require("fs");
fs_9.exists("/etc/passwd", exists_10 => {
  console.log(exists_10 ? "it's there" : "no passwd!");
});