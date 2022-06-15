import * as jsonpatch from 'fast-json-patch';
import * as jsondiffpatch from 'jsondiffpatch';

// via https://gist.github.com/jamestowers/40646b505167d88406c1de647ffa3885
function dispatchGlobalEvent(eventName) {
  let event

  if (typeof window.CustomEvent === 'function') {
    event = new window.CustomEvent(eventName, { })
  } else {
    event = document.createEvent('Event')
    event.initEvent(eventName, false, true)
  }
  window.dispatchEvent(event)
}

export function createLiveJsonHooks() {
  return {
    LiveJSON: {
      mounted() {

          /*
          Patch and Track
          */
        
          this.handleEvent("lj:patch", ({doc_name, patch, method}) => {       
            if(method == "rfc"){
              window[doc_name] = jsonpatch.applyPatch(window[doc_name], patch).newDocument;
            } else {
              window[doc_name] = jsondiffpatch.patch(window[doc_name], patch);
            }

            dispatchGlobalEvent(doc_name + "_patched");
          });

          this.handleEvent("lj:init", ({doc_name, data}) => {
            window[doc_name] = data;
            dispatchGlobalEvent(doc_name + "_initialized");
          });

          /*
          Utilities
          */

          this.handleEvent("lj:assign", ({doc_name, data}) => {
            window[doc_name] = data;
            dispatchGlobalEvent(doc_name + "_assigned");
          });

          this.handleEvent("lj:append", ({doc_name, data}) => {
            if(!(doc_name in window)){
              window[doc_name] = [];
            }
            window[doc_name].push(data);
            dispatchGlobalEvent(doc_name + "_appended");
          });

          this.handleEvent("lj:put", ({doc_name, key, value}) => {
            if(!(doc_name in window)){
              window[doc_name] = {};
            }
            window[doc_name].set(key, value);
            dispatchGlobalEvent(doc_name + "_put");
          });

      }
    },
  };
};
