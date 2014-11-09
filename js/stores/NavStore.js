/*
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * TodoStore
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var NavConstants = require('../constants/NavConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _tabs = [
{
  name: "首页", 
  href: "/", 
  icon: "icon icon-home",
  active: true
 },
 {
  name: "订单", 
  href: "/orders", 
  icon: "icon icon-list",
  active: false
 },
 {
  name: "论坛", 
  href: "/forum", 
  icon: "icon icon-star-filled",
  active: false
 },
 {
  name: "我的", 
  href: "/my", 
  icon: "icon icon-person",
  active: false
 }
];

/**
 * Update a Tab item.
 * @param  {string} tab
 */
function updateActive(tab) {
  _todos[id] = assign({}, _todos[id], updates);
}

var NavStore = assign({}, EventEmitter.prototype, {
  /**
   * Get the entire collection of TODOs.
   * @return {object}
   */
  getAll: function() {
    return _tabs;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register to handle all updates
AppDispatcher.register(function(payload) {
  var action = payload.action;
  var text;

  switch(action.actionType) {

    case NavConstants.Nav_UPDATE_ACTIVE:
      if (TodoStore.areAllComplete()) {
        updateAll({complete: false});
      } else {
        updateAll({complete: true});
      }
      break;

    default:
      return true;
  }

  // This often goes in each case that should trigger a UI change. This store
  // needs to trigger a UI change after every view action, so we can make the
  // code less repetitive by putting it here.  We need the default case,
  // however, to make sure this only gets called after one of the cases above.
  NavStore.emitChange();

  return true; // No errors.  Needed by promise in Dispatcher.
});

module.exports = NavStore;
