var speed = 20.0;
var spin = 5;
var moverscript;
function OnTriggerEnter (other : Collider)  {    
   if (other.GetType() ==CharacterController) { 
      other.transform.parent = transform; 
   } 
   
}	
function OnTriggerStay (other : Collider)  {    
   if (other.GetType() ==CharacterController) { 
      other.transform.position.y = transform.position.y + 0.9;
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
   } 
   
}	

function OnTriggerExit (other : Collider)  {    
   if (other.GetType() == CharacterController) { 
      other.transform.parent = null; 
      moverscripta = other.GetComponent(AlexMover);
      moverscriptj = other.GetComponent(JennyMover);
      moverscriptr = other.GetComponent(RickMover);
      if(moverscripta){
      moverscripta.isMoving = false;
      }   
      if(moverscriptj){
      moverscriptj.isMoving = false;
      }   
      if(moverscriptr){
      moverscriptr.isMoving = false;
      }   
   } 
   
}	

function Update(){
	transform.Rotate( 0 ,  Input.GetAxis("Horizontal22") * Time.deltaTime * spin * 50, 0);
  	transform.Translate( Input.GetAxis("Vertical22") * speed * Time.deltaTime,Input.GetAxis("Zertical22") * speed * Time.deltaTime, 0);
   
    
    // Move the controller
    
      if (Input.GetKey ("[8]")) {
            speed = 20;
        }
     
        if (Input.GetKey ("[4]")) {
            speed += 5;

        }
         if (Input.GetKey ("[6]")) {
            speed -= 5;
        }
    	
}
/*
function Update() {
    var controller : CharacterController = GetComponent(CharacterController);
 
       moveDirection = Vector3(Input.GetAxis("Horizontal22"), Input.GetAxis("Zertical22"), Input.GetAxis("Vertical22"));
        moveDirection *= speed;
    moveDirection = transform.TransformDirection(moveDirection);
   
    
    // Move the controller
    controller.Move(moveDirection * Time.deltaTime);
    
      if (Input.GetKey ("home")) {
            speed = 6;
        }
     
        if (Input.GetKey ("end")) {
            speed += 5;
            Debug.Log (speed);

        }
         if (Input.GetKey ("page down")) {
            speed -= 5;
        }
    	
}
*/