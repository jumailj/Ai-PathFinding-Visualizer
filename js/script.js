"use strict";
console.log("::: script Loaded::: ");

slider = document.getElementById("slider_value");
output = document.getElementById("set_value");

window.onload = function () {
  // functions calls.
  generate_grid();
  visualizer_event_listeners();

  console.log("vlue output " + output);
  output.innerHTML = slider.value + " :M/s";

  // should not call here.
  //  randomized_depth_first();
  menu_event_listeners();
};

slider.oninput = function () {
  output.innerHTML = slider.value + " :M/s";
  maze_solver_algo_speed = slider.value;
};
