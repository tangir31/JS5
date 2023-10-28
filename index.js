let Human1 = {
    name: "Joni",
    age: 25,
    address: {
      city: "New York",
      country: "USA"
    },
};

let Human2 = {
    name: "Sardor",
    age: 17,
    address: {
      city: "London",
      country: "UK"
    }
};

let general = Object.assign({}, Human1, Human2);

console.log(Object.keys(general));

console.log(Object.values(general));

console.log(Object.entries(general));