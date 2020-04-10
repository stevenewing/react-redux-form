/*
 * @promotively/react-redux-form
 *
 * @copyright (c) 2018-2019, Promotively
 * @author Steven Ewing <steven.ewing@promotively.com>
 * @see {@link https://github.com/promotively/react-redux-form}
 * @license MIT
 */

import FormInput from 'components/form-input';
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

const mockFormId = 'test-form';
const mockFormInputId = 'test-form-input';
const mockFormInputKey = `${mockFormId}__${mockFormInputId}`;
const mockFormInputValue = 'test';

describe('components/form-input.js', () => {
  it('renders correctly with default form input component.', () => {
    const mockOnChange = jest.fn();
    const renderer = ReactTestRenderer.create(
      <FormInput id={mockFormInputKey} onChange={mockOnChange} value={mockFormInputValue} />
    );
    const container = renderer.root;
    const expectedPropKeys = ['id', 'onChange', 'value'];

    expect(Object.keys(container.findAllByType(FormInput)[0].props).join()).toEqual(expectedPropKeys.join());
  });

  it('renders correctly with custom form input component provided by the `component` prop.', () => {
    const mockOnChange = jest.fn();
    const renderer = ReactTestRenderer.create(
      <FormInput
        id={mockFormInputKey}
        component={props => <input {...props} />}
        onChange={mockOnChange}
        value={mockFormInputValue}
      />
    );
    const container = renderer.root;
    const expectedPropKeys = ['id', 'component', 'onChange', 'value'];

    expect(Object.keys(container.findAllByType(FormInput)[0].props).join()).toEqual(expectedPropKeys.join());
  });

  it('renders correctly with custom form input component provided by the `render` prop.', () => {
    const mockOnChange = jest.fn();
    const renderer = ReactTestRenderer.create(
      <FormInput
        id={mockFormInputKey}
        render={props => <input {...props} />}
        onChange={mockOnChange}
        value={mockFormInputValue}
      />
    );
    const container = renderer.root;
    const expectedPropKeys = ['id', 'render', 'onChange', 'value'];

    expect(Object.keys(container.findAllByType(FormInput)[0].props).join()).toEqual(expectedPropKeys.join());
  });
});
