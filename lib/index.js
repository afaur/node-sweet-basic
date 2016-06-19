syntax Imp = function (ctx) {
  let variable   = ctx.next().value;
  let dependency = ctx.next().value;
  return #`let ${variable} = require(${dependency})`;
}

syntax Puts = function (ctx) {
  let param = ctx.next().value;
  return #`console.log(${param})`;
}

// let fs = require("fs");
Imp fs "fs"

fs.exists('/etc/passwd', (exists) => {
  //console.log(exists ? 'it\'s there' : 'no passwd!');
  Puts( exists ? "it's there" : "no passwd!" )
})

