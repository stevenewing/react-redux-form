/*
 * @promotively/react-redux-form
 *
 * @copyright (c) 2018-2019, Promotively
 * @author Steven Ewing <steven.ewing@promotively.com>
 * @see {@link https://www.github.com/promotively/react-redux-form}
 * @license MIT
 */

/*
 * @see {@link https://github.com/reduxjs/reselect}
 */

import { createSelector } from 'reselect';

/**
 * Returns a reselect.js selector function that returns the current form input dirty state.
 * @function
 * @param {String} formId The ID for the form.
 * @param {String} inputId The ID for the form input.
 * @returns {Function} A reselect.js selector function.
 * @example
 * ...
 *
 * import { createFormInputDirtySelector } from '@promotively/react-redux-form';
 *
 * const mapStateToProps = (state) => {
 *   const formInputDirtySelector = createFormInputDirtySelector('profile', 'name');
 *
 *   return {
 *     dirty: formInputDirtySelector(state)
 *
 * ...
 */
const createFormInputDirtySelector = (formId, inputId) => createSelector(
  (state) => {
    const input = state.formInput[`${formId}__${inputId}`];

    return Boolean(input && input.dirty);
  },
  (dirty) => (
    dirty
  )
);

export default createFormInputDirtySelector;
