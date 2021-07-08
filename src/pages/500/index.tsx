import React from 'react'
import { withRouter } from 'react-router-dom'
import ErrorPage from '@/components/ErrorPage'

const NotFound = ({ history }: any) => {

    return (
        <ErrorPage
            status="500"
            title="服务器繁忙"
            subTitle="当前服务繁忙，请稍后重试"
            extra='返回首页'
            OnBack={() => {
                history.push('/home')
            }}
        />
    )
}

export default withRouter(NotFound)

