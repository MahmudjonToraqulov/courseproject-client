import React, { useEffect, useState } from 'react'
import axios from 'axios'

function UserMAnagement() {
    const [ users, setUsers ] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/api/test/all-users').
        then((res) => {
            const allUsers = res.data
            setUsers(allUsers)
        })
        .catch((err) => {
            console.log('err ->' , err);
        })
    }, [])

    console.log('users -> ', users);
    
  return (
    <div>
        <table style={{ "width": '95%', margin: '5px auto' }}>
            <thead>
                <tr>
                    <th style={{ "textAlign": "center", "padding": "5px", "border": "1px solid black" }}> id </th>
                    <th style={{ "textAlign": "center", "padding": "5px", "border": "1px solid black" }}> username </th>
                    <th style={{ "textAlign": "center", "padding": "5px", "border": "1px solid black" }}> email </th>
                    <th style={{ "textAlign": "center", "padding": "5px", "border": "1px solid black" }}> password </th>
                    <th style={{ "textAlign": "center", "padding": "5px", "border": "1px solid black" }}> role </th>
                    <th style={{ "textAlign": "center", "padding": "5px", "border": "1px solid black" }}> status </th>
                    <th style={{ "textAlign": "center", "padding": "5px", "border": "1px solid black" }}> assign user roles </th>
                    <th style={{ "textAlign": "center", "padding": "5px", "border": "1px solid black" }}> manage user </th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user) => {
                        return <tr key={user.id}>
                            <td style={{ "textAlign": "center", "padding": "5px", "border": "1px solid black" }}> { user.id } </td>
                            <td style={{ "textAlign": "center", "padding": "5px", "border": "1px solid black" }}> { user.username } </td>
                            <td style={{ "textAlign": "center", "padding": "5px", "border": "1px solid black" }}> { user.email } </td>
                            <td style={{ "textAlign": "center", "padding": "5px", "border": "1px solid black" }}> { user.password } </td>
                            <td style={{ "textAlign": "center", "padding": "5px", "border": "1px solid black" }}> { 
                                user.roles.map((role) => {
                                    return <td key={user.id} style={{ "textAlign": "center", "padding": "5px", "border": "1px solid black" }}> { role.name } </td>
                                })
                            } </td>
                            <td style={{ "textAlign": "center", "padding": "5px", "border": "1px solid black" }}> 
                                { user.isBlocked ? <span style={{ color: 'red', fontWeight: 'bold' }}> Blocked </span> : <span style={{ color: 'green', fontWeight: 'bold' }}> Not Blocked </span> }    
                            </td>
                            <td style={{ "textAlign": "center", "padding": "5px", "border": "1px solid black" }}>
                                <select name="" id="" style={{ textAlign: "center", "padding": "3px 6px", "border": "1px solid black"}}>
                                    <option value="user"> user </option>
                                </select>
                            </td>
                            <td  style={{ "textAlign": "center", "padding": "5px", "border": "1px solid black" }}>
                                <button style={{ "textAlign": "center", "padding": "5px", "border": "1px solid black", background: 'green', color: 'white' , margin: '5px' }}> View </button>
                                <button style={{ "textAlign": "center", "padding": "5px", "border": "1px solid black", background: 'red', color: 'white' , margin: '5px' }}> Block </button>
                                <button style={{ "textAlign": "center", "padding": "5px", "border": "1px solid black", background: 'blue', color: 'white' , margin: '5px' }}> Unblock </button>
                                <button style={{ "textAlign": "center", "padding": "5px", "border": "1px solid black", background: 'red', color: 'white' , margin: '5px' }}> Delete </button>
                                <button style={{ "textAlign": "center", "padding": "5px", "border": "1px solid black", background: 'green', color: 'white' , margin: '5px' }}> Add the user to admins </button>
                                <button style={{ "textAlign": "center", "padding": "5px", "border": "1px solid black", background: 'crimson', color: 'white' , margin: '5px' }}> Remove the user from admins </button>
                            </td>
                        </tr>
                    })
                    
                }
            </tbody>
        </table>
    </div>
  )
}

export default UserMAnagement
