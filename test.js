const fs = require('fs');
const { performance } = require('perf_hooks');

eval(fs.readFileSync('tsp_hk.js') + '');
eval(fs.readFileSync('tsp_ls.js') + '');
eval(fs.readFileSync('generateAdjMatrix.js') + '');

const filePath = 'tsp_results.json';

// Load existing data (if file exists)
let hk_data = [];
let ls_data = [];

if (fs.existsSync(filePath)) {
    const existing = JSON.parse(fs.readFileSync(filePath));
    hk_data = existing.heldKarp || [];
    ls_data = existing.localSearch || [];
}

for (let i = 0; i <= 22; i++) {
    const graph = generateDistanceAdjMatrix(i, 100);

    // Held-Karp timing
    let start = performance.now();
    const hk_result = tsp_hk(graph);
    let end = performance.now();
    const hk_time = end - start;

    // Local Search timing
    start = performance.now();
    const ls_result = tsp_ls(graph);
    end = performance.now();
    const ls_time = end - start;

    // Append to arrays
    hk_data.push({
        nodes: i,
        result: hk_result,
        time: hk_time
    });

    ls_data.push({
        nodes: i,
        result: ls_result,
        time: ls_time
    });

    // Log output
    console.log(`${i} Nodes Finished`);
    console.log(`Held-Karp Time: ${hk_time.toFixed(4)} ms`);
    console.log(`Local Search Time: ${ls_time.toFixed(4)} ms`);
    console.log();

    // Save updated results to file
    const allData = {
        heldKarp: hk_data,
        localSearch: ls_data
    };

    fs.writeFileSync(filePath, JSON.stringify(allData, null, 2));
}
