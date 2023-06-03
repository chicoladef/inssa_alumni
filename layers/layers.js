var wms_layers = [];

        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSMStandard_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>'})],
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_cartographieInssavf_1 = new ol.format.GeoJSON();
var features_cartographieInssavf_1 = format_cartographieInssavf_1.readFeatures(json_cartographieInssavf_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cartographieInssavf_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_cartographieInssavf_1.addFeatures(features_cartographieInssavf_1);cluster_cartographieInssavf_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_cartographieInssavf_1
});var lyr_cartographieInssavf_1 = new ol.layer.Vector({
                declutter: true,
                source:cluster_cartographieInssavf_1, 
                style: style_cartographieInssavf_1,
                title: '<img src="styles/legend/cartographieInssavf_1.png" /> cartographieInssavf'
            });

lyr_OSMStandard_0.setVisible(true);lyr_cartographieInssavf_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_cartographieInssavf_1];
lyr_cartographieInssavf_1.set('fieldAliases', {'Nom': 'Nom', 'Prénom': 'Prénom', 'Téléphone': 'Téléphone', 'E-mail': 'E-mail', 'Promotion': 'Promotion', 'Soutenance': 'Soutenance', 'Profil': 'Profil', 'Spécialité': 'Spécialité', 'Structure': 'Structure', 'Y': 'Y', 'X': 'X', });
lyr_cartographieInssavf_1.set('fieldImages', {'Nom': 'TextEdit', 'Prénom': 'TextEdit', 'Téléphone': 'TextEdit', 'E-mail': 'TextEdit', 'Promotion': 'TextEdit', 'Soutenance': 'TextEdit', 'Profil': 'TextEdit', 'Spécialité': 'TextEdit', 'Structure': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_cartographieInssavf_1.set('fieldLabels', {'Nom': 'inline label', 'Prénom': 'inline label', 'Téléphone': 'inline label', 'E-mail': 'inline label', 'Promotion': 'inline label', 'Soutenance': 'inline label', 'Profil': 'inline label', 'Spécialité': 'header label', 'Structure': 'inline label', 'Y': 'no label', 'X': 'no label', });
lyr_cartographieInssavf_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});