const data = require("../storage/data");
const filePath = "../storage/data";
const readJSONFile = () => {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
}
const getDataById = (id) => {
    const parsedData = readJSONFile(id);
    const user = parsedData.filter((key) => key.id === +id);
    if (!user.length) throw new Error("Not Found")
    return user
}

const createData = (obj) => {
    const parsedData = readJSONFile(obj);
    if (obj.hasOwnProperty(`name`) && obj.hasOwnProperty(`surname`) && obj.hasOwnProperty(`email`) && obj.hasOwnProperty(`pwd`)) {
        parsedData.push(obj)
    } else {
        throw new Error("Missing a required field")
    }
    return parsedData;
}

const updateData = (id, user) => {
    const parsedData = readJSONFile(id, user);
    const FiltredValue = parsedData.filter((key) => key.id != +id);
    if (FiltredValue.length === parsedData.length) throw new Error("Not Found")
    FiltredValue.push(user)
    return FiltredValue
}
const deleteApi = (id) => {
    const parsedData = readJSONFile(id);
    const filtredData = parsedData.filter((key) => key.id != +id);
    return filtredData
}

module.exports = {
    getDataById,
    createData,
    updateData,
    deleteApi
}