import React, { useRef, useEffect } from 'react';
import { Modal, Form, Input, Button, Checkbox, message } from 'antd';
import useClassify from '../context/useClassify'
import { addClassify, updateClassify } from 'api/classify'
import './EditClassify.less';

const EditClassify = () => {
    const { classifyList, visible, setVisible, currItem } = useClassify();
    const [form] = Form.useForm();
    useEffect(() => {
        if (currItem === null) {
            form.resetFields()
        } else {
            form.setFieldsValue(currItem)
        }
    }, [currItem])
    const okA = () => {
        form.validateFields().then((res) => {
            console.log(res, 'res', currItem)
            if (!!currItem?.id) {
                updateClassify(res).then((resp) => {
                    console.log(resp, 'resp')
                    message.success('修改成功');
                    setVisible(false)
                })
            } else {
                addClassify(res).then((resp) => {
                    console.log(resp, 'resp')
                    message.success('添加成功');
                    setVisible(false)
                })
            }
        }).catch(err => {
            console.log(err, 'err11')
        })
    }
    const onValuesChange = (changedValues: any) => {
        console.log(changedValues, 'changedValues')
    }
    console.log(currItem, 'currItem')
    return (
        <Modal title="新增/修改" forceRender centered={true} visible={visible} onOk={() => { okA() }} onCancel={() => setVisible(false)} width="80%">
            <Form
                name="basic"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 20 }}
                initialValues={{ remember: true }}
                // antd中，Modal 和Form一起使用时，Form表单清空， <Modal /> 和 Form 一起配合使用时，设置 destroyOnClose 也不会在 Modal 关闭时销毁表单字段数据，需要设置 <Form preserve={false} />
                preserve={false}
                form={form}
                onValuesChange={onValuesChange}
            >
                <Form.Item
                    label="id"
                    name="id"
                    hidden
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="标题"
                    name="name"
                    rules={[{ required: true, message: '标题～' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="创建时间"
                    name="createTime"
                    hidden={!currItem}
                >
                    <Input disabled={true} />
                </Form.Item>
                <Form.Item
                    label="修改时间"
                    name="updateTime"
                    hidden={!currItem}
                >
                    <Input disabled={true} />
                </Form.Item>
            </Form>

        </Modal>
    )
}

export default React.memo(EditClassify);