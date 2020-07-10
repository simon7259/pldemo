import http from "http.js"


function fetchList(params) {
    return http.get("xxx", {
        params: params
    })
}
