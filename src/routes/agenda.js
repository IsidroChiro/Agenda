const express = require('express');
const router = express.Router();
const contactoSchema = require('../models/contacto');

//Obtener contactos
router.get('/contactos', (req,res) => {
    contactoSchema.find()
        .then((data) => res.json(data))
        .catch((err) => res.json({ messaje: err}));
});

//Obtener contacto por ID
router.get('/contacto/:id', (req,res) => {
    const { id } = req.params;
    contactoSchema.findById(id)
        .then((data) => res.json(data))
        .catch((err) => res.json({ messaje: err}));
});

//Crear contacto
router.post('/contacto', (req,res) => {
    const contacto = contactoSchema(req.body);
    contacto.save()
        .then((data) => res.json(data))
        .catch((err) => res.json({ messaje: err}));
});

//Actualizar contacto
router.put('/contacto/:id', (req,res) => {
    const { id } = req.params;
    const { nombre, direccion, telefono, email } = req.body;
    contactoSchema.updateOne({ _id: id }, { $set: { nombre, direccion, telefono, email } })
        .then((data) => res.json(data))
        .catch((err) => res.json({ messaje: err}));
});

//Actualizar contacto
router.delete('/contacto/:id', (req,res) => {
    const { id } = req.params;
    contactoSchema.remove({ _id: id })
        .then((data) => res.json(data))
        .catch((err) => res.json({ messaje: err}));
});

module.exports = router;