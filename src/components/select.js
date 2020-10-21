/**
 * promotively/react-redux-form
 *
 * @copyright Promotively (c) 2020
 * @author Steven Ewing <steven.ewing@promotively.com>
 * @license MIT
 *
 * @see {@link https://promotively.com}
 * @see {@link https://github.com/promotively/react-redux-form}
 */

/**
 * @module components
 *
 * @see {@link https://github.com/facebook/react}
 */

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */

import React, { Fragment } from 'react';

/**
 * Renders a react.js input component.
 *
 * @function
 * @param {object} props The properties used to render the component.
 * @returns {Function} A react.js component that renders a default or custom input component.
 */
export const SelectComponent = props => {
  const { checked, component: Component, options, render, validate, ...selectProps } = props;

  if (Component) {
    return <Component {...props} />;
  }

  if (render) {
    return render(props);
  }

  return (
    <select {...selectProps}>
      {options.map((option, index) => {
        const { label, ...optionProps } = option;

        return (
          <option key={`${selectProps.id}_${index}`} {...optionProps}>
            {label}
          </option>
        );
      })}
    </select>
  );
};

SelectComponent.defaultProps = {
  options: []
};
