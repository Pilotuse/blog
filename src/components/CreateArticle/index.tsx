import React from 'react'
import Drawer from '@/components/Drawer'
import { Form, Tag, Col, Row, Input, Select, DatePicker, Divider } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';

const { Option } = Select;
const options = [{ value: 'gold' }, { value: 'lime' },{ value: 'gray' }, { value: 'red' },{ value: 'green' }, { value: 'cyan' }];

const tagRender = (props: any) => {
    const { label, value, closable, onClose } = props;


    const onPreventMouseDown = (event: any) => {
        event.preventDefault();
        event.stopPropagation();
    };


    return (
        <Tag
            color={value}
            onMouseDown={onPreventMouseDown}
            closable={closable}
            onClose={onClose}
            style={{ marginRight: 3 }}
        >
            {label}
        </Tag>
    );
}

const Nodes = () => {
    let index = 0;
    const [shareCount, setShareCount] = useState({
        items: ['10次', '20次'],
        name: '',
    })

    const onNameChange = (event: any) => {
        setShareCount({
            ...shareCount,
            name: event.target.value,
        });
    };

    const addItem = () => {
        setShareCount({
            items: [...shareCount?.items, shareCount?.name || `New item ${index++}`],
            name: '',
        });
    };

    return (
        <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="docTitle"
                        label="文档标题"
                        rules={[{ required: true, message: '请输入文档名称' }]}
                    >
                        <Input placeholder="请输入文档标题" />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="docType"
                        label="文档标签"
                        rules={[{ required: true, message: '请选择文档标签' }]}
                    >
                        <Select
                            mode="multiple"
                            showArrow
                            tagRender={tagRender}
                            defaultValue={[]}
                            style={{ width: '100%' }}
                            options={options}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="public"
                        label="文档阅览权限"
                        rules={[{ required: true, message: '请选择文档阅览权限' }]}
                    >
                        <Select placeholder="请选择文档阅览权限">
                            <Option value="xiao">允许所有人阅览</Option>
                            <Option value="mao">允许关注人阅览</Option>
                            <Option value="mao">不允许他人预览</Option>
                            <Option value="mao">允许他人预览</Option>
                            <Option value="mao">收费阅览</Option>

                        </Select>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="archive"
                        label="归档列表"
                        rules={[{ required: true, message: '请选择归档列表文件夹' }]}
                    >
                        <Select placeholder="请选择归档列表文件夹">
                            <Option value="private">信息服务</Option>
                            <Option value="public">Public</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="share"
                        label="分享设置"
                        rules={[{ required: true, message: '分享链接设置' }]}
                    >
                        <Select placeholder="分享链接设置">
                            <Option value="jack">通过链接分享</Option>
                            <Option value="tom">通过二维码分享</Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="shareCount"
                        label="分享次数设置"
                        rules={[{ required: true, message: '请选择分享次数限制' }]}
                    >
                        <Select
                            placeholder="请选择分享次数限制值"
                            dropdownRender={menu => (
                                <div>
                                    {menu}
                                    <Divider style={{ margin: '4px 0' }} />
                                    <div style={{ display: 'flex', flexWrap: 'nowrap', padding: '4px 8px' }}>
                                        <Input style={{ flex: 'auto' }} value={shareCount.name} onChange={onNameChange} size="small" />
                                        <a
                                            style={{ flex: 'none', padding: '4px 8px', display: 'block', cursor: 'pointer' }}
                                            onClick={addItem}
                                        >
                                            <PlusOutlined /> 添加次数限制
                                        </a>
                                    </div>
                                </div>
                            )}
                        >
                            {shareCount?.items.map(item => (
                                // @ts-ignore
                                <Option key={item}>{item}</Option>
                            ))}
                        </Select>

                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="share"
                        label="分享密码"
                        rules={[{ required: true, message: '请设置分享密码' }]}
                    >
                        <Input placeholder="请设置分享密码" type="password" />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="dateTime"
                        label="DateTime"
                        rules={[{ required: true, message: 'Please choose the dateTime' }]}
                    >
                        <DatePicker.RangePicker
                            style={{ width: '100%' }}
                            // @ts-ignore
                            getPopupContainer={trigger => trigger.parentElement}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={24}>
                    <Form.Item
                        name="description"
                        label="文档描述"
                        rules={[
                            {
                                required: true,
                                message: '请输入文档描述',
                            },
                        ]}
                    >
                        <Input.TextArea rows={4} placeholder="请输入文档描述" />
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    )
}

export default function index() {
    return (
        <Drawer
            Nodes={Nodes}
            isVisible={true}
            title="新建文档 · 文档设置 id:2302002020"
        />
    )
}
