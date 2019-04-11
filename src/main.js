$(function(){
  var $el = window.$el = $('#t');
  var $el2 = window.$el2 = $('#t2');
  console.log('----------------------------');
  console.log($('#t')[0].styleSheet.cssText);
//  $el.remove();
  $el[0].styleSheet.cssText = '';
  console.log($('#t')[0].styleSheet.cssText);
  console.log('----------------------------');
});
