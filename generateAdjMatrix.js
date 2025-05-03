function generateDistanceAdjMatrix(numNodes, maxDistance = 10) {
    const matrix = [];

    // Create an empty matrix
    for (let i = 0; i < numNodes; i++) {
        const row = [];
        for (let j = 0; j < numNodes; j++) {
            const distance = Math.floor(Math.random() * maxDistance) + 1;
            row.push(distance);
        }
        matrix.push(row);
    }

    return matrix;
}
