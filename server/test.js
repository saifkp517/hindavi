const bcrypt = require("bcrypt");

const object = {
    name: "asdasd",
    name: "asdasd",
    name: "asdasd",
    phone: 1232,
    phone: 1232,
    phone: 1232
}

const hash = bcrypt.hash(object, 10);

console.log(hash);