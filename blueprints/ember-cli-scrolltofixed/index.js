/*jshint node:true*/
module.exports = {
  description: 'Install jquery-scrolltofixed from bower',

  normalizeEntityName: function() {
  },

  afterInstall: function() {
    return this.addBowerPackageToProject('ScrollToFixed');
  }
};
