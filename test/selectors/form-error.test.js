/*
 * @promotively/react-redux-form
 *
 * @copyright (c) 2018-2020, Promotively
 * @author Steven Ewing <steven.ewing@promotively.com>
 * @see {@link https://github.com/promotively/react-redux-form}
 * @license MIT
 */

import { createFormErrorSelector } from 'selectors/form-error';

const formId = 'test-form';
const mockError = new Error('test-error');

describe('selectors/form-error.js', () => {
  it('should return the form error.', () => {
    const formErrorSelector = createFormErrorSelector(formId);
    const mockState = {
      form: {
        forms: {
          [formId]: {
            error: mockError.message
          }
        }
      }
    };

    expect(formErrorSelector(mockState)).toEqual(mockError.message);
  });

  it('should return an empty string if there is no form error.', () => {
    const formErrorSelector = createFormErrorSelector(formId);
    const mockState = {
      form: {
        forms: {
          [formId]: {}
        }
      }
    };

    expect(formErrorSelector(mockState)).toEqual('');
  });
});
