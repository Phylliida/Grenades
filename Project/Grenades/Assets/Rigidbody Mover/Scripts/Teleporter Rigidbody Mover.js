var target : Transform;
function OnTriggerEnter (other : Collider) {
	var tempComponent : RigidbodyMover;
	tempComponent = other.transform.GetComponent(RigidbodyMover);
	if(tempComponent){
		other.transform.position = target.transform.position;
		other.transform.rigidbody.velocity = Vector3(0,0,0);
		other.transform.rotation = target.transform.rotation;
		other.transform.localEulerAngles = Vector3(0,other.transform.localEulerAngles.y ,0);
	}
}