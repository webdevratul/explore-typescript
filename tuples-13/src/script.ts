// jehetu typeScript tai suru te jei type er array chilo segula amra chailei poriborton korte parbo jmn 3 ke poriborton kore er kta number mani string number and object a rekhe je konokisu change kora possible
let a = [3, "hello", { p: 3 }];

a[0] = 6;

// TUPLES aktu alada like first a ami chassi akta number second a string third a object akhn porobortite kono valu assign re assign korleo amader ai same order ta maintain korte hobe
let b: [number, string, object] = [4, "world", { t: 1 }];
