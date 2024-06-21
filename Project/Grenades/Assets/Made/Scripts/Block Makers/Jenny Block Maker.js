var block : Transform;
var arr = new Array ();
private var lengthOfArray = 1;
private var clone : Transform;
arr.length = lengthOfArray;
private var tempLength;
var level : Transform;
function Update () {
	if (Input.GetKeyDown ("o")) {
         	Debug.Log("Block Made");
         	clone = Instantiate(block, Vector3(transform.position.x,transform.position.y -1 ,transform.position.z), transform.rotation);
         	arr.Push (clone);
         	clone.parent = level;
         	lengthOfArray = lengthOfArray + 1;
         	Debug.Log(arr);
         	Debug.Log(arr.length);
        }
        if (Input.GetKeyDown ("8")) {
         	Debug.Log("Block Made");
         	clone = Instantiate(block, Vector3(transform.position.x,transform.position.y -1 ,transform.position.z), transform.rotation);
         	arr.Push (clone);
         	clone.parent = level;
         	lengthOfArray = lengthOfArray + 1;
         	Debug.Log(arr);
         	Debug.Log(arr.length);
        }
        if (Input.GetKeyDown ("9")) {
         	Debug.Log("Block Made");
         	clone = Instantiate(block, Vector3(transform.position.x,transform.position.y -1 ,transform.position.z), transform.rotation);
         	arr.Push (clone);
         	clone.parent = level;
         	lengthOfArray = lengthOfArray + 1;
         	Debug.Log(arr);
         	Debug.Log(arr.length);
        }
        if (Input.GetKeyDown ("0")) {
         	Debug.Log("Block Made");
         	clone = Instantiate(block, Vector3(transform.position.x,transform.position.y -1 ,transform.position.z), transform.rotation);
         	arr.Push (clone);
         	clone.parent = level;
         	lengthOfArray = lengthOfArray + 1;
         	Debug.Log(arr);
         	Debug.Log(arr.length);
        }
        if (Input.GetKeyDown ("m")) {
         	if(arr.length > 1){
        	Debug.Log("Block Deleted");
        	tempLength = arr.length;
        	Destroy (arr[tempLength - 1].gameObject);
        	arr.length = tempLength - 1;
         	}
        	Debug.Log(arr.length);
         	
         }
            
      
}