function upper(strings, ...values) {
  var str = "";
  for (let i = 0; i < strings.length; i++) {
    if (i > 0) {
      str += values[i - 1].toUpperCase();
    }
		str += strings[i];
  }
	return str;
}

var name = "kyle",
  twitter = "getify",
  classname = "es6 workshop",
	msg = upper`Hello ${name} (@${twitter}), welcome to the ${classname}!`;
	console.log(msg);

console.log(
  upper`Hello ${name} (@${twitter}), welcome to the ${classname}!` ===
  "Hello KYLE (@GETIFY), welcome to the ES6 WORKSHOP!"
);
