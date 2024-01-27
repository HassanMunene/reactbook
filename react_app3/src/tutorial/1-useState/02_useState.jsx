import { useState } from "react";
import { data } from "../../data";

const PersonDetails = () => {
    let ID = 1;
    let [person, setPerson] = useState(data.find((person) => person.id === ID))
    let newID = person.id + 1;
    //const [nextPerson, setNextPerson] = useState(data.find((person) => person.id === newID))
    //console.log(nextPerson.id, newID)
    const changePerson = (index) => {        
        //console.log(people);
        person = data.find((guy) => {
            //console.log(person.id)
            if (guy.id === newID) {
                //console.log(guy)
                return guy
            }
        })
        if (person === undefined) {
            person = data.find((guy) => guy.id === 1);
            setPerson(person);
        }
        setPerson(person)
        //console.log(person)
    }
    return (
        <div className="container">
            <h2>useState object example2</h2>
            <div className="person">
                <div><h3 className="name">Name: {person.name}</h3></div>
                <div><h3 className="name">Age: {person.age}</h3></div>
                <div><h3 className="name">Hobby: {person.hobby}</h3></div>
            </div>
            <div>
                <button className="btn" onClick={() => changePerson(newID)}>Show next person</button>
            </div>
        </div>
    )
}
export default PersonDetails;