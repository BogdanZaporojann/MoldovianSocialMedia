import React from "react";
import styles from './FormsControle.module.css'
import {Field} from "redux-form";
import {required} from "../../../utils/validators/validator";

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return(
      <div className={styles.formControl + " "+(hasError && styles.error)}>
          <div>
              <textarea {...input} {...props}></textarea>
          </div>
          <div>
              {hasError && <span>{meta.error}</span>}
          </div>
      </div>
    );
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return(
        <div className={styles.formControl + " "+(hasError && styles.error)}>
            <div>
                <input {...input} {...props}></input>
            </div>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    );
}

export const createField = (placeholder, name, validators, component, props={}, text="") => (
    <div>
        <Field validate={validators} component={component} name={name} placeholder={placeholder} {...props}/>{text}
    </div>)