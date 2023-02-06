// import React from 'react';
import '../styles/components/pages/NovedadesPage.css';
import React, { useState, useEffect } from 'react';
//axios es para las peticiones
import axios from 'axios';
import NoveltyItem from '../layout/novedades/NoveltyItem';

// const NovedadesPage = (props) => {
const Novelties = (props) => {

    const [loading, setLoading] = useState(false);
    const [novelties, setNovelties] = useState([]);

    useEffect (() => {
        const loadNovelties  = async () => {
            setLoading(true);
            //const response = await axios.get(`${precess.env.REACT_APP_API_URL}/api/novelties`);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovelties(response.data);
            setLoading(false);
        };
        loadNovelties();
    }, []); 

    return (
        <div className="box">
        <section className="holder">
            <h2>Novedades</h2>
            { loading ? (
                <p>Cargando...</p>
            ) : (
                novelties.map(item => <NoveltyItem key={item.novelties_id}
                    title={item.novelties_title} subtitle={item.novelties_subtitle} image={item.image} body={item.novelties_bodie} />)
            ) }
        </section>
        </div>
    );
}

// export default NovedadesPage;
export default Novelties;