// importamos nuestra libreria
import MUIDataTable from "mui-datatables";
import axios from "axios";

// importamos nuestros hook
import { useState, useEffect } from "react";


export const TableData = () => {
    // 1 - configurar los hook
    const [products, setProducts] = useState([])

    // 2 - funcion para mostrar los datos
    const endpoint = 'https://fakestoreapi.com/products'

    const getData = async () => {
        await axios.get(endpoint).then((response) => {
            const data = response.data
            console.log(data)
            setProducts(data)
        })
    }
    useEffect(() => {
        getData()
    }, [])

    // 3 - definicion de las columnas
    const columns = [
        {
            name: "id",
            label: "Id"
        },
        {
            name: "title",
            label: "NOMBRE"
        },
        {
            name: "category",
            label: "Categoria"
        },
        {
            name: "price",
            label: "Precio"
        },
    ]

    // 4 - renderizamos la data
    return (
        <MUIDataTable
            title={"show data"}
            data={products}
            columns={columns}
        />
    )
}