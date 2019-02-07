/*
 * @promotively/react-redux-form
 *
 * @copyright (c) 2018-2019, Promotively
 * @author Steven Ewing <steven.ewing@promotively.com>
 * @see {@link https://www.github.com/promotively/react-redux-form}
 * @license MIT
 */

import createFormInputDirtySelector from 'selectors/form-input-dirty';

const formId = 'test-form';
const inputId = 'test-form-input';
const inputKey = `${formId}__${inputId}`;

describe('selectors/form-input-active.js', () => {
  it('should return a boolean indicating whether the form input value has changed.', () => {
    const formInputDirtySelector = createFormInputDirtySelector();
    const mockState = {
      form: {
        [formId]: {}
      },
      formInput: {
        [inputKey]: {
          dirty: true
        }
      }
    };
    const mockProps = {
      formId,
      id: inputId
    };

    expect(formInputDirtySelector(mockState, mockProps)).toEqual(true);
  });
});
