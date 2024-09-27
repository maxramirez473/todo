import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MensajeModal({ isOpen, onClose, data }) {
    console.log('se monta');
    return (
        <>
        {data && 
        
            <Modal show={isOpen}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {data.actividad.actividad}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <span className="fs-6">{data.actividad.fecha}</span><br />
                    {data.actividad.descripcion}
                </Modal.Body>

                <Modal.Footer className='mx-auto'>
                    <Button className='btn btn-warning' onClick={onClose}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        }
        </>
    );
    
    
}

export default MensajeModal;