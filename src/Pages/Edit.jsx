import React, { useEffect, useState } from 'react'
import { getDatabase, set } from 'firebase/database'
import { app } from '../firebase'
import { useDispatch } from 'react-redux'
import { EDIT_USER } from '../Redux/action/action'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'

const Edit = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [editid,setEditid] = useState("")
    const [name,setName] = useState("")
    const [phone,setPhone] = useState("")

    const handelsubmit = (e)=>{
        e.preventDefault()
        const obj = {
            id  : editid,
            name : name,
            phone : phone
        }
        // dispatch(EDIT_USER(obj))
        alert('Updated')
        navigate('/view');

    }

    useEffect(()=>{
        setEditid(location.state[0]);
        setName(location.state[1].name)
        setPhone(location.state[1].phone)
    },[])

    return (
        <div>
            <h2 align="center">Edit User</h2>
            <form align="center" onSubmit={handelsubmit} >
                <table align="center" border={1}>
                    <tr>
                        <td>Name</td>
                        <td><input type="text" onChange={(e) => setName(e.target.value)} value={name}/></td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td><input type="text" onChange={(e) => setPhone(e.target.value)} value={phone}/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="submit" /></td>
                    </tr>
                </table>
            </form> 
        </div>
    )
}

export default Edit