import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { capitalizeFirst } from '../../../utilities/helpers';
import s from './styles.scss';

const propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  current: PropTypes.bool.isRequired,
};

const UserTypeButton = ({
  onClick,
  type,
  current,
}) => (
  <button
    onClick={(e) => {
      e.preventDefault();
      onClick(type);
    }}
    className={classNames(s.button, {
      [s.active]: current,
    })}
  >
    {capitalizeFirst(type)}
  </button>
);

UserTypeButton.propTypes = propTypes;

export default UserTypeButton;
