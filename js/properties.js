"use strict";

console.log("::: properties Loaded::: ");

// properties.js
const initial_max_grid_size = 47;
const menu_width = 350;

let cell_size;
let grid_size_x;
let grid_size_y;
let grid;

let start_pos;
let target_pos;

let grid_clean = true;
let my_interval;

let moving_start = false;
let moving_target = false;

let clicking = false;

let generating = false;
let timeouts = [];


// algorithm variables;
let node_list;
let node_list_index;

let path_list;
let path_list_index;

let found = false;
let path = false;