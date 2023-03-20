import 'ol/ol.css';
import '../style.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import OSM from 'ol/source/OSM';
import GeoJSON from 'ol/format/GeoJSON';
import VectorSource from 'ol/source/Vector';
import { fromLonLat } from 'ol/proj';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import Popup from 'ol-popup';

// Créer la couche du fond de carte OpenStreetMap
const osmLayer = new TileLayer({
  title: 'OpenStreetMap',
  type: 'base',
  visible: true,
  source: new OSM()
});
const osmLayer2 = new TileLayer({
  title: 'OpenStreetMap',
  type: 'base',
  visible: true,
  source: new OSM()
});

// Créer la couche de style commune Isère
const styleComIsère = function(feature) {
  const pm12 = feature.get('PMUN12');
  let color = '';
  if (pm12 <= 3283) {
    color = '#fee5d9';
  } else if (pm12 <= 9944) {
    color = '#fcae91';
  } else if (pm12 <= 22050) {
    color = '#fb6a4a';
  } else if (pm12 <= 38105) {
    color = '#de2d26';
  } else if (pm12 <= 158346) {
    color = '#a50f15';
  } else {
    color = '#000000';
  }
  return new Style({
    fill: new Fill({
      color: color
    }),
    stroke: new Stroke({
      color: '#333',
      width: 1
    })
  });
};

// Créer la couche de commune Isère GeoJSON
const comIsereLayer = new VectorLayer({
  source: new VectorSource({
    url: '../data/COMMUNE_Isere.geojson',
    format: new GeoJSON()
  }),
  style: styleComIsère ,
  title: 'Commune en Isère',
  visible: true
});

// Créer la carte OpenLayers pour l'Isère
const map = new Map({
  target: 'map',
  layers: [
    osmLayer,
    comIsereLayer
  ],
  view: new View({
    center: fromLonLat([5.73, 45.18]),
    zoom: 9
  }),
});

// Ajout Popup au survol de la souris
const popup = new Popup();
map.addOverlay(popup);

map.on('pointermove', function(evt) {
  map.forEachFeatureAtPixel(evt.pixel, function (feature, layer) {
    let nom = feature.get('nom');
    let PMUN12 = feature.get('PMUN12');
    let PMUN06 = feature.get('PMUN06');
    let Superficie = feature.get('Surface_km2');

    popup.show(evt.coordinate, '<h7><b>' + nom + '</b></h7> <br><h8>Population en 2012 : </h8>'+PMUN12+'<br><h8>Population en 2006 : </h8>'+PMUN06+'<br><h8>Superficie en km² : </h8>'+Superficie);
  }, // Dictionnary of options
    {
      layerFilter: function (layerCandidate) {
        return layerCandidate.get('title') == 'Commune en Isère'
      }
    });
});

//-------------------------------------------
// Créer la couche de style commune Rhone
const styleComRhone = function(feature) {
  const pm12 = feature.get('PMUN12');
  let color = '';
  if (pm12 <= 4123) {
    color = '#fee5d9';
  } else if (pm12 <= 13599) {
    color = '#fcae91';
  } else if (pm12 <= 31493) {
    color = '#fb6a4a';
  } else if (pm12 <= 146282) {
    color = '#de2d26';
  } else if (pm12 <= 496343) {
    color = '#a50f15';
  } else {
    color = '#000000';
  }
  return new Style({
    fill: new Fill({
      color: color
    }),
    stroke: new Stroke({
      color: '#333',
      width: 1
    })
  });
};

// Créer la couche de commune Rhone GeoJSON
const comRhoneLayer = new VectorLayer({
  source: new VectorSource({
    url: '../data/COMMUNE_Rhone.geojson',
    format: new GeoJSON()
  }),
  style: styleComRhone ,
  title: 'Commune dans le Rhône',
  visible: true
});

// Créer la carte OpenLayers pour le Rhone
const map2 = new Map({
  target: 'map2',
  layers: [
    osmLayer2,
    comRhoneLayer
  ],
  view: new View({
    center: fromLonLat([4.82, 45.75]),
    zoom: 9
  }),
});

// Ajout Popup au survol de la souris
const popup2 = new Popup();
map2.addOverlay(popup2);

map2.on('pointermove', function(evt) {
  map2.forEachFeatureAtPixel(evt.pixel, function (feature, layer) {
    let nom = feature.get('nom');
    let PMUN12 = feature.get('PMUN12');
    let PMUN06 = feature.get('PMUN06');
    let Superficie = feature.get('Surface_km2');

    popup2.show(evt.coordinate, '<h7><b>' + nom + '</b></h7> <br><h8>Population en 2012 : </h8>'+PMUN12+'<br><h8>Population en 2006 : </h8>'+PMUN06+'<br><h8>Superficie en km² : </h8>'+Superficie);
  }, // Dictionnary of options
    {
      layerFilter: function (layerCandidate) {
        return layerCandidate.get('title') == 'Commune dans le Rhône'
      }
    });
});



