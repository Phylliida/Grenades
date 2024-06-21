var level = 0;
var specation = 1;
var power = 1.0;
var defense = 1.0;
var attackspeed = 0.6;
private var attacktime = 0.0;
private var timesmoved = 0;
private var swinging = false;
private var juststartedswinging = false;
private var alreadychecked = false;
var weapon : Transform;
var positionbox : Transform;
function Start () {
	positionbox.transform.parent = transform;
	weapon.transform.parent = positionbox.transform;	
	positionbox.transform.localPosition *= 0;
	weapon.transform.localPosition *= 0;
	positionbox.transform.localPosition.x = transform.localScale.x;
	weapon.transform.localPosition.y = weapon.transform.localScale.y/2;
	LevelUp();
}
function LevelUp(){
	if(specation == 1){
		power *= 1.5;
		defense *= 1.3;
		attackspeed *= 0.8;	
	}
	if(specation == 2){
		power *= 1.3;
		defense *= 1.5;
		attackspeed *= 0.8;	
	}
	if(specation == 2){
		power *= 1.3;
		defense *= 1.3;
		attackspeed *= 0.65;	
	}
	level += 1;
	
	Debug.Log("power= " + power + " defense= " + defense + " attackspeed= " + attackspeed + " Level= " + level);
	
}
function hitwithweapon(){
	
	if(swinging){
		while(swinging){
		alreadychecked = false;
		if(juststartedswinging){
			attacktime = attackspeed / 7;
			timesmoved = 1;
			juststartedswinging = false;
		}
		
		if(timesmoved >= 1 && timesmoved <= 3 && alreadychecked == false){
			
		positionbox.transform.Rotate(30,0,0);
		timesmoved += 1;
		alreadychecked = true;
		}
		if(timesmoved >= 4 && timesmoved <= 4 && alreadychecked == false){
		timesmoved += 1;
		alreadychecked = true;
		}
		if(timesmoved >= 5 && timesmoved <= 7 && alreadychecked == false){
			
		positionbox.transform.Rotate(-30,0,0);
		timesmoved += 1;
		alreadychecked = true;
		}
		yield WaitForSeconds(attacktime);
		if(timesmoved == 8){
		swinging = false;
		}
		}

	}
	 if (Input.GetKey ("c")) {
	 	if(swinging == false){
	 		swinging = true;
	 		juststartedswinging = true;
	 	}
	 	
	 }
}
function Update () {
		hitwithweapon();
		if (Input.GetKey ("x")) {
	 	LevelUp();
		}
	 	
	 
     	 
    
}