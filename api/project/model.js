// build your `Project` model here
const db = require('../../data/dbConfig.js')
module.exports = {
    findById,
    add
}


//Read - With id Passed in to get information back
async function findById(id) {
return db('projects').where({ id }).first();
}


//Post - add data with project data passed in returns array of project data
async function add(projectData) {
    const ids = await db('projects').insert(projectData);
    return newProject = await findById(ids[0]);

} 