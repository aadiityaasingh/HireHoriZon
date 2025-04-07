import React from 'react'
import { Badge } from './ui/badge'

const LatestJobCards = ({job}) => {
  return (
    <div className='p-7 m-8 rounded-md shadow-xl bg-gray-100 border border-blue-300 cursor-pointer  hover:shadow-2xl'>
      <div>
        <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
        <p className='text-sm text-gray-500'>India</p>  

      </div>
      <div>
        <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
        <p className='text-sm text-gray-600'>{job?.description }
        </p>
      </div>
      <div className='flex items-center gap-2 mt-4'>
        <Badge className="text-blue-500 font-bold" variant="ghost">{job?.position}Positions</Badge>
        <Badge className="text-red-500 font-bold" variant="ghost">{job?.jobType}</Badge>
        <Badge className="text-violet-500 font-bold" variant="ghost">{job?.salary}LPA</Badge>
      </div>
    </div>
  )
}

export default LatestJobCards
