const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({antialias: true});

renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);


const controls = new THREE.OrbitControls(camera, renderer.domElement);
const light = new THREE.PointLight(0xFFFFFF, 2, 300);
light.position.x = 0;
light.position.y = 0;
light.position.z = 0;
scene.add(light);


const loader = new THREE.CubeTextureLoader();
const bgTexture = loader.load([
    '/img/sky_Back.bmp',
    '/img/sky_Bottom.bmp',
    '/img/sky_Front.bmp',
    '/img/sky_Left.bmp',
    '/img/sky_Right.bmp',
    '/img/sky_Top.bmp'
])
scene.background = bgTexture;

 
//Textures
const SunTexture = new THREE.TextureLoader().load('./img/sun.jpg');
const mercuryTexture = new THREE.TextureLoader().load('./img/mercury.jpg');
const venusTexture = new THREE.TextureLoader().load('./img/venus.jpg');
const earthTexture = new THREE.TextureLoader().load('./img/earth.jpg');
const moonTexture = new THREE.TextureLoader().load('./img/moon.jpg');
const marsTexture = new THREE.TextureLoader().load('./img/mars.jpg');
const jupiterTexture = new THREE.TextureLoader().load('./img/jupiter.jpg');
const saturnTexture = new THREE.TextureLoader().load('./img/saturn.jpg');
const saturnRingTexture = new THREE.TextureLoader().load('./img/saturn_ring.png');
saturnRingTexture.rotation.x = Math.PI / 2;
const uranusTexture = new THREE.TextureLoader().load('./img/uranus.jpg');
const neptuneTexture = new THREE.TextureLoader().load('./img/neptun.jpg');

//Sun
const sunGeometry = new THREE.SphereGeometry(60, 30, 30);
const sunMaterial = new THREE.MeshBasicMaterial({map: SunTexture});
const Sun = new THREE.Mesh(sunGeometry, sunMaterial);
Sun.position.set(0,0,0);
Sun.castShadow = false;
Sun.receiveShadow = false; 
scene.add(Sun);
camera.position.z = 200;
controls.update();

function create(radius, width, height, texture, xposition) {
    const PlanetGeometry = new THREE.SphereGeometry(radius, width, height);
    const PlanetMaterial = new THREE.MeshPhongMaterial({map: texture});
    const Planet = new THREE.Mesh(PlanetGeometry, PlanetMaterial);
    Planet.position.x = xposition;
    Planet.castShadow = true;
    Planet.receiveShadow = true;
    
    return Planet;
}

function createRing (iradius, oradius, ts, texture, xposition) {
    const RingGeometry = new THREE.RingGeometry(iradius, oradius, ts);
    const RingMaterial = new THREE.MeshPhongMaterial({ map: texture });
    const Ring = new THREE.Mesh(RingGeometry, RingMaterial);
    Ring.position.x = xposition;
    Ring.rotation.x = -0.5 * Math.PI;
    Ring.castShadow = true;
    Ring.receiveShadow = true;

    return Ring;
}


//Mercury
const Mercury = create(3.2, 30, 30, mercuryTexture, 88);
const MercuryGroup = new THREE.Group();
MercuryGroup.add(Mercury);
scene.add(MercuryGroup);


//Venus
const Venus = create(5.8, 30, 30, venusTexture, 104);
const VenusGroup = new THREE.Group();
VenusGroup.add(Venus);
scene.add(VenusGroup);


//Earth
const Earth = create(6, 30, 30, earthTexture, 122);


//Moon
const Moon = create(1, 30, 30, moonTexture, 130);
const EarthMoonGroup = new THREE.Group();
EarthMoonGroup.add(Earth, Moon);
scene.add(EarthMoonGroup);



//Mars
const Mars = create(4, 30, 30, marsTexture, 138);
const MarsGroup = new THREE.Group();
MarsGroup.add(Mars);
scene.add(MarsGroup);


//Jupiter
const Jupiter = create(12, 30, 30, jupiterTexture, 160);
const JupiterGroup = new THREE.Group();
JupiterGroup.add(Jupiter);
scene.add(JupiterGroup);


//Saturn
const Saturn = create(10, 30, 30, saturnTexture, 198);
const SaturnRing = createRing(10, 20, 32, saturnRingTexture, 198);
const SaturnGroup = new THREE.Group();
SaturnGroup.add(Saturn, SaturnRing);
scene.add(SaturnGroup);


//Uranus
const Uranus = create(7, 30, 30, uranusTexture, 236);
const UranusGroup = new THREE.Group();
UranusGroup.add(Uranus);
scene.add(UranusGroup);

//Neptune
const Neptune = create(7, 30, 30, neptuneTexture, 260);
const NeptuneGroup = new THREE.Group();
NeptuneGroup.add(Neptune);
scene.add(NeptuneGroup);

const EARTH_YEAR = 2 * Math.PI * (1 / 60) * (1 / 60); 

function animate(){
    requestAnimationFrame(animate)
    controls.update();
    Sun.rotation.y += 0.001;
    MercuryGroup.rotateY(EARTH_YEAR * 4);
    Mercury.rotateY(0.000413);
    VenusGroup.rotateY(EARTH_YEAR * 2);
    Venus.rotateY(0.00009877);
    EarthMoonGroup.rotateY(EARTH_YEAR);
    Earth.rotateY(0.024);
    Moon.rotateY(0.024);
    MarsGroup.rotateY(EARTH_YEAR * 0.5);
    Mars.rotateY(0.0233);
    JupiterGroup.rotateY(EARTH_YEAR * 0.083);
    Jupiter.rotateY(0.0580);
    SaturnGroup.rotateY(EARTH_YEAR * 0.034);
    Saturn.rotateY(0.0540);
    UranusGroup.rotateY(EARTH_YEAR * 0.011);
    Uranus.rotateY(0.0338);
    NeptuneGroup.rotateY(EARTH_YEAR * 0.006);
    Neptune.rotateY(0.036);

    renderer.render(scene, camera)
}
animate()


window.addEventListener(
    'keydown',
    function( e ) {
      e = e || window.event;
      switch ( e.keyCode ) {
        case 32:
          camera.position.z = 200;
          camera.lookAt(0, 0, 0);
          break;
        default:
          ;
      }

      renderer.render( scene, camera );
    },
    false
  );