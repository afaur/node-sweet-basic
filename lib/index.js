// let fs = require("fs");
Imp fs "fs"

fs.exists('/etc/passwd', (exists) => {
  //console.log(exists ? 'it\'s there' : 'no passwd!');
  Puts( exists ? "it's there" : "no passwd!" )
})

