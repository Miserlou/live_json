import * as jsonpatch from 'fast-json-patch';
require('jsondiffpatch');

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

              dispatchGlobalEvent(doc_name + "_patched");
          });

          this.handleEvent("lj:init", ({doc_name, initial_data}) => {
            window[doc_name] = initial_data;
            dispatchGlobalEvent(doc_name + "_initiated");
          });

      }
    },
  };
}

export {createLiveJSONHooks};