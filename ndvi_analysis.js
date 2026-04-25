// ================================================
// NDVI Analysis - West Bengal Region, India
// Author: Jeet Mondal
// Date: April 2026
// Tool: Google Earth Engine
// Data: Landsat 8 (USGS)
// ================================================

// Define study area - West Bengal center
var studyArea = ee.Geometry.Point([87.85, 23.25]);

// Load Landsat 8 image collection
var dataset = ee.ImageCollection('LANDSAT/LC08/C02/T1_L2')
    .filterDate('2023-01-01', '2023-12-31')
    .filterBounds(studyArea)
    .filter(ee.Filter.lt('CLOUD_COVER', 10))
    .first();

// Calculate NDVI
var ndvi = dataset.normalizedDifference(['SR_B5', 'SR_B4'])
                  .rename('NDVI');

// Display on map
Map.centerObject(studyArea, 9);
Map.addLayer(ndvi, {
  min: -0.2,
  max: 0.8,
  palette: ['red', 'orange', 'yellow', 'lightgreen', 'green', 'darkgreen']
}, 'NDVI West Bengal 2023');

// Print basic statistics
print('NDVI Statistics:', ndvi.reduceRegion({
  reducer: ee.Reducer.mean()
    .combine(ee.Reducer.min(), null, true)
    .combine(ee.Reducer.max(), null, true),
  geometry: studyArea.buffer(50000),
  scale: 30
}));
