function MyPromise(executor) {
  this.status = 'pending';
  this.value = null;
  this.reason = null;
  this.onFullfilledFnctions = [];
  this.onRejectedFunctions = [];

  const resolve = (value) => {
    if (value instanceof Promise) {
      value.then(resolve, reject);
    }
    setTimeout(() => {
      if (this.status === 'pending') {
        this.status = 'fullfilled';
        this.value = value;
        this.onFullfilledFnctions.forEach(f => f(value));
      }
    });
  }

  const reject = (reason) => {
    setTimeout(() => {
      if (this.status === 'pending') {
        this.status = 'rejected';
        this.reason = reason;
        this.onRejectedFunctions.forEach(f => f(reason));
      }
    })
  }

  try {
    executor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

MyPromise.prototype.then = function (onfullfilled, onrejected) {
  if (this.status === "fullfilled") {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          let res = onfullfilled(this.value);
          resolve(res);
        } catch (e) {
          reject(e);
        }
      })
    })
  }

  if (this.status === "rejected") {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          let res = onrejected(this.reason);
          resolve(res);
        } catch (e) {
          reject(e);
        }
      })
    })
  }

  if (this.status === 'pending') {
    return new Promise((resolve, reject) => {
      this.onFullfilledFnctions.push((value) => {
        try {
          let res = onfullfilled(value);
          resolve(res);
        } catch (e) {
          reject(e);
        }
      })

      this.onRejectedFunctions.push((reason) => {
        try {
          let res = onrejected(this.reason);
          resolve(res);
        } catch (e) {
          reject(e);
        }
      })
    })
  }
}
