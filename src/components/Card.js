import React from 'react'

export default function Card(props) {
    return(
        <div className="mx-10 my-8">
            <div className="border border-gray-200 p-4 rounded-xl flex items-center">
                <img className="rounded-lg" src={props.avatar_url} style={{ width: '50px', height: '50px' }} alt='image' />
                <div className="mx-4">
                    <p className="text-md font-bold">{props.name}</p>
                </div>
            </div>
        </div>
    )
}