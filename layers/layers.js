var wms_layers = [];


        var lyr_CMPCPlantaSantaFe_0 = new ol.layer.Tile({
            'title': 'CMPC Planta Santa Fe',
            'type':'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PuntosResiduosSolidos_1 = new ol.format.GeoJSON();
var features_PuntosResiduosSolidos_1 = format_PuntosResiduosSolidos_1.readFeatures(json_PuntosResiduosSolidos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuntosResiduosSolidos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuntosResiduosSolidos_1.addFeatures(features_PuntosResiduosSolidos_1);
var lyr_PuntosResiduosSolidos_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PuntosResiduosSolidos_1, 
                style: style_PuntosResiduosSolidos_1,
                popuplayertitle: 'Puntos Residuos Solidos ',
                interactive: true,
                title: 'Puntos Residuos Solidos '
            });
var format_PlantaSantaFe_2 = new ol.format.GeoJSON();
var features_PlantaSantaFe_2 = format_PlantaSantaFe_2.readFeatures(json_PlantaSantaFe_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlantaSantaFe_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantaSantaFe_2.addFeatures(features_PlantaSantaFe_2);
var lyr_PlantaSantaFe_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlantaSantaFe_2, 
                style: style_PlantaSantaFe_2,
                popuplayertitle: 'Planta Santa Fe ',
                interactive: false,
                title: '<img src="styles/legend/PlantaSantaFe_2.png" /> Planta Santa Fe '
            });

lyr_CMPCPlantaSantaFe_0.setVisible(true);lyr_PuntosResiduosSolidos_1.setVisible(true);lyr_PlantaSantaFe_2.setVisible(true);
var layersList = [lyr_CMPCPlantaSantaFe_0,lyr_PuntosResiduosSolidos_1,lyr_PlantaSantaFe_2];
lyr_PuntosResiduosSolidos_1.set('fieldAliases', {'fid': 'fid', 'Nombre ': 'Nombre ', 'Longitud ': 'Longitud ', 'Latitud ': 'Latitud ', 'Tipo residuo ': 'Tipo residuo ', 'Responsable': 'Responsable', 'Actividad ': 'Actividad ', 'Check List ': 'Check List ', 'Opa': 'Opa', 'Aspecto ': 'Aspecto ', 'Area ': 'Area ', });
lyr_PlantaSantaFe_2.set('fieldAliases', {'id': 'id', });
lyr_PuntosResiduosSolidos_1.set('fieldImages', {'fid': 'TextEdit', 'Nombre ': 'TextEdit', 'Longitud ': 'TextEdit', 'Latitud ': 'TextEdit', 'Tipo residuo ': 'TextEdit', 'Responsable': 'TextEdit', 'Actividad ': 'ValueMap', 'Check List ': 'ExternalResource', 'Opa': 'ExternalResource', 'Aspecto ': 'TextEdit', 'Area ': 'ValueMap', });
lyr_PlantaSantaFe_2.set('fieldImages', {'id': 'TextEdit', });
lyr_PuntosResiduosSolidos_1.set('fieldLabels', {'fid': 'no label', 'Nombre ': 'inline label - always visible', 'Longitud ': 'hidden field', 'Latitud ': 'hidden field', 'Tipo residuo ': 'inline label - always visible', 'Responsable': 'inline label - always visible', 'Actividad ': 'inline label - always visible', 'Check List ': 'inline label - always visible', 'Opa': 'inline label - always visible', 'Aspecto ': 'inline label - always visible', 'Area ': 'inline label - always visible', });
lyr_PlantaSantaFe_2.set('fieldLabels', {'id': 'no label', });
lyr_PlantaSantaFe_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});