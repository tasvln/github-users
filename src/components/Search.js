import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Search(props) {
    const [username, setUsername] = useState('')

    const handleSubmit = event => {
        event.preventDefault()
        axios.get(`https://api.github.com/users/${username}`)
        .then(res => {
            console.log(res.data)
            props.onSubmit(res.data)
            setUsername('')
        })
    }

    return(
        <div className="my-8 mx-10">
            <form className="flex items-center" onSubmit={handleSubmit}>
                <input value={username} onChange={event => setUsername(event.target.value)} type='text' className="border border-gray-200 py-2 px-4 rounded-l-xl outline-none text-sm" style={{ height: '40px' }} placeholder='Search...' />
                <button type="submit" onClick={handleSubmit} className="py-2 px-4 rounded-r-xl bg-gray-900 text-sm border outline-none border-gray-200 -ml-2 text-white font-bold" style={{ height: '40px' }}>Submit</button>
            </form>
        </div>
    )
}