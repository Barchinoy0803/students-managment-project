import { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux'
import { Avatar, Card, Flex } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import Popup from '../../components/Popup/Popup';
import { setEditDeleteDialog } from '../../redux/features/students.slice';

const Home = () => {
  const state = useSelector((state: RootState) => state.students)
  const dispatch = useDispatch()

  return (
    <div className='container mx-auto grid grid-cols-4 gap-5 mt-[40px]'>
      {
        state.students.map((student) => (
          <Flex gap="middle" align="start" vertical>
            <Card className='min-w-[300px]'>
              <Card.Meta
                avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
                title={student.username}
                description={
                  <>
                    <p>First name: {student.firstname}</p>
                    <p>Last name: {student.lastname}</p>
                    <p>Age: {student.age}</p>
                    <p>Phone number: {student.phone}</p>
                  </>
                }
              />
              <div className='flex gap-3 text-[20px] justify-end mt-auto items-end'>
                <button onClick={() => dispatch(setEditDeleteDialog({ isOpen: true, type: "edit", id: student.id! }))} className='text-orange-400 cursor-pointer'><EditOutlined /></button>
                <button onClick={() => dispatch(setEditDeleteDialog({ isOpen: true, type: "delete", id: student.id! }))} className='text-red-500 cursor-pointer'><DeleteOutlined /></button>
              </div>
            </Card>
          </Flex>
        ))
      }
      <Popup />
    </div>
  )
}

export default memo(Home)