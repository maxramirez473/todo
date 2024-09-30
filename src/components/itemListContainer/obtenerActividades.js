import data from '../../archivos/DATA.json';

export const traerDatos = () =>{
    return new Promise((resolve, reject) =>{
        resolve(data)
    })
}


export const pedirItem = (id) =>{
    return new Promise((resolve, reject)=>{
        const item = data.find((i)=>i.id === id);

        if (item) {
            resolve(item);
        } else {
            reject({
                error: "error al intentar obtener elemento"
            })
        }
    })
}
