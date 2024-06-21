var watched : Transform;
var sightValue = 10.0;
private var tempTurnOn : CubeTurnOn;
private var tempGameObject : GameObject;
function Check(location : Transform) {
	if(Mathf.Abs(Vector3.Distance(location.position,watched.position)) < sightValue + 1){
		tempTurnOn = location.GetComponent(CubeTurnOn);
		if(Mathf.Abs(Vector3.Distance(location.position,watched.position)) < (sightValue)){
			
			if(!tempTurnOn.cube){
				var cube : GameObject  = GameObject.CreatePrimitive(PrimitiveType.Cube);
				cube.transform.position = location.position;
				tempTurnOn.cube = cube;
				
			}
		}
		else{
			tempTurnOn = location.GetComponent(CubeTurnOn);
			if(tempTurnOn.cube){
				Destroy(tempTurnOn.cube);
			}
		}
			
	}
	
}