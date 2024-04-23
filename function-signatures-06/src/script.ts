// ata akta function signature pore amra add namer function ti create korle se 2 ta number value receaive korbe and number return korbe.

let add: (x: number, y: number) => number;
add = (a: number, b: number) => {
  return a + b;
};

/* =============================================== */

// aikahne amader function signature a bola hoyeche usedetails function ta akta id receaive korbe jeta string othoba number hote parbe and akta object receaive korbe jetar nam hobe userdetails ata name string akare and age number akare receaive korbe. but aikahne name, age change kora jabe nah, but userdetails object name ta amra chaile ai khetre change korte pari.
let useDetails: (
  id: number | string,
  userInfo: {
    name: string;
    age: number;
  }
) => void;

useDetails = (
  id: string | number,
  useDetails: {
    name: string;
    age: number;
  }
) => {};
