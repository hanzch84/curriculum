let nodes = [];
let edges = [];
let data;

function preload() {
    data = loadJSON('criteria.json');
}

function setup() {
    createCanvas(800, 600);
    loadGraph('1~2', '국어');
}

function draw() {
    background(255);
    stroke(0);
    strokeWeight(1);

    // Draw edges
    for (let edge of edges) {
        line(edge.from.x, edge.from.y, edge.to.x, edge.to.y);
    }

    // Draw nodes
    for (let node of nodes) {
        fill(200);
        ellipse(node.x, node.y, 40, 40);
        fill(0);
        textAlign(CENTER, CENTER);
        text(node.label, node.x, node.y);
    }
}

function loadGraph(grade, subject) {
    nodes = [];
    edges = [];
    let filteredData = data.filter(item => item.학년군 === grade && item.과목 === subject);

    for (let i = 0; i < filteredData.length; i++) {
        let node = filteredData[i];
        let x = random(50, width - 50);
        let y = random(50, height - 50);
        nodes.push({ id: node.번호, label: node.성취기준, x, y });
    }

    for (let node of nodes) {
        for (let other of nodes) {
            if (node !== other) {
                edges.push({ from: node, to: other });
            }
        }
    }
}
