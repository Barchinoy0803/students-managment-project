import { memo, useEffect } from 'react'
import { Button, Form, Input } from 'antd';
import { FieldType } from "../../types/index"
import type { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import type { FormInstance } from 'antd';

interface Props {
    onFinishFailed: ((errorInfo: ValidateErrorEntity<FieldType>) => void);
    onFinish: (values: FieldType) => void;
    data?: FieldType;
    isEditMode?: boolean;
    form: FormInstance<FieldType>
}

const FormData: React.FC<Props> = ({ onFinishFailed, onFinish, data, isEditMode , form }) => {

    useEffect(() => {
        if (data) {
            form.setFieldsValue(data)
        }
    }, [data])

    return (
        <div className='flex flex-col  p-[30px]  mx-auto'>
            <Form
                form={form}
                name="basic"
                labelCol={{ span: 10 }}
                initialValues={data}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className='min-w-[600px]'
                layout='vertical'
            >
                <Form.Item<FieldType>
                    label="First name"
                    name="firstname"
                    rules={[{ required: true, message: 'Please input your first name!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Last name"
                    name="lastname"
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Age"
                    name="age"
                    rules={[{ required: true, message: 'Please input your age and your age must have number!'}]}
                >
                    <Input type='number' />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Phone number"
                    name="phone"
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>
                {
                    !isEditMode &&
                    <Form.Item label={null}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                }
            </Form>
        </div>
    )
}

export default memo(FormData)