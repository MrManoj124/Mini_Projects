const express = require('express')
const router = express.Router()
const user_services = require("./user_services")


router.get('/:id', (req, res) => {
    try {
        const id = req.params.id
        const result = user_services.getUser(id)

        if (result) {
            res.status(200).json(result)
        }
        else {
            res.status(404).send("User not found")
        }

    }
    catch (err) {
        res.status(500).send("Internal Error")
    }

})

module.exports = router