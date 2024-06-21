var istouching = false;
function OnTriggerStay (other : Collider)  {    
	
		istouching = true;
	
}
function OnTriggerExit (other : Collider)  {    
	
		istouching = false;
	
}