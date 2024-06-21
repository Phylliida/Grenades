var speed = 20.0;
var gravity = 20.0;
var spin = 3;
var target : Transform;
private var distance;
function Update() {
	transform.LookAt(target.transform);
	transform.localEulerAngles.x = 0;
	transform.localEulerAngles.z = 0; 
    var controller : CharacterController = GetComponent(CharacterController); 
     distance = Mathf.Sqrt(Mathf.Pow(transform.position.x-target.transform.position.x,2)+Mathf.Pow(transform.position.y-target.transform.position.y,2)+Mathf.Pow(transform.position.z-target.transform.position.z,2));
    if (controller.isGrounded) {
 
       moveDirection = Vector3(0, 0, Time.deltaTime * speed * 50);
       moveDirection = transform.TransformDirection(moveDirection);
       moveDirection *= speed + distance;
       
    }
    	
         
    // Apply gravity
    moveDirection.y -= gravity * Time.deltaTime *  50;
    
    	
  


   
    
      // Move the controller
    controller.Move(moveDirection * Time.deltaTime);
    	
}
    
