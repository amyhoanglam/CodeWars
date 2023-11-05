// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

//Mine
const combat = (health, damage) => (health - damage < 0) ? 0 : (health - damage);

//Another
const combat2 = (health, damage) => Math.max(0, health - damage);