const test = require("ava");
const Utils = require("../../lib/utils");



test.cb("Layout Default", t => {
    const context = {
        head: "",
        css: "",
        script: ""
    };
    const layout = Utils.BuildLayout(context);
    const expected = { 
        start: '<!DOCTYPE html><html><head><style type="text/css"></style></head><body><div id="app">',
        end: '</div></body></html>' 
    }
    t.deepEqual(layout, expected);
    t.end();
})

