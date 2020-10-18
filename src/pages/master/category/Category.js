import React, {useEffect, useState} from "react";
import {Container, Table} from "react-bootstrap";

let Category = (props) => {
    const [path, setPath] = useState("Dashboard/Category");

    // useEffect(() => {
    //     if (props.path != path) {
    //         props.changePath(path)
    //     }
    // })

    return(
        <Container fluid>
            <h1>Master Category</h1>
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

export default Category;
