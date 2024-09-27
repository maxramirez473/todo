import data from '../../archivos/DATA.json';

const traerDatos = () =>{
    return new Promise((resolve, reject) =>{
        resolve(data)
    })
}

export default traerDatos;