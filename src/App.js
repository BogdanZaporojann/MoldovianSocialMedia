import React from "react";
import './App.css';
import {NavLink} from "react-router-dom";
import {Navbar} from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/Login";

import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {compose} from "redux";
import {Preloader} from "./components/common/Preloader/Preloader";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Sider } = Layout;

const iconsArray = [UserOutlined,LaptopOutlined,NotificationOutlined]
const profileOptions   = [<NavLink to="/login">Profile</NavLink>,<NavLink to="/chat">Chat</NavLink>,<NavLink to="/friends" >Friends</NavLink>]
const usersOptions  = [<NavLink to="/users" >Developers</NavLink>]
const loginOptions = [<NavLink to="/login" >Login</NavLink>]
const allOptions = [profileOptions,usersOptions,loginOptions]
const titleOption = ["User","Users","Login"]
const items2 = iconsArray.map(

    (icon,index)=>
    {
        const key = String(index+1);
        return {
            key:key,
            icon:React.createElement(icon),
            label:`${titleOption[index]}`,
            children:allOptions[iconsArray.indexOf(icon)].map((el,j)=>
                {
                    const subkey = index*allOptions[iconsArray.indexOf(icon)].length+1+j
                    return {
                        key:subkey,
                        label:el
                    }
                }
            )

        }
    }

)



class App extends React.Component {


    componentDidMount() {
        this.props.initializeApp();
    }


    render() {

        if(!this.props.initialized){
            return <Preloader />
        }

        return (


            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} />
                </Header>
                <Layout>
                    <Sider
                        width={200}
                    >
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{
                                height: '100%',
                                borderRight: 0,
                            }}
                            items={items2}
                        />
                    </Sider>
                    <Layout
                        style={{
                            padding: '0 24px 24px',
                        }}
                    >
                        <Breadcrumb
                            style={{
                                margin: '16px 0',
                            }}
                        >
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            <div className="app-wrapper-content">
                                <Routes>
                                    <Route path="/login" element={<LoginContainer/>}/>

                                    <Route path="/profile" element={<ProfileContainer />}/>

                                    <Route path="/profile/:userId" element={<ProfileContainer/>}/>

                                    <Route path="/dialogs" element={<DialogsContainer/>}/>

                                    <Route path="/users" element={<UsersContainer /> }/>

                                </Routes>
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>



            //
                //
                // <div className="app-wrapper">
                //
                //     <HeaderContainer/>
                //
                //     <Navbar/>
                //

                //
                //
                //
                //
                // </div>
                //

        );
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
})


export default compose(
    connect(mapStateToProps,{initializeApp})
)(App)

