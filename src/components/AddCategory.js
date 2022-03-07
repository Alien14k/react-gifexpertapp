import React, { useState } from 'react'
import PropTypes from 'prop-types';

// rfc para importar react
// imprm para importar prop types 

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState( '' );

    const handleInputChange = (e) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories( cats => [ inputValue, ...cats ]);
            setInputValue( '' );
        }
    }

    return (
        // No es necesario usar Fragment cuando hay un form al inicio y fin
        <form onSubmit={ handleSubmit }>
            <input 
                className='w-100'
                type="text" 
                placeholder='Escribir categoría'
                value={ inputValue } 
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}