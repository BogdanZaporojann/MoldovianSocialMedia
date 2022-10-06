import './App.css';
import {Header} from "./Header/Header";
import {Navbar} from "./Navbar/Navbar";
import {Profile} from "./Profile/Profile";
import {Dialogs} from "./Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";


function App(props) {
    return (
        <div className="app-wrapper">

            <Header />

            <Navbar />

            <div className="app-wrapper-content">


                <Routes>

                    <Route path="/profile" element={<Profile state={props.state}
                                                             addPost={props.addPost}
                                                             updatePost={props.updatePost}/>}/>

                    <Route path="/dialogs" element={<Dialogs state={props.state}
                                                             addMessage={props.addMessage}
                                                             updateMessage={props.updateMessage}/>}/>

                </Routes>

            </div>
        </div>

    );
}

export default App;
