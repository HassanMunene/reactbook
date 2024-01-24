import { data } from "../../data";
import { useState } from "react";

const People = () => {
    // const [personVisibilities, setPersonVisibility] = useState(data.map((person) => true))
    // const [peopleVisibility, setPeopleVisibility] = useState(true);
    // //console.log(personVisibility);

    // const changeDisplay = (personID) => {
    //     setPersonVisibility((prevVisibility) => prevVisibility.map((isVisible, index) => index === personID ? !isVisible: isVisible));
    // }
    // const changeAllDisplay = () => {
    //     console.log('clear all clicked')
    //     setPeopleVisibility(!peopleVisibility);
    // }

    // const dataArray = data.map((person, index) => {
    //     return (
    //         <div className="person" key={person.id} style={{ display: personVisibilities[index] ? 'block':'none'}}>
    //             <h3>{person.name}</h3>
    //             <button type="button" className="btn" onClick={() => changeDisplay(person.id)}>Remove</button>
    //         </div>
    //     )
    // })
    // return (
    //     <div className="container">
    //         <h2>useState Array Example Mate!</h2>
    //         <div>Our array will be here</div>
    //         <div className="people" style={{display: peopleVisibility ? 'block': 'none'}}>{dataArray}</div>
    //         <button className="btn" onClick={changeAllDisplay}>clear all</button>
    //     </div>
    // )
    const [people, setPeople] = useState(data);

    const removePerson = (id) => {
        console.log(id);
        const newPeople = people.filter((person) => {
            if (person.id !== id) {
                return person;
            }
        })
        setPeople(newPeople);
    }
    const clearAllPeople = () => {
        return setPeople([]);
    }
    return (
        <div className="people">
            <div>
            {people.map((person) => {
            const {id, name} = person;
            return (
                <div key={id} className="person">
                    <h2>{name}</h2>
                    <button type="button" className="btn" onClick={() => removePerson(id)}>remove</button>
                </div>
            )
            })}
            </div>
            <button type="button" className="btn" onClick={clearAllPeople}>clear All</button>
        </div>
    )
}
export default People;