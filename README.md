# 🌌 Three.js Solar System

"Three.js Solar System" is an interactive 3D simulation of our solar system, built using Three.js. Explore the planets, their orbits, and rotations in a visually stunning environment with realistic textures and lighting.

---

## 🚀 **Features**
- 🌞 **Realistic Solar System**: Includes the Sun, Mercury, Venus, Earth (with Moon), Mars, Jupiter, Saturn (with rings), Uranus, and Neptune.
- 🪐 **Planet Orbits and Rotations**: Each planet orbits the Sun at a scaled speed and rotates on its axis.
- 🌠 **Immersive Background**: A starry skybox created using a cube texture for a space-like experience.
- 💡 **Lighting**: Point light source at the Sun's position to illuminate the planets.
- 🎮 **Interactive Controls**: Use OrbitControls to zoom, pan, and rotate the camera around the scene.
- 🔄 **Reset View**: Press the **Spacebar** to reset the camera to the default position.

---

## 📸 **Screenshots**
*(You can add screenshots of your project here to showcase the visuals!)*

---

## 💾 **How to Run the Project**

1. Clone the repository:
   ```bash
   git clone https://github.com/NoBoDy1610/Solar-System.git
   ```
2. Ensure the project folder contains the following files:
   - `index.html`
   - `kostka.js` (main JavaScript file)
   - `three.js` (Three.js library)
   - `img/` folder with the following assets:
     - Skybox textures: `sky_Back.bmp`, `sky_Bottom.bmp`, `sky_Front.bmp`, `sky_Left.bmp`, `sky_Right.bmp`, `sky_Top.bmp`
     - Planet textures: `sun.jpg`, `mercury.jpg`, `venus.jpg`, `earth.jpg`, `moon.jpg`, `mars.jpg`, `jupiter.jpg`, `saturn.jpg`, `saturn_ring.png`, `uranus.jpg`, `neptun.jpg`

3. Open `index.html` in a modern web browser (Chrome, Firefox, etc.).

**Note**: The project uses an external dependency (`OrbitControls.js`) loaded via CDN. Ensure you have an active internet connection for the controls to work.

---

## 🌟 **Technologies Used**
- **Three.js**: For 3D rendering and scene management.
- **JavaScript**: Core logic for planet creation, animation, and controls.
- **HTML5**: Basic structure of the webpage.
- **CSS**: Minimal styling to ensure a full-screen canvas.

---

## 🎮 **Controls**
- **Mouse**:
  - Left-click and drag to rotate the view.
  - Scroll to zoom in/out.
  - Right-click and drag to pan.
- **Keyboard**:
  - Press **Spacebar** to reset the camera to the default position (z = 200, looking at the Sun).

---

## 🪐 **Project Details**
- **Planets**: Each planet is created using `SphereGeometry` with a `MeshPhongMaterial` for realistic lighting and textures.
- **Rings**: Saturn's ring is implemented using `RingGeometry` with a custom texture.
- **Orbits**: Planets are grouped using `THREE.Group` to simulate orbital motion around the Sun.
- **Rotations**: Each planet rotates on its axis at a unique speed, scaled for visual effect.
- **Skybox**: A cube texture is used to create a starry background, enhancing the space theme.

---

## 📝 **Author**
This project was created as a learning exercise in 3D graphics and animation using Three.js.

📬 **Questions or Contributions?** Feel free to open an issue or submit a pull request in the repository.

---

## 🌠 **Future Enhancements**
- Add more moons for planets like Jupiter and Saturn.
- Implement realistic orbital paths (elliptical orbits).
- Add labels or tooltips for planets on hover.
- Include a UI to toggle planet visibility or adjust simulation speed.

---

🌟 **Enjoy exploring the Solar System!** 🪐✨

---
