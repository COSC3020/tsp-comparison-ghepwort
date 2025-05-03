const fs = require('fs');
const { performance } = require('perf_hooks');

eval(fs.readFileSync('tsp_hk.js') + '');
eval(fs.readFileSync('tsp_ls.js') + '');
eval(fs.readFileSync('generateAdjMatrix.js') + '');



// Held-Karp Testing
hk_data = [];
for (i = 0; i <= 20; i++) {
    graph = generateDistanceAdjMatrix(i, 100);

    start = performance.now();
    hk_result = tsp_hk(graph);
    end = performance.now();
    hk_data.push([i, hk_result, end - start]);

    console.log(`${i} Nodes Finished`);
}


hk_data_temp = hk_data.map(inner => inner[0]);
hk_data_temp = hk_data_temp.join('\n');
fs.writeFile('hk_data_1.txt', hk_data_temp, (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File written successfully!');
    }
});


hk_data_temp = hk_data.map(inner => inner[1]);
hk_data_temp = hk_data_temp.join('\n');
fs.writeFile('hk_data_2.txt', hk_data_temp, (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File written successfully!');
    }
});


hk_data_temp = hk_data.map(inner => inner[2]);
hk_data_temp = hk_data_temp.join('\n');
fs.writeFile('hk_data_3.txt', hk_data_temp, (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File written successfully!');
    }
});



console.log();
console.log();
console.log();
console.log();



// Local Search Testing
ls_data = [];
for (let i = 0; i <= 20000; i += 1000) {
    graph = generateDistanceAdjMatrix(i, 100);

    start = performance.now();
    ls_result = tsp_ls(graph);
    end = performance.now();
    ls_data.push([i, ls_result, end - start]);

    console.log(`${i} Nodes Finished`);
}


hk_data_temp = ls_data.map(inner => inner[0]);
hk_data_temp = hk_data_temp.join('\n');
fs.writeFile('ls_data_1.txt', hk_data_temp, (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File written successfully!');
    }
});


hk_data_temp = ls_data.map(inner => inner[1]);
hk_data_temp = hk_data_temp.join('\n');
fs.writeFile('ls_data_2.txt', hk_data_temp, (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File written successfully!');
    }
});


hk_data_temp = ls_data.map(inner => inner[2]);
hk_data_temp = hk_data_temp.join('\n');
fs.writeFile('ls_data_3.txt', hk_data_temp, (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File written successfully!');
    }
});