import Ember from 'ember';
import layout from '../templates/components/scroll-to-fixed';

export default Ember.Component.extend({
  layout,
  tagName: 'nav',
  classNames: ['scrollToFixed'],

  didInsertElement() {
    $('.scrollToFixed').scrollToFixed();
  }
});
