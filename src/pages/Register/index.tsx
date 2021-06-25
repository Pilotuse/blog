import React from 'react'

export default function index() {
    return (
        <div>
            带条件注册：
            1. 必须要有RegisterCode 即邀请码才能注册
            2. 必须要关联邮箱，注册账号是私人邮箱
            3. 注册必须要进行邮箱验证，验证通过后才能允许注册，邮箱验证码有效期只有1个小时，过期重发，一天只有3次重发机会
            4. 密码要求 中 英文(不限制大小写) 特殊符号 3中中的2种即可
            5. 注册成功即自动登录？ 待考虑
            
        </div>
    )
}
