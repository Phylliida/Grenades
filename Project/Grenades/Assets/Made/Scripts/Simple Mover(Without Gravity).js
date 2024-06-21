var speed = 20.0;
var spin = 3;
var target : Transform;
function Update() {
	
    var controller : CharacterController = GetComponent(CharacterController); 
         moveDirection = Vector3( Input.GetAxis("Horizontal") * Time.deltaTime * speed * 50, Input.GetAxis("Vertical") * Time.deltaTime * speed * 50 , 0);
       moveDirection = transform.TransformDirection(moveDirection);
       moveDirection *= speed;
       
  


   
    
      // Move the controller
    controller.Move(moveDirection * Time.deltaTime);
    	
}
    
