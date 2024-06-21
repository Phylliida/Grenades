var launchSpeed = 40;
var launchTarget : Transform;
function OnTriggerEnter (other : Collider) {
	var tempComponent : RigidbodyMover;
	tempComponent = other.transform.GetComponent(RigidbodyMover);
	if(tempComponent){
		other.transform.LookAt(launchTarget.transform.position);
		var desiredVelocity : Vector3;
		desiredVelocity = other.transform.TransformDirection(desiredVelocity);
		other.transform.rigidbody.velocity = desiredVelocity;
		other.transform.localEulerAngles = Vector3(0,other.transform.localEulerAngles.y,0);
	}
}