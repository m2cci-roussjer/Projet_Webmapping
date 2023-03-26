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

// import LayerSwitcher from 'ol-layerswitcher';

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

// Créer la couche de style
const styleArtif06 = function (feature) {
    const typeOccup = feature.get('Type_occupation');
    let color = '';
    if (typeOccup != 'Autres') {
        color = '#d510de';
    } else {
        color = '#FFFFFF00';
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

const styleArtif12 = function (feature) {
    const typeOccup = feature.get('Type_occupation');
    let color = '';
    if (typeOccup != 'Autres') {
        color = '#7e1284';
    } else {
        color = '#FFFFFF00';
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

// Créer la couche
const CL06_Isere_layer = new VectorLayer({
    source: new VectorSource({
        url: '../data/CL06_Isere_artificial.geojson',
        format: new GeoJSON()
    }),
    style: styleArtif06,
    visible: true
});

const CL12_Isere_layer = new VectorLayer({
    source: new VectorSource({
        url: '../data/CL12_Isere_artificial.geojson',
        format: new GeoJSON()
    }),
    style: styleArtif12,
    visible: true
});

const CL06_Rhone_layer = new VectorLayer({
    source: new VectorSource({
        url: '../data/CL06_Rhone_artificial.geojson',
        format: new GeoJSON()
    }),
    style: styleArtif06,
    visible: true
});

const CL12_Rhone_layer = new VectorLayer({
    source: new VectorSource({
        url: '../data/CL12_Rhone_artificial.geojson',
        format: new GeoJSON()
    }),
    style: styleArtif12,
    visible: true
});

// Créer la carte OpenLayers
const map3 = new Map({
    target: 'map3',
    layers: [
        osmLayer,
        CL12_Isere_layer,
        CL06_Isere_layer
    ],
    view: new View({
        center: fromLonLat([5.73, 45.18]),
        zoom: 12
    }),
});

const map4 = new Map({
    target: 'map4',
    layers: [
        osmLayer2,
        CL12_Rhone_layer,
        CL06_Rhone_layer

    ],
    view: new View({
        center: fromLonLat([4.82, 45.75]),
        zoom: 12
    }),
});


// // Créer le LayerSwitcher

// const layerSwitcher = new LayerSwitcher({
//   reverse: true,
//   groupSelectStyle: 'group',
// });

// // Ajouter le LayerSwitcher à la carte

// map3.addControl(layerSwitcher);