import React from 'react';
import '../styles/components/pages/GaleriaPage.css';

const GaleriaPage = (props) => {
    return (

        <main className="holder">
            <div className="galeria">
                <img src="/img/galeria/img01.jpg" height="100" width="100" alt="..." />
                <img src="/img/galeria/img02.jpg" height="100" width="100" alt="..." />
                <img src="/img/galeria/img03.jpg" height="100" width="100" alt="..." />
                <img src="/img/galeria/img04.jpg" height="100" width="100" alt="..." />
                <img src="/img/galeria/img05.jpg" height="100" width="100" alt="..." />
                <img src="/img/galeria/img06.jpg" height="100" width="100" alt="..." />
                <img src="/img/galeria/img07.jpg" height="100" width="100" alt="..." />
            </div>
        </main>
    );
}

export default GaleriaPage;

