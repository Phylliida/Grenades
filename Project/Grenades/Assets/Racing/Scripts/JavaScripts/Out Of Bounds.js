var placeHolder : PlaceHolder;
private var carVelocity : Vector3;
var notCountingValues : int[];
private var notCounting = false;
var initialSpeed = 20;
function OnTriggerEnter (other : Collider) {
	var tempScript : PlayerCollider;
	tempScript = other.GetComponent(PlayerCollider);
	if(tempScript){
  		var tempRigidbody : Rigidbody;
  		tempRigidbody = other.transform.parent.GetComponent(Rigidbody);
  		carVelocity = Vector3(0,0,initialSpeed);
  		notCounting = false;
  		for(var c = 0; c <  notCountingValues.Length; c++){
  			if(placeHolder.section[tempScript.referenceNumber] == notCountingValues[c]){
  				notCounting = true;
  				Debug.Log("Back!" + c);
  			}
  		}
  		if(!notCounting){
  			if(placeHolder.section[tempScript.referenceNumber] != 0){
  				other.transform.parent.position = placeHolder.sections[placeHolder.section[tempScript.referenceNumber] -1].transform.position;
  				other.transform.parent.rotation = placeHolder.sections[placeHolder.section[tempScript.referenceNumber]].transform.rotation;
  			}
  			else{
  				other.transform.parent.position = placeHolder.sections[placeHolder.section[tempScript.referenceNumber]].transform.position;
  				other.transform.parent.rotation = placeHolder.sections[placeHolder.section[tempScript.referenceNumber]].transform.rotation;
  			}
  		}
  		else{
  			for(var a = 1; a < 1000; a++){
 				notCounting = false;
  				for(var b = 0; b <  notCountingValues.Length; b++){
  					if((placeHolder.section[tempScript.referenceNumber] - a) == notCountingValues[b]){
  						notCounting = true;
  						Debug.Log("Back!" + b);
  					}
  				}
  				if(!notCounting){
  					other.transform.parent.position = placeHolder.sections[placeHolder.section[tempScript.referenceNumber] -a].transform.position;
  					other.transform.parent.rotation = placeHolder.sections[placeHolder.section[tempScript.referenceNumber]-a].transform.rotation;
  					a = 1027;
  				}
  			}	  				
  		}	
  		tempRigidbody.angularVelocity = Vector3(0,0,0);
  		tempRigidbody.velocity = other.transform.parent.TransformDirection(carVelocity);
	}
}
