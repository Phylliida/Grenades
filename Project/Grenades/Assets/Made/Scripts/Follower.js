var target : Transform;
var speed = 5;
private var speeda = speed;
private var distance = 0;
var maxdistance = 20; 
var mindistance = 5;
private var speedbig = speed * 100;

function Update () {
	/*
	var max = 5;
var min = -5;
	if(transform.position.x < target.transform.position.x){
	transform.Translate(speed * Time.deltaTime, 0, 0);	
	}
	if(transform.position.x > target.transform.position.x){
	transform.Translate(-1 * speed * Time.deltaTime, 0, 0);	
	}
	if(transform.position.y < target.transform.position.y){
	transform.Translate(0, speed * Time.deltaTime, 0);	
	}
	if(transform.position.y > target.transform.position.y ){
	transform.Translate(0, -1 * speed * Time.deltaTime, 0);	
	}
	if(transform.position.z < target.transform.position.z){
	transform.Translate(0, 0, speed * Time.deltaTime);	
	}
	if(transform.position.z > target.transform.position.z){
	transform.Translate(0, 0, -1 * speed * Time.deltaTime);	
	}
	if(transform.position.y < target.transform.position.y + min){
		transform.position.y = target.transform.position.y + min  * Time.deltaTime;
	}
	if(transform.position.y > target.transform.position.y + max){
	transform.position.y = target.transform.position.y +max  * Time.deltaTime;
	}	
	if(transform.position.x < target.transform.position.x + min){
		transform.position.x = target.transform.position.x + min  * Time.deltaTime;
	}
	if(transform.position.x > target.transform.position.x + max){
	transform.position.x = target.transform.position.x +max  * Time.deltaTime;
	}	
	if(transform.position.z < target.transform.position.z + min){
		transform.position.z = target.transform.position.z + min  * Time.deltaTime;
	}
	if(transform.position.z > target.transform.position.z + max){
	transform.position.z = target.transform.position.z +max  * Time.deltaTime;
	}	
	*/
	transform.LookAt(target);
	
	transform.Translate(0, 0, speed * Time.deltaTime);
	  
	  
	  
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