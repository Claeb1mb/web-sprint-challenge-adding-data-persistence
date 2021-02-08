// build your `Task` model here
module.exports = {
    findById,
    add
}


//Read - With id Passed in to get information back
async function findById(id) {
    return db('projects').where({ id }).first();

}


//Post - add data with Task data passed in returns array of project data
async function add(taskData) {
    const ids = await db('projects').insert(taskData);
    return newTask = await findById(ids[0]);
} 