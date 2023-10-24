import React from 'react'
import Input from '../common-ui/Input'

export default function SearchFilter({searchContent,setSearchContent}) {
  return (
    <div className='py-1.5 bg-sl/400'>
      SearchFilter .......  
       <Input
        type={"text"}
        value={searchContent}
        style="border"
        onChange={(e) => setSearchContent(e.target.value)}
      />
    </div>
  )
}
