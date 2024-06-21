/*function Start(){
	var mesh1 : Mesh = new Mesh ();
	GetComponent(MeshFilter).mesh = mesh1;
}
var newVertices = new Array();
var newUV = new Array();
var newTriangles = new Array();
function Update () {
  	var mesh1 = GetComponent(MeshFilter).mesh;

    mesh1.Clear();
    for(var i = 0; i < 10; i++){
    	newVertices.Add(Vector3(i,1,i));
    }
    mesh1.vertices = newVertices;
    mesh1.uv = newUV;
    mesh1.triangles = newTriangles;
}
*/
function Start(){
	var mesh1 : Mesh = new Mesh ();
	GetComponent(MeshFilter).mesh = mesh1;
}
var newVertices : Vector3[];
newVertices = new Vector3[8];
var newUV : Vector2[];
newUV = new Vector2[newVertices.length];
var newTriangles : int[];
newTriangles = new int[12];

function Update () {
    var mesh : Mesh = GetComponent(MeshFilter).mesh;
    var vertices : Vector3[] = mesh.vertices;

    for (var i = 0; i < vertices.Length; i++)
        vertices[i] += Vector3.up * Time.deltaTime;

    mesh.vertices = vertices;
    mesh.RecalculateBounds();
}