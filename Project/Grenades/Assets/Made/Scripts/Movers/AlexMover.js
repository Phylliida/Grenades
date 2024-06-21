var speed = 6.0;
private var speed1 = speed;
var runspeed = 50.0;
var jumpSpeed = 8.0;
private var flyspeed = 0;
var gravity = 20.0;
var spin = 5;
var base : Transform;
var chunks : Transform;
var crazySparks : Transform;
var ignitor : Transform;
var insanity : Transform;
var multiExample : Transform;
var mushroomCloud : Transform;
var simple : Transform;
var sounds : Transform;
var spray : Transform;
var tiny : Transform;
var wide : Transform;
var water : Transform;
var itc : Collider;
var soccerc : Collider;
var startPosition : Vector3;

private var it = false;
private var moveDirection = Vector3.zero;
private var isGrenading:boolean = false; 
private var isJumping:boolean = false; 
var isMoving:boolean = false; 
var isReset = false;


var pushPower = 2.0;
function OnControllerColliderHit (hit : ControllerColliderHit)
{
    var body : Rigidbody = hit.collider.attachedRigidbody;
    // no rigidbody
    if (body == null || body.isKinematic)
        return;
        
    // We dont want to push objects below us
    if (hit.moveDirection.y < -0.3) 
        return;
    
    // Calculate push direction from move direction, 
    // we only push objects to the sides never up and down
    var pushDir = Vector3 (hit.moveDirection.x, 0, hit.moveDirection.z);

    // If you know how fast your character is trying to move,
    // then you can also multiply the push velocity by that.
    
    // Apply the push
    body.velocity = pushDir * speed;
}

function OnTriggerStay (other : Collider)  {  
	 if (other==soccerc){
   if (speed > 10){
   speed = 10;
   }
   }
   
   if (other==soccerc){
   if (speed < -10){
   speed = -10;
   }
   }
}
function OnTriggerEnter (other : Collider)  {    
 
   
   if (it){
	 Debug.Log ("Alex");
}	 
   if (collider.GetType() == BoxCollider) { 
   isMoving = true;
   isJumping = false;
   
   } 
   	 
  
   if (other==itc) { 
   it = true;
   } 
}
function OnTriggerExit (other : Collider)  {    
   if (collider.GetType() == BoxCollider) { 
   	isMoving = false;
   } 
   
}	


function Update() {
	 if(Input.GetKeyDown("page up")) {
      isGrenading = !isGrenading; 
	 }
   
  if(isGrenading){
if (Input.GetKeyDown("[1]")) {
	//Instantiate(grenade, transform.position, transfrom.rotation);
	Instantiate(base, transform.position, transform.rotation);
}
if (Input.GetKeyDown("[2]")) {
	//Instantiate(grenade, transform.position, transfrom.rotation);
	Instantiate(chunks, transform.position, transform.rotation);
}
if (Input.GetKeyDown("[3]")) {
	//Instantiate(grenade, transform.position, transfrom.rotation);
	Instantiate(crazySparks, transform.position, transform.rotation);
}
if (Input.GetKeyDown("[4]")) {
	//Instantiate(grenade, transform.position, transfrom.rotation);
	Instantiate(ignitor, transform.position, transform.rotation);
}
if (Input.GetKeyDown("[5]")) {
	//Instantiate(grenade, transform.position, transfrom.rotation);
	Instantiate(insanity, transform.position, transform.rotation);
}
if (Input.GetKeyDown("[6]")) {
	//Instantiate(grenade, transform.position, transfrom.rotation);
	Instantiate(multiExample, transform.position, transform.rotation);
}
if (Input.GetKeyDown("[7]")) {
	//Instantiate(grenade, transform.position, transfrom.rotation);
	Instantiate(mushroomCloud, transform.position, transform.rotation);
}
if (Input.GetKeyDown("[8]")) {
	//Instantiate(grenade, transform.position, transfrom.rotation);
	Instantiate(simple, transform.position, transform.rotation);
}
if (Input.GetKeyDown("[9]")) {
	//Instantiate(grenade, transform.position, transfrom.rotation);
	Instantiate(sounds, transform.position, transform.rotation);
}
if (Input.GetKeyDown("[+]")) {
	//Instantiate(grenade, transform.position, transfrom.rotation);
	Instantiate(spray, transform.position, transform.rotation);
}
if (Input.GetKeyDown("[0]")) {
	//Instantiate(grenade, transform.position, transfrom.rotation);
	Instantiate(tiny, transform.position, transform.rotation);
}
if (Input.GetKeyDown("[-]")) {
	//Instantiate(grenade, transform.position, transfrom.rotation);
	Instantiate(wide, transform.position, transform.rotation);
}
if (Input.GetKeyDown("[.]")) {
	//Instantiate(grenade, transform.position, transfrom.rotation);
	Instantiate(water, transform.position, transform.rotation);
	}
}
}

function FixedUpdate() {
	transform.Rotate( 0 ,  Input.GetAxis("Horizontal2") * Time.deltaTime * spin * 50, 0);
    var controller : CharacterController = GetComponent(CharacterController);
    
    if (controller.isGrounded || isMoving) {
 	if(!isReset){
 	   startPosition = transform.position;
 	}
       moveDirection = Vector3(0, 0, Input.GetAxis("Vertical2"));
       moveDirection = transform.TransformDirection(moveDirection);
       moveDirection *= speed;
       if (Input.GetButton ("Jump2")) {
           moveDirection.y = jumpSpeed;
            isJumping = true;
        }
       if (Input.GetKey ("[/]")) {
           moveDirection.y = jumpSpeed + speed;
            isJumping = true;
            if ( moveDirection.y > 50){
            moveDirection.y = 50;
       }
        }
        if (!controller.isGrounded && !isMoving) {
        moveDirection += Vector3(0, 0, Input.GetAxis("Vertical2") / 2);
        
        }

    }
    	  if (Input.GetKey ("home")) {
            speed = 6;
        }
     
        if (Input.GetKey ("end")) {
            speed += 5;
            

        }
        if (Input.GetKey ("[-]")) {
            	GetComponent(Camera).enabled = true;
          }
           if (Input.GetKey ("[+]")) {
            	GetComponent(Camera).enabled = false;
            }
         if (Input.GetKey ("page down")) {
            speed -= 5;
        }

    // Apply gravity
    if(!isMoving){
    	 moveDirection.y -= gravity * Time.deltaTime;
    }
    if(isMoving){
    	
    	if(isJumping){
    	moveDirection.y -= gravity * Time.deltaTime;
    	}
    	if(!isJumping){
    }
    
    

    	}
    	
  

   
    
      // Move the controller
    moveDirection.y += flyspeed * Time.deltaTime;
    moveDirection.x += flyspeed * Time.deltaTime;
    controller.Move(moveDirection * Time.deltaTime);
    	
}
function Restart(){
	transform.position = Vector3(0,0,0); 
}