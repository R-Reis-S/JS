//Object

const user = {
    name: 'Teobaldo',
    age: 31,
    address: {
        city: 'NY',
        zipCode: 12345,
    },
};

const { name, age, address: { city } } = user;
console.log(name, age, city);

function showUser({ name, address: { zipCode } }) {
    console.log(name, zipCode);
};

showUser(user);

//Array

const numbers = [1, 2, 3, 4, 5, 6];

const [n1, n2, n3] = numbers;

console.log(n1, n2, n3);