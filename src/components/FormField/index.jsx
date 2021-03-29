import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Label from '../Label';
import s from './FormField.module.css';

const propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
  errors: PropTypes.array,
  required: PropTypes.bool,
  name: PropTypes.string,
};

const defaultProps = {
  className: undefined,
  errors: [],
  required: false,
  label: undefined,
  name: '',
};

const FormField = ({ label, children, className, errors, required, name }) => {
  const cx = classNames(s.root, {
    [className]: className,
    [s.error]: errors.length,
  });

  return (
    <div className={cx}>
      {label && (
        <Label name={name} hasErrors={!!errors.length} required={required}>
          {label}
        </Label>
      )}
      {children}
      {errors.map(error => (
        <p key={error} className={s.errorText}>
          {error}
        </p>
      ))}
    </div>
  );
};

FormField.propTypes = propTypes;
FormField.defaultProps = defaultProps;

export default FormField;
