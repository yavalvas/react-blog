import $ from "jquery";
import Promise from "bluebird";
/**
 * Function to convert jquery deferred to promise like style
 * @param url path to endpoitn
 * @param type request type (GET|POST etc)
 * @param params url parameters as object
 * @param body request body (object to json)
 * @returns {Promise}
 */

export function request({url, type, params, body={}}) {
    if (!_.isUndefined(params)) {
        url = `${url}${$.param(params, true)}`;
    }
    return $.ajax(url, {
            type,
            data: body,
            contentType: "application/json",
            dataType: "json"
        })
            .then((result) => {
                Promise.resolve(result);
            })
            .catch((error) => {
                let customError = new Error(error.status ? error.message || "MALFORMED_ERROR" : "MALFORMED_ERROR");
                Promise.reject(customError);
            })
}


export const GET = ({url, params}) => {
    return request({url, type: "GET", params})
};

export const POST = ({url, body}) => {
    return request({url, type: "POST", body})
};

export const PUT = ({url, body}) => {
    return request({url, type: "PUT", body})
};