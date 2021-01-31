import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import axios from 'axios'
export default () => {
    const [pet, setPet] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/')
            .then(res => {
                setPet(res.data);
                setLoaded(true);
            });
    }, [])
    return (
        <div>
            <h2>Pet Shelter</h2>
            <p>These pets are looking for a good home</p>
            <Link to={"/pets/new"}>
                add a pet to the shelter
            </Link>
            <table style={{margin:'auto'}}>
                <thead >
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {pet.map((pet, index) => {
                        return <tr key={index}>
                            <td>{pet.name}</td>
                            <td>{pet.type}</td>
                            <td>
                                <Link to={"/pets/" + pet._id}>
                                    details
                                </Link>
                                |
                                <Link to={"/pets/" + pet._id+'/edit'}>
                                    edit
                                </Link>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
