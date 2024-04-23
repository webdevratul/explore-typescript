"use strict";
// ENUMS aikahne type decleare korlam and setae interface a type a use korlam sei onujaye response object a use korlam and clg korlam.
var Rtype;
(function (Rtype) {
    Rtype[Rtype["SUCCESS"] = 0] = "SUCCESS";
    Rtype[Rtype["FAILURE"] = 1] = "FAILURE";
    Rtype[Rtype["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
    Rtype[Rtype["FORBIDDEN"] = 3] = "FORBIDDEN";
})(Rtype || (Rtype = {}));
const response1 = {
    status: 200,
    type: Rtype.FAILURE,
    data: "hello",
};
console.log(response1);
