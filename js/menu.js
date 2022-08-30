"use strict"
console.log("::: menu Loaded::: ");

function hidden_clear() {
    for (let i = 0; i < timeouts.length; i++ ) {
        clearTimeout(timeouts[i]);
    }

    // timeouts[];
    clearInterval(my_interval);

    // delete pre-grid;
    delete_grid();
    // generate new grid;
    generate_grid();
    // handle mouse inputs;
    visualizer_event_listeners();
}

function clear(){
    console.log('clear function called');
    document.querySelector("#slct_2").value = "0";

    // whiche clear pre-grid, create new grid, handle mouse input
    hidden_clear();
}


function menu_event_listeners()
{
    document.querySelector("#slct_2").addEventListener('change',event=>{
        console.log('........................clearing.......................... preivous algo');
        hidden_clear();
        maze_generator();
    })

    document.querySelector("#clear").addEventListener('click', event=>{
        console.log(':::::button pressed::::');

        let start_temp = start_pos;
		let target_temp = target_pos;

        // directly calling hidden_clear() function;
		clear();

		place_to_cell(start_pos[0], start_pos[1]).classList.remove("start");
		place_to_cell(start_temp[0], start_temp[1]).classList.add("start");
		place_to_cell(target_pos[0], target_pos[1]).classList.remove("target");
		place_to_cell(target_temp[0], target_temp[1]).classList.add("target");
        
		start_pos = start_temp;
		target_pos = target_temp;
    });


    document.querySelector("#play").addEventListener('click', event=>{
        console.log('pressed play button');

        if(generating) {
            document.querySelector("#slct_2").value = "0";
        }

        generating = false;
        clear_grid();
        maze_solver();

    });
}

// maze_generator();
// menu_event_listeners();