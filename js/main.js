/*global $, alert ,console */

$(document).ready(function () {
    
    'use strict';
    $(".tabs ul .tap-1").click(function(){
      $(".tabs ul .tap-2").removeClass("active");
      $(".tabs ul .tap-3").removeClass("active");
      $(".tabs ul .tap-4").removeClass("active");
      $(".tabs ul .tap-5").removeClass("active");
      $(".tabs ul .tap-6").removeClass("active");
      $(".tabs ul .tap-7").removeClass("active");
      $(".tabs ul .tap-8").removeClass("active");
      $("#tab-2").removeClass("active").addClass("disactive");
      $("#tab-3").removeClass("active").addClass("disactive");
      $("#tab-4").removeClass("active").addClass("disactive");
      $("#tab-5").removeClass("active").addClass("disactive");
      $("#tab-6").removeClass("active").addClass("disactive");
      $("#tab-7").removeClass("active").addClass("disactive");
      $("#tab-8").removeClass("active").addClass("disactive");
      $(this).addClass("active");
      $("#tab-1").removeClass("disactive").addClass("active");
     // $(".tabs .hr .discuss").removeClass("disactive").addClass("active")
    });
    $(".tabs ul .tap-2").click(function(){
      $(".tabs ul .tap-1").removeClass("active");
      $(".tabs ul .tap-3").removeClass("active");
      $(".tabs ul .tap-4").removeClass("active");
      $(".tabs ul .tap-5").removeClass("active");
      $(".tabs ul .tap-6").removeClass("active");
      $(".tabs ul .tap-7").removeClass("active");
      $(".tabs ul .tap-8").removeClass("active");
      $("#tab-1").removeClass("active").addClass("disactive");
      $("#tab-3").removeClass("active").addClass("disactive");
      $("#tab-4").removeClass("active").addClass("disactive");
      $("#tab-5").removeClass("active").addClass("disactive");
      $("#tab-6").removeClass("active").addClass("disactive");
      $("#tab-7").removeClass("active").addClass("disactive");
      $("#tab-8").removeClass("active").addClass("disactive");
      $(this).addClass("active");
      $("#tab-2").removeClass("disactive").addClass("active");
     // $(".tabs .hr .discuss").removeClass("disactive").addClass("active")
    });
    $(".tabs ul .tap-3").click(function(){
      $(".tabs ul .tap-1").removeClass("active");
      $(".tabs ul .tap-2").removeClass("active");
      $(".tabs ul .tap-4").removeClass("active");
      $(".tabs ul .tap-5").removeClass("active");
      $(".tabs ul .tap-6").removeClass("active");
      $(".tabs ul .tap-7").removeClass("active");
      $(".tabs ul .tap-8").removeClass("active");
      $("#tab-1").removeClass("active").addClass("disactive");
      $("#tab-2").removeClass("active").addClass("disactive");
      $("#tab-4").removeClass("active").addClass("disactive");
      $("#tab-5").removeClass("active").addClass("disactive");
      $("#tab-6").removeClass("active").addClass("disactive");
      $("#tab-7").removeClass("active").addClass("disactive");
      $("#tab-8").removeClass("active").addClass("disactive");
      $(this).addClass("active");
      $("#tab-3").removeClass("disactive").addClass("active");
     // $(".tabs .hr .discuss").removeClass("disactive").addClass("active")
    });
    $(".tabs ul .tap-4").click(function(){
      $(".tabs ul .tap-1").removeClass("active");
      $(".tabs ul .tap-2").removeClass("active");
      $(".tabs ul .tap-3").removeClass("active");
      $(".tabs ul .tap-5").removeClass("active");
      $(".tabs ul .tap-6").removeClass("active");
      $(".tabs ul .tap-7").removeClass("active");
      $(".tabs ul .tap-8").removeClass("active");
      $("#tab-1").removeClass("active").addClass("disactive");
      $("#tab-2").removeClass("active").addClass("disactive");
      $("#tab-3").removeClass("active").addClass("disactive");
      $("#tab-5").removeClass("active").addClass("disactive");
      $("#tab-6").removeClass("active").addClass("disactive");
      $("#tab-7").removeClass("active").addClass("disactive");
      $("#tab-8").removeClass("active").addClass("disactive");
      $(this).addClass("active");
      $("#tab-4").removeClass("disactive").addClass("active");
     // $(".tabs .hr .discuss").removeClass("disactive").addClass("active")
    });
    $(".tabs ul .tap-5").click(function(){
      $(".tabs ul .tap-1").removeClass("active");
      $(".tabs ul .tap-2").removeClass("active");
      $(".tabs ul .tap-3").removeClass("active");
      $(".tabs ul .tap-4").removeClass("active");
      $(".tabs ul .tap-6").removeClass("active");
      $(".tabs ul .tap-7").removeClass("active");
      $(".tabs ul .tap-8").removeClass("active");
      $("#tab-1").removeClass("active").addClass("disactive");
      $("#tab-2").removeClass("active").addClass("disactive");
      $("#tab-3").removeClass("active").addClass("disactive");
      $("#tab-4").removeClass("active").addClass("disactive");
      $("#tab-6").removeClass("active").addClass("disactive");
      $("#tab-7").removeClass("active").addClass("disactive");
      $("#tab-8").removeClass("active").addClass("disactive");
      $(this).addClass("active");
      $("#tab-5").removeClass("disactive").addClass("active");
     // $(".tabs .hr .discuss").removeClass("disactive").addClass("active")
    });
    $(".tabs ul .tap-6").click(function(){
      $(".tabs ul .tap-1").removeClass("active");
      $(".tabs ul .tap-2").removeClass("active");
      $(".tabs ul .tap-3").removeClass("active");
      $(".tabs ul .tap-4").removeClass("active");
      $(".tabs ul .tap-5").removeClass("active");
      $(".tabs ul .tap-7").removeClass("active");
      $(".tabs ul .tap-8").removeClass("active");
      $("#tab-1").removeClass("active").addClass("disactive");
      $("#tab-2").removeClass("active").addClass("disactive");
      $("#tab-3").removeClass("active").addClass("disactive");
      $("#tab-4").removeClass("active").addClass("disactive");
      $("#tab-5").removeClass("active").addClass("disactive");
      $("#tab-6").removeClass("active").addClass("disactive");
      $("#tab-8").removeClass("active").addClass("disactive");
      $(this).addClass("active");
      $("#tab-6").removeClass("disactive").addClass("active");
     // $(".tabs .hr .discuss").removeClass("disactive").addClass("active")
    });
    $(".tabs ul .tap-7").click(function(){
      $(".tabs ul .tap-1").removeClass("active");
      $(".tabs ul .tap-2").removeClass("active");
      $(".tabs ul .tap-3").removeClass("active");
      $(".tabs ul .tap-4").removeClass("active");
      $(".tabs ul .tap-5").removeClass("active");
      $(".tabs ul .tap-6").removeClass("active");
      $(".tabs ul .tap-8").removeClass("active");
      $("#tab-1").removeClass("active").addClass("disactive");
      $("#tab-2").removeClass("active").addClass("disactive");
      $("#tab-3").removeClass("active").addClass("disactive");
      $("#tab-4").removeClass("active").addClass("disactive");
      $("#tab-5").removeClass("active").addClass("disactive");
      $("#tab-6").removeClass("active").addClass("disactive");
      $("#tab-8").removeClass("active").addClass("disactive");
      $(this).addClass("active");
      $("#tab-7").removeClass("disactive").addClass("active");
     // $(".tabs .hr .discuss").removeClass("disactive").addClass("active")
    });
    $(".tabs ul .tap-8").click(function(){
      $(".tabs ul .tap-1").removeClass("active");
      $(".tabs ul .tap-2").removeClass("active");
      $(".tabs ul .tap-3").removeClass("active");
      $(".tabs ul .tap-4").removeClass("active");
      $(".tabs ul .tap-5").removeClass("active");
      $(".tabs ul .tap-6").removeClass("active");
      $(".tabs ul .tap-7").removeClass("active");
      $("#tab-1").removeClass("active").addClass("disactive");
      $("#tab-2").removeClass("active").addClass("disactive");
      $("#tab-3").removeClass("active").addClass("disactive");
      $("#tab-4").removeClass("active").addClass("disactive");
      $("#tab-5").removeClass("active").addClass("disactive");
      $("#tab-6").removeClass("active").addClass("disactive");
      $("#tab-7").removeClass("active").addClass("disactive");
      $(this).addClass("active");
      $("#tab-8").removeClass("disactive").addClass("active");
     // $(".tabs .hr .discuss").removeClass("disactive").addClass("active")
    });

});