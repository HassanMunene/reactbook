import { useState } from "react";


const ErrorExample = () => {
    const [count, increaseCount] = useState(0);

    const handleClick = () => {
        increaseCount(count + 1);
        console.log(count)
    }
    return (
        <>
            <h1>{count}</h1>
            <button type="button" onClick={handleClick}>Counter</button>
        </>
    )
}
export default ErrorExample;
