import React from 'react';

export default function TextInput(props) {
  const {fild, onChange, value, errors} = props
  return (
    <div className="form-group">
      <label> {fild.label}</label>
      <input
          className="form-control"
          type={fild.type} 
          placeholder={fild.placheholder} 
          name={fild.name}
          onChange={onChange}
          value={value}
      />
      {
          errors && errors[fild.name]?
          <p className="error">{errors[fild.name].message}</p>
          : null
      }
    </div>
  );
}
