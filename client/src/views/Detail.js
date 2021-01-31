import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

export default props => {
    const [pet, setPet] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/pets/" + props.id)
            .then(res => {
                console.log(res.data)
                setPet(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    const deletePet = (petId) => {
        axios.delete('http://localhost:8000/pets/' + petId)
            .then(res => {
                navigate('/');
            })
    }
    return (
        <div>
            <h2>Pet Shelter</h2>
            <Link to={"/"}>
            back to home
            </Link>
            <p>
            Details about: {pet.name}          
            <button onClick={(e) => { deletePet(pet._id) }}>
                Adopt {pet.name}
            </button>
            </p>
            <p><h3>Pet type</h3> {pet.type}</p>
            <p><h3>Description</h3> {pet.desc}</p>
            <h3>Skills</h3>
            <p>{pet.skill1}</p> 
            <p>{pet.skill2}</p>
            <p>{pet.skill3}</p>
        </div>
    )
}
