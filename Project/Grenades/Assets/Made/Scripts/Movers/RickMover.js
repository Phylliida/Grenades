var speed = 5.0;
var runspeed = 50.0;
var jumpSpeed = 8.0;
var gravity = 20.0;
var spin = 5;
private var flyspeed = 0;
var block : Transform;
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
var alexc : Collider;
var jennyc : Collider;
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





//var walkSpeed = 3.0;
// after trotAfterSeconds of walking we trot with trotSpeed
//var trotSpeed = 4.0;
// when pressing "Fire3" button (cmd) we start running
//var runSpeed = 6.0;

//var inAirControlAcceleration = 3.0;

// How high do we jump when pressing jump and letting go immediately
var jumpHeight = 8.0;
// We add extraJumpHeight meters on top when holding the button down longer while jumping
//var extraJumpHeight = 2.5;

// The gravity for the character
//var gravity = 20.0;
// The gravity in controlled descent mode
//var controlledDescentGravity = 2.0;
//var speedSmoothing = 10.0;
//var rotateSpeed = 500.0;
//var trotAfterSeconds = 3.0;

//var canJump = true;
//var canControlDescent = true;
var canWallJump = false;

private var jumpRepeatTime = 0.05;
private var wallJumpTimeout = 0.15;
//private var jumpTimeout = 0.15;
//private var groundedTimeout = 0.25;

// The camera doesnt start following the target immediately but waits for a split second to avoid too much waving around.
//private var lockCameraTimer = 0.0;

// The current move direction in x-z
//private var moveDirection = Vector3.zero;
// The current vertical speed
//private var verticalSpeed = 0.0;
// The current x-z move speed
//private var moveSpeed = 0.0;

// The last collision flags returned from controller.Move
private var collisionFlags : CollisionFlags; 

// Are we jumping? (Initiated with jump button and not grounded yet)
//private var jumping = false;
//private var jumpingReachedApex = false;

// Are we moving backwards (This locks the camera to not do a 180 degree spin)
//private var movingBack = false;
// Is the user pressing any keys?
//private var isMoving = false;
// When did the user start walking (Used for going into trot after a while)
//private var walkTimeStart = 0.0;
// Last time the jump button was clicked down
private var lastJumpButtonTime = -10.0;
// Last time we performed a jump
private var lastJumpTime = -1.0;
// Average normal of the last touched geometry
private var wallJumpContactNormal : Vector3;
//private var wallJumpContactNormalHeight : float;

// the height we jumped from (Used to determine for how long to apply extra jump power after jumping.)
//private var lastJumpStartHeight = 0.0;
// When did we touch the wall the first time during this jump (Used for wall jumping)
private var touchWallJumpTime = -1.0;

//private var inAirVelocity = Vector3.zero;

//private var lastGroundedTime = 0.0;

//private var lean = 0.0;
//private var slammed = false;

//private var isControllable = true;

function Start(){
	startPosition = transform.position;
}
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
	 	Debug.Log("HELLO");
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
  

  
   
   
   
   if (other==itc) { 
   it = true;
   } 
    if (other==alexc && !it) { 
   it = true;
   } 
   if (other==alexc && it) { 
   it = false;
   } 
     if (other==jennyc && !it) { 
   it = true;
   } 
   if (other==jennyc && it) { 
   it = false;
   } 
}	

function OnTriggerExit (other : Collider)  {    
   
}	
function ApplyWallJump ()
{
	
	// We must actually jump against a wall for this to work
	
		

	// Store when we first touched a wall during this jump
	if (collisionFlags == CollisionFlags.CollidedSides)
	{
		touchWallJumpTime = Time.time;
		Debug.Log("WallJump!");
	}

	// The user can trigger a wall jump by hitting the button shortly before or shortly after hitting the wall the first time.
	var mayJump = lastJumpButtonTime > touchWallJumpTime - wallJumpTimeout && lastJumpButtonTime < touchWallJumpTime + wallJumpTimeout;
	if (!mayJump)
		return;
	
	// Prevent jumping too fast after each other
	if (lastJumpTime + jumpRepeatTime > Time.time)
		return;
	
		
	if (Mathf.Abs(wallJumpContactNormal.y) < 0.2)
	{
		wallJumpContactNormal.y = 0;
		moveDirection = wallJumpContactNormal.normalized;
		// Wall jump gives us at least trotspeed
		//moveDirection = Vector3(speed,speed, speed);
	}
	else
	{
		
	}
	
	moveDirection.y = Mathf.Sqrt(2 * jumpHeight * gravity);
	
}
function Update() {
	
	
	 if (it){
	 Debug.Log ("Rick");
}	 
	
	 if(Input.GetKeyDown("page up")) {
      isGrenading = !isGrenading; 
      Debug.Log("Changed!");
	 }
	 
   
  if(isGrenading){
if (Input.GetKeyDown("1")) {
	//Instantiate(grenade, transform.position, transfrom.rotation);
	Instantiate(base, transform.position, transform.rotation);
}
if (Input.GetKeyDown("2")) {
	//Instantiate(grenade, transform.position, transfrom.rotation);
	Instantiate(chunks, transform.position, transform.rotation);
}
if (Input.GetKeyDown("3")) {
	//Instantiate(grenade, transform.position, transfrom.rotation);
	Instantiate(crazySparks, transform.position, transform.rotation);
}
if (Input.GetKeyDown("4")) {
	//Instantiate(grenade, transform.position, transfrom.rotation);
	Instantiate(ignitor, transform.position, transform.rotation);
}
if (Input.GetKeyDown("q")) {
	//Instantiate(grenade, transform.position, transfrom.rotation);
	Instantiate(insanity, transform.position, transform.rotation);
}
if (Input.GetKeyDown("e")) {
	//Instantiate(grenade, transform.position, transfrom.rotation);
	Instantiate(multiExample, transform.position, transform.rotation);
}
if (Input.GetKeyDown("r")) {
	//Instantiate(grenade, transform.position, transfrom.rotation);
	Instantiate(mushroomCloud, transform.position, transform.rotation);
}
if (Input.GetKeyDown("f")) {
	//Instantiate(grenade, transform.position, transfrom.rotation);
	Instantiate(simple, transform.position, transform.rotation);
}
if (Input.GetKeyDown("z")) {
	//Instantiate(grenade, transform.position, transfrom.rotation);
	Instantiate(sounds, transform.position, transform.rotation);
}
if (Input.GetKeyDown("x")) {
	//Instantiate(grenade, transform.position, transfrom.rotation);
	Instantiate(spray, transform.position, transform.rotation);
}
if (Input.GetKeyDown("tab")) {
	//Instantiate(grenade, transform.position, transfrom.rotation);
	Instantiate(tiny, transform.position, transform.rotation);
}
if (Input.GetKeyDown("c")) {
	//Instantiate(grenade, transform.position, transfrom.rotation);
	Instantiate(wide, transform.position, transform.rotation);
}
if (Input.GetKeyDown("v")) {
	//Instantiate(grenade, transform.position, transfrom.rotation);
	Instantiate(water, transform.position, transform.rotation);
}
}
}
function FixedUpdate() {
	if(canWallJump){
		ApplyWallJump ();
	}
   transform.Rotate( 0 , Input.GetAxis("Horizontal") * Time.deltaTime * spin * 50  , 0);
    var controller : CharacterController = GetComponent(CharacterController);
    if (controller.isGrounded || isMoving) {
    	if(!isReset){
    		if(Input.GetKeyDown ("z")){
    	startPosition = transform.position;
    		}
    	}
        moveDirection = Vector3(0,0 , Input.GetAxis("Vertical"));
        moveDirection = transform.TransformDirection(moveDirection);
        moveDirection *= speed;
        
        if (Input.GetButton ("Jump")) {
           moveDirection.y = jumpSpeed;
            isJumping = true;
          
        }
        if (Input.GetKey ("1")) {
           moveDirection.y = jumpSpeed + speed;
            isJumping = true;
            if ( moveDirection.y > 50){
            moveDirection.y = 50;
       }
        }
        	
    }
     if (Input.GetKey ("tab")) {
            speed += 5;

        }
                   if (Input.GetKey ("q")) {
            	GetComponent(Camera).enabled = true;
          }
           if (Input.GetKey ("e")) {
            	GetComponent(Camera).enabled = false;
            }
            
        
        
      if (Input.GetKeyDown ("`")) {
            speed = 6;
        }
         if (Input.GetKey ("left shift")) {
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
    	moveDirection.y = 0;
    }
    }
    
    
   
	
	
    // Move the controller
    moveDirection.x += flyspeed * Time.deltaTime;
    moveDirection.y += flyspeed * Time.deltaTime;
    controller.Move(moveDirection * Time.deltaTime);
   
    	
}

function Restart(){
	transform.position = Vector3(0,0,0); 
}