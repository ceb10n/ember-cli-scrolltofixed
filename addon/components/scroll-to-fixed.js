import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nav',
  classNames: ['scrollToFixed'],


  didInsertElement() {
    this._super(...arguments);
    this.$('.scrollToFixed').scrollToFixed();
  }
});
