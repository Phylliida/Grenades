var collisionInfo : Collision;
var hit = false;
var grounded = true;
private var hitInfo : RaycastHit;
var hitCollider : Collider;
function OnTriggerEnter(other : Collider) {
	hit = true;
	hitCollider = other;
}
function OnTriggerStay(other : Collider) {
	hit = true;
	hitCollider = other;
}
function OnTriggerExit(other : Collider) {
	hit = false;
}
function Update () {
	if(Physics.Raycast (transform.position, Vector3(0,-1,0), hitInfo, 1.5)){
		grounded = true;	
	}
	else{
		grounded = false;
	}
}