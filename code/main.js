import {sum, pi} from "lib/math";

[1,2,3].map(n => n * n);

for (let [k,v] of {'key1': 'val1', 'key2': 'val3'}) {
    `${k} = ${v}`;
}

class SkinnedMesh extends THREE.Mesh {
    constructor(geometry, materials) {
        super(geometry, materials);
        this.idMatrix = SkinnedMesh.defaultMatrix();
    }
    update(camera) {
        super.update();
    }
    static defaultMatrix() {
        return new THREE.Matrix4();
    }
}
