import React from 'react';

export default function TextInput(props) {
  const {fild, onChange, value, errors} = props
  return (
    <div>
    <label> {fild.label}</label>
    <input 
        type={fild.type} 
        placeholder={fild.placheholder} 
        name={fild.name}
        onChange={onChange}
        value={value}
    />
    {
        errors && errors[fild.name]?
        <p>{errors[fild.name].message}</p>
        : null
    }
</div>
  );
}
