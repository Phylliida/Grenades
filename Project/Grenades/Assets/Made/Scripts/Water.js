var water : Transform;
var deleteAfterSeconds = 10;
      rigidbody.velocity.y = Random.Range(-10, 10); 
      rigidbody.velocity.x = Random.Range(-10, 10); 
    yield WaitForSeconds (deleteAfterSeconds);
    Destroy(gameObject);
    

