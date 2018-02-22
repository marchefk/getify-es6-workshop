var defaults = {
  method: "POST",
  callback: function() {},
  headers: {
    "content-type": "text/plain"
  }
};

var config = {
  url: "https://some.url",
  callback: foo,
  headers: {
    "x-requested-with": "foo"
  }
}

//////////// destructuring config object with default properties
/////////// like on default object:
{
  let {
    method = defaults.method,
    url,
    callback = defaults.callback,
    headers: {
      "content-type": contentType = defaults.headers["content-type"],
      "x-requested-with": xRequestedWith
    }
  } = config;

///////// Putting config object back together:

  config = {
    method,
    url,
    callback,
    headers: {
      "content-type": contentType,
      "x-requested-with": xRequestedWith
    }
  }
}
