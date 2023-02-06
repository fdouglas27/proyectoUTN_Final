
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/components/pages/ContactoPage.css';
// import '../layout/contactos/contactos.js'

const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.mesagge);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
   
        <body>
             <div className="overlay" id="overlay">

             <p>Federico Douglas Price</p>
             </div>

            <main className="holder contacto">
                <div>
                    <h2>Contacto Rapido</h2>
                    <form action="/contacto" method='post' onSubmit={handleSubmit} className="formulario">
                        <p>
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                        </p>
                        <p>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} />
                        </p>
                        <p>
                            <label htmlFor="telefono">Telefono</label>
                            <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} />
                        </p>
                        <p>
                            <label htmlFor="mensaje">Mensaje</label>
                            <textarea name="mensaje" id="" cols="30" rows="10" value={formData.mensaje} onChange={handleChange}></textarea>
                        </p>
                        <p className='acciones'>
                            <input type="submit" value="Enviar" />
                        </p>

                        {sending ? <p>Enviando...</p> : null}
                        {msg ? <p>{msg}</p> : null}

                    </form>

                </div>
                <div className="datos">
                    <h2>Otras Vias de Comunicación</h2>
                    <p>También puede contactarse con nosotros usando los siguientes medios</p>
                    <ul>
                        <li>Telefono: 43242388</li>
                        <li>Email: fededouglas@hotmail.com</li>
                        <li>Facebook:</li>
                        <li>Twitter:</li>
                    </ul>
                </div>

                
               
            </main>


            
        </body>
    );
}

export default ContactoPage;