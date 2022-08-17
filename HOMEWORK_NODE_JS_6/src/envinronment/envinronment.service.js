const {
    createdEnvinronmentDB,
    getAllEnvinromentDB,
    getEnvinromentByIdDB,
    updateEnvinronmentByIdDB
} = require("./envinronment.repository")

const createEnvinronment = async (envinronment) => {
    const value = await createdEnvinronmentDB(envinronment)
    return value
}
const getAllEnvinronment = async () => {
    const value = await getAllEnvinromentDB()
    return value
}
const getEnvinronmentById =  async (id) => {
    const value = await getEnvinromentByIdDB(id)
    return value
}
const  updEnvinronmentById = async (id) => {
    const value = await updateEnvinronmentByIdDB(id)
    return value
}

module.exports = {
    createEnvinronment,
    getAllEnvinronment,
    getEnvinronmentById,
    updEnvinronmentById
}