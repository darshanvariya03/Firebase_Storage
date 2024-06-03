import React, { useEffect } from 'react'
import { DELETE_USER, GET_USER } from '../Redux/action/action';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const View = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const record = useSelector(state => state.crud.users);



    useEffect(() => {
        dispatch(GET_USER());
    }, [])
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
                        record && Object.entries(record).map(([key, value]) => {
                            return (
                                <tr key={key}>
                                    <td>{key}</td>
                                    <td>{value.name}</td>
                                    <td>{value.phone}</td>
                                    <td>
                                        <button onClick={() => dispatch(DELETE_USER(key))} >Delete</button>
                                        <button onClick={() => navigate(`/edit`, { state: [key, value] })}>Edit</button>
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