var selfCollider : Collider;
selfCollider = GetComponent(Collider);
var referenceNumber : int;
var PlaceHolder : PlaceHolder;
private var currentPlace : int;
private var tempScript : PlayerCollider;
private var distanceBetweenOtherAndCollider = 1.0;
private var distanceBetweenMeAndCollider = 1.0;
var frontOfCar : Transform;
var car3 : Car3;
var car : Car;
var car2 : Car2;
var carAI : CarAI;
private var speedBonus  = 2.7777777;
private var turnBonus = 2.7777777;
private var initialSpeed = 2.7777777;
private var initialTurn = 2.7777777;
private var yes = true;
var hitByBooster = false;
private var startTestForBooster = true;
private var timeTestForBooster = 0.0;
var tempMax = 0.0;
var boosterTime = 0.0;
function Start() {
	car3 = transform.parent.GetComponent (Car3);
	car = transform.parent.GetComponent (Car);
	car2 = transform.parent.GetComponent (Car2);
	carAI = transform.parent.GetComponent (CarAI);
}
function Update () {
	//booster modifications!
	if(hitByBooster){	
		if(startTestForBooster){
			timeTestForBooster = Time.timeSinceLevelLoad;
			startTestForBooster = false;
			
		}
		else{
			if(Time.timeSinceLevelLoad - timeTestForBooster > boosterTime){
				hitByBooster= false;
				startTestForBooster = true;
				if(car3){
					car3.topSpeed = tempMax;
				}
				if(car){
					car.topSpeed = tempMax;
							
				}
				if(car2){
					car2.topSpeed = tempMax;
				
				}
				if(carAI){
					carAI.topSpeed = tempMax;
				
				}
				/*var slowSpeed : Vector3;
				slowSpeed = Vector3(-tempMax,0,0);
				var tempRigidbody : Rigidbody;
				tempRigidbody = transform.parent.GetComponent(Rigidbody);
				tempRigidbody.velocity = slowSpeed;
				*/
			}
		}
		
	}
	
	if(yes){
		if(car3){
			initialSpeed = car3.topSpeed;
			initialTurn = car3.maximumTurn;		
		}
		if(car){
			initialSpeed = car.topSpeed;
			initialTurn = car.maximumTurn;			
		}
		if(car2){
			initialSpeed = car2.topSpeed;
			initialTurn = car2.maximumTurn;			
		}
		yes = false;
	}
	if(PlaceHolder.place[referenceNumber] > 0){
		
		currentPlace = PlaceHolder.place[referenceNumber];
		tempScript = PlaceHolder.placeList[currentPlace - 1];
			if(PlaceHolder.section[tempScript.referenceNumber] < PlaceHolder.section[referenceNumber] && PlaceHolder.lap[tempScript.referenceNumber] == PlaceHolder.lap[referenceNumber]){
				PlaceHolder.placeList[currentPlace] = tempScript;
				PlaceHolder.place[tempScript.referenceNumber] = PlaceHolder.place[tempScript.referenceNumber] + 1;
				PlaceHolder.placeList[currentPlace - 1] = gameObject.GetComponent(PlayerCollider);
				PlaceHolder.place[referenceNumber] = PlaceHolder.place[referenceNumber] - 1;
			}
			if(PlaceHolder.section[tempScript.referenceNumber] == PlaceHolder.section[referenceNumber]){
				distanceBetweenOtherAndCollider = Vector3.Distance(PlaceHolder.sections[PlaceHolder.section[tempScript.referenceNumber]].selfTransform.position,tempScript.frontOfCar.position);
				distanceBetweenMeAndCollider = Vector3.Distance(PlaceHolder.sections[PlaceHolder.section[referenceNumber]].selfTransform.position,frontOfCar.position);
				if(distanceBetweenOtherAndCollider > distanceBetweenMeAndCollider && PlaceHolder.lap[tempScript.referenceNumber] == PlaceHolder.lap[referenceNumber]){
					PlaceHolder.placeList[currentPlace] = tempScript;
					PlaceHolder.place[tempScript.referenceNumber] = PlaceHolder.place[tempScript.referenceNumber] + 1;
					PlaceHolder.placeList[currentPlace - 1] = gameObject.GetComponent(PlayerCollider);
					PlaceHolder.place[referenceNumber] = PlaceHolder.place[referenceNumber] - 1;
				}
			}
			/*if(PlaceHolder.place[referenceNumber] != currentPlace){
				speedBonus = (PlaceHolder.place[referenceNumber] + 1);
				speedBonus = speedBonus / (PlaceHolder.place.length);
				speedBonus = speedBonus * initialSpeed;
				turnBonus = (PlaceHolder.place[referenceNumber] + 1);
				turnBonus = turnBonus / (PlaceHolder.place.length);
				turnBonus =turnBonus * initialTurn * 1.3;
				if(Car3){
					Car3.topSpeed = speedBonus + initialSpeed;
					Car3.maximumTurn = turnBonus + initialTurn;
					//Debug.Log("Modified!" + " " + Car3.topSpeed + " " + Car3.maximumTurn);
				}
				if(Car){
					Car.topSpeed = speedBonus + initialSpeed;
					Car.maximumTurn = turnBonus + initialTurn;
					//Debug.Log("Modified!" + " " + Car.topSpeed + " " + Car.maximumTurn);
				}
				if(Car2){
					Car2.topSpeed = speedBonus + initialSpeed;
					Car2.maximumTurn = turnBonus + initialTurn;
					//Debug.Log("Modified!" + " " + Car2.topSpeed + " " + Car2.maximumTurn);
				}
			}
	}
	else{
				if(Car3){
					Car3.topSpeed = initialSpeed;
					Car3.maximumTurn = initialTurn;
				}
				if(Car){
					Car.topSpeed = initialSpeed;
					Car.maximumTurn = initialTurn;
				}
				if(Car2){
					Car2.topSpeed = initialSpeed;
					Car2.maximumTurn = initialTurn;
				}
	}
	*/
		}
		
			
	
}
