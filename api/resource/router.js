// build your `/api/resources` router here

const express = require('express')

const Resources = require('./model.js')

const router = express.Router();

//Read
router.get('/:id' , async(req, res) => {
    const [id] = req.params

    try{
        const resource = await Resources.findById(id)
        if(resource) {
            res.json(resource)
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
    const resourceData = req.body;

    try{
        const newResource = await Resources.add(resourceData)
        res.json(newResource)

    }catch (err){
        console.log(err)
        res.status(500).json({error: err})
    }
})





module.exports = router