var alex : Transform; 
var alexc : Collider; 
var rickc : Collider; 
var rick : Transform; 
var jenny : Transform; 
var jennyc : Collider; 
var spin = 5;
var maxY = 10;
var minY = 10;
var start : Transform;

function OnTriggerEnter (other : Collider)  {    
   if (other==rickc) { 
      rick.transform.Translate == start.transform.Translate; 
   } 
   if (other==alexc) {  
      alex.transform.Translate == start.transform.Translate; 
   } 
   if (other==jennyc) { 
      jenny.transform.Translate == start.transform.Translate; 
   } 
}	


var target : Transform;
var speed = 5;
private var distance = 0;
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
	
	  
	  
	 distance = Mathf.Sqrt(Mathf.Pow(transform.position.x-target.transform.position.x,2)+Mathf.Pow(transform.position.y-target.transform.position.y,2)+Mathf.Pow(transform.position.z-target.transform.position.z,2));
	
	
	
	
}