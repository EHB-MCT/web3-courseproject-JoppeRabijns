##RUN SCRIPT 

nexrender-cli --file myjob.json --binary="/Applications/AdobeAfterEffects/aerender" 



##FIX LOCAL PERMISSIONS MAC

sudo chmod 777 /Applications/AdobeAfterEffects/aerender 



##EDIT TEXT

        {
              "type": "data",
              "layerName": "titel",
              "property": "Source Text",
              "value": "Wouter"
          }
