import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import CompaniesTable from './CompaniesTable'
import { useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import useGetAllCompanies from '@/hooks/useGetAllCompanies'
import { useDispatch } from 'react-redux'
import { setSearchCompanyByText } from '@/redux/companySlice'

const Companies = () => {
  useGetAllCompanies();
  const [input, setInput] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchCompanyByText(input));

  },[input]);
  return (
    <div>
      <Navbar/>
      <div className='max-w-6xl mx-auto my-10'>
        <div className='flex items-center justify-between my-5'>
          <input className='w-fit rounded-md p-1 hover:border-2' placeholder='FIlter by name' onChange={(e) => setInput(e.target.value)} />
          <Button className= "bg-blue-300 hover:bg-blue-400 cursor-pointer" onClick={()=> navigate("/admin/companies/create")}>New Company</Button>

        </div>
        <CompaniesTable/>

      </div>
    </div>
  )
}

export default Companies
