import React from "react";
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersComponent from "./components/Users/UsersContainer";
import {SwapiContainer} from "./components/Swapi/SwapiContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {compose} from "redux";
import {Preloader} from "./components/common/Preloader/Preloader";

class App extends React.Component {


    componentDidMount() {
        this.props.initializeApp();
        console.log(this.props.initialize)
    }


    render() {

        if(!this.props.initialized){
            return <Preloader />
        }

        return (

            <BrowserRouter>

                <div className="app-wrapper">

                    <HeaderContainer/>

                    <Navbar/>

                    <div className="app-wrapper-content">

                        <Route path="/login" render={() => <Login/>}/>

                        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>

                        <Route path="/dialogs" render={() => <DialogsContainer/>}/>

                        <Route path="/users" render={() => <UsersComponent/>}/>

                        <Route path="/swapi" render={() => <SwapiContainer/>}/>


                    </div>
                </div>

            </BrowserRouter>

        );
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
})


export default compose(
    connect(mapStateToProps,{initializeApp})
)(App)

