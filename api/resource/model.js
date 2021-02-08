// build your `Resource` model here
// build your `Project` model here
module.exports = {
    findById,
    add
}


//Read - With id Passed in to get information back
async function findById(id) {
    return db('projects').where({ id }).first();
}


//Post - add data with resource data passed in returns array of project data
async function add(resourceData) {
    const ids = await db('projects').insert(resourceData);
    return newResource = await findById(ids[0]);
} 