import React, {FC} from 'react';
import cls from './ModelWindow.module.scss'

interface ModelWindowProps {
    logout: () => void
}

const ModelWindow: FC<ModelWindowProps> = ({logout}) => {
    return (
        <div className={cls.modelWindow}>
            <p>roma</p>
            <p>settings</p>
            <p>theme: dark</p>
            <button onClick={logout}>logout</button>
        </div>
    );
};

export default ModelWindow;
