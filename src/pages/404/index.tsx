import React from 'react'
import { Tag } from 'antd'
import { withRouter } from 'react-router-dom'
import ErrorPage from '@/components/ErrorPage'

const NotFound = ({ history }: any) => {

  return (
    <ErrorPage
      subTitle={<>
        当前资源未找到，服务trancid <Tag color="red"> 1625761005961</Tag>
      </>}
      OnBack={() => {
        history.push('/home')
      }}
    />
  )
}

export default withRouter(NotFound)
