var targeta : Transform;
var timetogetthere = 15;
var timewaitdestanation = 3;
var timewaitstartpoint = 3;
private var time = 0;
private var movex;
private var movey;
private var movez;
private var charcol = false;
private var isthere = false;
private var movinganymore = false;
private var waiting = false;
var firsttime;
function Start() {
var startx = transform.position.x;
var starty = transform.position.y;
var startz = transform.position.z;
movex = -(startx - targeta.transform.position.x)/timetogetthere;
movey = -(starty - targeta.transform.position.y)/timetogetthere;
movez = -(startz - targeta.transform.position.z)/timetogetthere;
}
function OnTriggerStay (other : Collider)  {    
   if (other.GetType() ==CharacterController) { 
   	other.transform.position.y = transform.position.y + 0.9;
     	if(!charcol){
     	firsttime = Time.time;
     	movinganymore = true;
     	isthere = false;
     	}
     	charcol = true;
     		
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

function Update () {
	if(waiting){
		if(isthere && Time.time -firsttime  >= timewaitdestanation){
			waiting = false;
			firsttime = Time.time;
		}
		if(!isthere &&  Time.time -firsttime  >= timewaitstartpoint){
			waiting = false;
			firsttime = Time.time;
		}
	}
	
	if(!waiting){
	if(movinganymore){
	if(firsttime){
	if(Time.time - firsttime > timetogetthere){
		movex *= -1;
		movey *= -1;
		movez *= -1;
		if(isthere == true){
			charcol = false;
			isthere = false;
			movinganymore = false;
		}
		else{		
			isthere = true;
		}
		waiting = true;
		firsttime = Time.time;
	}
	}
	
	if(!waiting && movinganymore){
 if(charcol){
 	
   transform.Translate(movex * Time.deltaTime,movey * Time.deltaTime,movez * Time.deltaTime);
   }
	}
   }
	}
   
}
function OnTriggerEnter (other : Collider)  {    
   if (other.GetType() ==CharacterController) { 
      other.transform.parent = transform; 
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