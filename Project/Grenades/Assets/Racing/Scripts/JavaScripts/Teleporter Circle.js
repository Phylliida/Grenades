var target : Transform;
var forwardVelocity = 20.0;
private var carVelocity : Vector3;
function OnTriggerEnter (other : Collider) {
	var tempScript : PlayerCollider;
	tempScript = other.GetComponent(PlayerCollider);
	if(tempScript){
  		var tempRigidbody : Rigidbody;
  		tempRigidbody = other.transform.parent.GetComponent(Rigidbody);
  		carVelocity = Vector3(0,0,forwardVelocity);
  		other.transform.parent.position = target.transform.position;
  		other.transform.parent.rotation = target.transform.rotation;
  		tempRigidbody.angularVelocity = Vector3(0,0,0);
  		tempRigidbody.velocity = other.transform.parent.TransformDirection(carVelocity);
	}
}
