/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react');
var ReactPropTypes = React.PropTypes;
var NavActions = require('../actions/NavActions');

var cx = require('react/lib/cx');

var TabItem = React.createClass({

  propTypes: {
   tab: ReactPropTypes.object.isRequired
  },

  /**
   * @return {object}
   */
  render: function() {
    var tab = this.props.tab;

    // List items should get the class 'editing' when editing
    // and 'completed' when marked as completed.
    // Note that 'completed' is a classification while 'complete' is a state.
    // This differentiation between classification and state becomes important
    // in the naming of view actions toggleComplete() vs. destroyCompleted().
    return (
      <a className={cx({
        'tab-item': true,
        'active': tab.active
      })} href={tab.href} data-tab-index={tab.idx}>
        <span className={tab.icon}></span>
        <span className="tab-label">{tab.name}</span>
      </a>
    );
  }
});

module.exports = TabItem;
