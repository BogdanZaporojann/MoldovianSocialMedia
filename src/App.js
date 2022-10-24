import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersComponent from "./components/Users/UsersContainer";
import {SwapiContainer} from "./components/Swapi/SwapiContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


const App = (props) => {

    return (

        <BrowserRouter>

        <div className="app-wrapper">

            <Header />

            <Navbar />

            <div className="app-wrapper-content">



                    <Route path="/profile" render={ () => <ProfileContainer />}/>

                    <Route path="/dialogs" render={ () => <DialogsContainer />}/>

                    <Route path="/users" render={ () => <UsersComponent />}/>

                    <Route path="/swapi" render={ () => <SwapiContainer />}/>


            </div>
        </div>

        </BrowserRouter>

    );
}

export default App;
