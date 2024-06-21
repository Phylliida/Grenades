var block : Transform;
var arr = new Array ();
private var lengthOfArray = 1;
private var clone : Transform;
arr.length = lengthOfArray;
private var tempLength;
var level : Transform;
private var timeheld = 0.0;
var timeNeeded = 0.1;
var timeNeededforErase = 0.5;
var gridMode = true;

var a = 0;
var b = 0;
private var position = Vector3(0,0,0);
private var previousPosition = Vector3(0,0,0);
function Start() {
	
		previousPosition = Vector3(Mathf.Round(transform.position.x),Mathf.Round(transform.position.y) ,Mathf.Round(transform.position.z));
	
	
}

function Update () {
	if (Input.GetKey ("[3]")) {
         	
         	timeheld = timeheld + Time.deltaTime;
			if(timeheld >= timeNeededforErase){
			timeheld = 0;
         	if(arr.length > 1){
        	Debug.Log("Block Deleted");
        	tempLength = arr.length;
        	Destroy (arr[tempLength - 1].gameObject);
        	arr.length = tempLength - 1;
         	}
        	Debug.Log(arr.length);
			}
         	
         }
          if (Input.GetKeyDown ("[3]")) {
          	Debug.Log("3 Presssed");
          	timeheld = timeNeededforErase;
          }
	if (Input.GetKeyDown ("[7]")) {
		if(gridMode){
			gridMode = false;
			Debug.Log("Not Grid Mode!");
		}
		else{
			gridMode = true;
			Debug.Log("Grid Mode!");
		}
	}
		
	if (Input.GetKey ("[8]")) {
		
			timeheld = timeheld + Time.deltaTime;
			if(timeheld >= timeNeeded){
			timeheld = 0;
			if(!gridMode){
         		Debug.Log("Block Made");
         		clone = Instantiate(block, Vector3(transform.position.x,transform.position.y -1 ,transform.position.z), transform.rotation);
         		arr.Push (clone);
         		clone.parent = level.transform;
         		lengthOfArray = lengthOfArray + 1;
         		Debug.Log(arr.length);
			}
			if(gridMode){
				position = Vector3(Mathf.Round(transform.position.x),Mathf.Round(transform.position.y -1) ,Mathf.Round(transform.position.z));
				if(position != previousPosition){
				previousPosition = Vector3(Mathf.Round(transform.position.x),Mathf.Round(transform.position.y -1) ,Mathf.Round(transform.position.z));
				clone = Instantiate(block, Vector3(Mathf.Round(transform.position.x),Mathf.Round(transform.position.y -1) ,Mathf.Round(transform.position.z)), Quaternion.Euler(0, 0, 0));
				arr.Push (clone);
         		clone.parent = level.transform;
         		lengthOfArray = lengthOfArray + 1;
         		Debug.Log(arr.length);
			}
			
		}
         	
        }
        
        if (Input.GetKeyDown ("[8]")) {
			timeheld = timeNeeded;
         	
        }
        if (Input.GetKeyDown ("[9]")) {
			
			if(!gridMode){
         	Debug.Log("Block Made");
         	clone = Instantiate(block, Vector3(transform.position.x,transform.position.y -1 ,transform.position.z), transform.rotation);
         	arr.Push (clone);
         	if (clone.parent == level){
         	Debug.Log("Parented");
         	}
         	clone.parent = level.transform;
         	lengthOfArray = lengthOfArray + 1;
         	Debug.Log(arr);
         	Debug.Log(arr.length);
			}
			
         	
        }
        
        if (Input.GetKeyDown ("[4]")) {
         	Debug.Log("Block Made");
         	clone = Instantiate(block, Vector3(transform.position.x,transform.position.y -1 ,transform.position.z), transform.rotation);
         	arr.Push (clone);
         	clone.parent = level;
         	if (clone.parent == level){
         	Debug.Log("Parented");
         	}
         	lengthOfArray = lengthOfArray + 1;
         	Debug.Log(arr);
         	Debug.Log(arr.length);
        }
        if (Input.GetKeyDown ("[5]")) {
         	Debug.Log("Block Made");
         	clone = Instantiate(block, Vector3(transform.position.x,transform.position.y -1 ,transform.position.z), transform.rotation);
         	arr.Push (clone);
         	clone.parent = level;
         	Debug.Log("Parented");
         	lengthOfArray = lengthOfArray + 1;
         	Debug.Log(arr);
         	Debug.Log(arr.length);
        }
        if (Input.GetKeyDown ("[6]")) {
         	Debug.Log("Block Made");
         	clone = Instantiate(block, Vector3(transform.position.x,transform.position.y -1 ,transform.position.z), transform.rotation);
         	arr.Push (clone);
         	clone.parent = level;
         	lengthOfArray = lengthOfArray + 1;
         	Debug.Log(arr);
         	Debug.Log(arr.length);
        }
         if (Input.GetKeyDown ("[1]")) {
         	if(arr.length > 1){
        	Debug.Log("Block Deleted");
        	tempLength = arr.length;
        	Destroy (arr[tempLength - 1].gameObject);
        	arr.length = tempLength - 1;
         	}
        	Debug.Log(arr.length);
         	
         }
         
         
         
            
      
}
}