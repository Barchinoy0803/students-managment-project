import { memo } from 'react'
import { PiStudentFill } from "react-icons/pi";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='text-[20px] bg-[#1677ff] text-white'>
            <nav className='container mx-auto flex justify-between p-5'>
                <div className='flex'>
                    <NavLink className='flex items-center gap-3' to={'/'}>
                        <PiStudentFill className='text-[24px] text-gray-200'/>
                        <span>Students</span>
                    </NavLink>
                </div>
                <div className='flex gap-4'>
                    <NavLink to={'/'}>
                        <span>Home</span>
                    </NavLink>
                    <NavLink to={'createStudents'}>
                        <span>Create-students</span>
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}

export default memo(Header)