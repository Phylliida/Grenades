var speed = 6.0;
var jumpSpeed = 8.0;
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
private var movespeed = speed;
private var moveDirection = Vector3.zero;
rigidbody.freezeRotation = true;

function OnTriggerEnter (other : Collider) {
   rigidbody.velocity.y = 0;
   if (Input.GetButton ("Jump")) {
        rigidbody.velocity.y = jumpSpeed;
     }
	transform.Translate( 0 ,  0, Input.GetAxis("Vertical") * Time.deltaTime * speed); 
}

function Update() {
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
 	
	//rigidbody.velocity.y -= Time.deltaTime * gravity;
	transform.Rotate( 0 ,  Input.GetAxis("Horizontal") * Time.deltaTime * spin * 50, 0);
   if (Input.GetKey ("tab")) {
            speed += 5;
        }
        
      if (Input.GetKeyDown ("`")) {
            speed = 6;
        }
         if (Input.GetKey ("left shift")) {
            speed -= 5;
        }
 
   
}


 	