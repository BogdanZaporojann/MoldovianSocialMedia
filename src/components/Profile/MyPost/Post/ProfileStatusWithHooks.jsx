import React, {useEffect, useState} from "react";


export const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])

    const activeEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditeMode = () => {
        setEditMode(false);
        props.updateUserStatus(status)
    }



    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }
        return (
            <>
                {!editMode &&
                    <div>
                        <span onDoubleClick={activeEditMode}>{props.status}</span>
                    </div>}
                {editMode &&
                    <div>
                        <input onChange={onStatusChange} type="text" autoFocus={true} onBlur={deactivateEditeMode} value={status}/>
                    </div>}
            </>
        );
}
