var goto : Transform;
var JennyMoverf;
var RickMoverf;
var AlexMoverf;
var destination : Vector3;
function OnTriggerEnter (other : Collider) {
	
	// destination = goto.transform.position;
	
	AlexMoverf = other.GetComponent (AlexMover);
	if(AlexMoverf){
		AlexMoverf.moveDirection *= 0; 
		destination = AlexMoverf.startPosition;
		
	}
	RickMoverf = other.GetComponent (RickMover);
	if(RickMoverf){
		RickMoverf.moveDirection *= 0; 
		destination = RickMoverf.startPosition;
	}
	JennyMoverf = other.GetComponent (JennyMover);
	if(JennyMoverf){
		JennyMoverf.moveDirection *= 0; 
		destination = JennyMoverf.startPosition;
	}
	
	other.transform.position = destination;
}

