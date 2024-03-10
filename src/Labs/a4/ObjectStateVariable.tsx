import React, { useState} from "react";
function ObjectStateVariable() {
    const [person, setPerson] = useState( {name: "Peter", age: 24})
    return (
        <div>
            <h2>Object State Variables</h2>
            <pre>{JSON.stringify(person, null, 2)}</pre>
            <input
            className="form-control"
            type="text"
            value = {person.name}
            onChange = {e => setPerson({...person, name: e.target.value})}
            />
            <input
            className="form-control"
            type="text"
            value = {person.age}
            onChange = {e => setPerson({...person, age: parseInt(e.target.value)})}
            />
        </div>
    );
}
export default ObjectStateVariable;