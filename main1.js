// main.js

// Initialize the scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer({canvas: document.getElementById("myCanvas")});
renderer.setSize( window.innerWidth, window.innerHeight );

// Add controls to the camera
const controls = new THREE.OrbitControls( camera, renderer.domElement );

// Load textures
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load( 'textures/texture.png' );
const texture1 = textureLoader.load( 'textures/texture1.jpg' );
const moon = textureLoader.load( 'textures/moon.jpg' );
const normalMap = textureLoader.load( 'textures/normal_map.jpg' );

// Create a cube
const cubeGeometry = new THREE.BoxGeometry();
const cubeMaterial = new THREE.MeshPhongMaterial( { map: texture, normalMap: normalMap } );
const cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
scene.add( cube );

// Create a sphere
const sphereGeometry = new THREE.SphereGeometry( 1, 64, 64 );
const sphereMaterial = new THREE.MeshPhongMaterial( { map: texture1, normalMap: normalMap } );
const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
sphere.position.x = -2;
scene.add( sphere );

// Create a plane
const planeGeometry = new THREE.PlaneGeometry( 10, 10 );
const planeMaterial = new THREE.MeshPhongMaterial( { map: moon, normalMap: normalMap } );
const plane = new THREE.Mesh( planeGeometry, planeMaterial );
plane.position.y = -2;
plane.rotation.x = -Math.PI / 2;
scene.add( plane );

// Add lights
const ambientLight = new THREE.AmbientLight( 0xffffff, 0.5 );
scene.add( ambientLight );

const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
directionalLight.position.set( 0, 1, 1 );
scene.add( directionalLight );

// Render the scene
function animate() {
  requestAnimationFrame( animate );
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;
  renderer.render( scene, camera );
}
animate();