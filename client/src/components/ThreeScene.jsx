import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const ThreeScene = ({ playAnimation, feedAnimation, sleepAnimation, cleanAnimation }) => {
  const canvasRef = useRef();
  let idleAction, rollAction, feedAction, sleepAction, cleanAction;

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas, alpha: true });

    const fov = 30;
    const aspect = 2;
    const near = 0.1;
    const far = 100;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(10, 10, 20);
    camera.lookAt(new THREE.Vector3(0, 5, 0));

    const scene = new THREE.Scene();

    const skyColor = 0xB1E1FF; // light blue
    const groundColor = 0xB97A20; // brownish orange
    const intensity = 2;
    const hemisphereLight = new THREE.HemisphereLight(
      skyColor,
      groundColor,
      intensity
    );
    scene.add(hemisphereLight);

    const directionalColor = 0xFFFFFF;
    const directionalIntensity = 2.5;
    const directionalLight = new THREE.DirectionalLight(
      directionalColor,
      directionalIntensity
    );
    directionalLight.position.set(5, 10, 2);
    scene.add(directionalLight);
    scene.add(directionalLight.target);

    function dumpObject(obj, lines = [], isLast = true, prefix = '') {
      const localPrefix = isLast ? '└─' : '├─';
      lines.push(
        `${prefix}${prefix ? localPrefix : ''}${obj.name || '*no-name*'} [${
          obj.type
        }]`
      );
      const newPrefix = prefix + (isLast ? '  ' : '│ ');
      const lastNdx = obj.children.length - 1;
      obj.children.forEach((child, ndx) => {
        const isLast = ndx === lastNdx;
        dumpObject(child, lines, isLast, newPrefix);
      });
      return lines;
    }

    let dragon;
    let mesh;

    const gltfLoader = new GLTFLoader();
    gltfLoader.load('./animals/dragon.glb', (gltf) => {
      const root = gltf.scene;
      dragon = root.getObjectByName('Rig');

      dragon.position.set(0, 0, 0);
      dragon.scale.set(2, 2, 2);
      scene.add(dragon);

      mesh = dragon.getObjectByName('Dragon_LOD3');
      mesh.morphTargetDictionary = mesh.userData.targetNames;
      console.log(mesh.morphTargetDictionary);
    });

    const mixers = [];
    let currentAction = idleAction;

    gltfLoader.load('./animals/animations/dragon_animations.glb', (gltf) => {
      const mixer = new THREE.AnimationMixer(dragon);
      const clips = gltf.animations;

      const idleClip = THREE.AnimationClip.findByName(clips, 'Idle_A');
      const rollClip = THREE.AnimationClip.findByName(clips, 'Roll');
      const feedClip = THREE.AnimationClip.findByName(clips, 'Eat');
      const sleepClip = THREE.AnimationClip.findByName(clips, 'Death');
      const cleanClip = THREE.AnimationClip.findByName(clips, 'Swim');

      idleAction = mixer.clipAction(idleClip);
      rollAction = mixer.clipAction(rollClip);
      feedAction = mixer.clipAction(feedClip);
      sleepAction = mixer.clipAction(sleepClip);
      cleanAction = mixer.clipAction(cleanClip);

      currentAction = idleAction; // Ensure currentAction is always initialized
      currentAction.play();

      mixers.push(mixer);

    });

    const resizeRendererToDisplaySize = (renderer) => {
      const canvas = renderer.domElement;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const needResize = canvas.width !== width || canvas.height !== height;
      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return needResize;
    };

    let then = 0;

    const render = (now) => {
      now *= 0.0005;
      const deltaTime = now - then;
      then = now;

      if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }

      if (playAnimation && currentAction !== rollAction) {
        currentAction.stop();
        rollAction.play();
        currentAction = rollAction;
      } else if (feedAnimation && currentAction !== feedAction) {
        currentAction.stop();
        feedAction.play()
        currentAction = feedAction;
      } else if (sleepAnimation && currentAction !== sleepAction) {
        currentAction.stop();
        sleepAction.play()
        currentAction = sleepAction;
      } else if (cleanAnimation && currentAction !== cleanAction) {
        currentAction.stop();
        cleanAction.play()
        currentAction = cleanAction;
      } else if (!playAnimation && !feedAnimation && !sleepAnimation && !cleanAnimation && currentAction !== idleAction) {
        currentAction.stop();
        idleAction.play();
        currentAction = idleAction;
      }

      for (const mixer of mixers) {
        mixer.update(deltaTime);
      }

      renderer.render(scene, camera);

      requestAnimationFrame(render);
    };

    requestAnimationFrame(render);

    // Cleanup
    return () => {
      renderer.dispose();
    };
  }, [playAnimation, feedAnimation, sleepAnimation, cleanAnimation]);

  return <canvas ref={canvasRef} id="c" />;
};

export default ThreeScene;