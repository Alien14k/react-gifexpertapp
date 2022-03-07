import { useState, useEffect } from "react";
import {getGifs} from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // Los efectos no pueden ser async
    useEffect(() => {
        // Solo se ejecuta esto cuando el componente es renderizado (una única vez)
        // getGifs( category ).then( imgs => setImages( imgs ) );
        getGifs( category ).then( images => {
            setState({
                data: images,
                loading: false
            });
        } );
    }, [ category ]);

    return state; // { data: [], loading: true }
};