import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

const Text = () => {

    const [text, setText] = useState(" ");
    const [show, setShow] = useState(true);

    function handleText(e){
        setText(e.target.value);
    };

    function handleShow(){
        setShow(!show);
    }

    useEffect( () => {
        console.log('se monta');
    },[]);

    useEffect( () => {

        return () => {
        console.log('se desmonta');
        }
    },[]);


    return(
        <div>
            
            <p>{text}</p> 
            {
                show && 
                <input type='text' onChange={handleText}></input>
            }
            
            <Button variant="success" className="mt-4 btn-lg" onClick={handleShow}>{show ? 'Ocultar' : 'Mostrar'}</Button>  
        </div>
    );
    
};

export default Text;