var wms_layers = [];

var format_Manzanero_0 = new ol.format.GeoJSON();
var features_Manzanero_0 = format_Manzanero_0.readFeatures(json_Manzanero_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Manzanero_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Manzanero_0.addFeatures(features_Manzanero_0);
var lyr_Manzanero_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Manzanero_0, 
                style: style_Manzanero_0,
                interactive: true,
                title: '<img src="styles/legend/Manzanero_0.png" /> Manzanero'
            });
var format_LotesConDeuda_1 = new ol.format.GeoJSON();
var features_LotesConDeuda_1 = format_LotesConDeuda_1.readFeatures(json_LotesConDeuda_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LotesConDeuda_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LotesConDeuda_1.addFeatures(features_LotesConDeuda_1);
var lyr_LotesConDeuda_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LotesConDeuda_1, 
                style: style_LotesConDeuda_1,
                interactive: true,
    title: 'Lotes Con Deuda<br />\
    <img src="styles/legend/LotesConDeuda_1_0.png" /> Sin Deuda<br />\
    <img src="styles/legend/LotesConDeuda_1_1.png" /> Deuda hasta  $ 25.000<br />\
    <img src="styles/legend/LotesConDeuda_1_2.png" /> Deuda entre $ 25.000 y $ 50.000<br />\
    <img src="styles/legend/LotesConDeuda_1_3.png" /> Deuda entre $ 50.000 y $ 100.000<br />\
    <img src="styles/legend/LotesConDeuda_1_4.png" /> Deuda mayor a $ 100.000<br />'
        });

lyr_Manzanero_0.setVisible(true);lyr_LotesConDeuda_1.setVisible(true);
var layersList = [lyr_Manzanero_0,lyr_LotesConDeuda_1];
lyr_Manzanero_0.set('fieldAliases', {'area': 'area', });
lyr_LotesConDeuda_1.set('fieldAliases', {'Area': 'Area', 'perimetro': 'perimetro', 'Ref_Valor': 'Ref_Valor', 'Refe_Calle': 'Refe_Calle', 'Refe_N�m': 'Refe_N�m', 'Refe_Nombr': 'Refe_Nombr', 'Agreg_Deud': 'Agreg_Deud', });
lyr_Manzanero_0.set('fieldImages', {'area': '', });
lyr_LotesConDeuda_1.set('fieldImages', {'Area': 'TextEdit', 'perimetro': 'TextEdit', 'Ref_Valor': 'TextEdit', 'Refe_Calle': 'TextEdit', 'Refe_N�m': 'TextEdit', 'Refe_Nombr': 'TextEdit', 'Agreg_Deud': 'TextEdit', });
lyr_Manzanero_0.set('fieldLabels', {'area': 'no label', });
lyr_LotesConDeuda_1.set('fieldLabels', {'Area': 'inline label', 'perimetro': 'inline label', 'Ref_Valor': 'inline label', 'Refe_Calle': 'inline label', 'Refe_N�m': 'inline label', 'Refe_Nombr': 'inline label', 'Agreg_Deud': 'inline label', });
lyr_LotesConDeuda_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});