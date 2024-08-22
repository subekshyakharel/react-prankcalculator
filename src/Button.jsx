import React from 'react';

const Button = ({ 
  cls, 
  label, 
  handleOnButtonClick, 
  handleOnMouseDown, 
  btnstyle,
  isMouseDown
}) => {
  return (
    <div 
    style={isMouseDown === label ?btnstyle: null}
    onClick={()=>handleOnButtonClick(label)} 
    onMouseDown={()=> handleOnMouseDown(label)}
    className={"btn " +  cls}>{label}</div>
  );
};

export default Button;