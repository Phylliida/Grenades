var upPower = 50;
var forwardPower = 20;
private var carVelocity : Vector3;
function OnTriggerEnter (other : Collider) {
	var tempScript : PlayerCollider;
	tempScript = other.GetComponent(PlayerCollider);
	if(tempScript){
		var tempRigidbody : Rigidbody;
		tempRigidbody = other.transform.parent.GetComponent(Rigidbody);
		other.transform.parent.localEulerAngles =  Vector3(0, other.transform.parent.localEulerAngles.y, 0);
		tempRigidbody.angularVelocity = Vector3(0,0,0);
  		carVelocity = Vector3(0,0,forwardPower);
  		tempRigidbody.velocity = other.transform.parent.TransformDirection(carVelocity);
  		tempRigidbody.velocity.y = upPower;
  		
	}
}
