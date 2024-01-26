import { useEffect, useState } from "react";

const Example2 = () => {
    const [value, setValue] = useState(0);
    const [value2, setValue2] = useState(0);

    const addUp = () => {
        setValue(value + 1);
    }
    useEffect (() => {
        console.log('Hello from the first useState')
    }, [value])
    useEffect (() => {
        console.log('Hello from the secon useState')
    }, [value2])
    return (
        <>
        <div className="person">
            <h1>{value}</h1>
            <button className="btn" onClick={addUp}>Add up</button>
        </div>
        <div className="person">
            <h1>{value2}</h1>
            <button className="btn" onClick={() => setValue2(value2 + 1)}>addUp2</button>
        </div>
        </>
    )
}
export default Example2;