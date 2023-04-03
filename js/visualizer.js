"use strict";

console.log("::: visualizer Loaded::: ");
// 0 = > clear path
// -1 = > wall
//  start_pos[][]- > start
//  target_pos[][] -> target
function generate_grid() {
  // x,y value should be same.
  grid_size_x = 40;
  grid_size_y = 40;

  // create new table and assign "my_table" id to table;
  let table = document.createElement("table");
  table.id = "my_table";

  for (let i = 0; i < grid_size_y; i++) {
    // create a new table row
    let row = document.createElement("tr");
    for (let j = 0; j < grid_size_x; j++) {
      // create a new table data;
      let cell = document.createElement("td");
      let class_name = "";

      if ((i + j) % 2 == 0) {
        class_name = "cell cell_1"; // dark grey
      } else {
        class_name = "cell cell_2"; // light grey
      }

      class_name += " x_" + j.toString(10) + " y_" + i.toString(10);
      cell.className = class_name;
      // adding data to row;

      // cell.innerHTML="&nbsp;";
      row.append(cell);
    }
    // adding each row to the table;
    table.appendChild(row);
  }

  document.querySelector("#grid").appendChild(table); // append grid table to "id="#grid" div

  grid = new Array(grid_size_x)
    .fill(0)
    .map(() => new Array(grid_size_y).fill(0)); // assign array to grid.
  /*
        [1] [2]
        [3] [4]
        [5] [6]
    */

  // generate start-pos coordinate { from x,y grid size value};
  start_pos = [Math.floor(grid_size_x / 4), Math.floor(grid_size_y / 2)];

  // generate target-pos coordinate { from x,y grid size value};
  target_pos = [Math.floor((3 * grid_size_x) / 4), Math.floor(grid_size_y / 2)];

  /*
    |Debug| to print: startpos, targetpos value;
    console.log("startpos: "+ start_pos);
    console.log("targetpos: "+target_pos);
    */

  // adjust start pos, targe pos, in odd.
  if (start_pos[0] % 2 == 0) {
    start_pos[0] += 1;
  }
  if (start_pos[1] % 2 == 0) {
    start_pos[1] -= 1;
  }

  if (target_pos[0] % 2 == 0) {
    target_pos[0] += 1;
  }
  if (target_pos[1] % 2 == 0) {
    target_pos[1] -= 1;
  }

  // place the :start point:
  place_to_cell(start_pos[0], start_pos[1]).classList.add("start"); // < add  id="start" to  table td[*]>

  // place the :target poing:
  place_to_cell(target_pos[0], target_pos[1]).classList.add("target"); // <add id="target to table td[*]">
}

// to place the element;
function place_to_cell(x, y) {
  // return the (.x_1 .y_2);
  return document.querySelector(
    ".x_" + x.toString(10) + ".y_" + y.toString(10)
  );
}

// to delete entire grid(talbe);
function delete_grid() {
  document.querySelector("#my_table").remove();
}

// return the cell, x,y coordinates.
function cell_to_place(cell) {
  let text_x = cell.classList[2];
  let text_y = cell.classList[3];

  console.log("cell = " + cell);

  text_x = text_x.split("x_")[1];
  text_y = text_y.split("y_")[1];

  return [parseInt(text_x, 10), parseInt(text_y, 10)];
}

// adding wall;
function add_wall(x, y) {
  let cell = place_to_cell(x, y);
  // cell = > return documet.querySelection();
  // get id like "start" "target" values;

  if (!cell.classList.contains("start") && !cell.classList.contains("target")) {
    grid[x][y] = -1;

    // change grid coordinate to -1, walls;
    // changge the td id " cell_wall";
    cell.classList.add("cell_wall");
  }
}

// removing wall;
function remove_wall(x, y) {
  // set back -1 to 0 for grid { pathfiding algo to workwith};
  grid[x][y] = 0;
  // remove td id" cell_wall";
  place_to_cell(x, y).classList.remove("cell_wall");
}

function clear_grid() {
  if (!grid_clean) {
    // default value is 'true', if grid is generation value must be 'false';
    for (let i = 0; i < timeouts.length; i++) clearTimeout(timeouts[i]);

    timeouts = [];
    clearInterval(my_interval);

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] > -1) {
          remove_wall(i, j);
          // if the algorithm runs, the id contains "cell_algo" "cell_path" must be removed. so gird must be clear
          place_to_cell(i, j).classList.remove("cell_algo");
          place_to_cell(i, j).classList.remove("cell_path");
        } else if (grid[i][j] < -1) {
          add_wall(i, j); /// if the [i][j] 0.
        }

        // remove visisted_cell
        place_to_cell(i, j).classList.remove("visited_cell");
      }
    }
    grid_clean = true; // other functions to should know if the grid is clear or not,
  }
}

function get_node(x, y) {
  if (x >= 0 && x < grid.length && y >= 0 && y < grid[0].length) {
    return grid[x][y];
  }
  return -2;
}

function click_event(event) {
  // even should be passed;
  event.preventDefault();

  if (clicking && event.target.classList.contains("cell")) {
    clear_grid(); // remove all the grid. and data. to place new target node.
    let place = cell_to_place(event.target); // return coordinate value of the node. (1,0), we were clicking on table.
    console.log("targed node: " + place);

    // default value of moving_start: false, and also the node should not be a same node. as "target".

    if (moving_start && !event.target.classList.contains("target")) {
      start_pos = place; // change start_pos value to the current button click coordinate.

      document.querySelector(".start").classList.remove("start");
      event.target.classList.add("start"); // assign "start" id to target. node. where mouse placed;

      if (grid[place[0]][place[1]] < 0) {
        document.querySelector("#slct_2").value = "0"; // maze algorithm change to custom. = >[0];
        remove_wall(place[0], place[1]); // remove the wall and place the start node[x] [y].
      }

      if (generating) {
        // if maze is generating, then value of maze selection list => 0
        document.querySelector("#slct_2").value = "0";
      }
      // switch back to false;
      generating = false;
    } else if (moving_target && !event.target.classList.contains("start")) {
      target_pos = place;
      document.querySelector(".target").classList.remove("target");
      event.target.classList.add("target");

      if (grid[place[0]][place[1]] < 0) {
        document.querySelector("#slct_2").value = "0";
        remove_wall(place[0], place[1]);
      }

      if (generating) {
        document.querySelector("#slct_2").value = "0";
      }

      generating = false;
    } else {
      document.querySelector("#slct_2").value = "0";

      if (grid[place[0]][place[1]] == 0) {
        add_wall(place[0], place[1]);
      } else {
        remove_wall(place[0], place[1]);
      }
    }
  }
}

function visualizer_event_listeners() {
  document.querySelector("#my_table").addEventListener("mousedown", (event) => {
    event.preventDefault();
    clicking = true;

    if (event.target.classList.contains("start")) moving_start = true;

    if (event.target.classList.contains("target")) moving_target = true;

    click_event(event);
  });

  document.querySelector("#my_table").addEventListener("mouseup", (event) => {
    event.preventDefault();
    clicking = false;
    moving_start = false;
    moving_target = false;
  });

  document.querySelector("#my_table").addEventListener("mouseover", (event) => {
    click_event(event);
  });

  document
    .querySelector("#my_table")
    .addEventListener("mouseleave", (event) => {
      event.preventDefault();
      clicking = false;
      moving_start = false;
      moving_target = false;
    });
}

// calling
// generate_grid();
// visualizer_event_listeners();
