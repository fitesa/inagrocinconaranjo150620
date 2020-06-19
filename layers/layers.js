var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_EvolucinIndicedeHumedadNavelino_1 = new ol.format.GeoJSON();
var features_EvolucinIndicedeHumedadNavelino_1 = format_EvolucinIndicedeHumedadNavelino_1.readFeatures(json_EvolucinIndicedeHumedadNavelino_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EvolucinIndicedeHumedadNavelino_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EvolucinIndicedeHumedadNavelino_1.addFeatures(features_EvolucinIndicedeHumedadNavelino_1);
var lyr_EvolucinIndicedeHumedadNavelino_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EvolucinIndicedeHumedadNavelino_1, 
                style: style_EvolucinIndicedeHumedadNavelino_1,
                interactive: false,
    title: 'Evolución Indice de Humedad - Navelino<br />\
    <img src="styles/legend/EvolucinIndicedeHumedadNavelino_1_0.png" /> Muy bajo<br />\
    <img src="styles/legend/EvolucinIndicedeHumedadNavelino_1_1.png" /> Bajo<br />\
    <img src="styles/legend/EvolucinIndicedeHumedadNavelino_1_2.png" /> Medio<br />\
    <img src="styles/legend/EvolucinIndicedeHumedadNavelino_1_3.png" /> Alto<br />\
    <img src="styles/legend/EvolucinIndicedeHumedadNavelino_1_4.png" /> Muy alto<br />'
        });
var format_IndicedeHumedadNavelino_2 = new ol.format.GeoJSON();
var features_IndicedeHumedadNavelino_2 = format_IndicedeHumedadNavelino_2.readFeatures(json_IndicedeHumedadNavelino_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndicedeHumedadNavelino_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndicedeHumedadNavelino_2.addFeatures(features_IndicedeHumedadNavelino_2);
var lyr_IndicedeHumedadNavelino_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndicedeHumedadNavelino_2, 
                style: style_IndicedeHumedadNavelino_2,
                interactive: false,
    title: 'Indice de Humedad - Navelino<br />\
    <img src="styles/legend/IndicedeHumedadNavelino_2_0.png" /> Muy bajo<br />\
    <img src="styles/legend/IndicedeHumedadNavelino_2_1.png" /> Bajo<br />\
    <img src="styles/legend/IndicedeHumedadNavelino_2_2.png" /> Medio<br />\
    <img src="styles/legend/IndicedeHumedadNavelino_2_3.png" /> Alto<br />\
    <img src="styles/legend/IndicedeHumedadNavelino_2_4.png" /> Muy alto<br />'
        });
var format_EvolucinIndicedeVegetacinNavelino_3 = new ol.format.GeoJSON();
var features_EvolucinIndicedeVegetacinNavelino_3 = format_EvolucinIndicedeVegetacinNavelino_3.readFeatures(json_EvolucinIndicedeVegetacinNavelino_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EvolucinIndicedeVegetacinNavelino_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EvolucinIndicedeVegetacinNavelino_3.addFeatures(features_EvolucinIndicedeVegetacinNavelino_3);
var lyr_EvolucinIndicedeVegetacinNavelino_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EvolucinIndicedeVegetacinNavelino_3, 
                style: style_EvolucinIndicedeVegetacinNavelino_3,
                interactive: false,
    title: 'Evolución Indice de Vegetación - Navelino<br />\
    <img src="styles/legend/EvolucinIndicedeVegetacinNavelino_3_0.png" /> Muy bajo<br />\
    <img src="styles/legend/EvolucinIndicedeVegetacinNavelino_3_1.png" /> Bajo<br />\
    <img src="styles/legend/EvolucinIndicedeVegetacinNavelino_3_2.png" /> Medio<br />\
    <img src="styles/legend/EvolucinIndicedeVegetacinNavelino_3_3.png" /> Alto<br />\
    <img src="styles/legend/EvolucinIndicedeVegetacinNavelino_3_4.png" /> Muy alto<br />'
        });
var format_IndicedeVegetacinNavelino_4 = new ol.format.GeoJSON();
var features_IndicedeVegetacinNavelino_4 = format_IndicedeVegetacinNavelino_4.readFeatures(json_IndicedeVegetacinNavelino_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndicedeVegetacinNavelino_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndicedeVegetacinNavelino_4.addFeatures(features_IndicedeVegetacinNavelino_4);
var lyr_IndicedeVegetacinNavelino_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndicedeVegetacinNavelino_4, 
                style: style_IndicedeVegetacinNavelino_4,
                interactive: false,
    title: 'Indice de Vegetación - Navelino<br />\
    <img src="styles/legend/IndicedeVegetacinNavelino_4_0.png" /> Muy bajo<br />\
    <img src="styles/legend/IndicedeVegetacinNavelino_4_1.png" /> Bajo<br />\
    <img src="styles/legend/IndicedeVegetacinNavelino_4_2.png" /> Medio<br />\
    <img src="styles/legend/IndicedeVegetacinNavelino_4_3.png" /> Alto<br />\
    <img src="styles/legend/IndicedeVegetacinNavelino_4_4.png" /> Muy alto<br />'
        });
var format_EvolucinIndicedeHumedadValenciana_5 = new ol.format.GeoJSON();
var features_EvolucinIndicedeHumedadValenciana_5 = format_EvolucinIndicedeHumedadValenciana_5.readFeatures(json_EvolucinIndicedeHumedadValenciana_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EvolucinIndicedeHumedadValenciana_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EvolucinIndicedeHumedadValenciana_5.addFeatures(features_EvolucinIndicedeHumedadValenciana_5);
var lyr_EvolucinIndicedeHumedadValenciana_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EvolucinIndicedeHumedadValenciana_5, 
                style: style_EvolucinIndicedeHumedadValenciana_5,
                interactive: false,
    title: 'Evolución Indice de Humedad - Valenciana<br />\
    <img src="styles/legend/EvolucinIndicedeHumedadValenciana_5_0.png" /> Muy bajo<br />\
    <img src="styles/legend/EvolucinIndicedeHumedadValenciana_5_1.png" /> Bajo<br />\
    <img src="styles/legend/EvolucinIndicedeHumedadValenciana_5_2.png" /> Medio<br />\
    <img src="styles/legend/EvolucinIndicedeHumedadValenciana_5_3.png" /> Alto<br />\
    <img src="styles/legend/EvolucinIndicedeHumedadValenciana_5_4.png" /> Muy alto<br />'
        });
var format_IndicedeHumedadValenciana_6 = new ol.format.GeoJSON();
var features_IndicedeHumedadValenciana_6 = format_IndicedeHumedadValenciana_6.readFeatures(json_IndicedeHumedadValenciana_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndicedeHumedadValenciana_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndicedeHumedadValenciana_6.addFeatures(features_IndicedeHumedadValenciana_6);
var lyr_IndicedeHumedadValenciana_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndicedeHumedadValenciana_6, 
                style: style_IndicedeHumedadValenciana_6,
                interactive: false,
    title: 'Indice de Humedad - Valenciana<br />\
    <img src="styles/legend/IndicedeHumedadValenciana_6_0.png" /> Muy bajo<br />\
    <img src="styles/legend/IndicedeHumedadValenciana_6_1.png" /> Bajo<br />\
    <img src="styles/legend/IndicedeHumedadValenciana_6_2.png" /> Medio<br />\
    <img src="styles/legend/IndicedeHumedadValenciana_6_3.png" /> Alto<br />\
    <img src="styles/legend/IndicedeHumedadValenciana_6_4.png" /> Muy alto<br />'
        });
var format_EvolucinIndicedeVegetacinValenciana_7 = new ol.format.GeoJSON();
var features_EvolucinIndicedeVegetacinValenciana_7 = format_EvolucinIndicedeVegetacinValenciana_7.readFeatures(json_EvolucinIndicedeVegetacinValenciana_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EvolucinIndicedeVegetacinValenciana_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EvolucinIndicedeVegetacinValenciana_7.addFeatures(features_EvolucinIndicedeVegetacinValenciana_7);
var lyr_EvolucinIndicedeVegetacinValenciana_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EvolucinIndicedeVegetacinValenciana_7, 
                style: style_EvolucinIndicedeVegetacinValenciana_7,
                interactive: false,
    title: 'Evolución Indice de Vegetación - Valenciana<br />\
    <img src="styles/legend/EvolucinIndicedeVegetacinValenciana_7_0.png" /> Muy bajo<br />\
    <img src="styles/legend/EvolucinIndicedeVegetacinValenciana_7_1.png" /> Bajo<br />\
    <img src="styles/legend/EvolucinIndicedeVegetacinValenciana_7_2.png" /> Medio<br />\
    <img src="styles/legend/EvolucinIndicedeVegetacinValenciana_7_3.png" /> Alto<br />\
    <img src="styles/legend/EvolucinIndicedeVegetacinValenciana_7_4.png" /> Muy alto<br />'
        });
var format_IndicedeVegetacinValenciana_8 = new ol.format.GeoJSON();
var features_IndicedeVegetacinValenciana_8 = format_IndicedeVegetacinValenciana_8.readFeatures(json_IndicedeVegetacinValenciana_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndicedeVegetacinValenciana_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndicedeVegetacinValenciana_8.addFeatures(features_IndicedeVegetacinValenciana_8);
var lyr_IndicedeVegetacinValenciana_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndicedeVegetacinValenciana_8, 
                style: style_IndicedeVegetacinValenciana_8,
                interactive: false,
    title: 'Indice de Vegetación - Valenciana<br />\
    <img src="styles/legend/IndicedeVegetacinValenciana_8_0.png" /> Muy bajo<br />\
    <img src="styles/legend/IndicedeVegetacinValenciana_8_1.png" /> Bajo<br />\
    <img src="styles/legend/IndicedeVegetacinValenciana_8_2.png" /> Medio<br />\
    <img src="styles/legend/IndicedeVegetacinValenciana_8_3.png" /> Alto<br />\
    <img src="styles/legend/IndicedeVegetacinValenciana_8_4.png" /> Muy alto<br />'
        });
var format_EvolucinIndicedeHumedadLanelate_9 = new ol.format.GeoJSON();
var features_EvolucinIndicedeHumedadLanelate_9 = format_EvolucinIndicedeHumedadLanelate_9.readFeatures(json_EvolucinIndicedeHumedadLanelate_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EvolucinIndicedeHumedadLanelate_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EvolucinIndicedeHumedadLanelate_9.addFeatures(features_EvolucinIndicedeHumedadLanelate_9);
var lyr_EvolucinIndicedeHumedadLanelate_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EvolucinIndicedeHumedadLanelate_9, 
                style: style_EvolucinIndicedeHumedadLanelate_9,
                interactive: false,
    title: 'Evolución Indice de Humedad - Lanelate<br />\
    <img src="styles/legend/EvolucinIndicedeHumedadLanelate_9_0.png" /> Muy bajo<br />\
    <img src="styles/legend/EvolucinIndicedeHumedadLanelate_9_1.png" /> Bajo<br />\
    <img src="styles/legend/EvolucinIndicedeHumedadLanelate_9_2.png" /> Medio<br />\
    <img src="styles/legend/EvolucinIndicedeHumedadLanelate_9_3.png" /> Alto<br />\
    <img src="styles/legend/EvolucinIndicedeHumedadLanelate_9_4.png" /> Muy alto<br />'
        });
var format_IndicedeHumedadLanelate_10 = new ol.format.GeoJSON();
var features_IndicedeHumedadLanelate_10 = format_IndicedeHumedadLanelate_10.readFeatures(json_IndicedeHumedadLanelate_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndicedeHumedadLanelate_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndicedeHumedadLanelate_10.addFeatures(features_IndicedeHumedadLanelate_10);
var lyr_IndicedeHumedadLanelate_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndicedeHumedadLanelate_10, 
                style: style_IndicedeHumedadLanelate_10,
                interactive: false,
    title: 'Indice de Humedad - Lanelate<br />\
    <img src="styles/legend/IndicedeHumedadLanelate_10_0.png" /> Muy bajo<br />\
    <img src="styles/legend/IndicedeHumedadLanelate_10_1.png" /> Bajo<br />\
    <img src="styles/legend/IndicedeHumedadLanelate_10_2.png" /> Medio<br />\
    <img src="styles/legend/IndicedeHumedadLanelate_10_3.png" /> Alto<br />\
    <img src="styles/legend/IndicedeHumedadLanelate_10_4.png" /> Muy alto<br />'
        });
var format_EvolucinIndicedeVegetacinLanelate_11 = new ol.format.GeoJSON();
var features_EvolucinIndicedeVegetacinLanelate_11 = format_EvolucinIndicedeVegetacinLanelate_11.readFeatures(json_EvolucinIndicedeVegetacinLanelate_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EvolucinIndicedeVegetacinLanelate_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EvolucinIndicedeVegetacinLanelate_11.addFeatures(features_EvolucinIndicedeVegetacinLanelate_11);
var lyr_EvolucinIndicedeVegetacinLanelate_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EvolucinIndicedeVegetacinLanelate_11, 
                style: style_EvolucinIndicedeVegetacinLanelate_11,
                interactive: false,
    title: 'Evolución Indice de Vegetación - Lanelate<br />\
    <img src="styles/legend/EvolucinIndicedeVegetacinLanelate_11_0.png" /> Muy bajo<br />\
    <img src="styles/legend/EvolucinIndicedeVegetacinLanelate_11_1.png" /> Bajo<br />\
    <img src="styles/legend/EvolucinIndicedeVegetacinLanelate_11_2.png" /> Medio<br />\
    <img src="styles/legend/EvolucinIndicedeVegetacinLanelate_11_3.png" /> Alto<br />\
    <img src="styles/legend/EvolucinIndicedeVegetacinLanelate_11_4.png" /> Muy alto<br />'
        });
var format_IndicedeVegetacinLanelate_12 = new ol.format.GeoJSON();
var features_IndicedeVegetacinLanelate_12 = format_IndicedeVegetacinLanelate_12.readFeatures(json_IndicedeVegetacinLanelate_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndicedeVegetacinLanelate_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndicedeVegetacinLanelate_12.addFeatures(features_IndicedeVegetacinLanelate_12);
var lyr_IndicedeVegetacinLanelate_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndicedeVegetacinLanelate_12, 
                style: style_IndicedeVegetacinLanelate_12,
                interactive: false,
    title: 'Indice de Vegetación - Lanelate<br />\
    <img src="styles/legend/IndicedeVegetacinLanelate_12_0.png" /> Muy bajo<br />\
    <img src="styles/legend/IndicedeVegetacinLanelate_12_1.png" /> Bajo<br />\
    <img src="styles/legend/IndicedeVegetacinLanelate_12_2.png" /> Medio<br />\
    <img src="styles/legend/IndicedeVegetacinLanelate_12_3.png" /> Alto<br />\
    <img src="styles/legend/IndicedeVegetacinLanelate_12_4.png" /> Muy alto<br />'
        });

lyr_GoogleHybrid_0.setVisible(true);lyr_EvolucinIndicedeHumedadNavelino_1.setVisible(true);lyr_IndicedeHumedadNavelino_2.setVisible(true);lyr_EvolucinIndicedeVegetacinNavelino_3.setVisible(true);lyr_IndicedeVegetacinNavelino_4.setVisible(true);lyr_EvolucinIndicedeHumedadValenciana_5.setVisible(true);lyr_IndicedeHumedadValenciana_6.setVisible(true);lyr_EvolucinIndicedeVegetacinValenciana_7.setVisible(true);lyr_IndicedeVegetacinValenciana_8.setVisible(true);lyr_EvolucinIndicedeHumedadLanelate_9.setVisible(true);lyr_IndicedeHumedadLanelate_10.setVisible(true);lyr_EvolucinIndicedeVegetacinLanelate_11.setVisible(true);lyr_IndicedeVegetacinLanelate_12.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_EvolucinIndicedeHumedadNavelino_1,lyr_IndicedeHumedadNavelino_2,lyr_EvolucinIndicedeVegetacinNavelino_3,lyr_IndicedeVegetacinNavelino_4,lyr_EvolucinIndicedeHumedadValenciana_5,lyr_IndicedeHumedadValenciana_6,lyr_EvolucinIndicedeVegetacinValenciana_7,lyr_IndicedeVegetacinValenciana_8,lyr_EvolucinIndicedeHumedadLanelate_9,lyr_IndicedeHumedadLanelate_10,lyr_EvolucinIndicedeVegetacinLanelate_11,lyr_IndicedeVegetacinLanelate_12];
lyr_EvolucinIndicedeHumedadNavelino_1.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'OUTPUT': 'OUTPUT', });
lyr_IndicedeHumedadNavelino_2.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'OUTPUT': 'OUTPUT', });
lyr_EvolucinIndicedeVegetacinNavelino_3.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'OUTPUT': 'OUTPUT', });
lyr_IndicedeVegetacinNavelino_4.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'OUTPUT': 'OUTPUT', });
lyr_EvolucinIndicedeHumedadValenciana_5.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'OUTPUT': 'OUTPUT', });
lyr_IndicedeHumedadValenciana_6.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'OUTPUT': 'OUTPUT', });
lyr_EvolucinIndicedeVegetacinValenciana_7.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'OUTPUT': 'OUTPUT', });
lyr_IndicedeVegetacinValenciana_8.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'OUTPUT': 'OUTPUT', });
lyr_EvolucinIndicedeHumedadLanelate_9.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'OUTPUT': 'OUTPUT', });
lyr_IndicedeHumedadLanelate_10.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'OUTPUT': 'OUTPUT', });
lyr_EvolucinIndicedeVegetacinLanelate_11.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'OUTPUT': 'OUTPUT', });
lyr_IndicedeVegetacinLanelate_12.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'id': 'id', 'ID_2': 'ID_2', 'X': 'X', 'Y': 'Y', 'OUTPUT': 'OUTPUT', });
lyr_EvolucinIndicedeHumedadNavelino_1.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'Range', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'OUTPUT': 'TextEdit', });
lyr_IndicedeHumedadNavelino_2.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'Range', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'OUTPUT': 'TextEdit', });
lyr_EvolucinIndicedeVegetacinNavelino_3.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'Range', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'OUTPUT': 'TextEdit', });
lyr_IndicedeVegetacinNavelino_4.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'Range', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'OUTPUT': 'TextEdit', });
lyr_EvolucinIndicedeHumedadValenciana_5.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'Range', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'OUTPUT': 'TextEdit', });
lyr_IndicedeHumedadValenciana_6.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'Range', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'OUTPUT': 'TextEdit', });
lyr_EvolucinIndicedeVegetacinValenciana_7.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'Range', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'OUTPUT': 'TextEdit', });
lyr_IndicedeVegetacinValenciana_8.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'Range', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'OUTPUT': 'TextEdit', });
lyr_EvolucinIndicedeHumedadLanelate_9.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'Range', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'OUTPUT': 'TextEdit', });
lyr_IndicedeHumedadLanelate_10.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'Range', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'OUTPUT': 'TextEdit', });
lyr_EvolucinIndicedeVegetacinLanelate_11.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'Range', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'OUTPUT': 'TextEdit', });
lyr_IndicedeVegetacinLanelate_12.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'id': 'Range', 'ID_2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'OUTPUT': 'TextEdit', });
lyr_EvolucinIndicedeHumedadNavelino_1.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'OUTPUT': 'no label', });
lyr_IndicedeHumedadNavelino_2.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'OUTPUT': 'no label', });
lyr_EvolucinIndicedeVegetacinNavelino_3.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'OUTPUT': 'no label', });
lyr_IndicedeVegetacinNavelino_4.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'OUTPUT': 'no label', });
lyr_EvolucinIndicedeHumedadValenciana_5.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'OUTPUT': 'no label', });
lyr_IndicedeHumedadValenciana_6.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'OUTPUT': 'no label', });
lyr_EvolucinIndicedeVegetacinValenciana_7.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'OUTPUT': 'no label', });
lyr_IndicedeVegetacinValenciana_8.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'OUTPUT': 'no label', });
lyr_EvolucinIndicedeHumedadLanelate_9.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'OUTPUT': 'no label', });
lyr_IndicedeHumedadLanelate_10.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'OUTPUT': 'no label', });
lyr_EvolucinIndicedeVegetacinLanelate_11.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'OUTPUT': 'no label', });
lyr_IndicedeVegetacinLanelate_12.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'id': 'no label', 'ID_2': 'no label', 'X': 'no label', 'Y': 'no label', 'OUTPUT': 'no label', });
lyr_IndicedeVegetacinLanelate_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});