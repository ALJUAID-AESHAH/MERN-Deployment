import React, { useState } from 'react'
import axios from 'axios';
import { navigate, Link } from '@reach/router';
export default () => {
    const [errors, setErrors] = useState([])
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [desc, setDesc] = useState("");
    const [skill1, setSkill1] = useState("")
    const [skill2, setSkill2] = useState("")
    const [skill3, setSkill3] = useState("")
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/pets/new', {
            name,
            type,
            desc,
            skill1,
            skill2,
            skill3
        })
            .then((res) => {
                console.log(res.data)
                navigate("/")
            })
            .catch((err) => {
                const errorResponse = err.response.data.errors 
                const errorArr = [] 
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr)
            })
    }
    return (
        <>
            <h2> Pet Shelter </h2>
            <Link to={"/"}>
                back to home
        </Link>
            <p>Know a pet needing a home?</p>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Pet Name</label><br />
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                </p>
                <p>
                    <label>Pet Type</label><br />
                    <input type="text" onChange={(e) => setType(e.target.value)} value={type} />
                </p>
                <p>
                    <label>Pet Description</label><br />
                    <input type="text" onChange={(e) => setDesc(e.target.value)} value={desc} />
                </p>
                <p>Skills (optional)</p>
                <p>
                    <label>skill 1</label><br />
                    <input type="text" onChange={(e) => setSkill1(e.target.value)} value={skill1} />
                </p>
                <p>
                    <label>skill 2</label><br />
                    <input type="text" onChange={(e) => setSkill2(e.target.value)} value={skill2} />
                </p>
                <p>
                    <label>skill 3</label><br />
                    <input type="text" onChange={(e) => setSkill3(e.target.value)} value={skill3} />
                </p>
                <input type="submit" value="Add Pet" />
            </form>
        </>
    )
}
