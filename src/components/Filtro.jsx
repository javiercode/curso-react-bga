import React, {useState} from 'react'
import '../styles/filtro.css'

const Filtro = (props) => {
    const [puntaje, setPuntaje] = useState("")
    const getFilter= () =>{

    }

    const onChangePuntaje = (e) => {
        const regex = new RegExp('^[0-9]+([.])?([0-9]+)?$')
        var value
        if((e.target.value.trim()!=="")){
            value = regex.test(e.target.value) ? e.target.value : puntaje;
            const dataList = props.data;
            const found = dataList.filter(element => element.rating == value);
            props.changeList(found)
        }else{
            value = ""
            props.changeList(props.data)
        }
        setPuntaje(value)        
    };

    return (
        <div className="contenedor-busqueda">
            <div className="logo-filtro">Curos React Basico</div>
            <input placeholder="Puntaje" className="texto-busqueda" value={puntaje} onChange={onChangePuntaje}></input>
        </div>
    )
}

export default Filtro