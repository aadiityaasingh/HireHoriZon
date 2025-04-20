import React, { useState } from 'react'
import Navbar from './Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import ApplyJobTable from './AppliedJobTable'
import UpdateProfileDialog from './UpdateProfileDialog'
import { useSelector } from 'react-redux'
import useGetAppliedJobs from '@/hooks/useGetAppliedJobs'

// const skills = ["HTML","CSS", "JavaScript", "Reactjs",]
const isHaveResume = true;

const Profile = () => {
  useGetAppliedJobs();
const[open, setOpen] = useState(false);
const {user} = useSelector(store=>store.auth);
 
  return (
    <div>
      <Navbar/>
      <div className='max-w-7xl mx-auto bg-white
       border border-gray-500 rounded-2xl my-5
        p-8
        '>
          <div className='flex items-center gap-4'>
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://i.pinimg.com/736x/cd/77/e0/cd77e04d9fe1a4ac66a26693d05e02c4.jpg"/>
            </Avatar>
            <div>
              <h1 className='font-medium'>{user?.fullname}</h1>
              <p>{user?.profile?.bio}</p>
            </div>
          </div>
          <Button onClick={()=> setOpen(true)} className="text-right" variant="outline"><Pen/></Button>
        
        <div className='my-5'>
          <div className='flex items-center gap-3 my-2'>
            <Mail/>
            <span>{user?.email}</span>
          </div>
          <div className='flex items-center gap-3 my-2'>
            <Contact/>
            <span>{user?.phoneNumber}</span>
          </div>
        </div>
        <div>
          <h1>Skills</h1>
          <div className='flex items-center gap-2'>

          {
            user?.profile?.skills.length!==0 ? user?.profile?.skills.map((item, index)=> <Badge key={index}>{item}</Badge>) : <span>NA</span>
          }
          </div>
        </div>
        <div className='grid w-full max-w-sm items-center gap-2'>
          <Label className="text-md font-bold">Resume</Label>
          {
            isHaveResume ? <a target="_blank" 
            rel="noopener noreferrer" 
            href={`/pdf/${user?.pdf}`} className='text-blue-400 w-full hover:underline cursor-pointer'>{user?.profile?.resumeOriginalName}</a> : <span>Nhi hai</span>
          }
        </div>
        </div>
        <div className='max-w-4xl mx-auto bg-white rounded-2xl'>  
          <h1>Applied Jobs</h1>
          <ApplyJobTable/>
        </div>
        <UpdateProfileDialog open={open} setOpen ={setOpen}/>
    </div>
  )
}

export default Profile
