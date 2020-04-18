import React from 'react';

export default function TextArea(props) {
  const {fild, onChange, value, errors} = props
  return (
    <div>
    <label> {fild.label}</label>
    <textarea 
        name={fild.name}
        onChange={onChange}
        value={value}
        rows="3"
    />
        {
        errors && errors[fild.name]?
        <p>{errors[fild.name].message}</p>
        : null
    }
</div>
  );
}
