import React from 'react'
import { withRouter } from 'react-router-dom'
import ErrorPage from '@/components/ErrorPage'

const NotFound = ({ history }: any) => {

    return (
        <ErrorPage
            status="403"
            title="用户限制访问"
            subTitle="当前用户限制访问该页面，请联系管理员后重试"
            extra='返回首页'
            OnBack={() => {
                history.push('/home')
            }}
        />
    )
}

export default withRouter(NotFound)

