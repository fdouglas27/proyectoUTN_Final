var express = require('express');
var router = express.Router();
var noveltiesModel = require('../models/noveltiesModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');


router.get('/novedades', async function (req, res, next) {
    let novelties = await noveltiesModel.getNovelties();

    novelties = novelties.map(novelties => {
        if (novelties.novelties_img_id) {
            const image = cloudinary.url(novelties.novelties_img_id, {
                width: 200, 
                height: 200,
                crop: "fill"
    
            });
            return {
                ...novelties,
                image
            }
        } else {
            return {
                ...novelties,
                image:''
            }
        }
    });

    res.json(novelties);
});

router.post('/contacto', async (req, res) => {
    const mail = {
        to: 'fededouglas@gmail.com',
        subject: 'Contacto WEB BabyTRAVEL',
        html: `${req.body.nombre} se contacto a traves de la web y quiere más información a este correo: ${req.body.email} <br> Además, hizo el siguiente comentario: ${req.body.mensaje} <br> Su tel es: ${req.body.telefono}`
    }

    const transport = nodemailer.createTransport({
        host:  process.env.SMTP_HOST,
        port:  process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
    });

});


module.exports = router;