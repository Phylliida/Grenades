var life = 5;
var lifeCounter : Transform;
var varyingDistance = 10.0;
var height = 10.0;
private var lifeCounterArray : Transform[];
var fadedMaterial : Material;
var person : Transform;
private var tempLength = 0.0;
var lifePositioner : Transform;
private var waitToBeHurt = false;
function Start () {
	if(life > 0){
		lifeCounterArray = new Transform[life];
	}
	for(var c = 0; c <  lifeCounterArray.Length; c++){
		lifeCounterArray[c] = Instantiate(lifeCounter,transform.position,transform.rotation);
		tempLength = lifeCounterArray.length;
		lifeCounterArray[c].transform.position = Vector3((lifePositioner.transform.position.x + (varyingDistance / 2) - (varyingDistance * ((c + 1)/tempLength))),lifePositioner.transform.position.y + height, lifePositioner.transform.position.z);
		lifeCounterArray[c].transform.parent = lifePositioner;
	}
	
}
function DecreaseLife(){
	if(!waitToBeHurt){
			Debug.Log("LifeDecreased!");
			var tempMeshRenderer : MeshRenderer;
			tempMeshRenderer = lifeCounterArray[life - 1].GetComponent(MeshRenderer);
			if(tempMeshRenderer){
				tempMeshRenderer.material = fadedMaterial;
			}
			waitToBeHurt = true;
			yield WaitForSeconds (0.5);
			waitToBeHurt = false;
			Destroy(lifeCounterArray[life - 1].gameObject);
			life = life - 1;
			if(life == 0){
				Destroy(transform.gameObject);
			}
	}
	
}
