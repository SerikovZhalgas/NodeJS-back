const fs = require('fs')
const {readFileJsonFromFile, writeJsonToFile} = require("./fs-utils");

const getUsers = () => {
    return readFileJsonFromFile('db')
}

const addUser = async (name) => {
    let users = await getUsers()
    users.push({name: name})
    return writeJsonToFile('db', users)
}

exports.getUsers = getUsers;
exports.addUser = addUser;