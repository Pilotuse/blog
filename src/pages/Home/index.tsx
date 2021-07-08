import React from 'react'
import Header from '@/pages/Header'
import style from './style.less'
export default function index() {
    return (
        <div className={style['home-container']}>
        {/* 顶部导航菜单 */}
        <Header/>
        </div>
    )
}
