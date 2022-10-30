import React from 'react';
import { style } from './Languages.styles';

const Languages = () => (
    <div className={style.wrapper}>
        <div>
            <p className={style.text}>Here are some of the languages I've written in production.</p>
        </div>
        <div>
            <img className={style.image} src='js-icon.png' />
            <img className={style.image} src='ts-icon.png' />
            <img className={style.image} src='python-icon.png' />
            <img className={style.image} src='rust-icon.png' />
        </div>
    </div>
);

export { Languages };
