function genDict(entry) {
  let pathStrings = Object.keys(entry);
  let obj = Object.create(Object.prototype);
  for (const pathString of pathStrings) {
    setVal(obj, pathString.split('.'), entry[pathString])
  }
  return obj;
}

function setVal(obj, path, val) {
  while (path.length) {
    let key = path.shift();
    if (path.length < 1) {
      obj[key] = val;
      return;
    }
    if (!obj[key]) {
      obj[key] = {};
    }
    obj = obj[key]
  }
}

console.dir(genDict({
  'a.b.c.dd': 'abcdd',
  'a.d.xx': 'adxx',
  'a.e': 'ae',
}))
