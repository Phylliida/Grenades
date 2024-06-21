/// This script moves the character controller forward 
/// and sideways based on the arrow keys.
/// It also jumps when pressing space.
/// Make sure to attach a character controller to the same game object.
/// It is recommended that you make only one call to Move or SimpleMove per frame.    
var speed = 6.0;
var jumpSpeed = 8.0;
var gravity = 20.0;
var spin = 5;
var target : GameObject;
private var moveDirection = Vector3.zero;

function FixedUpdate() {
	var controller : CharacterController = target.GetComponent(CharacterController);
	var transformtarget : Transform = target.GetComponent(Transform);
	Debug.Log (controller.isGrounded);
    transformtarget.transform.Rotate( 0 ,  Input.GetAxis("Horizontal") * Time.deltaTime * spin * 50, 0);
    if (controller.isGrounded) {
        // We are grounded, so recalculate
        // move direction directly from axes
        moveDirection = Vector3(0, 0,
                                Input.GetAxis("Vertical"));
        moveDirection = transform.TransformDirection(moveDirection);
        moveDirection *= speed;
        
        if (Input.GetButton ("Jump")) {
            moveDirection.y = jumpSpeed;
        }
    }
    if (Input.GetKey ("tab")) {
            speed += 5;
            Debug.Log (speed);

        }
         if (Input.GetKeyDown ("`")) {
            speed = 6;
        }

    // Apply gravity
    if (!controller.isGrounded) {
    moveDirection.y -= gravity * Time.deltaTime;
    }
    
    // Move the controller
    controller.Move(moveDirection * Time.deltaTime);
}