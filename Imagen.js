/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

const Imagen = (props) => {

    const {largeImageURL, likes, previewURL, tags, views} = props.imagen;
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} className="card-img-top"></img>
                <div className="card-body">
                    <p className="card-text">{likes} Me gustas</p>
                    <p className="card-text">{views} Vistas</p>
                    <a href={largeImageURL} target="_blank"  rel='noreferrer' className="btn btn-primary btn-block">Ver Imagenes</a>

                </div>
            </div>
        </div>
    )
}

export default Imagen;

