import React from 'react';
// import '../styles/components/pages/NosotrosPage.css';
import '../styles/components/pages/NosotrosPage.css';


const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptatum reprehenderit facilis ipsam quo iste aliquam laborum sequi, assumenda quod.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptatum reprehenderit facilis ipsam quo iste aliquam laborum sequi, assumenda quod.</p>
            </div>
            <div className="staff">
                <h2>Staff</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="/img/nosotros/persona2.jpg" alt="Mario Gimenez" />
                        <h5>Mario Gimenez</h5>
                        <h6>Ventas</h6>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum dicta modi assumenda neque corporis quam nulla, eum eligendi odit mollitia?</p>

                    </div>
                    <div className="persona">
                        <img src="/img/nosotros/persona1.jpg" alt="Pablo Ramirez" />
                        <h5>Pablo Ramirez</h5>
                        <h6>RRHH</h6>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum dicta modi assumenda neque corporis quam nulla, eum eligendi odit mollitia?</p>

                    </div>
                    <div className="persona">
                        <img src="/img/nosotros/persona5.jpg" alt="Claudia Fritz" />
                        <h5>Claudia Fritz</h5>
                        <h6>Compras</h6>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum dicta modi assumenda neque corporis quam nulla, eum eligendi odit mollitia?</p>

                    </div>
                    <div className="persona">
                        <img src="/img/nosotros/persona6.jpg" alt="Juan Calvo" />
                        <h5>Juan Calvo</h5>
                        <h6>Gerente</h6>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum dicta modi assumenda neque corporis quam nulla, eum eligendi odit mollitia?</p>

                    </div>
                    <div className="persona">
                        <img src="/img/nosotros/persona3.jpg" alt="Romina Rodriguez" />
                        <h5>Romina Rodriguez</h5>
                        <h6>SUB Gerente</h6>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum dicta modi assumenda neque corporis quam nulla, eum eligendi odit mollitia?</p>

                    </div>
                </div>
            </div>
        </main>
    );
}

export default NosotrosPage;