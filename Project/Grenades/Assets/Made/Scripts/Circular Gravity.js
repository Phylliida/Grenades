//gameObject.tag = "Graviter";
private var a;
var anglemodifier = 0;
function OnTriggerStay (other : Collider)  {   
	//if (other.GetType() == CharacterController) { 
	var point: Vector3 = transform.position; 
	point.y = 0.0; 
	
   a = other.transform.localEulerAngles.z;
   	other.transform.LookAt(point);
   other.transform.localEulerAngles.z = a;
   //other.transform.localEulerAngles.x = other.transform.localEulerAngles.x + anglemodifier;
   //other.transform.localEulerAngles.x = other.transform.localEulerAngles.x - 180;
     	     		
      /*
      moverscripta = other.GetComponent(AlexMover);
      moverscriptj = other.GetComponent(JennyMover);
      moverscriptr = other.GetComponent(RickMover);
      if(moverscripta){
      moverscripta.isMoving = true;
      }   
      if(moverscriptj){
      moverscriptj.isMoving = true;
      }   
      if(moverscriptr){
      moverscriptr.isMoving = true;
      }
      */ 
   //} 
  
   
}	

function Update () {
	
	}
function OnTriggerEnter (other : Collider)  {    
  
   
}	
function OnTriggerExit (other : Collider)  {    
   other.transform.localEulerAngles.z = 0;
   other.transform.localEulerAngles.x = 0;
   other.transform.localEulerAngles.y = 0;
   
}	