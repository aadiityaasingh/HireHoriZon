import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'

const filterData =[
    {
        filterType: "Location",
        array:["Delhi", "Gurgaon", "Chennai", "Mumbai"]
    },
    {
        filterType: "Industry",
        array:["Frontend Developer", "Backend Developer", "Graphic Designer", "FullStack Developer"]
    },
    {
        filterType: "salary",
        array:["0-45k", "50-1lakh", "1lakh-5lakh"]
    },
    
]
const FilterCard = () => {
  return (
    <div className='w-full bg-white p-3 rounded-md'>
      <h1 className='font-bold text-lg'>Filter Jobs</h1>
      <hr className='mt-3'/>
      <RadioGroup>
        {
            filterData.map((data, index)=> (
                <div>
                    <h1 className='font-bold text-lg'>{data.filterType}</h1>
                    {
                        data.array.map((item, index)=>{
                            return (
                                <div>
                                    <RadioGroupItem value={item}/>
                                    <Label>{item}</Label>
                                    </div>
                            )
                        })
                    }
                </div>
            ))
        }
      </RadioGroup>
    </div>
  )
}

export default FilterCard
