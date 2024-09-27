import ListGroup from 'react-bootstrap/ListGroup';
import { Eye, Pencil } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import MensajeModal from '../modal/modal';
import { useState } from 'react';
import ButtonDelete from '../buttonDelete/buttonDelete';




const Item = ({actividad}) => {

    const [showModal, setShowModal] = useState(false);
    const [dataForModal, setDataForModal] = useState(null);

    const handleOpenModal = () => {
        setShowModal(true);
        setDataForModal({ actividad });
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return(
        <>
            <div className="row">
                <ListGroup.Item  className="col-12 col-md-6 mx-auto">
                    <span className='fs-4'>
                        {actividad.actividad}
                    </span>

                    <ButtonDelete id={actividad.id}/>

                    <Button className="btn btn-success float-end p-1 mx-1" >
                        <Pencil size={24}/>
                    </Button>
                    <Button className="btn btn-primary float-end p-1 mx-1" onClick={handleOpenModal}>
                        <Eye size={24}/>
                    </Button>
                    
                </ListGroup.Item>
            </div>

            {showModal && <MensajeModal isOpen={showModal} onClose={handleCloseModal} data={dataForModal} />}

            
        </>
    )
}

export default Item;