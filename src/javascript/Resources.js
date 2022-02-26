import * as THREE from "three";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const model = "src/models/model.glb";

export default class Resources {
  constructor(_options) {
    this.scene = _options.scene;
    const loader = new GLTFLoader();
    console.log("scene", this.scene);
    loader.load(
      "src/models/model.glb",
      (gltf) => {
        this.scene.add(gltf.scene);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );
  }
}
