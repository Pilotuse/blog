import React, { useEffect, useState } from 'react';
import { useLocation } from 'umi'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, CheckCircleOutlined, StopOutlined } from '@ant-design/icons';
import styles from './style.less'

interface UserInfos {
  username: string;
  password: string;
}

const LoginForm = () => {
  const [loadingFlag, setLoadingFlag] = useState<boolean>(false)
  const [submitButton, setSubmitButton] = useState('登录卜洛戈')
  const [loginIcon, setloginIcon] = useState<React.ReactNode>(<></>)
  const [userInfos, setUserInfos] = useState<UserInfos>({ username: '', password: '' })


  // 进入页面首先去获取用户信息，当用户信息存在时，直接调用接口进行登录检查，通过立即放行
  useEffect(() => {
    const location = localStorage?.getItem('__ctoken__') || ''
    // if()
    
  }, [userInfos])


  // 登录按钮的 文字和图标还原
  useEffect(() => {
    const timer = setTimeout(() => {
      setSubmitButton('登录卜洛戈')
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
      setSubmitButton('登录失败')
      setloginIcon(<StopOutlined />)
      setLoadingFlag(false)
    }, 3000)
  };


  return (
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
  )
}

const Login: React.FC = () => {
  return (
    <div className={styles['login-form']}>
      <div>BOLG</div>
      <div>卜洛戈</div>
      <div className={styles['login-container']}>
        {/* 登录form表单 */}
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
