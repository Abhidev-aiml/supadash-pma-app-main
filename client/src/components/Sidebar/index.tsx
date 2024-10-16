"use client";
import { useAppDispatch, useAppSelector } from '@/app/redux';
import { setIsSidebarCollapsed } from '@/app/state';
import { useGetProjectsQuery } from '@/app/state/api';
import { AlertCircle, AlertOctagon, AlertTriangle, Briefcase, ChevronDown, ChevronUp, Home, Icon, Layers3, LockIcon, LucideIcon, Search, Settings2, ShieldAlert, User, Users, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'



const Sidebar = () => {

    const [showProjects, setShowProjects] = useState(true);
    const [showPriority, setShowPriority] = useState(true);
    const {data:projects} = useGetProjectsQuery();
    const dispatch = useAppDispatch();
    const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarcollapsed);
    const sidebarClassnames = ` fixed flex flex-col h-[100%] justify-between shadow-xl transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white ${isSidebarCollapsed ? "w-0 hidden" : "w-64"}`;
  return (
   
    <div className={sidebarClassnames}>
        <div className="flex h-[100%] w-full flex-col justify-start">
            {/*Logo*/}
        <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
        <div className="text-xl font-bold text-gray-800 dark:text-white">
            SupaDash
                </div>
                {isSidebarCollapsed ? null : (
                    <button className='py-3' onClick={()=>{
                        dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
                    }}>
                        <X className='h-6 w-6 text-gray-800 hover:text-gray-500 dark:text-white'/>
                    </button>
                )}
            </div>
            {/*Team*/}
            <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700">

                <Image src='/demologo.png' alt='Logo' width={80} height={80}/>
                <div>
                    <h3 className='text-md font-bold tracking-wide dark:text-gray-200'>Team Abhi</h3>
                <div className='mt-1 flex items-start gap-2'>
                    <LockIcon className='mt-[0.1rem] h-3 w-3 text-gray-500 dark:text-gray-400'/>
                    <p className='text-sm text-gray-500'>Private</p>
                </div>
                </div>
            </div>
            {/*Links*/}
            <nav className='z-10 w-full'>

            <SidebarLink icon={Home} href='/' label='Home'/>
            <SidebarLink icon={Briefcase} href='/timline' label='Timeline'/>
            <SidebarLink icon={Search} href='/serach' label='Search'/>
            <SidebarLink icon={Settings2} href='/settings' label='Settings'/>
            <SidebarLink icon={User} href='/users' label='Users'/>
            <SidebarLink icon={Users} href='/teams' label='Teams'/>
            </nav>
            {/*Projects*/}
            <button onClick={()=> setShowProjects((prev)=> !prev)}
                className='flex items-center justify-between w-full px-8 py-3 text-gray-500'
                >
                    <span className=''>Projects</span>
                    {showProjects ? <ChevronUp className='h-5 w-5'/> : <ChevronDown className='h-5 w-5'/>}

                </button>
                {showProjects && projects?.map((project)=>(
                  <SidebarLink
                  key={project.id}
                  icon={Briefcase}
                  label={project.name}
                  href={`/projects/${project.id}`}
                  />
                ))}
                {/*Priorities*/}
                <button onClick={()=>{setShowPriority((prev)=>!prev)}}
                    className='flex items-center justify-between w-full px-8 py-3 text-gray-500'>
                    <span className=''>Priorities</span>
                    {showPriority ? <ChevronUp className='h-5 w-5'/> : <ChevronDown className='h-5 w-5'/>}
                </button>
                {showPriority && (
                    <>
                   <SidebarLink icon={AlertCircle} href='/priority/urgent' label='Urgent'/>
                   <SidebarLink icon={ShieldAlert} href='/priority/high' label='High'/>
                   <SidebarLink icon={AlertTriangle} href='/priority/medium' label='Medium'/>
                   <SidebarLink icon={AlertOctagon} href='/priority/low' label='Low'/>
                   <SidebarLink icon={Layers3} href='/priority/backlog' label='Backlog'/> 
                    </>
                )}
        </div>
    </div>
  )
}

interface SidebarlinkProps {
    icon: LucideIcon;
    href: string;
    label:string;
   // isCollapsed: boolean;
}

const SidebarLink = ({icon:Icon, href, label, isCollapsed}: SidebarlinkProps) => {
    const pathname = usePathname();
    const isActive = pathname === href || (pathname === '/' && href === '/dashboard');
    const screenWidth = window.innerWidth;

    const dispatch = useAppDispatch();
    const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarcollapsed);

    return(
        <Link href={href} className="w-full">
      <div
        className={`relative flex cursor-pointer items-center gap-3 transition-colors hover:bg-gray-100 dark:bg-black dark:hover:bg-gray-700 ${
          isActive ? "bg-gray-100 text-white dark:bg-gray-600" : ""
        } justify-start px-8 py-3`}
      >
        {isActive && (
          <div className="absolute left-0 top-0 h-[100%] w-[5px] bg-blue-200" />
        )}

        <Icon className="h-6 w-6 text-gray-800 dark:text-gray-100" />
        <span className={`font-medium text-gray-800 dark:text-gray-100`}>
          {label}
        </span>
      </div>
    </Link>

    )
} 

export default Sidebar