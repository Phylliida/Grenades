var hit = false;
function OnTriggerEnter (other : Collider) {
	if(other.transform.parent != transform.parent){
    hit = true;
	}
}
function OnTriggerExit (other : Collider) {
	if(other.transform.parent != transform.parent){
   	hit = false;
	}
}
function OnTriggerStay (other : Collider) {
	if(other.transform.parent != transform.parent){
    hit = true;
	}
}