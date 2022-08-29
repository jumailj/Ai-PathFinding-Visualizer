"use strict"

function clear(){
    document.querySelector("#slct_2").value = "0";
    // no hidden clear;
}

function menu_event_listeners()
{
    document.querySelector("#slct_2").addEventListener('change',event=>{
        maze_generator();
    })

}

// maze_generator();
// menu_event_listeners();