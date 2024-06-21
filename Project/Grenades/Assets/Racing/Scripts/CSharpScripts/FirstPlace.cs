using UnityEngine;
using System.Collections;

public class FirstPlace : MonoBehaviour {
	public CarCamera carCameraScript;
	public Transform firstPlaceCar;
	// Use this for initialization
	void Start () {
		carCameraScript = gameObject.GetComponent<CarCamera>();
		
	}
	
	
	// Update is called once per frame
	void Update () {
		if(firstPlaceCar){
			carCameraScript.target = firstPlaceCar;
		}
	
	}
}
