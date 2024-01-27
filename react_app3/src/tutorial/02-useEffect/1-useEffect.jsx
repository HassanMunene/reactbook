import { useEffect, useState } from "react";

const Example = () => {
    const [value, setValue] = useState(0)

    const addUp = () => {
        setValue(value+1);
    }
    const sayHello = () => {
        console.log('Hello there');
    }
    sayHello();

    useEffect(() => {
        console.log('Hello from useEffect');
    }, [])
    return (
        <>
        <div className="person">
            <h1>{value}</h1>
            <button className="btn" onClick={addUp}>Add</button>
        </div>
        <h1>Heey there mate!</h1>
        </>
    )
}

export default Example;