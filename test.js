const fs = require('fs');
const { performance } = require('perf_hooks');

eval(fs.readFileSync('tsp_hk.js') + '');
eval(fs.readFileSync('tsp_ls.js') + '');

hk_data = [];
ls_data = [];
i = 0;

// Copy and paste this code with a different graph for as many as I need
graph = [[]];
start = performance.now();
temp = tsp_hk(graph);
end = performance.now();
hk_data[i] = [temp, end - start];
start = performance.now();
temp = tsp_ls(graph);
end = performance.now();
ls_data[i] = [temp, end - start];



