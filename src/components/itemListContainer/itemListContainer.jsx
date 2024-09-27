import traerDatos from './obtenerActividades';
import ItemList from '../itemList/itemList';

import { useState, useEffect } from 'react';

const ItemListContainer = () =>{

    const [actividades, setActividades]=useState([]);

    useEffect(()=>{
        traerDatos()
        .then((res)=>{
            setActividades(res);
        })
    },[]);
    
    return (
        <div className='mt-4'>
            <h2 className='text-primary text-center'>Actividades por Realizar</h2>
            <ItemList actividades={actividades}/>
        </div>
    );
}

export default ItemListContainer;