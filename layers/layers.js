var wms_layers = [];

        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSMStandard_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>'})],
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_cartographieInssa_1 = new ol.format.GeoJSON();
var features_cartographieInssa_1 = format_cartographieInssa_1.readFeatures(json_cartographieInssa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cartographieInssa_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_cartographieInssa_1.addFeatures(features_cartographieInssa_1);cluster_cartographieInssa_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_cartographieInssa_1
});var lyr_cartographieInssa_1 = new ol.layer.Vector({
                declutter: true,
                source:cluster_cartographieInssa_1, 
                style: style_cartographieInssa_1,
                title: '<img src="styles/legend/cartographieInssa_1.png" /> cartographieInssa'
            });

lyr_OSMStandard_0.setVisible(true);lyr_cartographieInssa_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_cartographieInssa_1];
lyr_cartographieInssa_1.set('fieldAliases', {'Nom': 'Nom', 'Prénom': 'Prénom', 'Téléphone': 'Téléphone', 'E-mail': 'E-mail', 'Promotion': 'Promotion', 'Soutenance': 'Soutenance', 'Profil': 'Profil', 'Spécialité': 'Spécialité', 'Résidence': 'Résidence', 'X': 'X', 'Y': 'Y', });
lyr_cartographieInssa_1.set('fieldImages', {'Nom': 'TextEdit', 'Prénom': 'TextEdit', 'Téléphone': 'TextEdit', 'E-mail': 'TextEdit', 'Promotion': 'TextEdit', 'Soutenance': 'TextEdit', 'Profil': 'TextEdit', 'Spécialité': 'TextEdit', 'Résidence': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_cartographieInssa_1.set('fieldLabels', {'Nom': 'header label', 'Prénom': 'header label', 'Téléphone': 'header label', 'E-mail': 'no label', 'Promotion': 'no label', 'Soutenance': 'no label', 'Profil': 'no label', 'Spécialité': 'no label', 'Résidence': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_cartographieInssa_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});