// Sample data
const pointsMatrix = [
    [0, 0, 0], // Point 0
    [1, 2, 1], // Point 1
    [2, 1, 0], // Point 2
    [3, 3, 3]  // Point 3
];

const linesMatrix = [
    { name: "Line 1", from: 0, to: 1 },
    { name: "Line 2", from: 1, to: 2 },
    { name: "Line 3", from: 2, to: 3 },
    { name: "Line 4", from: 0, to: 3 }
];

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add points as small spheres
pointsMatrix.forEach(point => {
    const geometry = new THREE.SphereGeometry(0.05, 16, 16);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(point[0], point[1], point[2]);
    scene.add(sphere);
});

// Draw lines
linesMatrix.forEach(line => {
    const from = pointsMatrix[line.from];
    const to = pointsMatrix[line.to];

    const points = [];
    points.push(new THREE.Vector3(from[0], from[1], from[2]));
    points.push(new THREE.Vector3(to[0], to[1], to[2]));

    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });
    const line = new THREE.Line(lineGeometry, lineMaterial);
    scene.add(line);
});

// Set camera position
camera.position.z = 5;

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

// Handle window resize
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});
