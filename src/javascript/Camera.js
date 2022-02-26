import * as THREE from "three";

export default class Camera {
  constructor(_options) {
    this.time = _options.time;
    this.sizes = _options.sizes;
    this.renderer = _options.renderer;

    this.container = new THREE.Object3D();
    this.container.matrixAutoUpdate = false;

    this.setInstance();
  }

  setAngle() {}

  setInstance() {
    this.instance = new THREE.PerspectiveCamera(75, this.sizes.viewport.width / this.sizes.viewport.height, 1, 80);
    this.instance.position.y = 4;
    this.instance.position.z = 10;
    this.container.add(this.instance);
  }

  setZoom() {}
  setOrbitControls() {}
}
