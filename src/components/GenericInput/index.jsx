import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import FormField from '../FormField';
import s from './styles.scss';

const propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  errors: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  required: PropTypes.bool,
  subText: PropTypes.string,
  className: PropTypes.string,
  readOnly: PropTypes.bool,
  tabIndex: PropTypes.string,
  max: PropTypes.number,
  ref: PropTypes.any,
};

const defaultProps = {
  type: 'text',
  placeholder: undefined,
  label: undefined,
  errors: [],
  value: '',
  required: false,
  ref: undefined,
  subText: '',
  className: undefined,
  readOnly: false,
  tabIndex: '0',
  max: undefined,
};

function GenericInput(props) {
  const cx = classNames(s['generic-input'], {
    [s.error]: props.errors.length,
    [props.className]: props.className,
  });

  return (
    <FormField
      className={cx}
      label={props.label}
      errors={props.errors}
      required={props.required}
      name={props.name}
    >
      {props.subText && <p className={s['sub-text']}>{props.subText}</p>}
      <input
        ref={props.ref}
        type={props.type}
        onChange={props.onChange}
        onBlur={props.onChange}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        readOnly={props.readOnly}
        tabIndex={props.tabIndex}
        max={props.max}
      />
    </FormField>
  );
}

GenericInput.defaultProps = defaultProps;
GenericInput.propTypes = propTypes;

export default GenericInput;
