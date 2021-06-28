import React, { useEffect, useState } from 'react';
import { Tooltip } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import styles from './style.less'
import LoginForm from './LoginForm'

export interface UserInfos {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const [autoLoginFlag, setAutoLoginFlag] = useState<boolean>(false)


  // 进入页面首先去获取用户信息，当用户信息存在时，直接调用接口进行登录检查，通过立即放行
  useEffect(() => {
    const location = localStorage?.getItem('__ctoken__') || ''
    if (location) {
      // 进行接口调用进行判断
      // toservice
    } else {
      setAutoLoginFlag(true)
    }
  }, [])

  return (
    <div className={styles['login-form']}>
      {
        autoLoginFlag &&
        <div className={styles['login-container']}>
          <div className={styles['login-close-form']} onClick={() => {
            setAutoLoginFlag(false)
          }}>
            <Tooltip placement="top" title="关闭">
              <CloseOutlined />
            </Tooltip>
          </div>

          {/* 登录form表单 */}
          <LoginForm
            autoLoginFlag={autoLoginFlag}
            setAutoLoginFlag={setAutoLoginFlag}
          />
        </div>
      }
    </div>
  )
}

export default Login
