/*
 * @promotively/react-redux-form
 *
 * @copyright (c) 2018-2020, Promotively
 * @author Steven Ewing <steven.ewing@promotively.com>
 * @see {@link https://github.com/promotively/react-redux-form}
 * @license MIT
 */

/* eslint-disable max-len */
/* eslint-disable react/prop-types */

import React from 'react';

const WebLink = () => (
  <a
    href="https://promotively.com"
    style={{
      backgroundImage:
        'url(data:image/png;base64,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)',
      backgroundSize: '100%',
      display: 'inline-block',
      height: '44px',
      width: '156px'
    }}
  />
);

export default WebLink;
