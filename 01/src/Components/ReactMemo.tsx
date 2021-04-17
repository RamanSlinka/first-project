import React, {useState} from "react";


const MessageCounter = (props: { count: number }) => {
       return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('users')
    return <div>{
        props.users.map((u, i) => <div key={i}> {u}</div>)
    }</div>
}


const Users = React.memo(UsersSecret)
const NewMessageCounter = React.memo(MessageCounter)

const ReactMemo = () => {
    console.log('ReactMemo component')
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Raman', 'Anna', 'Sofik', 'Robert']);

    const addUser = () => {
        const newUsers = [...users, 'Our family ' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <h3>React.memo</h3>
        <button onClick={() => setCounter(counter + 1)}> +</button>
        <span> Counter</span>
        <NewMessageCounter count={counter}/>
        <button onClick={addUser}> add user</button>
        <Users users={users}/>
    </>
}
export default ReactMemo






