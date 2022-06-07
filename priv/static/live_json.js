var LiveJson = (() => {
  var __defProp = Object.defineProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // js/live_json/index.ts
  var live_json_exports = {};
  __export(live_json_exports, {
    createLiveJSONHooks: () => createLiveJSONHooks
  });

  // js/live_json/live_json.ts
  function createLiveJSONHooks() {
    return {
      LiveJSON: {
        mounted() {
        }
      }
    };
  }
  return live_json_exports;
})();
