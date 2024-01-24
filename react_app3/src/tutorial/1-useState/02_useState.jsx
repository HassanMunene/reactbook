import { useState } from "react";
import { data } from "../../data";

const PersonDetails = () => {
    const [people, setPerson] = useState(data)
    let num = 1;
    let newID = 1;
    let person = people.find((guy1) => guy1.id === num);
    const changePerson = (num) => {
        newID = newID + num
        //console.log(people);
        person = people.find((guy) => {
            //console.log(person.id)
            if (guy.id === newID) {
                //console.log(guy)
                return guy
            }
        })
        console.log(person)
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
                <button className="btn" onClick={() => changePerson(num)}>Show another</button>
            </div>
        </div>
    )
}
export default PersonDetails;