import React from 'react';
import '../../styles/components/pages/NovedadesPage.css';

const NoveltyItem = (props) => {
    const { title, subtitle, image, body } = props;

    return (
        <div className="novelties">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <div className='imageHolder'>
                <img src={image} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: body }} />
            <hr />
        </div>

    );
}

export default NoveltyItem;