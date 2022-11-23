import React from "react";
import './App.css';
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

class App extends React.Component {


    componentDidMount() {
        this.props.initializeApp();
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
                           <Route path="/login" element={<LoginContainer/>}/>

                           <Route path="/profile" element={<ProfileContainer />}/>

                           <Route path="/profile/:userId" element={<ProfileContainer/>}/>

                           <Route path="/dialogs" element={<DialogsContainer/>}/>

                           <Route path="/users" element={<UsersContainer /> }/>

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

