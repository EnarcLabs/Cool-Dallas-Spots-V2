
let Helpers = {};
Helpers.typeMatcher = (a,b) => {
  if(typeof(a) === typeof(b) && Array.isArray(a) === Array.isArray(b)){
      if(Array.isArray(a)){
        return 'array'
      }else{
        return typeof(a)
      }
  }else{
    return false;
  }
}
Helpers.findDistanceBetween2Places = (place1, place2) => {
  let type = typeMatcher(place1,place2)
  if(!!type){
    switch (type) {
      case 'object':
        point1 = {latitude : (typeof(place1.latitude) == 'string' ? parseFloat(place1.latitude) : place1.latitude), longitude : (typeof(place1.longitude) == 'string' ? parseFloat(place1.longitude) : place1.longitude)}
        point2 = {latitude : (typeof(place2.latitude) == 'string' ? parseFloat(place2.latitude) : place2.latitude), longitude : (typeof(place2.longitude) == 'string' ? parseFloat(place2.longitude) : place2.longitude)}
        break;
      case 'array':
        point1 = {latitude : (typeof(place1[1]) == 'string' ? parseFloat(place1[1]) : place1[1]), longitude : (typeof(place1[0]) == 'string' ? parseFloat(place1[0]) : place1[0])}
        point2 = {latitude : (typeof(place2[1]) == 'string' ? parseFloat(place2[1]) : place2[1]), longitude : (typeof(place2[0]) == 'string' ? parseFloat(place2[0]) : place2[0])}
        break;
      default:
        
    }
  let R = 6371;
  let deg2rad = (n) => { return Math.tan(n * (Math.PI/180)) };

  let dLat = deg2rad( point2.latitude - point1.latitude );
  let dLon = deg2rad( point2.longitude - point1.longitude );

  let a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(deg2rad(point1.latitude)) * Math.cos(deg2rad(point2.latitude)) * Math.sin(dLon/2) * Math.sin(dLon/2);
  let c = 2 * Math.asin(Math.sqrt(a));
  let d = R * c;

  return (d <= kms);
  }else{
    console.log("There was an error measuring the distance of 2 incompatible places types");
    return 0
  }
  
}

module.exports = Helpers;