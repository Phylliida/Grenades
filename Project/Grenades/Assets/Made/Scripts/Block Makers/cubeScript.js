var rickScript;
var alexScript;
var jennyScript;
var jennytScript;
var ricktScript;
var alextScript;

function OnTriggerEnter (other : Collider)  {  
	rickScript= other.GetComponent (RickMover);
	
	alexScript= other.GetComponent (AlexMover);
	
	jennyScript= other.GetComponent (JennyMover);
	
}
function OnTriggerExit (other : Collider)  {    
	ricktScript= other.GetComponent (RickMover);
	if(ricktScript){
		rickScript = null;
	}
	alextScript= other.GetComponent (AlexMover);
	if(alextScript){
		alexScript = null;
	}
	jennytScript= other.GetComponent (JennyMover);
	if(jennytScript){
		jennyScript = null;
	}
}
function Update (){
	if(Input.GetKeyDown ("6")){
		if(rickScript){
			Destroy(gameObject);
		}
	}
	if(Input.GetKeyDown ("[2]")){
		if(alexScript){
			Destroy(gameObject);
		}
	}
	if(Input.GetKeyDown ("u")){
		if(jennyScript){
			Destroy(gameObject);
		}
	}
}