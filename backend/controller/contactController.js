const mongoose = require('mongoose');
const Contact = require('../models/Contact');


// get all contacts
const getAllContacts = async(req,res)=>{
    const contact = await Contact.find({}).sort({createdAt: -1})
    res.status(200).json(contact)
}

// create a new contact
const createContact = async(req,res)=>{
    const {name, phone, email} = req.body

    // add doc to db
    try {
        const contact = await Contact.create({name, phone, email})
        res.status(200).json(contact);
    } catch (error) {
        res.status(400).json({msg : error.message})
    }
}

// get a single workout
const getContact = async(req,res)=>{
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such contact'})
    }

    const contact = await Contact.findById(id)

    if (!contact) {
        return res.status(404).json({error: 'No such contact'})
    }
res.status(200).json(contact)
}

// delete a contact
const deleteContact = async(req, res)=>{
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such contact"})
    }

    const contact = await Contact.findOneAndDelete({_id:id})

    if (!contact){
        return res.status(404).json({error: 'No such contact'})
    }

    res.status(200).json(contact)
}

 
// update a workout

const updateContact = async(req, res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:"No such contact"})
    }

    const contact = await Contact.findOneAndUpdate({_id: id}, {
        ...req.body})

    if (!contact){
        return res.status(404).json({error: 'No such contact'})
    }
    
    res.status(200).json(contact)

}



module.exports = {
    getAllContacts,
    createContact,
    getContact,
    deleteContact,
    updateContact
}