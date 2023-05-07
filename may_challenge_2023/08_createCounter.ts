type ReturnObj = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounter(init: number): ReturnObj {
  let curentCount = init;
  return {
    increment: function () {
      curentCount += 1;
      return curentCount;
    },
    decrement: function () {
      curentCount -= 1;
      return curentCount;
    },
    reset: function () {
      curentCount = init;
      return curentCount;
    },
  };
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
