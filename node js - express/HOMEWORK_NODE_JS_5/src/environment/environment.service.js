const {
    environment
} = require("../storage/environment");
const fs = require("fs")
const filePath = "./src/storage/environment.json";
const readJSONFile = () => {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
}
class Environment {
    constructor() {
        this.environment = environment
    }
    getAllEnvironment = () => {
        const parsedEnvironment = readJSONFile()
        if (parsedEnvironment.length == 0) throw new Error(`Not Found`)
        return parsedEnvironment;
    }
    getEnvironmentById = (id) => {
        const parsedEnvironment = readJSONFile()
        const filtrredEnvinronment = parsedEnvironment.filter((el) => el.id === id);
        if (!filtrredEnvinronment.length) throw new Error("Not Found")
        return user
    }

    createEnvironments = (env) => {
        const parsedEnvironment = readJSONFile()
        if (env.hasOwnProperty(`id`) && env.hasOwnProperty(`label`) && env.hasOwnProperty(`category`)) {
            parsedEnvironment.push(env)
        } else {
            throw new Error("Missing a required field")
        }
        return parsedEnvironment;
    }

    updateEnvinronment = (id, label) => {
        const parsedEnvironment = readJSONFile()
        const filtrredEnvinronment = parsedEnvironment.filter((el) => el.id != id);
        if (filtrredEnvinronment.length === parsedEnvironment.length) throw new Error("Not Found")
        filtrredEnvinronment.push(label)
        return filtrredEnvinronment
    }

    deleteEnvironmentById = (id) => {
        const parsedEnvironment = readJSONFile()
        const filtrredEnvinronment = parsedEnvironment.filter((el) => el.id != +id);
        if (filtrredEnvinronment.length === parsedEnvironment.length) throw new Error("Not Found");
        return filtrredEnvinronment
    }
}

module.exports = {
    Environment
}