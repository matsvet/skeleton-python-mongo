const express = require('express')
const series = require('./../models/series')

const router = express.Router();

router.post('/series', async (request, response) => {
    console.log(`Request body: ${request.body}`)
    const data = new series(request.body)
    const result = await data.save()

    if (!result) {
        response.json({
            status: "Failed",
            message: "series is register failed"
        })
    } else {
        response.json({
            status: "Success",
            message: "series is register successfully",
            data: result
        })
    }
})

router.get('/series', async (request, response) => {
    try {
        const result = await series.find()
        if (!result) {
            response.json({
                status: "Failed",
                message: "Not found records"
            })
        } else {
            response.json({
                status: "Success",
                message: "Records found",
                data: result
            })
        }
    } catch (error) {
        console.log(error)
    }
})

router.get('/series/:id', async (request, response) => {
    try {
        const _id = request.params.id
        const result = await series.findById(_id)
        if (!result) {
            response.json({
                status: "Failed",
                message: "Not found record by this id"
            })
        } else {
            response.json({
                status: "Success",
                message: "Records found",
                data: result
            })
        }
    } catch (error) {
        console.log(error)
    }
})

router.put('/series/:id', async (request, response) => {
    try {
        const _id = request.params.id
        const body = request.body
        const result = await series.findByIdAndUpdate(_id, body, {new: true})
        if (!result) {
            response.json({
                status: "Failed",
                message: "update - X"
            })
        } else {
            response.json({
                status: "Success",
                message: "update - V",
                data: result
            })
        }
    } catch (error) {
        console.log(error)
    }
})

router.delete('/series/:id', async (request, response) => {
    try {
        const _id = request.params.id
        const result = await series.findByIdAndDelete(_id)
        if (!result) {
            response.json({
                status: "Failed",
                message: "delete - X"
            })
        } else {
            response.json({
                status: "Success",
                message: "delete - V",
                data: result
            })
        }
    } catch (error) {
        console.log(error)
    }
})

// get single record by NAME
router.get("/series/title/:title", async (req, res) => {
    try {
        const title = req.params.title
        const result = await series.findOne({title: title})
        if (!result) {
            res.json({
                status: "FAILED",
                message: "Record not found on this Name"
            })
        } else {
            res.json({
                status: "SUCCESS",
                message: "Record founded by Name",
                data: result
            })
        }
    }
    catch (e) {
        console.log(e)
    }
})

module.exports = router;