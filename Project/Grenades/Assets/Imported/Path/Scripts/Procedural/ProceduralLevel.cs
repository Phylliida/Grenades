using UnityEngine;
using System.Collections;
using AstarClasses;

[AddComponentMenu ("Pathfinding/Procedural Grid")]
public class ProceduralLevel : MonoBehaviour {

	//This script will generate a procedural grid and then pass it to the A* system, make sure this is not called in the Awake function since the A* system might fail then

	public int angleIncrement = 4;
	public float distanceIncrement = 0.03F;
	public int numberOfNodes = 3000;
	
	public int connectionOffset = 0;
	
	public GeneratorMode mode = GeneratorMode.Spiral;
	public enum GeneratorMode {
		Circle,
		Spiral
	}
	
	public void Start () {
		//Create an array of nodes to use, we will use a one-dimensional array for simplicity
		SimpleNode[] nodes = new SimpleNode[numberOfNodes];
		
		//First initialize the nodes at different positions
		int lastRing = 0;
		float circleIncrement = 360/angleIncrement * distanceIncrement;
		for (int x=0;x<nodes.Length;x++) {
			
			nodes[x] = new SimpleNode (Vector3.zero);
			if (mode == GeneratorMode.Spiral) {
				nodes[x].vectorPos.x = Mathf.Sin (x * Mathf.Deg2Rad * angleIncrement) * x * distanceIncrement;
				nodes[x].vectorPos.z = Mathf.Cos (x * Mathf.Deg2Rad * angleIncrement) * x * distanceIncrement;
			} else {
				nodes[x].vectorPos.x = Mathf.Sin (x * Mathf.Deg2Rad * angleIncrement) * lastRing * circleIncrement;
				nodes[x].vectorPos.z = Mathf.Cos (x * Mathf.Deg2Rad * angleIncrement) * lastRing * circleIncrement;
			}
			
			nodes[x].vectorPos.y = 0;
			
			if (x * angleIncrement - 360*lastRing >= 360) {
				lastRing++;
			}
			
		}
		
		
		/* Then create the connections between the nodes
		Other optional settings to add to the node are costs to each neighbour and angles to each neighbours (make sure they are divided by 90 before adding them to the node)
		See the SimpleNode class in the AstarClasses script for more info about other settings
		*/
		for (int x=0;x<nodes.Length;x++) {
			SimpleNode node = nodes[x];
			
			ArrayList neighbours = new ArrayList ();
			
			if (x != 0) {
				neighbours.Add (nodes[x-1]);
			}
			if (x != nodes.Length-1) {
				neighbours.Add (nodes[x+1]);
			}
			
			int offset = Mathf.RoundToInt (360.0F/angleIncrement + connectionOffset);
			//Add the node further in towards the center of the spiral (90 is calculated by 360/angleIncrement 
			if (x - offset >= 0) {
				neighbours.Add (nodes[x-offset]);
			}
			
			//Add the node further away from the center of the spiral
			if (x + offset < nodes.Length) {
				neighbours.Add (nodes[x+offset]);
			}
			
			//Add the neighbours to the node
			node.neighbours = neighbours.ToArray (typeof(SimpleNode)) as SimpleNode[];
		}
		
		//Tell the A* script to create the navMesh
		AstarPath.active.CreateGrid (nodes);
		
	}
}
