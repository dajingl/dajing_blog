import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, message, Select } from 'antd';
import Marked from '../marked/Marked';
import { addArticle, updateArticle } from 'api/article'
import useArticle from '../context/useArticle'
import { getClassify } from 'api/classify';
import { getLabel } from 'api/label'
import './EditArticle.less';
const { Option } = Select;
interface Props {
}
const EditArticle = (props: Props) => {
    const { articleList, visible, setVisible, currItem } = useArticle();
    const [labelList, setLabelList] = useState([]);
    const [classifyList, setClassifyList] = useState([]);
    const [form] = Form.useForm();
    useEffect(() => {
        if (currItem === null) {
            form.resetFields()
        } else {
            form.setFieldsValue(currItem)
        }
    }, [currItem]);

    // 获取分类列表和标签列表
    const getTypeList = async () => {
        const label = await getLabel();
        const classify = await getClassify();
        console.log(label.data.data)
        setLabelList(label.data.data)
        setClassifyList(classify.data.data)
    }
    useEffect(() => {
        getTypeList();
    }, [])

    const okA = () => {
        form.validateFields().then((res) => {
            console.log(res, 'res')
            if (!!currItem?.id) {
                updateArticle(res).then((resp) => {
                    console.log(resp, 'resp')
                    message.success('修改成功');
                    setVisible(false)
                })
            } else {
                addArticle(res).then((resp) => {
                    console.log(resp, 'resp')
                    message.success('添加成功');
                    setVisible(false)
                })
            }
        }).catch(err => {
            console.log(err, 'err')
        })
    }

    return (
        <Modal title="新增/修改" forceRender centered={true} visible={visible} onOk={() => { okA() }} onCancel={() => setVisible(false)} width="80%">
            <Form
                name="basic"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 20 }}
                initialValues={{}}
                // antd中，Modal 和Form一起使用时，Form表单清空， <Modal /> 和 Form 一起配合使用时，设置 destroyOnClose 也不会在 Modal 关闭时销毁表单字段数据，需要设置 <Form preserve={false} />
                preserve={false}
                form={form}
            >
                <Form.Item label="id" name="id" hidden >
                    <Input />
                </Form.Item>
                <Form.Item label="标题" name="title" rules={[{ required: true, message: '标题～' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="描述" name="desc" rules={[{ required: true, message: '描述～' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="分类" name="type" rules={[{ required: true, message: '分类～' }]}>
                    <Select
                        mode="multiple"
                        style={{ width: '100%' }}
                        placeholder="请选择文章所属分类～"
                    >
                        {
                            labelList.map((item: any, index) => {
                                return (
                                    <Option value={item.id + ''} key={index}>
                                        {item.name}
                                    </Option>
                                )
                            })
                        }

                    </Select>
                </Form.Item>
                <Form.Item label="标签" name="label" rules={[{ required: true, message: '标签～' }]}>
                    <Select
                        mode="multiple"
                        style={{ width: '100%' }}
                        placeholder="请选择文章标签～"
                    >
                        {
                            classifyList.map((item: any, index) => {
                                return (
                                    <Option value={item.id + ''} key={index}>
                                        {item.name}
                                    </Option>
                                )
                            })
                        }
                    </Select>
                </Form.Item>
                <Form.Item label="内容" name="context" rules={[{ required: true, message: '内容～' }]}>
                    <Marked />
                </Form.Item>
            </Form>

        </Modal >
    )
}

export default React.memo(EditArticle);