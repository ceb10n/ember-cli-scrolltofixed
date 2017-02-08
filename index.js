/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-scrolltofixed',

  included: function(app, parentAddon) {
    var target = (parentAddon || app);

    if (target.app) {
      target = target.app;
    }

    var bowerDir = target.bowerDirectory;
    target.import(bowerDir + '/ScrollToFixed/jquery-scrolltofixed.js');
  }
};
