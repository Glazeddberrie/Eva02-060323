const conn = require('../connection.js');

const TABLA = "client";

function getAll() {
    return new Promise((resolve, reject) => {
        conn.query(`SELECT * FROM ${TABLA}`, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

function getOneById(id) {
    return new Promise((resolve, reject) => {
        conn.query(`SELECT * FROM ${TABLA} WHERE id = ?;`, id, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

function create(email, name, surname, pass, rut, phone_number) {
    return new Promise((resolve, reject) => {
        conn.query(`INSERT INTO ${TABLA} VALUES (?, ?, ?, ?, ?, ?, ?)`
        , [null, email, name, surname, pass, rut, phone_number], (error, result) => {
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

function updateById(email, name, surname, pass, rut, phone_number, id) {
    return new Promise((resolve, reject) => {
        conn.query(`UPDATE ${TABLA} SET email =?, name =?, surname =?, pass =?, rut =?, phone_number =? WHERE id =?`, [email, name, surname, pass, rut, phone_number, id], (error, result) => {
            return error? reject(error) : resolve(result);
        })
    });
}

module.exports = { getAll, getOneById, create, deleteOneById, updateById };