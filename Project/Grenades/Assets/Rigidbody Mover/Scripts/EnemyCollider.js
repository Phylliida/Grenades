var hitPerson : RigidbodyMover;
hitPerson = null;
function OnTriggerStay (other : Collider) {
	var tempComponent : RigidbodyMover;
	tempComponent = other.transform.GetComponent(RigidbodyMover);
	if(tempComponent){
		hitPerson = tempComponent;
	}
}
function OnTriggerExit (other : Collider) {
	var tempComponent : RigidbodyMover;
	tempComponent = other.transform.GetComponent(RigidbodyMover);
	if(tempComponent){
		hitPerson = null;
	}
}