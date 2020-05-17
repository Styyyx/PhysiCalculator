/** Returns the initial velocity at Y-Axis. Angle is converted to radians by default.
 * 
 * @param {number} velocity Initial velocity in m/s
 * @param {number} angle Angle of initial velocity
 * @param {boolean} radian [optional] true if given angle is in radians
 */
function GetVelocityY(velocity, angle, radian = false) {
  if (radian) {
    return velocity * Math.sin(angle);
  } else {
    return velocity * Math.sin(ToRadian(angle));
  }
}

/** Returns the initial velocity at X-Axis. Angle is converted to radians by default
 * 
 * @param {number} velocity Initial velocity in m/s
 * @param {number} angle Angle of initial velocity
 * @param {boolean} radian [optional] true if given angle is in radians
 */
function GetVelocityX(velocity, angle, radian = false) {
  if (radian) {
    return velocity * Math.cos(angle);
  } else {
    return velocity * Math.cos(ToRadian(angle));
  }
}

function GetFlatFlightTime(velocity, angle) {
  return ((2 * GetVelocityY(velocity, angle)) / 9.8);
}

function GetUnevenFlightTime(velocity, angle, height, radian = false) {
  return ((GetVelocityY(velocity, angle, radian) / 9.8) + Math.sqrt(((2 * 9.8 * height) + Math.pow(GetVelocityY(velocity, angle, radian), 2)) / (Math.pow(9.8, 2))));
}

function GetMaxHeight(velocity, angle, radian = false) {
  return ((Math.pow(GetVelocityY(velocity, angle, radian), 2)) / 2 * 9.8);
}

function GetUnevenRange(iheight, velocity, angle, radian = false) {
  return ((Math.pow(velocity, 2) * (Math.sin(ToRadian(2 * angle))) * (1 + Math.sqrt(1 + ((2 * 9.8 * iheight) / (Math.pow(GetVelocityY(velocity, angle, radian))))))) / (2 * 9.8));
}

function GetFlatRange(velocity, angle, radian = false) {
  if (radian) {
    return ((Math.pow(velocity, 2) * Math.sin(2 * angle)) / 9.8);
  }
  return ((Math.pow(velocity, 2) * Math.sin(2 * ToRadian(angle))) / 9.8);
}

function ToRadian(angle) {
  return (angle * Math.PI) / 180;
}