syntax Imp = function (ctx) {
  let variable   = ctx.next().value;
  let dependency = ctx.next().value;
  return #`let ${variable} = require(${dependency})`;
}

syntax Puts = function (ctx) {
  let param = ctx.next().value;
  return #`console.log(${param})`;
}

