import React, {useEffect, useState} from "react";
import {Container, Table} from "react-bootstrap";
import {getData} from "../../../api/ApiClient";
import API from "../../../utils/Api";
import {log_common} from "../../../utils/Logger";

let Product = (props) => {
    const [path, setPath] = useState("Dashboard/Product");

    let getProducts = async () => {
        let url = API.GET_PRODUCT;
        let reponse = await getData(url)
        log_common("RESPONSE", reponse)
    }

    useEffect(() => {
        getProducts()
    })

    return(
        <Container fluid>
            <h1>Master Product</h1>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Stock</th>
                    <th>Price</th>
                    <th>Created</th>
                    <th>Updated</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </Table>
        </Container>
    )
}

export default Product;
