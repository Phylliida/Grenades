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
var moverc : Collider;
var movera : Collider;
var rickc : Collider;
var alexc : Collider;
var itc : Collider;
var soccerc : Collider;
var startPosition : Vector3;
var isReset = false;
private var it = false;
private var movedown = gravity;
private var moveDirection = Vector3.zero;
private var isGrenading:boolean = false; 
private var isJumping:boolean = false; 
var isMoving:boolean = false; 
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
	   if (other==moverc) { 
   isMoving = true;
   isJumping = false;
   } 
   if (other==movera) { 
   isMoving = true;
   isJumping = false;
   } 
   if (other==itc) { 
   it = true;
   } 
    if (other==alexc && !it) { 
   it = true;
   } 
   if (other==alexc && it) { 
   it = false;
   } 
     if (other==rickc && !it) { 
   it = true;
   } 
   if (other==rickc && it) { 
   it = false;
   } 
}	


function OnTriggerExit (other : Collider)  {    
   if (other==moverc) { 
   	isMoving = false;
   } 
   if (other==movera) { 
   	isMoving = false;
   } 
}	


function Update() {
	 if(Input.GetKeyDown("'")) {
      isGrenading = !isGrenading; 
	 }
	 if (it){
	 Debug.Log ("Jenny");
}	 
   
  if(isGrenading){
if (Input.GetKeyDown("t")) {
	//Instantiate(grenade, transform.position, transfrom.rotation);
	Instantiate(base, transform.position, transform.rotation);
}
if (Input.GetKeyDown("y")) {
	//Instantiate(grenade, transform.position, transfrom.rotation);
	Instantiate(chunks, transform.position, transform.rotation);
}
if (Input.GetKeyDown("u")) {
	//Instantiate(grenade, transform.position, transfrom.rotation);
	Instantiate(crazySparks, transform.position, transform.rotation);
}
if (Input.GetKeyDown("o")) {
	//Instantiate(grenade, transform.position, transfrom.rotation);
	Instantiate(ignitor, transform.position, transform.rotation);
}
if (Input.GetKeyDown("p")) {
	//Instantiate(grenade, transform.position, transfrom.rotation);
	Instantiate(insanity, transform.position, transform.rotation);
}
if (Input.GetKeyDown("[")) {
	//Instantiate(grenade, transform.position, transfrom.rotation);
	Instantiate(multiExample, transform.position, transform.rotation);
}
if (Input.GetKeyDown("]")) {
	//Instantiate(grenade, transform.position, transfrom.rotation);
	Instantiate(mushroomCloud, transform.position, transform.rotation);
}
if (Input.GetKeyDown("g")) {
	//Instantiate(grenade, transform.position, transfrom.rotation);
	Instantiate(simple, transform.position, transform.rotation);
}
if (Input.GetKeyDown("h")) {
	//Instantiate(grenade, transform.position, transfrom.rotation);
	Instantiate(sounds, transform.position, transform.rotation);
}
if (Input.GetKeyDown(";")) {
	//Instantiate(grenade, transform.position, transfrom.rotation);
	Instantiate(spray, transform.position, transform.rotation);
}
if (Input.GetKeyDown("'")) {
	//Instantiate(grenade, transform.position, transfrom.rotation);
	Instantiate(tiny, transform.position, transform.rotation);
}
if (Input.GetKeyDown("b")) {
	//Instantiate(grenade, transform.position, transfrom.rotation);
	Instantiate(wide, transform.position, transform.rotation);
}
if (Input.GetKeyDown("n")) {
	//Instantiate(grenade, transform.position, transfrom.rotation);
	Instantiate(water, transform.position, transform.rotation);
}
}
}

function FixedUpdate() {
	 transform.Rotate( 0 ,  Input.GetAxis("Horizontal3") * Time.deltaTime * spin * 50, 0);
    var controller : CharacterController = GetComponent(CharacterController);
    if (controller.isGrounded || isMoving) {
    	if(!isReset){
    	startPosition = transform.position;
    	}
        moveDirection = Vector3(0, 0, Input.GetAxis("Vertical3"));
        moveDirection = transform.TransformDirection(moveDirection);
        moveDirection *= speed;
        
       if (Input.GetButton ("Jump3")) {
           moveDirection.y = jumpSpeed;
            isJumping = true;
        }
        if (Input.GetKey ("8")) {
           moveDirection.y = jumpSpeed + speed;
            isJumping = true;
            if ( moveDirection.y > 50){
            moveDirection.y = 50;
       }
        }
		if (Input.GetKey (";")) {
           moveDirection.y = jumpSpeed + speed;
            isJumping = true;
            if ( moveDirection.y > 50){
            moveDirection.y = 50;
       }
        }
    
    if (Input.GetKey ("0")) {
            speed = 6;
        }
     if (Input.GetKey ("=")) {
            speed += 5;

        }
         if (Input.GetKey ("-")) {
            speed -= 5;
         }
    }
    if (Input.GetKey ("/")) {
            	GetComponent(Camera).enabled = true;
          }
           if (Input.GetKey (".")) {
            	GetComponent(Camera).enabled = false;
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
    	moveDirection.y = 0;
    }
    }
    

    // Move the controller
     // Move the controller
    moveDirection.y += flyspeed * Time.deltaTime;
    moveDirection.x += flyspeed * Time.deltaTime;
    controller.Move(moveDirection * Time.deltaTime);
}
function Restart(){
	transform.position = Vector3(0,0,0); 
}