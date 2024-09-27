import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import MensajeModal from '../modal/modal';
import { useState } from 'react';




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
                <ListGroup.Item  className="col-12 col-md-6 mx-auto">{actividad.actividad} 
                    <Button className="btn btn-primary float-end" onClick={handleOpenModal}>
                        Ver Actividad
                    </Button>
                </ListGroup.Item>
            </div>

            {showModal && <MensajeModal isOpen={showModal} onClose={handleCloseModal} data={dataForModal} />}

            
        </>
    )
}

export default Item;