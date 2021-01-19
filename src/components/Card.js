import React from 'react'

export default function Card(props) {
    return(
        <div className="mx-10 my-16">
            <div className="grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 grid gap-4">
                <div className="border border-gray-200 p-4 rounded-xl flex items-center">
                    <img className="rounded-lg" src={props.avatar_url} style={{ width: '50px', height: '50px' }} alt='' />
                    <div className="mx-4">
                        <p className="text-md font-bold">{props.name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}