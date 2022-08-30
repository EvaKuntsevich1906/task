const {
    createdEnvironmentDB,
    getAllEnvironmentDB,
    getAllEnvironmentByIDDB,
    updateEnvironmentByIDDB,
    patchEnvironmentByIDDB,
    deletedEnvinronmentByIDDB
} = require("./environment.repository")

const createEnvironment = async (environment) => {
    const value = await createdEnvironmentDB(environment)
    return value
}

const getAllEnvironment = async () => {
    const value = await getAllEnvironmentDB()
    return value
}

const getAllEnvironmentByID = async (id) => {
    const value = await getAllEnvironmentByIDDB(id)
    return value
}
const updateEnvironmentByID = async (id, label, category, priority) => {
    const value = await updateEnvironmentByIDDB(id, label, category, priority)
    return value
}
const patchEnvironmentByID = async (id, obj) => {
    const value = await patchEnvironmentByIDDB(id, obj)
    return value
}
const deleteEnvironmentByID = async (id) => {
    const value = await deletedEnvinronmentByIDDB(id)
    return value
}

module.exports = {
    createEnvironment,
    getAllEnvironment,
    getAllEnvironmentByID,
    updateEnvironmentByID,
    deleteEnvironmentByID,
    patchEnvironmentByID
}