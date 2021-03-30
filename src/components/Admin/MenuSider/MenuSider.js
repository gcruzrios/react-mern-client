import React from 'react';
import { Link, withRouter } from "react-router-dom";
import {Layout, Menu, Icon } from "antd";
import './MenuSider.scss';

function MenuSider(props) {
    //console.log(props)
    const {menuCollapsed, location } = props;
    const { Sider } = Layout;
    return (
        <Sider className="admin-sider" collapsed={menuCollapsed}>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={[location.pathname]}>
                <Menu.Item key="/admin">
                    <Link to={"/admin"}>
                        <Icon type="home"/>
                        <span className="nav-text">Home</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/admin/users">
                    <Link to={"/admin/users"}>
                        <Icon type="user"/>
                        <span className="nav-text">Usuarios</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/admin/menu">
                    <Link to={"/admin/menu"}>
                        <Icon type="menu"/>
                        <span className="nav-text">Menú</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/admin/courses">
                    <Link to={"/admin/courses"}>
                        <Icon type="book"/>
                        <span className="nav-text">Cursos</span>
                    </Link>
                </Menu.Item>

            </Menu>
        </Sider>

        // <div>MenuSider</div>
    );
}

export default withRouter(MenuSider);