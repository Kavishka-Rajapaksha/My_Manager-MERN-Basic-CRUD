const express = require ("express")

const { createContact,
        getAllContacts,
        getContact,
        deleteContact,
        updateContact } = require('../controller/contactController')

const router = express.Router()


//  get all contact
router.get('/', getAllContacts)


// POST a new contact
router.post('/',createContact)


// get a single contact
router.get('/:id',getContact)

// DELETE a new contact
router.delete('/:id',deleteContact)

// UPDATE a new contact
router.patch('/:id',updateContact)

module.exports = router