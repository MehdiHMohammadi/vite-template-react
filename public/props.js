const profile = {
  id: 1,
  user: "Ali",
  pass: "123456",
};

const address = {
  country: "Iran",
  city: "Tehran",
};

const user = {
  ...profile,
  gender: "male",
  ...address,
};

// const { user, pass } = profile;
console.log(user);
// console.log(pass);
const { id, ...profileWithOutId } = profile;
console.log(id);
console.log(profileWithOutId);
