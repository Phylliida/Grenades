var playerTarget : Transform;
var enemy : Transform;
function OnTriggerStay  (other : Collider) {
    var tempComponent : RigidbodyMover;
    tempComponent = other.transform.GetComponent(RigidbodyMover);
    if(tempComponent){
    	if(playerTarget){
    		if(Mathf.Abs(Vector3.Distance(enemy.position, other.transform.position)) < Mathf.Abs(Vector3.Distance(enemy.position, playerTarget.position))){
    			playerTarget = other.transform;
    		}
    	}
    	else{
    		playerTarget = other.transform;
    	}
    }
    
}
function OnTriggerExit (other : Collider) {
	var tempComponent : RigidbodyMover;
	tempComponent = other.transform.GetComponent(RigidbodyMover);
	if(tempComponent){
    	if(playerTarget){
    		if(playerTarget == other.transform){
    			playerTarget = null;	
    		}	
    	}
    }
}