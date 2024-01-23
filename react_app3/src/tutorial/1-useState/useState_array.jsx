import { data } from "../../data";
import { useState } from "react";

const People = () => {
    const [personVisibilities, setPersonVisibility] = useState(data.map((person) => true))
    //console.log(personVisibility);

    const changeDisplay = (personID) => {
        setPersonVisibility((prevVisibility) => prevVisibility.map((isVisible, index) => index === personID ? !isVisible: isVisible));
    }

    const dataArray = data.map((person, index) => {
        return (
            <div className="person" key={person.id} style={{ display: personVisibilities[index] ? 'block':'none'}}>
                <h3>{person.name}</h3>
                <button type="button" className="btn" onClick={() => changeDisplay(person.id)}>Remove</button>
            </div>
        )
    })
    return (
        <div className="container">
            <h2>useState Array Example Mate!</h2>
            <div>Our array will be here</div>
            <div className="people">{dataArray}</div>
        </div>
    )
}
export default People;