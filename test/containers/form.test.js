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

import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import React from 'react';
import { act, create } from 'react-test-renderer';
import thunk from 'redux-thunk';
import { Form } from 'containers/form';
import { FormComponent } from 'components/form';

const mockFormId = 'test-form';
const createMockStore = configureStore([thunk]);

jest.useFakeTimers();

it('should render component passed through.', () => {
  const mockState = {
    form: {
      forms: {},
      inputs: {}
    }
  };
  const mockStore = createMockStore(mockState);
  let renderer = null;
  act(() => {
    renderer = create(
      <Provider store={mockStore}>
        <Form id={mockFormId} />
      </Provider>
    );
  });
  const container = renderer.root;

  jest.runAllTimers();

  expect(container.findAllByType(FormComponent)).toHaveLength(1);
});
