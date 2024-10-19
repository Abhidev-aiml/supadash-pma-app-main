

import Header from '@/components/Header'
import React from 'react'



const Settings = () => {
    const userSettings = {
        username: 'Abhi',
        email: 'abhishekyadav@gmail.com',
        teamName: 'Team Abhi',
        role: "Full Stack Developer",
    }
    const labelledStyles = "text-2xl text-black font-bold px-1 py-5 dark:text-white"
    const inputStyles = "w-full px-5 py-5 border-2 border-gray-200 rounded-md bg-gray-100 text-lg font-semibold dark:bg-gray-800 dark:text-white"
  return (
    
<div className='px-4 py-4 mt-4 mb-4'>
    <Header name='Settings' />
    <div className='flex flex-col py-10 px-10 gap-10'>
    <div>
        <label className={labelledStyles}>Username</label>
        <div className={inputStyles}>{userSettings.username}</div>
    </div>
    <div>
        <label className={labelledStyles}>Email</label>
        <div className={inputStyles}>{userSettings.email}</div>
    </div>
    <div>
        <label className={labelledStyles}>TeamName</label>
        <div className={inputStyles}>{userSettings.teamName}</div>
    </div>
    <div>
        <label className={labelledStyles}>Role</label>
        <div className={inputStyles}>{userSettings.role}</div>
    </div>
    </div>
</div>


  )
}

export default Settings