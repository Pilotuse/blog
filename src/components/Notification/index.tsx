import React from 'react'
import { notification } from 'antd';


interface NotificationProps {
    type: string | any;
    message: string;
    description: string;
}

const Notification = ({ type, message, description }: NotificationProps) => {
    // @ts-ignore
    notification[type]({
        message,
        description
    })
};

export default Notification




