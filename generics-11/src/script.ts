// GENRICS aikahne amra ai T er structure akare akta object receaive korlam aitake bole GENRICS akhn amra user. dilei se trac korte parbe user er vitore ki ache. aikahne amra chaile bolte dite pari je must object ke extendeds korte hobe abar chaile je object ta asbe setar o akta structure dite pari.
// const addId = <
//   T extends {
//     name: string;
//     age: number;
//   }
// >(
//   obj: T
// ) => {
//   let id = Math.floor(Math.random() * 100);
//   return { ...obj, id };
// };

// let user = addId({
//   name: "Masrafi",
//   age: 50,
// });

/* =============================================================== */

interface APIResponse<T> {
  status: number;
  type: string;
  data: T;
}

// uporer interface ta akhn response1 a use korlam. aikahn theke pathate hobe obejct jodi amra data te string dayi taile string pathate pari
const response1: APIResponse<object> = {
  status: 200,
  type: "good",
  data: {
    name: "Test",
    something: 300,
  },
};
