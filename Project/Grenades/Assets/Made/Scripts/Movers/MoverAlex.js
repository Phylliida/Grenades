var speed = 20.0;
var alex : Transform; 
var alexc : Collider; 
var rickc : Collider; 
var rick : Transform; 
var jenny : Transform; 
var jennyc : Collider; 
var spin = 5;

function OnTriggerEnter (other : Collider)  {    
   if (other==rickc) { 
      rick.transform.parent = transform; 
   } 
   if (other==alexc) {  
   	  alex.transform.parent = transform; 
   } 
   if (other==jennyc) { 
      jenny.transform.parent = transform; 
   } 
}	

function OnTriggerExit (other : Collider)  {    
   if (other==rickc) { 
      rick.transform.parent = null; 
   } 
   if (other==alexc) {  
   	  alex.transform.parent = null; 
   } 
   if (other==jennyc) { 
      jenny.transform.parent = null; 
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