using UnityEngine;
using System.Collections;

public class Clicker : MonoBehaviour {
	
	//An object which will be used as a marker of where the pathfinding target is currently
	public Transform target;
	
	//The Seeker to start pathfinding from when clicking
	public Transform selected;
	RaycastHit hit;
	
	public LayerMask mask;
	
	//The object to use when placing stuff on the ground
	public GameObject building;
	
	//If true, the target will be moved every frame instead of on every click, paths will not be calculated on click
	public bool continuous = false;
	
	// Update is called once per frame
	void Update () {
		
		if (Input.GetKeyDown ("mouse 0") || continuous) {
			Ray ray = camera.ScreenPointToRay (Input.mousePosition);
			
			if (Physics.Raycast (ray,out hit,1000F,mask)) {
				target.position = hit.point;
				
				if (!continuous) {
					//selected.tellMove (selected.transform.position,target.position);
				}
			}
		}
		
		if (Input.GetKeyDown ("p") && building != null) {
			Ray ray = camera.ScreenPointToRay (Input.mousePosition);
			
			if (Physics.Raycast (ray,out hit,1000F,mask)) {
				target.position = hit.point;
				GameObject go = Instantiate (building,hit.point,Quaternion.identity) as GameObject;
				AstarPath.active.SetNodes (false,go.collider.bounds,true);
			}
		}
	}
}
