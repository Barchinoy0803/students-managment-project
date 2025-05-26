import {memo} from 'react'
import { useRoutes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Home/Home'
import CreateStudent from './CreateStudent/CreateStudent'

const MainRouter = () => {
  return (
    useRoutes([
        {
            path: '/', element: <Layout/>,
            children: [
                {
                    path: '/', element: <Home/>
                },
                {
                    path: 'createStudents', element: <CreateStudent/>
                }
            ]
        }
    ])
  )
}

export default memo(MainRouter)