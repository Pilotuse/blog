import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, StopOutlined, LoadingOutlined } from '@ant-design/icons';
import styles from './style.less'

export interface UserInfos {
  username: string;
  password: string;
}

const LoginForm = (props: any) => {
  const [loadingFlag, setLoadingFlag] = useState<boolean>(false)
  const [submitButton, setSubmitButton] = useState('BLOG HOME 登录')
  const [loginIcon, setloginIcon] = useState<React.ReactNode>(<></>)

  // 登录按钮的 文字和图标还原
  useEffect(() => {
    const timer = setTimeout(() => {
      setSubmitButton('BLOG HOME 登录')
      setloginIcon(<></>)
    }, 4000)
    return () => clearTimeout(timer)
  }, [submitButton])

  // 设置登录请求和文字设置
  const onFinish = (values: UserInfos) => {
    // 调用接口触发请求  成功进行提示
    setLoadingFlag(true)
    setSubmitButton('登录中')
    setTimeout(() => {
      setSubmitButton('登录失败: 用户名或密码不正确')
      setloginIcon(<StopOutlined />)
      setLoadingFlag(false)
    }, 3000)
  };


  return (<>
    <div className={styles['login-brand-list']}>
      <div className={styles['login-brand-title']}>茶都醉何况酒</div>
      <span className={styles['login-brand-blog']}>发布和推流端 <LoadingOutlined style={
        { color: '#1890ff' }
      } /></span>
    </div>
    <div className={styles['login-brand-en']}>BLOG HOME TO LOGIN</div>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: '请输入用户凭证',
          },
        ]}
      >
        <Input size="middle" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户登录凭证" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: '请输入登录密码',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          size="middle"
          placeholder="用户登录密码"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>记住登录</Checkbox>
        </Form.Item>

        <a className={`login-form-forgot ${styles['login-form-forgot']}`} href="">忘记密码？</a>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          size="middle"
          htmlType="submit"
          icon={loginIcon}
          className={`login-form-button ${styles['login-form-button']}`}
          loading={loadingFlag}
        >
          {submitButton}
        </Button  >
      </Form.Item>
    </Form>
  </>)
}



export default LoginForm
