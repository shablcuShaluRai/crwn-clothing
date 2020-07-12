import React from "react"
import "./formInput.scss"

const FormInput = ({ label, handleChange, ...otherProps }) => (
  <div className="group">
      <input className="form-input" handleChange={handleChange} {...otherProps} />
      {label ? (
        <lable
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </lable>
      ) : null}
    </div>
)

export default FormInput
