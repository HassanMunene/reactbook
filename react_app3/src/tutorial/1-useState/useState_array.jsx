import { data } from "../../data";

const People = () => {
    const dataArray = data.map((person) => {
        return (
            <div className="person">
                <h3>{person.name}</h3>
                <button type="button" className="btn">Remove</button>
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