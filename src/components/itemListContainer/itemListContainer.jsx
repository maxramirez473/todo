import data from '../../archivos/DATA.json';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

import { useState, useEffect } from 'react';

const ItemListContainer = () =>{

    const [actividades, setActividades]=useState([]);

    const traerDatos = () =>{
        return new Promise((resolve, reject) =>{
            resolve(data)
        })
    }

    useEffect(()=>{
        traerDatos()
        .then((res)=>{
            setActividades(res);
        })
    },[]);
    
    return (
        <div className='mt-4'>
            <ListGroup>
            {
                actividades.length > 0 &&
                actividades.map((actividad)=>{
                    return(
                        <div>
                            <ListGroup.Item>{actividad.actividad}</ListGroup.Item>
                        </div>
                    )
                })
            }
            </ListGroup>
        </div>
    );
}

export default ItemListContainer;