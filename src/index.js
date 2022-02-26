import "./styles/main.css";
import Application from "./javascript/Application";

window.application = new Application({
  $canvas: document.getElementById("js-canvas"),
});

// document.body.appendChild(renderer.domElement);

// const pointLight = new THREE.PointLight(0xffffff);
// pointLight.position.set(20, 20, 20);
// scene.add(pointLight);

// const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
// scene.add(directionalLight);

// const ambientLight = new THREE.AmbientLight(0xffffff);
// scene.add(ambientLight);

// function animate() {
//   requestAnimationFrame(animate);

//   renderer.render(scene, camera);
// }
// animate();
