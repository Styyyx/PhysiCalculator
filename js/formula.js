/** Returns the initial velocity at Y-Axis
 * 
 * @param {*} velocity Initial velocity in m/s
 * @param {*} angle Angle of initial velocity
 */
function GetVelocityY(velocity, angle) {
  return velocity * Math.sin(ToRadian(angle));
}

/** Returns the initial velocity at X-Axis
 * 
 * @param {*} velocity Initial velocity in m/s
 * @param {*} angle Angle of initial velocity
 */
function GetVelocityX(velocity, angle) {
  return velocity * Math.cos(ToRadian(angle));
}

function GetTimeFlight(velocity, angle) {
  return ((2 * GetVelocityY(velocity, angle)) / 9.8);
}

function GetMaxHeight(velocity, angle) {
  return ((Math.pow(GetVelocityY(velocity, angle), 2)) / 2 * 9.8);
}

function GetRangeElevated(iheight, velocity, angle) {
  return ((Math.pow(velocity, 2) * (Math.sin(ToRadian(2 * angle))) * (1 + Math.sqrt(1 + ((2 * 9.8 * iheight) / (Math.pow(GetVelocityY(velocity, angle))))))) / (2 * 9.8));
}

function GetRangeFlat(velocity, angle) {
  return ((Math.pow(velocity, 2) * Math.sin(2 * ToRadian(angle))) / 9.8);
}

function ToRadian(angle) {
  return (angle * Math.PI) / 180;
}