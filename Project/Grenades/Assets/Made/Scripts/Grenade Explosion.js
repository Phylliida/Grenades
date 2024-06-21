var timer = 5.0;
var explosion : Transform;
private var second = 0;
      rigidbody.velocity.y = 10; 
        second = 1;
    
    yield WaitForSeconds (5);
    Instantiate(explosion, transform.position, transform.rotation);
	Destroy(gameObject);
    

