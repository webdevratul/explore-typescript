// aikhane amra dynamic type bole dilam akhn a er value amra je kono kisu dite parbo like number, string anything bydefault typescript any type tai follow kore.

let a: any;
(a = 5), (a = "hello");

// array
let b: any[] = [];
b = [1, 2, "hello", true];

// object
let c: {
  name: any;
  age: any;
};

c = {
  name: "hello",
  age: "hi",
};
