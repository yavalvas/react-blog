import {POST} from "./middleware_utils";

let self = {
    registrateUser: ({payload: {}})=>{
        return POST({url: "/signup", body: payload});
    }
};

module.exports = self;