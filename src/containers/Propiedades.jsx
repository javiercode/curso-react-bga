import React, {useState} from 'react'
import Home from '../components/Home'
import Filtro from '../components/Filtro'
import '../styles/main.css'
import { lista } from '../assets/lista'

const Propiedades = () => {
    const [dataList, setDataList] = useState(lista)

    const changeList = (data) =>{
        setDataList(data);
    }
    
    return (
        <div className="contenedor">
            <Filtro changeList={changeList} data ={lista}/>
            <Home title={"Casas en Bolivia"} data={dataList} />
        </div>
    )
}

export default Propiedades
