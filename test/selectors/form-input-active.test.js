/*
 * @promotively/react-redux-form
 *
 * @copyright (c) 2018-2020, Promotively
 * @author Steven Ewing <steven.ewing@promotively.com>
 * @see {@link https://github.com/promotively/react-redux-form}
 * @license MIT
 */

import { createFormInputActiveSelector } from 'selectors/form-input-active';

const formId = 'test-form';
const inputId = 'test-form-input';
const inputKey = `${formId}__${inputId}`;

describe('selectors/form-input-active.js', () => {
  it('should return a boolean indicating whether the form input has been touched.', () => {
    const formInputActiveSelector = createFormInputActiveSelector(formId, inputId);
    const mockState = {
      form: {
        forms: {
          [formId]: {}
        },
        inputs: {
          [inputKey]: {
            active: true
          }
        }
      }
    };

    expect(formInputActiveSelector(mockState)).toEqual(true);
  });
});
