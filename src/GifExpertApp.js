import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(
        [ 'One Punch' ]
    )

    // const handleAdd = () => {
    //     // Al final
    //     // setCategories( [...categories, 'Hunter X Hunter'] );

    //     // Al inicio
    //     // setCategories( ['Hunter X Hunter', ...categories] );

    //     // Está es la mejor manera
    //     setCategories( cats => [ ...cats, 'Hunter X Hunter' ]);
    // }

    return (
        <>
            <h2 className='header'> GifExpertApp </h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            {/* <button type="button" className='button button-primary'> Agregar </button> */}

            <ol>
                { 
                    categories.map( (category) => (
                        // <li key={category}> { category } </li>
                        <GifGrid 
                            category={ category } 
                            key={ category }
                        />
                    ))
                }
            </ol>
        </>
    );
};

export default GifExpertApp