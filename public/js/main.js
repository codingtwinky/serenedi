
var $ = require('../../bower_components/jquery/jquery.min.js');
require('./third/jquery.mCustomScrollbar.js');
require('../../bower_components/jquery-ui/ui/jquery-ui.js');
require('../../bower_components/canjs/can.jquery.js');
require('../../bower_components/canjs/can.object.js');
require('../../bower_components/canjs/can.control.plugin.js');
require('../../bower_components/bootstrap/dist/js/bootstrap.min.js');
require('../../bower_components/jquery-mousewheel/jquery.mousewheel.js');

var menu = require('./source/MenuControl.js');
var map = require('./source/MapControl.js');
var statusObservable = require('./source/StatusObservable.js');


$(document).ready(function() {
  new menu.MenuControl('#menuContainer', statusObservable);
  new map.MapControl('#main', statusObservable);
  $('#sideMenu').mCustomScrollbar();

  $("#optionButton").click(function() {
    var element = $(".optionButtonDirection");
    var shiftElement = $(".optionShiftElement");


    if (element.hasClass("glyphicon-chevron-right")) {
      element.removeClass("glyphicon-chevron-right").addClass("glyphicon-chevron-left");

      shiftElement.animate({
        left: "+=300"
      });

    } else {
      element.removeClass("glyphicon-chevron-left").addClass("glyphicon-chevron-right");
      shiftElement.animate({
        left: "-=300"
      });
    }
  });
});
