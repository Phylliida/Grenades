var newVertices : Vector3[];
var newUV : Vector2[];
var newTriangles : int[];

function Start () {
    var mesh : Mesh = new Mesh ();
    GetComponent(MeshFilter).mesh = mesh;
    mesh.vertices = newVertices;
    mesh.uv = newUV;
    mesh.triangles = newTriangles;
}
function Update () {
    var mesh : Mesh = GetComponent(MeshFilter).mesh;

    mesh.Clear();
    // Do some calculations...
    mesh.vertices = newVertices;
    mesh.uv = newUV;
    mesh.triangles = newTriangles;
}