import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeOrbits() {
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = host.current;
    if (!el) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 50);
    camera.position.z = 7;
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(el.clientWidth, el.clientHeight);
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);
    const group = new THREE.Group();
    scene.add(group);
    const sphere = new THREE.Mesh(new THREE.IcosahedronGeometry(1.05, 2), new THREE.MeshStandardMaterial({ color: 0xe3b1aa, roughness: 0.28, metalness: 0.16, wireframe: true }));
    group.add(sphere);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.55, 0.012, 6, 120), new THREE.MeshBasicMaterial({ color: 0xb56b7b, transparent: true, opacity: 0.52 }));
    ring.rotation.set(0.8, 0.35, 0.2);
    group.add(ring);
    const stars = new THREE.BufferGeometry();
    const points = new Float32Array(180 * 3);
    for (let i = 0; i < 180; i++) { points[i * 3] = (Math.random() - 0.5) * 7; points[i * 3 + 1] = (Math.random() - 0.5) * 5; points[i * 3 + 2] = (Math.random() - 0.5) * 3; }
    stars.setAttribute('position', new THREE.BufferAttribute(points, 3));
    const dust = new THREE.Points(stars, new THREE.PointsMaterial({ color: 0xc79579, size: 0.025, transparent: true, opacity: 0.72 }));
    scene.add(dust);
    scene.add(new THREE.AmbientLight(0xffffff, 1.8));
    const light = new THREE.PointLight(0xffd7cc, 30);
    light.position.set(3, 3, 5);
    scene.add(light);
    let frame = 0;
    let active = true;
    const draw = () => { if (!active) return; frame = requestAnimationFrame(draw); group.rotation.y += 0.0022; group.rotation.x = Math.sin(Date.now() * 0.00022) * 0.12; dust.rotation.y -= 0.00025; renderer.render(scene, camera); };
    draw();
    const resize = () => { if (!el) return; camera.aspect = el.clientWidth / el.clientHeight; camera.updateProjectionMatrix(); renderer.setSize(el.clientWidth, el.clientHeight); };
    const observer = new ResizeObserver(resize);
    observer.observe(el);
    return () => { active = false; cancelAnimationFrame(frame); observer.disconnect(); scene.traverse((o) => { if (o instanceof THREE.Mesh || o instanceof THREE.Points) { o.geometry.dispose(); const m = o.material; if (Array.isArray(m)) m.forEach((x) => x.dispose()); else m.dispose(); } }); renderer.dispose(); renderer.domElement.remove(); };
  }, []);
  return <div className="three-orbits" ref={host} aria-hidden="true" />;
}
