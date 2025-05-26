import { memo, useEffect, useState } from 'react'
import { FormProps, Modal, Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { deleteStudent, editStudent, setEditDeleteDialog } from '../../redux/features/students.slice';
import FormData from "../../components/Form/Form"
import { FieldType } from '../../types';


const Popup = () => {
    const state = useSelector((state: RootState) => state.students)

    const [form] = Form.useForm();

    const { editDeleteDialog: { isOpen, type, id } } = useSelector((state: RootState) => state.students)
    const dispatch = useDispatch()

    const [data, setData] = useState<FieldType | undefined>(undefined)

    useEffect(() => {
        const student = state.students.find(student => student.id === id)
        if (student) {
            setData(student)
        }
    }, [id])

    const handleSubmit = () => {
        if (type === 'delete') {
            dispatch(deleteStudent(id!))
        } else {
            form.submit()
        }
        dispatch(setEditDeleteDialog({ isOpen: false, type: "edit", id: null }))
    }


    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        if (type === 'edit') {
            const student = { ...values, id }
            dispatch(editStudent(student))
        }

    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Modal
                className='min-w-[700px] w-full'
                title={type === "edit" ? <p>Update student</p> : <p>Delete student</p>}
                open={isOpen}
                onOk={handleSubmit}
                onCancel={() => dispatch(setEditDeleteDialog({ isOpen: false, type: "edit", id: null }))}
            >
                {
                    type === "delete" ? <p>Are you sure?</p>
                        :
                        <FormData form={form} isEditMode data={data} onFinish={onFinish} onFinishFailed={onFinishFailed} />
                }
            </Modal>
        </>
    )
}

export default memo(Popup)