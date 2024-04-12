const Client = require('../models/clientModel.js')

exports.getAllClients = async (req, res) => {
    try {
        const client = await Client.find()
        res.send(client)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.getClientById = async (req, res) => {
    try{
        const client = await Client.findById(req.params.id)
        res.send(client)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.getClientByName = async (req, res) => {
    try{
        const client = await Client.find({ title: req.params.title })
        res.send(client)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.createClient = async (req, res) => {
    try{
        const client = new Client(req.body)
        await client.save()
        res.send(client)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.updateClient = async (req, res) => {
    try{
        const client = await Client.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })
        res.send(client)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.deleteClient = async (req, res) => {
    try{
        const client = await Client.findByIdAndDelete(req.params.id)
        res.send(client)
    } catch (error) {
        res.status(500).send(error)
    }
}