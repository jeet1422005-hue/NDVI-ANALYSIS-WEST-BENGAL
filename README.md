# NDVI Analysis — West Bengal, India
### Using Google Earth Engine & Landsat 8 Satellite Data

## 👤 Author
**Jeet Mondal**  
B.Sc. Geography Honours Student  
Aspiring M.Sc. Geoinformatics Candidate

## 📌 Project Overview
This project analyses vegetation cover across the 
West Bengal region of India using NDVI 
(Normalized Difference Vegetation Index) derived 
from Landsat 8 satellite imagery.

## 🛰️ Data Used
- **Satellite:** Landsat 8 (USGS)
- **Dataset:** LANDSAT/LC08/C02/T1_L2
- **Time Period:** January 2023 – December 2023
- **Cloud Cover Filter:** Less than 10%
- **Spatial Resolution:** 30 meters

## 🔧 Tools & Platform
- Google Earth Engine (GEE)
- JavaScript API

## 📊 Methodology
1. Loaded Landsat 8 Surface Reflectance data
2. Filtered by date and cloud cover
3. Calculated NDVI using Near Infrared and 
   Red bands (SR_B5 and SR_B4)
4. Visualised vegetation distribution on map
5. Extracted statistical summaries (mean, min, max)

## 🌿 NDVI Value Interpretation
| NDVI Range | Meaning |
|---|---|
| Below 0 | Water bodies |
| 0 to 0.2 | Bare soil / Urban |
| 0.2 to 0.4 | Sparse vegetation |
| 0.4 to 0.6 | Moderate vegetation |
| Above 0.6 | Dense forest / crops |

## 📜 Certificate
This project was built following completion of:
- NASA ARSET — Fundamentals of Remote Sensing 
  (April 2026)
- Kaggle — Intro to Programming with Python (April 2026)

## 🔗 How to Run
1. Open Google Earth Engine Code Editor
2. Copy code from ndvi_analysis.js
3. Paste in GEE editor and click Run
