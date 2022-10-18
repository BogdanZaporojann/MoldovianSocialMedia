import React from "react";
import {Component} from "react";
import axios from "axios";
import {SwapiItem} from "./SwapiItem";


export class SwapiClass extends React.Component {

    componentDidMount() {
        axios.get("https://swapi.dev/api/people")
            .then(result => {
                this.props.setSwapi(result.data.results)
            });
    }



    render() {
        return (
            <div>
                {
                    this.props.swapiData.map((swapi) => <div>
                        <div>Name: {swapi.name}</div>
                    </div>)
                }
                <div>
                    <button>

                    </button>
                </div>
            </div>
        )
    }
}