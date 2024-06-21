var otherCube;
var oldCube;
var total = 1;
var max = 5000;
var amount = 1;
var actualCube : Transform;
var cube;
var positionOfCorner : Transform;
private var a = 0;
private var b = 0;
private var c = 0;
var cycles = 10;
function Start() {
cube = Instantiate(actualCube, positionOfCorner.transform.position, Quaternion.Euler(0, 0, 0));
Debug.Log(cube);
}

function Update () {
	if(c < cycles){
		c = c + 1;
		Debug.Log("Hit!");
		a = a + 1;
		if (a == 1){
				otherCube = Instantiate(cube, Vector3(positionOfCorner.transform.position.x + amount,positionOfCorner.transform.position.y,positionOfCorner.transform.position.z),Quaternion.Euler(0, 0, 0));
				otherCube.transform.parent = cube;
				total = total * 2;
		}
		if (a == 2){
				otherCube = Instantiate(cube, Vector3(positionOfCorner.transform.position.x,positionOfCorner.transform.position.y,positionOfCorner.transform.position.z + amount),Quaternion.Euler(0, 0, 0));
				otherCube.transform.parent = cube;
				total = total * 2;
				a = 0;
				amount = amount * 2;
		}
		/*
		if(a == 3){
				otherCube = Instantiate(cube, Vector3(positionOfCorner.transform.position.x,positionOfCorner.transform.position.y + amount,positionOfCorner.transform.position.z),Quaternion.Euler(0, 0, 0));
				otherCube.transform.parent = cube;
				total = total * 2;
				a = 0;
				amount = amount * 2;
		}
		*/
		
	}
				
		
}