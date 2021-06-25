import React, { useState } from 'react'
import { Drawer, Button } from 'antd';

interface DrawerFormProps {
    Nodes: React.FC;
    isVisible: boolean;
    title?: string;
}

const DrawerForm = (props: DrawerFormProps) => {
    
    const { Nodes, isVisible, title } = props
    const [visible, setVisible] = useState(isVisible)

    const onClose = () => setVisible(false);

    return (
        <Drawer
            title={title}
            width={720}
            onClose={onClose}
            visible={visible}
            bodyStyle={{ paddingBottom: 80 }}
            footer={
                <div style={{ textAlign: 'right' }} >
                    <Button onClick={onClose} style={{ marginRight: 8 }}>
                        取消新建
                    </Button>
                    <Button onClick={onClose} type="primary">
                        前往新建
                    </Button>
                </div>
            }
        >
            <Nodes />
        </Drawer>
    )
}
export default DrawerForm
