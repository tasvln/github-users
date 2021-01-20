import React from 'react'

export default function Card(props) {
    return(
        <div className="mx-10 my-8">
            <div className="border border-gray-200 p-5 max-w-lg rounded-xl">
                <div className="flex">
                    <img className="rounded-lg" src={props.avatar_url} style={{ width: '100px', height: '100px' }} alt='image' />
                </div>
                <div className="mt-6 flex">
                    <div className="">
                        <span className="py-1 px-3 bg-purple-50 text-purple-600 font-semibold rounded-full" style={{ fontSize: '11px' }}>Followers: {props.followers}</span>
                    </div>
                    <div className="ml-2">
                        <span className="py-1 px-3 bg-green-50 text-green-600 font-semibold rounded-full" style={{ fontSize: '11px' }}>Repos: {props.public_repos}</span>
                    </div>
                </div>
                <div className="mt-6 flex">
                    <div>
                        <span className="py-1 px-4 bg-gray-100 text-gray-600 rounded-full font-semibold" style={{ fontSize: '11px' }}>Name</span>
                        <p className="text-sm text-gray-800 font-bold mt-2 ">{props.name}</p>
                    </div>
                    <div className="ml-auto">
                        <span className="py-1 px-4 bg-gray-100 text-gray-600 rounded-full font-semibold" style={{ fontSize: '11px' }}>Username</span>
                        <p className="text-sm text-right text-gray-800 font-bold mt-2">{props.login}</p>
                    </div>
                </div>
                <div className="mt-6">
                    <span className="py-1 px-4 bg-gray-100 text-gray-600 rounded-full font-semibold" style={{ fontSize: '11px' }}>Github Url</span>
                    <div className="mt-2">
                        <a href={props.html_url} className="text-sm text-gray-800 font-bold">{props.html_url}</a>
                    </div>
                </div>
                <div className="mt-6">
                    <span className="py-1 px-4 bg-gray-100 text-gray-600 rounded-full font-semibold" style={{ fontSize: '9px' }}>Updated At</span>
                    <div className="mt-2">
                        <p className="text-gray-500 font-semibold" style={{ fontSize: '10px' }}>{props.updated_at}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}