function compose(middlewares) {
  function next() {
    let task = middlewares.shift()
    task && task(next);
  }

  return next;
}

function compose2(middleware) {
  function dispatch(index) {
    const fn = middleware[index];
    if (!fn) {
      return;
    }
    fn(() => dispatch(index + 1));
  }
  return dispatch(0);
}

const runGenerator = generatorFunc => {
  const it = generatorFunc()
  iterate(it)

  function iterate (it) {
    step()

    function step(arg, isError) {
      const {value, done} = isError ? it.throw(arg) : it.next(arg)

      let response

      if (!done) {
        if (typeof value === 'function') {
          response = value()
        } else {
          response = value
        }

        Promise.resolve(response).then(step, err => step(err, true))
      }
    }
  }
}
