import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
		<div className='grid h-screen px-4 bg-black place-content-center'>
			<div className='text-center'>
				<h1 className='font-black text-gray-200 text-9xl'>404</h1>
				<p className='text-2xl font-bold tracking-tight text-gray-300 sm:text-4xl'>
					Uh-oh!
				</p>
				<p className='mt-4 text-gray-200'>We can't find that page.</p>
				<Link to='/'
					
					className='inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring'
				>
					Go Back Home
				</Link>
			</div>
		</div>
  );
}

export default NotFound