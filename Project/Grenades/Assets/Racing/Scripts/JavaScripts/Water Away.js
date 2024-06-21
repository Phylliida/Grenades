var goto : Transform;

function OnTriggerEnter (other : Collider) {
	var tempComponent : PlayerCollider;
	tempComponent = other.GetComponent(PlayerCollider);
	if(tempComponent){	
    	other.transform.parent.position = goto.transform.position;
    	other.transform.parent.rotation = goto.transform.rotation;
    	var tempRigidbody : Rigidbody;
    	tempRigidbody = other.transform.parent.GetComponent(Rigidbody);
    	tempRigidbody.angularVelocity  = Vector3(0,0,0);
    	var directionToMove = Vector3(0,0,50);
    	tempRigidbody.velocity = transform.TransformDirection(directionToMove);
	}
}
