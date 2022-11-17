import {connect} from "react-redux";
import {SHOW_SWAPI_ACTION_CREATOR} from "../../redux/swapiReducer";
import {SwapiClass} from "./SwapiClass";


let mapStateToProps = (state) => ({
    swapiData: state.swapiPage.swapiData
})



let mapDispatchToProps = (dispatch) => {
    return {
        setSwapi: (body) => {
            dispatch(SHOW_SWAPI_ACTION_CREATOR(body));
        }
    }
}


export const SwapiContainer = connect(mapStateToProps, mapDispatchToProps)(SwapiClass);