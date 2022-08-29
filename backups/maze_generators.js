"use strict";

function get_neighbours(cell, distance)
{
    let up = [cell[0], cell[1]-distance];
    let right = [cell[0] + distance, cell[1]];
    let down = [cell[0], cell[1] + distance];
    let left = [cell[0] - distance, cell[1]];
    return [up, right, down , left];
}

//generate random number betwwen main and max;
function random_int(min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
}

function fill() {
    for (let i = 0; i < grid.length; i++ ) {
        for (let j = 0; j < grid[0].length(); j++ ) {
            add_wall(i,j);
        }
    }
}

function fill_wall() {
    for (let i = 0; i < grid.length; i++ ) {
        for (let j = 0; j < grid[0].length; j++ ) {
            if ( i % 2== 0 || j %2 == 0) {
                add_wall(i,j);
            }
        }
    }
}

function enclose()
{
	for (let i = 0; i < grid.length; i++)
	{
		add_wall(i, 0);
		add_wall(i, grid[0].length - 1);
	}

	for (let j = 0; j < grid[0].length; j++)
	{
		add_wall(0, j);
		add_wall(grid.length - 1, j);
	}
}


function randomized_depth_first() {
    fill();
    let current_cell = [1,1];
    remove_wall(current_cell[0], current_cell[1]);

    grid[current_cell[0]][current_cell[1]] = 1;
    let stack = [current_cell];

    my_interval = window.setInterval(function(){

        if ( stack.length == 0) 
        {
            clearInterval(my_interval);
            clear_grid();
            generating = false;
            return;
        }

        current_cell = stack.pop();
        let neighbours=[];
        let list = get_neighbours(current_cell, 2);

        for (let i = 0; i < list.length; i++ ) 
        {
            if (get_node(list[i][0], list[i][1]) == -1 || get_node(list[i][0], list[i][1]) == 0) {
                neighbours.push(list[i]);
            }
        }

        if (neighbours.length > 0) 
        {
            stack.push(current_cell);
            let chosen_cell = neighbours[random_int(0,neighbours.length)];
            remove_wall((current_cell[0] + chosen_cell[0])/ 2, (current_cell[1] + chosen_cell[1])/2);
            remove_wall(chosen_cell[0], chosen_cell[1]);

            grid[chosen_cell[0]][chosen_cell[1]] = 1;
            stack.push(chosen_cell);
        } 
        else 
        {
            remove_wall(current_cell[0], current_cell[1]);
            grid[current_cell[0]] [current_cell[1]] = 2;
            place_to_cell(current_cell[0], current_cell[1]).classList.add("visited_cell");

            for(let i = 0; i < list.length; i++ ) {
                let wall = [(current_cell[0] + list[i][0]) /2, (current_cell[1] + list[i][1])/2];

                if(get_node(list[i][0], list[i][1]) == 2 && get_node(wall[0], wall[1]) > -1)
                {
                    place_to_cell(wall[0], wall[1]).classList.add("visited_cell");
                }
            }

        }
    }, 16);
    
}
randomized_depth_first();
