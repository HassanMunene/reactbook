import { useState } from "react";
import { data } from "../../data";

const PersonDetails = () => {
    const [people, setPerson] = useState(data)
    const person = people.find((person) => person.id === 1);
    console.log(typeof(person))
    return (
        <div className="container">
            <h2>useState object example2</h2>
            <div className="person">
                <div><h3 className="name">Name: {person.name}</h3></div>
                <div><h3 className="name">Age: {person.age}</h3></div>
                <div><h3 className="name">Hobby: {person.hobby}</h3></div>
            </div>
            <div>
                <button className="btn">Show another</button>
            </div>
        </div>
    )
}
export default PersonDetails;