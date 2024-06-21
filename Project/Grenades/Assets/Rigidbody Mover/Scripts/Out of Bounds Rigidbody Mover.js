private var rigidbodyMover : RigidbodyMover;
function OnTriggerEnter (other : Collider) {
	rigidbodyMover = other.GetComponent (RigidbodyMover);
	if(rigidbodyMover){
		rigidbodyMover.transform.rigidbody.velocity = rigidbodyMover.transform.rigidbody.velocity * 0; 
		other.transform.position = rigidbodyMover.spawnPointPosition;
		other.transform.rotation = rigidbodyMover.spawnPointRotation;
		
	}
}
