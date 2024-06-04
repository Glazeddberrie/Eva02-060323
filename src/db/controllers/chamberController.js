const conn = require('../connection.js');

const TABLA = "chamber";

function getAll() {
    return new Promise((resolve, reject) => {
        conn.query(`SELECT * FROM ${TABLA}`, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

function getOneById(id) {
    return new Promise((resolve, reject) => {
        conn.query(`SELECT * FROM ${TABLA} WHERE id = ?`, id, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

function create(email, name, surname, rut, charge, password, username) {
    return new Promise((resolve, reject) => {
        conn.query(`INSERT INTO ${TABLA} VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, [null, email, name, surname, rut, charge, password, username], (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

function deleteOneById(id) {
    return new Promise((resolve, reject) => {
        conn.query(`DELETE FROM ${TABLA} WHERE id = ?;`, id, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

function updateById(email, name, surname, rut, charge, password, username, id) {
    return new Promise((resolve, reject) => {
        conn.query(`UPDATE ${TABLA} SET email =?, name =?, surname =?, rut =?, charge=?, password=?, username=? WHERE id =?`, [email, name, surname, rut, charge, password, username, id], (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

module.exports = { getAll, getOneById, create, deleteOneById, updateById };