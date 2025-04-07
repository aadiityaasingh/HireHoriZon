import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import { useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { useDispatch } from 'react-redux'
import AdminJobsTable from './AdminJobsTable'
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs'
import { setSearchJobByText } from '@/redux/jobSlice'

const AdminJobs = () => {
  useGetAllAdminJobs();
  const [input, setInput] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchJobByText(input));
  },[input]);
  return (
    <div>
      <Navbar/>
      <div className='max-w-6xl mx-auto my-10'>
        <div className='flex items-center justify-between my-5'>
          <input className='w-fit rounded-md p-1 hover:border-2' placeholder='FIlter by name, role' onChange={(e) => setInput(e.target.value)} />
          <Button className= "bg-blue-300 hover:bg-blue-400 cursor-pointer" onClick={()=> navigate("/admin/jobs/create")}>New Jobs</Button>

        </div>
        <AdminJobsTable/>

      </div>
    </div>
  )
}

export default AdminJobs
