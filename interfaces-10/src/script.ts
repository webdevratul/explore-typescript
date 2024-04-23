// module system use korar jonno amader tsconfig a target a es6 and module es2015 and main js file a type module bole dite hobe and import korte hobe js file karon ses mes ata js ayi convert hoye asbe

import { player } from "./classes/player.js";
import { IsPlayer } from "./interfaces/isPlayer.js";

const skib = new player("sakib", 34, "BD");

// tamim aikhane isPlayer interface ta follow korse
let tamim: IsPlayer;
tamim = new player("tamim", 35, "BD");

skib.play();
tamim.play();

/* =================================================================== */

// aikahne amader  drawRectangle function ti akta oject receaive korse jekhane 2 ta value width and length thagbe amra interface a width ta and height ta number nki string type ta defaine kore dilam. onk ta type alias er motoi
interface drawRectangleOptions {
  width: number;
  length: number;
}

function drawRectangle(options: drawRectangleOptions) {
  let width = options.width;
  let length = options.length;
}

// aikahne theke sorasori object baniye pathale amra interface a jetuk bolsi thik setuk e pathano possible but jodi object referance pathai taile change pathate parbo.
const obj = {
  width: 40,
  length: 10,
  height: 20,
};

drawRectangle(obj);

/* =================================================================== */
