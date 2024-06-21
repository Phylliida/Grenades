var topTrigger : TriggerScript;
var bottomTrigger : TriggerScript;
var carRigidbody : Rigidbody;
private var yCoordinate;
yCoordinate = transform.localPosition.y;
private var bottomUsed = true;
function Update () {
	
	if(topTrigger.hit && bottomUsed){
			carRigidbody.centerOfMass.y = yCoordinate * -1;
			bottomUsed = false;
	}
	
	if(bottomTrigger.hit && bottomUsed == false){
			carRigidbody.centerOfMass.y = yCoordinate;
			bottomUsed = true;
	}
}