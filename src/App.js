import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersComponent from "./components/Users/UsersContainer";
import {SwapiContainer} from "./components/Swapi/SwapiContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


const App = (props) => {

    return (

        <BrowserRouter>

        <div className="app-wrapper">

            <HeaderContainer />

            <Navbar />

            <div className="app-wrapper-content">

                    <Route path="/login" render={ () => <Login />}/>

                    <Route path="/profile/:userId?" render={ () => <ProfileContainer />}/>

                    <Route path="/dialogs" render={ () => <DialogsContainer />}/>

                    <Route path="/users" render={ () => <UsersComponent />}/>

                    <Route path="/swapi" render={ () => <SwapiContainer />}/>


            </div>
        </div>

        </BrowserRouter>

    );
}

export default App;
