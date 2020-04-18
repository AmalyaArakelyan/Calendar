import React from 'react';

export default function TextArea(props) {
  const {fild, onChange, value, errors} = props
  return (
    <div className="form-group">
      <label> {fild.label}</label>
      <textarea 
          class="form-control"
          name={fild.name}
          onChange={onChange}
          value={value}
          rows="3"
      />
          {
          errors && errors[fild.name]?
          <p className="error">{errors[fild.name].message}</p>
          : null
      }
    </div>
  );
}
