import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs( category );

    return (
    <>
        <h3 className="primary bold"> {category} </h3>
        {/* Manera 1 de envíar argumentos */}
        {/* { images.map( image =>  <GifGridItem img={ image } key={ image.id } /> ) } */}
        {/* Manera 2 de enviar argumentos */}
        { loading && <p> Cargando </p> }
        <div className="card-grid animate__animated animate__fadeIn">
            { images.map( image =>  <GifGridItem key={ image.id } { ...image } /> ) }
        </div>

        {/* <ol>
            {
                // Destructuración
                images.map( ({id, title}) => (
                    <li key={ id }> { title } </li>
                ))
                // Manera normal
                // images.map( (image) => (
                //     <li key={ image.id }> { image.title } </li>
                // ))
            }
        </ol> */}
    </>
    )
}
