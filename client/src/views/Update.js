import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate, Link } from '@reach/router';
export default props => {
    const { id } = props;
    const [errors, setErrors] = useState([])
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [desc, setDesc] = useState('');
    const [skill1, setSkill1] = useState("")
    const [skill2, setSkill2] = useState("")
    const [skill3, setSkill3] = useState("")
    useEffect(() => {
        axios.get('http://localhost:8000/pets/' + id)
            .then(res => {
                setName(res.data.name);
                setType(res.data.type);
                setDesc(res.data.desc);
                setSkill1(res.data.skill1)
                setSkill2(res.data.skill2)
                setSkill3(res.data.skill3)
            })
    }, [])
    const updatePet = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/' + id + '/edit', {
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
        <div>
            <h1>Pet Shelter</h1>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <Link to={"/"}>
            back to home
            </Link>
            <p>Edit {name}</p>
            <form onSubmit={updatePet}>
                <p>
                    <label>Pet Name</label><br />
                    <input type="text"
                        name="name"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }} />
                </p>
                <p>
                    <label>Pet Type</label><br />
                    <input type="text"
                        name="type"
                        value={type}
                        onChange={(e) => { setType(e.target.value) }} />
                </p>
                <p>
                    <label>Pet Description</label><br />
                    <input type="text"
                        name="desc"
                        value={desc}
                        onChange={(e) => { setDesc(e.target.value) }} />
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
                <input type="submit" value="Edit Pet"/>
            </form>
        </div>
    )
}
