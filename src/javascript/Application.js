import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";

import Time from "./Utils/Time";
import Sizes from "./Utils/Sizes";
import Resources from "./Resources";

import Camera from "./Camera";

export default class Application {
  constructor(_options) {
    this.$canvas = _options.$canvas;

    this.time = new Time();
    this.sizes = new Sizes();

    this.setRenderer();

    this.resources = new Resources({ scene: this.scene });

    this.setCamera();
    this.setPasses();
    this.setWorld();
  }

  setConfig() {}

  setRenderer() {
    this.scene = new THREE.Scene();

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(this.sizes.width, this.sizes.height);

    document.body.appendChild(this.renderer.domElement);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    this.scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0xffffff);
    this.scene.add(ambientLight);
  }

  setCamera() {
    this.camera = new Camera({
      time: this.time,
      sizes: this.sizes,
      renderer: this.renderer,
    });

    this.scene.add(this.camera.container);
  }

  setPasses() {
    this.passes = {};
    this.passes.composer = new EffectComposer(this.renderer);

    this.time.on("tick", () => {
      //this.passes.composer.render();
      this.renderer.render(this.scene, this.camera.instance);
    });
  }
  setWorld() {}
}
