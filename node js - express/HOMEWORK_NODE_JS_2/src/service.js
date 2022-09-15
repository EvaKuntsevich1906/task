const  {arrayObj} = require("./object");

const taskById = (clientId) => {
const arrObjFilter = arrayObj.filter((el) => el.id === clientId)
if (arrayObj.length === 0) throw new Error (`not found`);
return arrObjFilter
};

const createTask = (obj) => {  
   if  (arrayObj.length != 0) {
    arrayObj.push(obj);
    return obj;
   } else {
    throw new Error (`not found`);
   }
    
}
const updateById = (clientId) => {
    const arrObjFilter = arrayObj.filter((el) => el.id === clientId);
    if (arrayObj.length === 0) {
        throw new Error (`not found`);}
    return arrObjFilter
    };


const deleteById = (clientId) => {
    const arrObjFilter = arrayObj.filter((el) => el.id === clientId);
    if (arrayObj.length === 0) {
        throw new Error (`not found`);}
    return arrObjFilter
    };

module.exports = {
   taskById, createTask,updateById,deleteById
};
