import React, {useState, useEffect} from "react";
import withMainLayout from "../layout/withMainLayout";
import axios from "axios";
import Table from "../components/Table";

function Users() {
    const  [users, setUsers ] = useState([]);
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setUsers(response.data
                    .map(i => [i.id, i.name, i.username, i.email]
                    ));
            })
    }, []);

    return(
        <>
            <h1>Users</h1>
            <Table
                columns={["Id", "Name", "Username", "Email"]}
                values={users}
            />
        </>
    );
}

export default  withMainLayout(Users);