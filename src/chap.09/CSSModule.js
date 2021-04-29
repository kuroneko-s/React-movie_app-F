import React from 'react';
import style from './CssModule.module.css';

const CssModule = () => {
  return (
    <div className={style.wrapper}>
      안녕하세요 저는 <span className="something">CssModule</span>
    </div>
  );
};
export default CssModule;
