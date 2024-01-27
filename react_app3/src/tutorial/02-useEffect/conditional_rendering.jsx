import { useState } from "react";
import { useEffect } from "react";

const Example4 = () => {
    const url = "https://api.github.com/users/QuincyLarson";
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() =>{
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                //console.log(response.json());
                if (!response.ok) {
                    setIsError(true);
                    setIsLoading(false);
                    return;
                }
                const user = await response.json();
                setUser(user);
            } catch (error) {
                setIsError(true)
                console.log("Error occurred while fetching the data!", error);
            }
            setIsLoading(false);
        }
        fetchData();
    }, [])
    if (isLoading) {
        return (
            <div className="container">
                <h2 style={{textAlign: "center"}}>Loading...</h2>
            </div>
        )
    }
    if (isError) {
        return (
            <div className="container">
                <h2 style={{textAlign: "center"}}>There was an error fetching the user</h2>
            </div>
        )
    }
    return (
        <div className="container">
            <h2>Fetching</h2>
            <div className="person">
                <div className="img_container">
                    <img src={user.avatar_url} alt="profile_photo" />
                </div>
                <div>{user.login}</div>
            </div>
        </div>
    )
}
export default Example4;