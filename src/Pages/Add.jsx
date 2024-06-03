import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ADD_USER } from '../Redux/action/action';
import { useNavigate } from 'react-router-dom';

const Add = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    let id = Math.floor(Math.random() * 1000)

    const handelsubmit = (e) =>{
        e.preventDefault();
        
        let obj = {
            userid : id,
            name : name,
            phone : phone
        }
        dispatch(ADD_USER(obj));
        alert("Added")
        navigate('/view')
    }

    return (
        <div>
            <h2 align="center">Add User</h2>
            <form align="center" onSubmit={handelsubmit} >
                <table align="center" border={1}>
                    <tr>
                        <td>Name</td>
                        <td><input type="text" onChange={(e) => setName(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td><input type="text" onChange={(e) => setPhone(e.target.value)} /></td>
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

export default Add