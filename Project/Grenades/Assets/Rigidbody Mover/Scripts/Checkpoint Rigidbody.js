function OnTriggerEnter (other : Collider) {
    var tempComponent : RigidbodyMover;
    tempComponent = other.transform.GetComponent(RigidbodyMover);
    if(tempComponent){
    	tempComponent.spawnPointPosition = transform.position;
    	tempComponent.spawnPointRotation = transform.rotation;
    	Debug.Log("Changed!");
    }
}