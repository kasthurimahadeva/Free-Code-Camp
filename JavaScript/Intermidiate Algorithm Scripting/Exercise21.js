// Map the Debris

/*
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
 */

function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    let averageAlt;
    arr.map((x) => {
        averageAlt = x.avgAlt;
        delete x.avgAlt;
        x["orbitalPeriod"] = Math.round(2 * Math.PI * Math.sqrt(Math.pow(averageAlt + earthRadius, 3) / GM));
    })
    return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
