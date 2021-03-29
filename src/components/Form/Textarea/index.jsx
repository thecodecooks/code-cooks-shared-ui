import React from 'react';
import PropTypes from 'prop-types';
import FormField from '../../FormField';
import s from './styles.scss';

const propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.array,
  value: PropTypes.string,
  className: PropTypes.string,
  rows: PropTypes.number,
  required: PropTypes.bool,
};

const defaultProps = {
  errors: [],
  value: '',
  className: '',
  rows: 5,
  required: false,
};

const Textarea = ({
  name,
  label,
  placeholder,
  onChange,
  errors,
  value,
  className,
  required,
  rows,
}) => (
  <FormField
    label={label}
    errors={errors}
    className={className}
    name={name}
    required={required}
  >
    <textarea
      className={s.textarea}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onChange}
      value={value}
      rows={rows}
    />
  </FormField>
);

Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;

export default Textarea;
