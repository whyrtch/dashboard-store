import React, {useEffect, useState} from 'react';
import {
    Button,
    Container,
    Navbar, Nav
} from "react-bootstrap";
import Constant from "../../utils/Constant";

let Sidebar = (props) => {
    const [path] = useState(props.currentPath);

    return (
        <div className={"sidebar"}>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    React Bootstrap
                </Navbar.Brand>
            </Navbar>
            <br/>
            <Container fluid>
                <Nav variant="pills" className="flex-column">
                    <Nav.Link href="/product" active={path === Constant.PATH_PRODUCT}>
                        <Button className={"btn-transparant"} block>
                            Master Product
                        </Button>
                    </Nav.Link>
                    <Nav.Link eventKey="category" href="/category" active={path === Constant.PATH_CATEGORY}>
                        <Button className={"btn-transparant"} block>
                            Master Category
                        </Button>
                    </Nav.Link>
                </Nav>
            </Container>
        </div>
    );
}

export default Sidebar;
