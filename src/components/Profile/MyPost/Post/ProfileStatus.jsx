import React from "react";
import {setStatus} from "../../../../redux/profile-reducer";

export class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditeMode = () => {
        this.setState({
          editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps,prevState) {
        if(this.props.status !== prevProps.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {


        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{!this.props.status ? "There isn't a status here" : this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditeMode} value={this.state.status}/>
                    </div>
                }
            </>
        );
    }
}