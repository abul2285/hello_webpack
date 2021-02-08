const Student = {
  class: 7,
  age: 13,
  gender: "male",
};

const S1 = {
  ...Student,
  name: "S1",
};

const S2 = {
  ...Student,
  name: "S2",
};

console.log({ S1, S2 });
