import React, { useEffect, useState } from 'react'
import { DELETE_USER, GET_USER } from '../Redux/action/action';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const View = () => {
    const navigate = useNavigate();
    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(GET_USER())
    },[])

    const alluser = useSelector(state => state.crud.users); 

    return (
        <div>
            <h2 align="center">View User</h2>
            <Link align="center" to={`/`}>
                <h4 align="center">ADD</h4>
            </Link>
            <table align="center" border={1}>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Phone</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        [].map((val) => {
                            return (
                                <tr key={val.id}>
                                    <td>{val.id}</td>
                                    <td>{val.name}</td>
                                    <td>{val.phone}</td>
                                    <td>
                                        <button onClick={() => dispatch(DELETE_USER(val.id))} >Delete</button>
                                        <button onClick={() => navigate(`/edit`, { state: val })}>Edit</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default View