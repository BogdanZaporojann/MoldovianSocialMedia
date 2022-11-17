import React from "react";
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {compose} from "redux";
import {Preloader} from "./components/common/Preloader/Preloader";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {SwapiContainer} from "./components/Swapi/SwapiContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

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


                <div className="app-wrapper">

                    <HeaderContainer/>

                    <Navbar/>

                    <div className="app-wrapper-content">
                       <Routes>
                           <Route path="/login" element={<Login/>}/>

                           <Route path="/profile" element={<ProfileContainer />}/>

                           <Route path="/profile/:userId" element={<ProfileContainer/>}/>

                           <Route path="/dialogs" element={<DialogsContainer/>}/>

                           <Route path="/users" element={<UsersContainer /> }/>

                           <Route path="/swapi" element={<SwapiContainer/>}/>
                       </Routes>
                    </div>

                </div>


        );
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
})


export default compose(
    connect(mapStateToProps,{initializeApp})
)(App)

