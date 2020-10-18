export function getDateTime() {
    var d = new Date, dformat = [
            d.getDate(), d.getMonth() + 1,
            d.getFullYear()].join('/') + ' ' +
        [d.getHours(),
            d.getMinutes(),
            d.getSeconds()].join(':');

    return dformat;
}

export function log_request(url, body) {
    let timeRequest = getDateTime()
    console.log("#################");
    console.log(timeRequest + " | REQUEST : " + url);
    if (body) console.log("WITH BODY : " + JSON.stringify(body));

    return timeRequest;
}

export function log_response(url, response, timeRequest) {
    console.log("#################");
    console.log(getDateTime() + " | RESPONSE From " + (typeof timeRequest !== 'undefined' ? "Request at " + timeRequest + " -> " : "") + url);
    console.log(response);
    console.log("#################");
}

export function log_error(url, response) {
    console.log("##### ERROR : " + url + "#########")
    console.log(response);
    console.log("#################");
}

export function log_common(title, response) {
    console.log("################# " + title + " #################")
    console.log(response);
    console.log("################# " + title + " #################")
}
