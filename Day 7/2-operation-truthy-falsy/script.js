console.log("Hello, World!");

// 3. Operation - Math
let a = 10;
let b = 30;
let c = a + b;
console.log(c);

// 4. Operation - String concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + lastName;
console.log(fullName);

let mix = a + firstName;
console.log(mix);

// 5. Operation - Comparison
let x = 10;
let y = 30;
console.log(x > y); //10 > 10
console.log(x < y); //10 < 10
console.log(x >= y);
console.log(x <= y);

// 6. Operation - Equality
let p = 10;
let q = "10";
let r = 11;
console.log(p == r);
console.log(p == q);
// deep equality - same value and same type
console.log(p === r);
console.log(p === q);

// inequality
console.log(p != r);
console.log(p != q);
// deep equality - different value and different type
console.log(p !== r);

// 7. Truthy and Falsy
let T = true;
let F = false;
console.log(T, F);

let num = 0;
let num2 = 1;
console.log(Boolean(num)); //false
console.log(Boolean(num2)); //true

let str = "";
let str2 = " ";
let str3 = "Hello, World!";
console.log(Boolean(str)); //false
console.log(Boolean(str2)); //true
console.log(Boolean(str3)); //true
