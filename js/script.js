"use strict"
console.log("::: script Loaded::: ");

window.onload = function() {
    // functions calls.
    generate_grid();
    visualizer_event_listeners();

    // should not call here.
   //  randomized_depth_first();
    menu_event_listeners();
}