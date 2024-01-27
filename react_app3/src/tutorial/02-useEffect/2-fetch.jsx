import { useEffect, useState } from "react";

const Example3 = () => {
    const [data, setData] = useState([]);

    useEffect (() => {
        console.log(data);
        const getUsers = async () => {
            try {
                const response = await fetch("https://api.github.com/users?per_page=15");
                const jsonData = await response.json();
                //console.log(typeof(jsonData), jsonData);
                setData(jsonData);
            } catch (error) {
                console.log('Error fetching the data', error);
            }
        }
        getUsers();
        console.log(data);
    }, [])
    return (
        <div className="container">
            <div><h1>Fetch Data Example Github</h1></div>
            {data.map((user) => {
                //console.log(user);
                return (
                    <div className="person" key={user.id}>
                        <div className="flex_container">
                            <div className="img_container">
                                <img src={user.avatar_url} alt="user photo" />
                            </div>
                            <div className="profile_info">
                                <div>{user.login}</div>
                                <div>profile</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Example3;