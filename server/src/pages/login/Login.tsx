import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import './Login.less'
import { login } from "store/actions";
const Login = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const onFinish = (values: any) => {
        console.log('Success:', values);
        login(values.username, values.password)(dispatch).then((res: any) => {
            console.log(res,'res')
        }).catch((err: any) => {
            console.log(err,'err')
        })
    };
    return (
        <div className="login">
            <div className="login_content">
                <div className="title">
                    <h2>用户登录</h2>
                </div>
                <Form
                    form={form}
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: '请输入账号!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: '请输入密码!' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" >
                        <Checkbox>记住我</Checkbox>
                    </Form.Item>

                    <Form.Item shouldUpdate>
                        {() => (
                            <Button
                                type="primary"
                                htmlType="submit"
                                block
                                disabled={
                                    !form.isFieldsTouched(['username', 'password']) ||
                                    !!form.getFieldsError().filter(({ errors }) => errors.length).length
                                }
                            >
                                登陆
                            </Button>
                        )}
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Login;
