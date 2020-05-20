function GetSpeed(dist, speedTime) {
  return dist / speedTime;
}

function GetDist(speed, speedTime) {
  return speed * speedTime;
}

function GetTime(speed, dist) {
  return dist / speed;
}

function GetFinalVelocity(vi, acc, velocityTime) {
  return vi + (acc* velocityTime);
}

function GetInitialVelocity(vf, acc, velocityTime) {
  return vf - (acc * velocityTime);
}

function GetAcceleration(vf, vi, velocityTime) {
  return (vf - vi) / velocityTime;
}

function GetVelocityTime() {
  return (vf - vi) / acc;
}

/** Returns the initial velocity at Y-Axis. Angle is converted to radians by default.
 * 
 * @param {number} velocity Initial velocity in m/s
 * @param {number} angle Angle of initial velocity
 */
function GetVelocityY(velocity, angle) {
  return velocity * Math.sin(ToRadian(angle));
}

/** Returns the initial velocity at X-Axis. Angle is converted to radians by default
 * 
 * @param {number} velocity Initial velocity in m/s
 * @param {number} angle Angle of initial velocity
 */
function GetVelocityX(velocity, angle) {
  return velocity * Math.cos(ToRadian(angle));
}

//#region Flat Surface
function GetMaxHeight(velocity, angle) {
  return ((Math.pow(GetVelocityY(velocity, angle), 2)) / (2 * 9.8));
}

function GetFlatRange(velocity, angle) {
  return ((Math.pow(velocity, 2) * Math.sin(2 * ToRadian(angle))) / 9.8);
}

function GetFlatFlightTime(velocity, angle) {
  return ((2 * GetVelocityY(velocity, angle)) / -9.8);
}

function GetFlatFinalVelocity(velocity, angle, time) {
  return Math.sqrt(Math.pow(GetVelocityX(velocity, angle), 2) + Math.pow((GetVelocityY(velocity, angle) - (9.8) * time), 2));
}
//#endregion

//#region Uneven Surface
function GetUnevenFlightTime(velocity, angle, height) {
  return ((GetVelocityY(velocity, angle) / 9.8) + Math.sqrt(((2 * 9.8 * height) + Math.pow(GetVelocityY(velocity, angle), 2)) / (Math.pow(9.8, 2))));
}

function GetUnevenRange(velocity, angle, time) {
  return (GetVelocityX(velocity, angle) * time);
}

function GetUnevenInitialHeight(velocity, angle, time) {
  return ((((Math.pow(9.8, 2)) * (Math.pow((time - (GetVelocityY(velocity, angle) / 9.8)), 2))) - Math.pow(GetVelocityY(velocity, angle), 2)) / (2 * 9.8));
}
//#endregion





function ToRadian(angle) {
  return (angle * Math.PI) / 180;
}