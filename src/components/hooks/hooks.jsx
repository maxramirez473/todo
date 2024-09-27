import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Hooks() {

    const [text, setText] = useState("");

    const handleText = (e) =>{
        setText(e.target.value);
    }

    const [numero, setNumber ]=useState(0);
    const [show, setShow ]=useState(true);

    const sumar = () =>{
        setNumber(numero+1);
    }

    const restar = () =>{
        if (numero>0) {
            setNumber(numero-1);
        }else{
            alert('No puede ser negativo');
        }
        
    }

    function handleShow(){
        setShow(!show);
    }

    useEffect( () => {
        console.log('monta');
    },[show]);

    useEffect( () => {

        return () => {
            console.log('desmonta');
        }
    },[show]);


    return (
    <>
        <div>
            <div className="d-flex justify-content-around">
                <Button variant="success" className="mt-4 btn-lg" onClick={handleShow}>{show ? 'Ocultar' : 'Mostrar'}</Button>  
                <Button variant="success" className="mt-4 btn-lg" onClick={sumar}>Sumar</Button>
                <Button variant="danger" className="mt-4 btn-lg" onClick={restar}>Restar</Button>
            </div>
            
            {
                show && <p className='text-center mt-5 fs-1'>1</p>
            }
            
        </div>

        <Form.Label htmlFor="text">Texto</Form.Label>
        <Form.Control
            type="text"
            id="text"
            onChange={handleText}
        />

        <Form.Group className="my-3">
                <Form.Label>Disabled input</Form.Label>
                <Form.Control placeholder={text} disabled />
        </Form.Group>
    </>
    );
}
    export default Hooks;