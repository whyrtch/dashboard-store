import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {
    Breadcrumb,
    Button,
    Container,
    Form,
    FormControl,
    Nav,
    Navbar,
    Table
} from "react-bootstrap";
import Product from "../master/product/Product";
import Category from "../master/category/Category";
import {Capitalize} from "../../utils/Constant";

let MainPanel = (props) => {
    const [path] = useState(props.currentPath);

    return (
        <div className="main-panel">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>{Capitalize(path)}</Breadcrumb.Item>
            </Breadcrumb>

            <Router>
                <Switch>
                    <Route path={"/product"} exact={true} name={"Product"} component={Product}/>
                    <Route path={"/category"} name={"Category"} component={Category}/>
                </Switch>
            </Router>

        </div>
    );
}

export default MainPanel;
