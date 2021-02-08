// build your `/api/tasks` router here
const express = require('express')

const Tasks = require('./model.js')

const router = express.Router();

//Read
router.get('/:id' , async(req, res) => {
    const [id] = req.params

    try{
        const task = await Tasks.findById(id)
        if(task) {
            res.json(task)
        } else{
            res.status(404).json({message: 'id not found'})
        }
    
    }catch (err) {
        console.log(err)
        res.status(500).json({error: err})
    }
})

//Update
router.post('/:id' , async(req, res) => {
    const taskData = req.body;

    try{
        const newTask = await Tasks.add(taskData)
        res.json(newTask)

    }catch (err){
        console.log(err)
        res.status(500).json({error: err})
    }
})





module.exports = router