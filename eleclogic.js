let maploc = "/Data/CongressionalDistrictsMapLayer";
let year = "2012";
let distmap = maploc + year + ".json"
console.log(distmap);
d3.json(distmap).then(function(response) {
    let myMap = L.map("elecmap", {
        center: [40.7, -73.95],
        zoom: 11
      });
      geoJSON(response).addTo(myMap)
});