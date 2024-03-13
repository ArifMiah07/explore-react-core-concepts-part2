import { useEffect, useState } from "react"

export default function Users(){
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data));
    }, [])

    const UserStyle = {
        border: '2px solid purple',
        borderRadius: '20px',
        margin: '20px',
        padding: '20px'
    }

    return (
        <div style={UserStyle}>
            <h3>Users: {users.length}</h3>
            {/* <h3></h3> */}
        </div>
    )
}

/**
 * 1. declare a state to hold the data
 * 2. useEffect with call bak and dependency array
 * 3. use fetch to load data
 */