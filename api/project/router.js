// build your `/api/projects` router here
const express = require('express')

const Projects = require('./model.js')

const router = express.Router();

//Read
router.get('/:id' , async(req, res) => {
const [id] = req.params

try{
    const project = await Projects.findById(id)
    if(project) {
        res.json(project)
    } else{
        res.status(404).json({message: 'id not found'})
    }

}catch (err) {
    console.log(err)
    res.status(500).json({error: err})
}
})

//create
router.post('/:id' , async(req, res) => {
    const projectData = req.body;

    try{
        const newProject = await Projects.add(projectData)
        res.json(newProject)

    }catch (err){
        console.log(err)
        res.status(500).json({error: err})
    }

})





module.exports = router