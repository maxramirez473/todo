import ListGroup from 'react-bootstrap/ListGroup';
import Item from '../item/item';

const today = new Date().toLocaleDateString('es-AR');
//console.log(today);

const ItemList = ({actividades}) => {
    return (
        <ListGroup>
            {
                actividades.length > 0 &&
                actividades.map((actividad)=>{
                    if(actividad.fecha >= today) 
                    return(
                        <Item key={actividad.id} actividad={actividad}/>
                    )
                })
            }
        </ListGroup>
    )
}

export default ItemList;