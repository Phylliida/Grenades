var forwardPower = 10;
var timeLast = 3;
private var carVelocity : Vector3;
function OnTriggerEnter (other : Collider) {
	var tempScript : PlayerCollider;
	tempScript = other.GetComponent(PlayerCollider);
	if(tempScript){
  		if(tempScript.car3){
			tempScript.tempMax = tempScript.car3.topSpeed;
			tempScript.car3.topSpeed = tempScript.car3.topSpeed + forwardPower;
		}
		if(tempScript.car){
			tempScript.tempMax = tempScript.car.topSpeed;
			tempScript.car.topSpeed = tempScript.car.topSpeed + forwardPower;		
		}
		if(tempScript.car2){
			tempScript.tempMax = tempScript.car2.topSpeed;
			tempScript.car2.topSpeed = tempScript.car2.topSpeed + forwardPower;				
		}
		if(tempScript.carAI){
			tempScript.tempMax = tempScript.carAI.topSpeed;
			tempScript.carAI.topSpeed = tempScript.carAI.topSpeed + forwardPower;				
		}	
		var destinationSpeed : Vector3;
		destinationSpeed = Vector3(forwardPower,0,0);
		var tempRigidbody : Rigidbody;
		tempRigidbody = other.transform.parent.GetComponent(Rigidbody);
		tempRigidbody.velocity += other.transform.TransformDirection(destinationSpeed);
		tempScript.hitByBooster = true;
		tempScript.boosterTime = timeLast;
	}
}
