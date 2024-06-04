const conn = require('../connection.js');

const TABLA = "merch";

function getAll() {
    return new Promise((resolve, reject) => {
        conn.query(`SELECT * FROM ${TABLA}`, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

function getOneById(id) {
    return new Promise((resolve, reject) => {
        conn.query(`SELECT * FROM ${TABLA} WHERE serial = ?`, id, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

function create(serial,merchType,merchSize,stock,price,model) {
    return new Promise((resolve, reject) => {
        conn.query(`INSERT INTO ${TABLA} VALUES (?, ?, ?, ?, ?, ?)`
        , [serial,merchType,merchSize,stock,price,model], (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

function deleteOneById(id) {
    return new Promise((resolve, reject) => {
        conn.query(`DELETE FROM ${TABLA} WHERE serial = ?;`, id, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

function updateById(serial,merchType,merchSize,stock,price,model,serialAux) {
    return new Promise((resolve, reject) => {
        conn.query(`UPDATE ${TABLA} SET serial =?, merchType =?, merchSize =?, stock =?, price =?, model =? WHERE serial =?`, [serial,merchType,merchSize,stock,price,model,serialAux], (error, result) => {
            return error? reject(error) : resolve(result);
        })
    });
}

module.exports = { getAll, getOneById, create, deleteOneById, updateById };