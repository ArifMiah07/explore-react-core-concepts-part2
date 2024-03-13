import { useEffect, useState } from 'react'
import './Friends.css'
import Friend from './Friend'
export default function Friends(){
    const [friends, setFriends] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    }, [])
    return (
        <div className="box">
            <h3>Friends: {friends.length} </h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
                /**
                 * echo "# explore-react-core-concepts-part2" >> README.md
                    git init
                    git add README.md
                    git commit -m "first commit"
                    git branch -M main
                    git remote add origin https://github.com/ArifMiah07/explore-react-core-concepts-part2.git
                    git push -u origin main
                 */
                /**
                 * git config --global user.name "ArifMiah07"
                git config --global user.email "arifmiah.me322@gmail.com"
                 */
            }
        </div>
    )
}