import React from "react";
import '../styles/components/pages/ServiciosPage.css';

const ServiciosPage = (props) => {
    return (
        <main className="holder">

            <h2>Servicios</h2>
            <div className="servicio">
                <img src="./img/servicios/avion.jpg" alt="avion" />
                <div className="info">
                    <h4>Aviones</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Blanditiis, dolorum eos, consequuntur sunt nisi iure sit unde,
                        adipisci voluptate nostrum sed eum accusamus praesentium quae.
                    </p>
                </div>
            </div>
            <div className="servicio">
                <img src="./img/servicios/tren.jpg" alt="trenes" />
                <div className="info">
                    <h4>Trenes</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Blanditiis, dolorum eos, consequuntur sunt nisi iure sit unde,
                        adipisci voluptate nostrum sed eum accusamus praesentium quae.
                    </p>
                </div>
            </div>
            <div className="servicio">
                <img src="./img/servicios/crucero.jpg" alt="cruceros" />
                <div className="info">
                    <h4>Cruceros</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Blanditiis, dolorum eos, consequuntur sunt nisi iure sit unde,
                        adipisci voluptate nostrum sed eum accusamus praesentium quae.
                    </p>
                </div>
            </div>
            <div className="servicio">
                <img src="./img/servicios/colectivo.jpg" alt="colectivos" />
                <div className="info">
                    <h4>Colectivos</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Blanditiis, dolorum eos, consequuntur sunt nisi iure sit unde,
                        adipisci voluptate nostrum sed eum accusamus praesentium quae.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default ServiciosPage;