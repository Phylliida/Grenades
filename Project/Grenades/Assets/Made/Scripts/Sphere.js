var maxspeed = 5;
function Update () {
    if (rigidbody.velocity.y >= maxspeed) {
        rigidbody.velocity.y = maxspeed;
    }
    if (rigidbody.velocity.x >= maxspeed) {
        rigidbody.velocity.x = maxspeed;
    }
    if (rigidbody.velocity.z >= maxspeed) {
        rigidbody.velocity.z = maxspeed;
    }
}
