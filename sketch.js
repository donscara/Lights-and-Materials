function setup() {
    createCanvas(500, 500, WEBGL);
}

function draw() {
    background(125);

    // sphere: no materials, no lights
    push();
    translate(100,100,100);
    sphere(50,10,10);
    pop();

    // sphere: normal material, high res
    push();
    translate(-200,-200,-200);
    normalMaterial();
    sphere(100,100,100);
    pop();
    //sphere: ambient material, ambient light
    push();
    translate(100,-100,10);
    ambientMaterial(255);
    ambientLight(0,255,0);
    sphere(50,100,100);
    pop();

    // // // sphere: ambient material, light pointing towards the right
    directionalLight(255,255,0, 1,0,0);
    ambientMaterial(255);
    sphere(100,100,100);

    // torus: ambient material, point light in the center and a bit towards you
    push();
    translate(-100,100,0);
    pointLight(255, 0, 0, mouseX-width/2, mouseY-width/2, 30);
    pointLight(0, 255, 0, 0, 0, 100);
    specularMaterial(255);
    torus(100, 25, 50, 50);
    pop();
}
