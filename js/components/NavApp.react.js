/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * This component operates as a "Controller-View".  It listens for changes in
 * the TodoStore and passes the new data to its children.
 */

var TabItem = require('./TabItem.react');
var React = require('react');
var NavStore = require('../stores/NavStore');

/**
 * Retrieve the current TODO data from the TodoStore
 */
function getNavState() {
  return {
    tabs: NavStore.getAll()
  };
}

var NavApp = React.createClass({

  getInitialState: function() {
    return getNavState();
  },

  componentDidMount: function() {
    NavStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    NavStore.removeChangeListener(this._onChange);
  },

  /**
   * @return {object}
   */
  render: function() {
    var tabs = getNavState()['tabs'],
      tabitems = [];

    for (var i = 0; i < tabs.length; i ++) {
      tabitems.push(<TabItem key={i} tab={tabs[i]} />);
    }
  	return (
      <nav className='bar bar-tab'>{tabitems}</nav>
  	);
  },

  /**
   * Event handler for 'change' events coming from the TodoStore
   */
  _onChange: function() {
    this.setState(getNavState());
  }

});

module.exports = NavApp;
