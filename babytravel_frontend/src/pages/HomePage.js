import React from 'react';
import '../styles/components/pages/HomePage.css';

const HomePage = (props) => {
    return (
        <main className="holder" >
            <div>
                <img src="img/home/primer-plano-ala-avion_1232-1266.webp" alt="avion"/>
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique beatae sint delectus tempore. Eaque, blanditiis odit error quis dolore debitis?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique beatae sint delectus tempore. Eaque, blanditiis odit error quis dolore debitis?</p>
                </div>
                <div className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente Excelente</span>
                        <span className="autor">Juan Perez - zapatos.com</span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HomePage;
