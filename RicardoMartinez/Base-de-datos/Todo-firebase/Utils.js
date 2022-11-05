export function getUUID() {
    return "xxxxxxx-xxxx-4xxx-yxx-xxxxxxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) |0,
        v =c == "x" ? r : (r & 0x3) |0x8;
        return v.toString(16);
    });
}