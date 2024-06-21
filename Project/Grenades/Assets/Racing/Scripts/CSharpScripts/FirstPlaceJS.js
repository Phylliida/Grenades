var placeHolder : PlaceHolder;
var tempCameraScript;
var firstPlaceCamera : Transform;
private var firstPlace = false;
private var currentTime = 0.0;
private var resetTimer = true;
var timeBetweenUpdates = 1;
var firstPlaceCar : Transform;
var firstPlaceScript;
function Start () {
	firstPlaceScript = gameObject.AddComponent("FirstPlace");
}
function Update () {
	if(resetTimer){
		currentTime = Time.timeSinceLevelLoad;
		resetTimer = false;
	}
	if(!resetTimer){
		if((Time.timeSinceLevelLoad - currentTime) > 1.0){
			for(var c = 0; c <  placeHolder.place.Length; c++){
				if(placeHolder.place[c] == 1){
						firstPlaceScript.firstPlaceCar = placeHolder.racers[c].transform.parent;	
				}
			}
			resetTimer = true;		
		}	
	}		
			
}