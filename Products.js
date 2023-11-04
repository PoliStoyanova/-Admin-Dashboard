import React, { useState, useEffect } from "react";
import withMainLayout from "../layout/withMainLayout";
import axios from "axios";
import Table from "../components/Table";

function Products() {
    const [ products, setProdukts ] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products?limit=10')
        .then(response => {
            let productsAsArray = response.data.map(item => [
                item.id, 
                item.title, 
                item.rating.rate, 
                <img style={{width: 50}} src={item.image} />
            ]);

            setProdukts(productsAsArray);
        })
    }, []);

    return(
        <>
            <h1>Products List</h1>
            <Table
                columns={["Id", "Title", "Rating", "Image"]} 
                values={products}
            />
        </>
    );
}

export default withMainLayout(Products);