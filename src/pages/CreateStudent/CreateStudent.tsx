import { memo } from 'react'
import { FormProps, Form } from 'antd';
import { useDispatch } from 'react-redux';
import { createStudent } from '../../redux/features/students.slice';
import { FieldType } from '../../types';
import FormData from "../../components/Form/Form"

const CreateStudent = () => {
    const dispatch = useDispatch()
    const [form] = Form.useForm()

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        const newStudent = { ...values, id: new Date().getTime() }
        dispatch(createStudent(newStudent))
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    
    return (
        <div className='flex flex-col justify-center items-center w-full'>
            <FormData form={form} onFinish={onFinish} onFinishFailed={onFinishFailed} />
        </div>
    )
}

export default memo(CreateStudent)