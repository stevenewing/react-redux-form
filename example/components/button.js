/*
 * @promotively/react-redux-form
 *
 * @copyright (c) 2018-2019, Promotively
 * @author Steven Ewing <steven.ewing@promotively.com>
 * @see {@link https://www.github.com/promotively/react-redux-form}
 * @license MIT
 */

/* eslint-disable react/prop-types */

import React from 'react';

const Button = (props) => (
  <button
    style={{
      ...!props.disabled ? {
        background: '#000',
        border: '1px solid #000',
        color: '#fff'
      } : {
        background: '#fff',
        border: '1px solid #ccc',
        color: '#ccc'
      },
      ...{
        cursor: 'pointer',
        fontSize: '14px',
        padding: '5px'
      }
    }}
  >
    {props.children}
  </button>
);

export default Button;
