import React from 'react'
import {
    Route,
    Switch
  } from "react-router-dom";
import {Layout, Row, Col} from "antd";
import "./LayoutBasic.scss";
import MenuTop from '../components/Web/MenuTop';
import Footer from '../components/Web/Footer';

export default function LayoutBasic(props) {

    const { routes } = props;
    

    return(
        <>
            <Row>
                <Col lg={4}/>
                <Col lg={16}>
                    <MenuTop/>
                
                </Col>
                <Col lg={4}/>
            </Row>

            <LoadRoutes routes={routes} />
            
            <Footer />
        </>
    )

    
}

function LoadRoutes({routes}){

    
    console.log(routes);
    return (
        <Switch>

            {
            routes.map((route, index)=>(
                <Route exact={route.exact} key={index} path={route.path} component={route.component} />
            ))
            }

        </Switch>

    )
    
}