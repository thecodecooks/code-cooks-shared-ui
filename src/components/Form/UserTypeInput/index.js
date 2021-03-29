import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserTypeButton from './button';
import s from './styles.scss';

const propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

class UserTypeInput extends Component {
  constructor(props) {
    super(props);
    this.onBtnClick = this.onBtnClick.bind(this);
  }

  onBtnClick(type) {
    const { onChange, name } = this.props;

    onChange({
      target: {
        name,
        value: type,
      },
    });
  }

  render() {
    const {
      value,
    } = this.props;

    return (
      <div className={s['user-type-input']}>
        <UserTypeButton
          onClick={this.onBtnClick}
          type="performer"
          current={value === 'performer'}
        />
        <UserTypeButton
          onClick={this.onBtnClick}
          type="booker"
          current={value === 'booker'}
        />
      </div>
    );
  }
}

UserTypeInput.propTypes = propTypes;

export default UserTypeInput;
