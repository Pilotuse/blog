import React from 'react'
import style from './style.less'

const Header: React.FC = () => {
    return (
        <div className={style['header-container']}>
            <div className={style['header-left']}>
                <div className={style['header-brand']}> 茶都醉可况酒</div>
                <ul>
                    <li>登录注册</li>
                    <li>登录注册</li>
                    <li>登录注册</li>
                    <li>登录注册</li>
                    <li>登录注册</li>
                </ul>
            </div>
            <div>

            </div>

        </div>
    )
}


export default Header
