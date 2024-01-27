import { useState } from "react";

const Gotcha = () => {
    const [num, setNum] = useState(0);

    const counter = () => {
        setNum((prevState) => {
            const newState = prevState + 1
            return newState
        })
    }
    return (
        <div className="container">
            <h1 style={{textAlign: 'center'}}>gotchaaaa!!</h1>
            <div style={{textAlign: "center", fontSize: "1.5rem"}}>{num}</div>
            <button className="btn" onClick={counter}>counter</button>
        </div>
    )
}
export default Gotcha;