/*
 * @promotively/react-redux-form
 *
 * @copyright (c) 2018-2020, Promotively
 * @author Steven Ewing <steven.ewing@promotively.com>
 * @see {@link https://github.com/promotively/react-redux-form}
 * @license MIT
 */

/* eslint-disable react/prop-types */

import React from 'react';
import { Form } from '../../src';
import Alert from './alert';
import Meta from './meta';
import Wrapper from './wrapper';

const WrappedForm = props => (
  <div style={{ marginTop: '10px' }}>
    <Wrapper>
      <div style={{ paddingBottom: '10px' }}>
        The below boxes display all the possible properties available for you to use in your own form components.
      </div>
      <div style={{ display: 'flex' }}>
        <Meta name="Active" value={props.active} />
        <Meta name="Dirty" value={props.dirty} />
        <Meta name="Complete" value={props.complete} />
        <Meta name="Disabled" value={props.disabled} />
        <Meta name="Error" value={Boolean(props.error)} />
        <Meta name="Loading" value={props.loading} />
      </div>
    </Wrapper>
    <Form id={props.id} onSubmit={props.onSubmit}>
      {props.children}
    </Form>
    <div style={{ marginTop: '10px' }}>
      {props.loading ? <Alert type="info">The form is submitting, please wait.</Alert> : null}
      {!props.loading && props.error ? <Alert type="error">{props.error}</Alert> : null}
      {!props.loading && props.complete ? <Alert type="success">The form was successfully submitted.</Alert> : null}
    </div>
  </div>
);

export default WrappedForm;
