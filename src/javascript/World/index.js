export default class {
  constructor(_options) {
    this.resources = _options.resources;

    this.container = new THREE.Object3D();
  }

  setMaterials() {
    this.materials = new Materials({ resources: this.resources });
  }
}
