import React from 'react'
import {
    Route,
    Link,
    Switch
  } from "react-router-dom";
import {Layout} from "antd"
import "./LayoutBasic.scss";
import routes from '../config/routes';

export default function LayoutBasic(props) {

    const { routes } = props;
    const { Content, Footer} = Layout

    return (
        <div>
        <Layout>
           <h2>Menu </h2>
           <Layout>
                
                <Content> 
                    <LoadRoutes routes={routes} />
                </Content>
                <Footer>Greivin Cruz 2021</Footer>
           </Layout>
        </Layout>
        </div>
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