var selfCollider : Collider;
selfCollider = GetComponent(Collider);
var number : int = 0;
var placeHolder : PlaceHolder;
var waitingList = new Array ();
private var tempCollider : Collider;
private var tempComponent : PlayerCollider;
var selfTransform : Transform;
selfTransform = transform;
var others : Transform[];
//var arr = new Array ("Hello");
//arr.Add("World");
function Start (){
if(others.Length == 0){
	selfTransform = transform;
}
else{
		var randomNumber : float;
		randomNumber = Random.Range(1,others.Length);
		for (a = 0;a < waitingList.length; a++){
			if(randomNumber == a){
				selfTransform = others[a];
				a = 500;
			}
		}
		
}	

}
function OnTriggerEnter (other : Collider) {
	if(waitingList.length > 0){
		for (i = 0;i < waitingList.length; i++){
			tempCollider = waitingList[i];
			if(other == tempCollider){
				
				tempComponent = other.GetComponent(PlayerCollider);
				if(number + 1 < placeHolder.sections.length){
					placeHolder.sections[number + 1].AddToWaitingList (other);
					
					placeHolder.section[tempComponent.referenceNumber] = placeHolder.section[tempComponent.referenceNumber] + 1;
				}
				else{				
					placeHolder.sections[0].AddToWaitingList (other);
					placeHolder.lap[tempComponent.referenceNumber] = placeHolder.lap[tempComponent.referenceNumber] + 1;
					placeHolder.section[tempComponent.referenceNumber] = 0;			
				}
				waitingList.RemoveAt(i);
				
			}
		}
	}
}
/*function OnTriggerExit (other : Collider) {
	if(waitingList.length > 0){
		for (i = 0;i < waitingList.length; i++){
			tempCollider = waitingList[i];
			if(other == tempCollider){
				waitingList.RemoveAt(i);
				var tempComponent = other.GetComponent(PlayerCollider);
				if(number < placeHolder.sections.length){
				placeHolder.sections[i + 1].AddToWaitingList (other);
				placeHolder.section[tempComponent.referenceNumber] += 1;
				}
				else{				
				placeHolder.sections[0].AddToWaitingList (other);
				placeHolder.lap[tempComponent.referenceNumber] += 1;
				placeHolder.section[tempComponent.referenceNumber] = 0;				
				}
				
				
			}
		}
	}
}
*/
function AddToWaitingList (hit : Collider){
	waitingList.Push (hit);	
	if(others.Length > 0){
		var randomNumber : float;
		randomNumber = Random.Range(1,others.Length);
		for (a = 0;a < waitingList.length; a++){
			if(randomNumber == a){
				selfTransform = others[a];
			}
		}
	}
	
	
}
function Update() {
	if(Input.GetKeyDown("t")){
		Debug.Log(number + " " + waitingList);
	}
}