/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * AdAccountCustomAudience
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountCustomAudience extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      audience_type_param_name: 'audience_type_param_name',
      existing_customer_tag: 'existing_customer_tag',
      new_customer_tag: 'new_customer_tag',
    });
  }

}
