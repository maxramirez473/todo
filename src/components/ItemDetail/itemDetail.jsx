import { useState,useEffect } from "react";
import { pedirItem } from "../itemListContainer/obtenerActividades";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ItemDetail = ({id}) => {

    const [actividad, setActividad]=useState(null);

    useEffect(()=>{
        pedirItem(id)
        .then((res)=>{
            setActividad(res);
        })
    },[]);


    if (actividad == null) {
        return(null);
    } else {
        

        return(
            <Form className="mt-5 w-75 mx-auto">
                <Form.Label htmlFor="actividad">Actividad</Form.Label>
                    <Form.Control
                        type="text"
                        id="actividad"
                        name="actidad"
                        value={actividad.actividad}
                    />
    
                <Form.Label htmlFor="descripcion">Descripción</Form.Label>
                    <Form.Control
                        type="text"
                        id="descripcion"
                        name="descripcion"
                        value={actividad.descripcion}
                    />
    
                <Form.Label htmlFor="date">Date</Form.Label>
                    <Form.Control
                        type="date"
                        id="date"
                        name="date"
                        defaultValue={actividad.fecha}
                    />
                
                <div className="d-flex justify-content-center">
                    <Button variant="primary" type="submit" className="m-3">
                        Editar
                    </Button>
    
                    <a href="#" className="text-white btn btn-danger m-3">Volver</a>
                </div>
                
            </Form>
        );
    }


}

export default ItemDetail;