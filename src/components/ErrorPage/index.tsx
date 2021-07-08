import React from 'react';
import { Result, Button } from 'antd';

interface Props {
  status?: any;
  title?: string;
  subTitle?: React.ReactNode;
  extra?: React.ReactNode | string;
  OnBack: () => void
}

const NotFound = (props: Props) => {
  const {
    status = '404',
    title = '资源未找到',
    subTitle,
    extra = '返回首页',
    OnBack
  } = props

  return <Result
    status={status}
    title={title}
    subTitle={subTitle}
    extra={<Button type="primary" onClick={
      () => OnBack()
    }>{extra}</Button>}
  />
}

export default NotFound
