const {
    pool
} = require("../db")

const createdEnvinronmentDB = async (envinronment) => {
    const client = await pool.connect();
    const sql = `INSERT into skill (label, category, priority)
    VALUES($1, $2, $3) RETURNING skill.*`;
    const arrOfVal = (await client.query(sql, [envinronment.label, envinronment.category, envinronment.priority])).rows;
    return arrOfVal;
}

const getAllEnvinromentDB = async () => {
    const client = await pool.connect();
    const sql = `SELECT * FROM skill`;
    const arrOfVal = (await client.query(sql)).rows;
    if (arrOfVal.length === 0) throw new Error(`Not Found`)
    return arrOfVal
}
const getEnvinromentByIdDB = async (id) => {
    const client = await pool.connect();
    const sql = `SELECT * FROM skill WHERE id = $1`;
    const arrOfVal = (await client.query(sql,[id])).rows;
    if (arrOfVal.length === 0) throw new Error(`Not Found`)
    return arrOfVal
}
const updateEnvinronmentByIdDB =  async (id) => {
    const client = await pool.connect();
    const sql = `SELECT * FROM skill WHERE id = $1`;
    const arrOfVal = (await client.query(sql,[id])).rows;
    if (arrOfVal.length === 0) throw new Error(`Not Found`)
    return arrOfVal
}

const deleteEnvinronmentsByIdDB
module.exports = {
    createdEnvinronmentDB,
    getAllEnvinromentDB,
    getEnvinromentByIdDB,
    updateEnvinronmentByIdDB
}