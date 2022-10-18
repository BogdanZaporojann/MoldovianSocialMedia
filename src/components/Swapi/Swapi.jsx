import axios from "axios";
import {SwapiItem} from "./SwapiItem"

export const Swapi = (props) => {

    let getUser = () => {
        debugger
        axios.get("https://swapi.dev/api/people")
            .then(result => props.setSwapi(result.data.results));
    }

    let swapis = props.swapiData.map((swapi)=><SwapiItem name={swapi.name} height={swapi.height} mass={swapi.mass}/>)

    return(
        <div>
            <button onClick={getUser}>
                SHOW
            </button>

            <div>
                {swapis}
            </div>
        </div>
    );
}