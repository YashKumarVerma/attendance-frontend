import React from "react";

const InputElement = ({ label, ...otherItems }) => (
  <div className="form-group">
    {label ? <label>{label}</label> : null}
    <input className="form-control" {...otherItems} />
  </div>
);

export default InputElement;
