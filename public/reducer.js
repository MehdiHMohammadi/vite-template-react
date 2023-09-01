const action = {
  type: "INCREMENT",
  payload: "5",
};
const counterReducer = (state, action) => {
  //   if (action.type === "INCREMENT") {
  //     return state + 1;
  //   }
  //   if (action.type === "DECREMENT") {
  //     return state - 1;
  //   }
  //   return state;

  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state + action.payload };
    case "DECREMENT":
      return { ...state, count: state - action.payload };
    default:
      return state;
  }
};

const result = counterReducer(500, action);

console.log(result);

const user = {
  name: "ali",
  age: 14,
  city: "tehran",
};

const user1 = {
  ...user,
  name: "AlAkbari",
};

console.log(user);
console.log(user1);
