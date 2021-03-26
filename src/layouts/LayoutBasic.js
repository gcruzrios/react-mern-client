import React from 'react'
import {
    Route,
    Switch
  } from "react-router-dom";
import {Layout, Row, Col} from "antd";
import "./LayoutBasic.scss";
import MenuTop from '../components/Web/MenuTop';




export default function LayoutBasic(props) {

    const { routes } = props;
    const { Footer} = Layout

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
            <Footer>Greivin Cruz 2021</Footer>
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