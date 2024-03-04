require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView"
], function (
  esriConfig,
  Map,
  MapView
) {
  esriConfig.apiKey = "AAPK138537385fa048689761847bd0fdea41m-VzkyBru027N5wy0QL2nyf_NwJrwHOFZnzxVr8PVtPmszF78umt1JkxKanrxZqi";

  const map = new Map({
    basemap: "arcgis/topographic" // basemap styles service
  });
  const view = new MapView({
    map: map,
    center: [-118.805, 34.027], // Longitude, latitude
    zoom: 13, // Zoom level
    container: "viewDiv" // Div element
  });
});