// 数组扁平化并去除重复数据
const arr = [[1, 12, 9], 4, 5, [11, [7, 8], [3, [10, 7], 2]]];
const flat = (array) => {
  return array.reduce((acc, curr) => {
    return Array.isArray(curr) ? acc.concat(flat(curr)) : acc.concat(curr);
  }, [])
}

const res = [...(new Set(flat(arr)))].sort((a, b) => a - b);

console.log(res);

// 实现一个new
function _new(fn, ...args) {
  const obj = Object.create(fn.prototype);
  const res = fn.apply(obj, args);
  return res instanceof Object ? res : obj;
}

// sleep
function sleep(time, callback) {
  setTimeout(callback, time);
}

function sleepPromise(time) {
  return new Promise(((resolve, reject) => setTimeout(resolve, time)))
}

// debounce
function debounce(fn, time) {
  let timer;
  const context = this;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, time)
  }
}

const objA = {
  a: 1,
  debounce,
}

const funccccc = objA.debounce;

function sayHi(where) {
  console.log(this.a, where);
}

objA.debounce(sayHi, 100)('obja');
funccccc(sayHi, 200)('www');

// throttle
function throttle(fn, time) {
  let activeTime = 0;
  const context = this;
  return (...args) => {
    const currentTime = Date.now();
    if (currentTime - activeTime > time) {
      fn.apply(context, args);
      activeTime = currentTime;
    }
  }
}

