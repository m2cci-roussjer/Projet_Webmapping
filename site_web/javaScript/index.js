import '../style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import GeoJSON from 'ol/format/GeoJSON';
import VectorSource from 'ol/source/Vector';
/* 
import KML from 'ol/format/KML';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import LayerSwitcher from 'ol-layerswitcher';
import LayerGroup from 'ol/layer/Group';
import Legend from 'ol-ext/legend/Legend';
import CtrLegend from 'ol-ext/control/Legend';
import Popup from 'ol-popup'; */

const osm = new TileLayer({
  className: 'bw',
  title: 'OSM',
  type: 'base',
  visible: true,
  source: new OSM(),
});
/*Exemple */
const pump_at_arcgisonline = new VectorSource({
  url: 'https://dservices9.arcgis.com/nuNzn0OMg75uWEMq/arcgis/services/pumps_/WFSServer?service=wfs&request=getcapabilities',
  format: new GeoJSON(),
});

const pumpLayer = new VectorLayer({
  source: pump_at_arcgisonline
});

const map = new Map({
  target: 'map',
  layers: [osm],
  view: new View({
    center: fromLonLat([45.18785481984832, 5.724914730680832]),
    zoom: 2
  })
});

map.addLayer(pumpLayer);