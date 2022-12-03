const fs = require('fs')
const {readFileJsonFromFile, writeJsonToFile} = require("./fs-utils");

const getUsers = () => {
    return readFileJsonFromFile('users.json')
}

const addUser = async (name) => {
    let users = await getUsers()
    users.push({name: name})
    return writeJsonToFile('users.json', users)
}

exports.getUsers = getUsers;
exports.addUser = addUser;