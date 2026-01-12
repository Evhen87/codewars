//Task

// Introduction
// Welcome Adventurer. Your aim is to navigate the maze and reach the finish point without touching any walls. Doing so will kill you instantly!
//     Task
// You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves, you should return Lost.
//     The Maze array will look like
//
// maze = [[1,1,1,1,1,1,1],
//     [1,0,0,0,0,0,3],
//     [1,0,1,0,1,0,1],
//     [0,0,1,0,0,0,1],
//     [1,0,1,0,1,0,1],
//     [1,0,0,0,0,0,1],
//     [1,2,1,0,1,0,1]]
// ..with the following key
//
// 0 = Safe place to walk
// 1 = Wall
// 2 = Start Point
// 3 = Finish Point
// direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"
// Rules
// 1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.
//
// 2. The start and finish positions will change for the final tests.
//
// 3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.
//
// 4. If you reach the end point before all your moves have gone, you should return Finish.
//
// 5. If you hit any walls or go outside the maze border, you should return Dead.
//
// 6. If you find yourself still in the maze after using all the moves, you should return Lost.
//     Good luck, and stay safe!

//Solution

function mazeRunner(maze, directions) {
    let position = []
    for (let y = 0; y < maze.length; y++) {
        for (let x = 0; x < maze[y].length; x++) {
            if (maze[y][x] === 2) {
                position[0] = x
                position[1] = y
            }
        }
    }
    for (let i = 0; i < directions.length; i++ ) {
        switch (directions[i]) {
            case "N":
                position[1]--
                break
            case "E":
                position[0]++
                break
            case "S":
                position[1]++
                break
            case "W":
                position[0]--
                break
        }
        if (position[1] < 0 || position[1] >= maze.length ||
            position[0] < 0 || position[0] >= maze[0].length) {
            return "Dead"
        }

        if (maze[position[1]][position[0]] === 1) return "Dead"
        if (maze[position[1]][position[0]] === 3) return "Finish"
    }
    if (maze[position[1]][position[0]] === 3) return "Finish"
    else return "Lost"
}