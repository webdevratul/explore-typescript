// ENUMS aikahne type decleare korlam and setae interface a type a use korlam sei onujaye response object a use korlam and clg korlam.

enum Rtype {
  SUCCESS,
  FAILURE,
  UNAUTHENTICATED,
  FORBIDDEN,
}

interface APIResponse<T> {
  status: number;
  type: Rtype;
  data: T;
}

const response1: APIResponse<string> = {
  status: 200,
  type: Rtype.FAILURE,
  data: "hello",
};

console.log(response1);
