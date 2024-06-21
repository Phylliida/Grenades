var destroySeconds = 3;
var increaseJump = 0;
var GUIScript : RigidbodyGUI; 
var particleEffect : Transform;
function OnTriggerEnter (other : Collider) {
	var tempComponent : RigidbodyMover;
	tempComponent = other.transform.GetComponent(RigidbodyMover);
	if(tempComponent){
		var tempCollider : Collider;
		tempCollider = transform.GetComponent(Collider);
		DeletePowerUp(destroySeconds,tempCollider);	
		if(particleEffect){
			var tempParticle : Transform;
			tempParticle = Instantiate(particleEffect,other.transform.position,other.transform.rotation);
			tempParticle.parent = other.transform;
		}
		if(tempComponent.amountOfJumpsAllowed < increaseJump){
			tempComponent.amountOfJumpsAllowed = increaseJump;
			if(tempComponent.player == 1){
				GUIScript.player1On = true;
				GUIScript.player1Text = "Number of jumps increased to " + increaseJump + "!";
			}
			if(tempComponent.player == 2){
				GUIScript.player2On = true;
				GUIScript.player2Text = "Number of jumps increased to " + increaseJump + "!";
			}
			if(tempComponent.player == 3){
				GUIScript.player3On = true;
				GUIScript.player3Text = "Number of jumps increased to " + increaseJump + "!";
			}
			if(tempComponent.player == 4){
				GUIScript.player4On = true;
				GUIScript.player4Text = "Number of jumps increased to " + increaseJump + "!";
			}
		}
		
	}
}

function DeletePowerUp(timeWait : float,objectCollider : Collider){
	var tempMesh : MeshRenderer;
	tempMesh = 	transform.GetComponent(MeshRenderer);
	tempMesh.enabled = false;
	var tempSelfParticleEffect;
	tempSelfParticleEffect = GetComponentInChildren(ParticleRenderer);
	if(tempSelfParticleEffect){
		tempSelfParticleEffect.emit = false;
	}
	gameObject.Destroy(objectCollider);
	yield WaitForSeconds (timeWait);
	if(tempSelfParticleEffect){
		tempSelfParticleEffect.emit = true;
	}
	gameObject.AddComponent(CapsuleCollider);
	objectCollider = GetComponent(Collider);
	objectCollider.isTrigger = true;
	tempMesh.enabled = true;
}