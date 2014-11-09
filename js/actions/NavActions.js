/*
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * TodoActions
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var NavConstants = require('../constants/NavConstants');

var NavActions = {
  /**
   * Toggle whether a single ToDo is complete
   * @param  {object} todo
   */
  activeTab: function(tab) {
    var href = tab.href;
    if (tab.active) {
      AppDispatcher.handleViewAction({
        activeType: NavConstants.TAB_ACTIVED,
        href: tab.href
      })
    }
  }
};

module.exports = NavActions;
