import * as jsonpatch from 'fast-json-patch';
require('jsondiffpatch');

function createLiveJSONHooks() {
  return {
    LiveJSON: {
      mounted() {
        
          this.handleEvent("lj:patch", ({doc_name, patch, method}) => {
              if(method === "rfc"){
                window[doc_name] = jsonpatch.applyPatch(window[doc_name], patch).newDocument;
              } else {
                window[doc_name] = jsondiffpatch.patch(window[doc_name], patch);
              }
          });

          this.handleEvent("lj:init", ({doc_name, initial_data}) => {
            window[doc_name] = initial_data;
          });

      }
    },
  };
}

export {createLiveJSONHooks};