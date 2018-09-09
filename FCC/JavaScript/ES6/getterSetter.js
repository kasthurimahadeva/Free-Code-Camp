// Use getters and setters to Control Access to an Object
function makeClass() {
    "use strict";
    /* Alter code below this line */
    let F;
    class Thermostat {
      constructor (F){
        this.F = F;
      }
  
      //getter
      get temperature(){
        return 5 / 9 * (F - 32);
      }
  
      //setter
      set temperature(C){
        F = (C * 9.0 / 5.0) + 32;
      }
    }
    /* Alter code above this line */
    return Thermostat;
  }
  const Thermostat = makeClass();
  const thermos = new Thermostat(76); // setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in C
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in C