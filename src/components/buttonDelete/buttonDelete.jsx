import Button from 'react-bootstrap/Button';
import { X } from 'react-bootstrap-icons';

const ButtonDelete = ({id}) =>{

    const eliminarElemento = (index) => {
        alert(index);
    };

    return(
        <Button className="btn btn-danger float-end p-1 mx-1" onClick={() => eliminarElemento(id)}>
            <X size={24}/>
        </Button> 
    )
}

export default ButtonDelete;