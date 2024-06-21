var spin = 5;
var maxY = 10;
var minY = 10;
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
var target : Transform;
var speed = 5;
private var speeda = speed;
private var distance = 0;
var maxdistance = 20; 
var mindistance = 5;
private var speedbig = speed * 100;
function Update () {
	/*
	if(transform.position.x < target.transform.position.x){
	transform.Translate(speed * Time.deltaTime, 0, 0);	
	}
	if(transform.position.x > target.transform.position.x){
	transform.Translate(-1 * speed * Time.deltaTime, 0, 0);	
	}
	
	if(transform.position.z < target.transform.position.z){
	transform.Translate(0, 0, speed * Time.deltaTime);	
	}
	if(transform.position.z > target.transform.position.z){
	transform.Translate(0, 0, -1 * speed * Time.deltaTime);	
	}
	*/
	transform.LookAt(target);
	transform.localEulerAngles.x = 0;
	
	transform.localEulerAngles.z = 0; 
	transform.Translate(0, 0, speed * Time.deltaTime);
	 if(transform.position.y < target.transform.position.y - minY){
	transform.Translate(0, (speed + distance - mindistance) * Time.deltaTime, 0);	
	}
	if(transform.position.y > target.transform.position.y + maxY){
	transform.Translate(0, (-1 * speed - distance + mindistance) * Time.deltaTime, 0);	
	}
	  
	
	  
	  
	 distance = Mathf.Sqrt(Mathf.Pow(transform.position.x-target.transform.position.x,2)+Mathf.Pow(transform.position.y-target.transform.position.y,2)+Mathf.Pow(transform.position.z-target.transform.position.z,2));
	
	if(distance > maxdistance){
	speed = distance - maxdistance;
	
	}
	if(distance < maxdistance && distance > mindistance){
	speed = speeda;	
	}
	
	if(distance < mindistance){
	speed = 0;
	}
	
	
	
}