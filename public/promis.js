const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(5);
    reject("Error!!!!?");
  }, 2000);
});

promise.then(
  (Result) => {
    console.log(Result);
  },
  (error) => {
    console.log(error);
  }
);
