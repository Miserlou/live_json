var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/jsondiffpatch/dist/empty.js
var require_empty = __commonJS({
  "node_modules/jsondiffpatch/dist/empty.js"() {
  }
});

// node_modules/jsondiffpatch/dist/jsondiffpatch.umd.js
var require_jsondiffpatch_umd = __commonJS({
  "node_modules/jsondiffpatch/dist/jsondiffpatch.umd.js"(exports, module2) {
    (function(global, factory) {
      typeof exports === "object" && typeof module2 !== "undefined" ? factory(exports, require_empty()) : typeof define === "function" && define.amd ? define(["exports", "./empty"], factory) : factory(global.jsondiffpatch = {}, global.chalk);
    })(exports, function(exports2, chalk) {
      "use strict";
      chalk = chalk && chalk.hasOwnProperty("default") ? chalk["default"] : chalk;
      var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
      } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
      var classCallCheck = function(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };
      var createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var get = function get2(object, property, receiver) {
        if (object === null)
          object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);
        if (desc === void 0) {
          var parent = Object.getPrototypeOf(object);
          if (parent === null) {
            return void 0;
          } else {
            return get2(parent, property, receiver);
          }
        } else if ("value" in desc) {
          return desc.value;
        } else {
          var getter = desc.get;
          if (getter === void 0) {
            return void 0;
          }
          return getter.call(receiver);
        }
      };
      var inherits = function(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      };
      var possibleConstructorReturn = function(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self;
      };
      var slicedToArray = function() {
        function sliceIterator(arr, i) {
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = void 0;
          try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i)
                break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"])
                _i["return"]();
            } finally {
              if (_d)
                throw _e;
            }
          }
          return _arr;
        }
        return function(arr, i) {
          if (Array.isArray(arr)) {
            return arr;
          } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
          } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }
        };
      }();
      var toConsumableArray = function(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++)
            arr2[i] = arr[i];
          return arr2;
        } else {
          return Array.from(arr);
        }
      };
      var Processor = function() {
        function Processor2(options) {
          classCallCheck(this, Processor2);
          this.selfOptions = options || {};
          this.pipes = {};
        }
        createClass(Processor2, [{
          key: "options",
          value: function options(_options) {
            if (_options) {
              this.selfOptions = _options;
            }
            return this.selfOptions;
          }
        }, {
          key: "pipe",
          value: function pipe(name, pipeArg) {
            var pipe2 = pipeArg;
            if (typeof name === "string") {
              if (typeof pipe2 === "undefined") {
                return this.pipes[name];
              } else {
                this.pipes[name] = pipe2;
              }
            }
            if (name && name.name) {
              pipe2 = name;
              if (pipe2.processor === this) {
                return pipe2;
              }
              this.pipes[pipe2.name] = pipe2;
            }
            pipe2.processor = this;
            return pipe2;
          }
        }, {
          key: "process",
          value: function process(input, pipe) {
            var context = input;
            context.options = this.options();
            var nextPipe = pipe || input.pipe || "default";
            var lastPipe = void 0;
            var lastContext = void 0;
            while (nextPipe) {
              if (typeof context.nextAfterChildren !== "undefined") {
                context.next = context.nextAfterChildren;
                context.nextAfterChildren = null;
              }
              if (typeof nextPipe === "string") {
                nextPipe = this.pipe(nextPipe);
              }
              nextPipe.process(context);
              lastContext = context;
              lastPipe = nextPipe;
              nextPipe = null;
              if (context) {
                if (context.next) {
                  context = context.next;
                  nextPipe = lastContext.nextPipe || context.pipe || lastPipe;
                }
              }
            }
            return context.hasResult ? context.result : void 0;
          }
        }]);
        return Processor2;
      }();
      var Pipe = function() {
        function Pipe2(name) {
          classCallCheck(this, Pipe2);
          this.name = name;
          this.filters = [];
        }
        createClass(Pipe2, [{
          key: "process",
          value: function process(input) {
            if (!this.processor) {
              throw new Error("add this pipe to a processor before using it");
            }
            var debug = this.debug;
            var length = this.filters.length;
            var context = input;
            for (var index2 = 0; index2 < length; index2++) {
              var filter = this.filters[index2];
              if (debug) {
                this.log("filter: " + filter.filterName);
              }
              filter(context);
              if ((typeof context === "undefined" ? "undefined" : _typeof(context)) === "object" && context.exiting) {
                context.exiting = false;
                break;
              }
            }
            if (!context.next && this.resultCheck) {
              this.resultCheck(context);
            }
          }
        }, {
          key: "log",
          value: function log2(msg) {
            console.log("[jsondiffpatch] " + this.name + " pipe, " + msg);
          }
        }, {
          key: "append",
          value: function append() {
            var _filters;
            (_filters = this.filters).push.apply(_filters, arguments);
            return this;
          }
        }, {
          key: "prepend",
          value: function prepend() {
            var _filters2;
            (_filters2 = this.filters).unshift.apply(_filters2, arguments);
            return this;
          }
        }, {
          key: "indexOf",
          value: function indexOf(filterName) {
            if (!filterName) {
              throw new Error("a filter name is required");
            }
            for (var index2 = 0; index2 < this.filters.length; index2++) {
              var filter = this.filters[index2];
              if (filter.filterName === filterName) {
                return index2;
              }
            }
            throw new Error("filter not found: " + filterName);
          }
        }, {
          key: "list",
          value: function list() {
            return this.filters.map(function(f) {
              return f.filterName;
            });
          }
        }, {
          key: "after",
          value: function after(filterName) {
            var index2 = this.indexOf(filterName);
            var params = Array.prototype.slice.call(arguments, 1);
            if (!params.length) {
              throw new Error("a filter is required");
            }
            params.unshift(index2 + 1, 0);
            Array.prototype.splice.apply(this.filters, params);
            return this;
          }
        }, {
          key: "before",
          value: function before(filterName) {
            var index2 = this.indexOf(filterName);
            var params = Array.prototype.slice.call(arguments, 1);
            if (!params.length) {
              throw new Error("a filter is required");
            }
            params.unshift(index2, 0);
            Array.prototype.splice.apply(this.filters, params);
            return this;
          }
        }, {
          key: "replace",
          value: function replace(filterName) {
            var index2 = this.indexOf(filterName);
            var params = Array.prototype.slice.call(arguments, 1);
            if (!params.length) {
              throw new Error("a filter is required");
            }
            params.unshift(index2, 1);
            Array.prototype.splice.apply(this.filters, params);
            return this;
          }
        }, {
          key: "remove",
          value: function remove(filterName) {
            var index2 = this.indexOf(filterName);
            this.filters.splice(index2, 1);
            return this;
          }
        }, {
          key: "clear",
          value: function clear() {
            this.filters.length = 0;
            return this;
          }
        }, {
          key: "shouldHaveResult",
          value: function shouldHaveResult(should) {
            if (should === false) {
              this.resultCheck = null;
              return;
            }
            if (this.resultCheck) {
              return;
            }
            var pipe = this;
            this.resultCheck = function(context) {
              if (!context.hasResult) {
                console.log(context);
                var error = new Error(pipe.name + " failed");
                error.noResult = true;
                throw error;
              }
            };
            return this;
          }
        }]);
        return Pipe2;
      }();
      var Context = function() {
        function Context2() {
          classCallCheck(this, Context2);
        }
        createClass(Context2, [{
          key: "setResult",
          value: function setResult(result) {
            this.result = result;
            this.hasResult = true;
            return this;
          }
        }, {
          key: "exit",
          value: function exit() {
            this.exiting = true;
            return this;
          }
        }, {
          key: "switchTo",
          value: function switchTo(next, pipe) {
            if (typeof next === "string" || next instanceof Pipe) {
              this.nextPipe = next;
            } else {
              this.next = next;
              if (pipe) {
                this.nextPipe = pipe;
              }
            }
            return this;
          }
        }, {
          key: "push",
          value: function push(child, name) {
            child.parent = this;
            if (typeof name !== "undefined") {
              child.childName = name;
            }
            child.root = this.root || this;
            child.options = child.options || this.options;
            if (!this.children) {
              this.children = [child];
              this.nextAfterChildren = this.next || null;
              this.next = child;
            } else {
              this.children[this.children.length - 1].next = child;
              this.children.push(child);
            }
            child.next = this;
            return this;
          }
        }]);
        return Context2;
      }();
      var isArray = typeof Array.isArray === "function" ? Array.isArray : function(a) {
        return a instanceof Array;
      };
      function cloneRegExp(re) {
        var regexMatch = /^\/(.*)\/([gimyu]*)$/.exec(re.toString());
        return new RegExp(regexMatch[1], regexMatch[2]);
      }
      function clone(arg) {
        if ((typeof arg === "undefined" ? "undefined" : _typeof(arg)) !== "object") {
          return arg;
        }
        if (arg === null) {
          return null;
        }
        if (isArray(arg)) {
          return arg.map(clone);
        }
        if (arg instanceof Date) {
          return new Date(arg.getTime());
        }
        if (arg instanceof RegExp) {
          return cloneRegExp(arg);
        }
        var cloned = {};
        for (var name in arg) {
          if (Object.prototype.hasOwnProperty.call(arg, name)) {
            cloned[name] = clone(arg[name]);
          }
        }
        return cloned;
      }
      var DiffContext = function(_Context) {
        inherits(DiffContext2, _Context);
        function DiffContext2(left, right) {
          classCallCheck(this, DiffContext2);
          var _this = possibleConstructorReturn(this, (DiffContext2.__proto__ || Object.getPrototypeOf(DiffContext2)).call(this));
          _this.left = left;
          _this.right = right;
          _this.pipe = "diff";
          return _this;
        }
        createClass(DiffContext2, [{
          key: "setResult",
          value: function setResult(result) {
            if (this.options.cloneDiffValues && (typeof result === "undefined" ? "undefined" : _typeof(result)) === "object") {
              var clone$$1 = typeof this.options.cloneDiffValues === "function" ? this.options.cloneDiffValues : clone;
              if (_typeof(result[0]) === "object") {
                result[0] = clone$$1(result[0]);
              }
              if (_typeof(result[1]) === "object") {
                result[1] = clone$$1(result[1]);
              }
            }
            return Context.prototype.setResult.apply(this, arguments);
          }
        }]);
        return DiffContext2;
      }(Context);
      var PatchContext = function(_Context) {
        inherits(PatchContext2, _Context);
        function PatchContext2(left, delta) {
          classCallCheck(this, PatchContext2);
          var _this = possibleConstructorReturn(this, (PatchContext2.__proto__ || Object.getPrototypeOf(PatchContext2)).call(this));
          _this.left = left;
          _this.delta = delta;
          _this.pipe = "patch";
          return _this;
        }
        return PatchContext2;
      }(Context);
      var ReverseContext = function(_Context) {
        inherits(ReverseContext2, _Context);
        function ReverseContext2(delta) {
          classCallCheck(this, ReverseContext2);
          var _this = possibleConstructorReturn(this, (ReverseContext2.__proto__ || Object.getPrototypeOf(ReverseContext2)).call(this));
          _this.delta = delta;
          _this.pipe = "reverse";
          return _this;
        }
        return ReverseContext2;
      }(Context);
      var isArray$1 = typeof Array.isArray === "function" ? Array.isArray : function(a) {
        return a instanceof Array;
      };
      var diffFilter = function trivialMatchesDiffFilter(context) {
        if (context.left === context.right) {
          context.setResult(void 0).exit();
          return;
        }
        if (typeof context.left === "undefined") {
          if (typeof context.right === "function") {
            throw new Error("functions are not supported");
          }
          context.setResult([context.right]).exit();
          return;
        }
        if (typeof context.right === "undefined") {
          context.setResult([context.left, 0, 0]).exit();
          return;
        }
        if (typeof context.left === "function" || typeof context.right === "function") {
          throw new Error("functions are not supported");
        }
        context.leftType = context.left === null ? "null" : _typeof(context.left);
        context.rightType = context.right === null ? "null" : _typeof(context.right);
        if (context.leftType !== context.rightType) {
          context.setResult([context.left, context.right]).exit();
          return;
        }
        if (context.leftType === "boolean" || context.leftType === "number") {
          context.setResult([context.left, context.right]).exit();
          return;
        }
        if (context.leftType === "object") {
          context.leftIsArray = isArray$1(context.left);
        }
        if (context.rightType === "object") {
          context.rightIsArray = isArray$1(context.right);
        }
        if (context.leftIsArray !== context.rightIsArray) {
          context.setResult([context.left, context.right]).exit();
          return;
        }
        if (context.left instanceof RegExp) {
          if (context.right instanceof RegExp) {
            context.setResult([context.left.toString(), context.right.toString()]).exit();
          } else {
            context.setResult([context.left, context.right]).exit();
          }
        }
      };
      diffFilter.filterName = "trivial";
      var patchFilter = function trivialMatchesPatchFilter(context) {
        if (typeof context.delta === "undefined") {
          context.setResult(context.left).exit();
          return;
        }
        context.nested = !isArray$1(context.delta);
        if (context.nested) {
          return;
        }
        if (context.delta.length === 1) {
          context.setResult(context.delta[0]).exit();
          return;
        }
        if (context.delta.length === 2) {
          if (context.left instanceof RegExp) {
            var regexArgs = /^\/(.*)\/([gimyu]+)$/.exec(context.delta[1]);
            if (regexArgs) {
              context.setResult(new RegExp(regexArgs[1], regexArgs[2])).exit();
              return;
            }
          }
          context.setResult(context.delta[1]).exit();
          return;
        }
        if (context.delta.length === 3 && context.delta[2] === 0) {
          context.setResult(void 0).exit();
        }
      };
      patchFilter.filterName = "trivial";
      var reverseFilter = function trivialReferseFilter(context) {
        if (typeof context.delta === "undefined") {
          context.setResult(context.delta).exit();
          return;
        }
        context.nested = !isArray$1(context.delta);
        if (context.nested) {
          return;
        }
        if (context.delta.length === 1) {
          context.setResult([context.delta[0], 0, 0]).exit();
          return;
        }
        if (context.delta.length === 2) {
          context.setResult([context.delta[1], context.delta[0]]).exit();
          return;
        }
        if (context.delta.length === 3 && context.delta[2] === 0) {
          context.setResult([context.delta[0]]).exit();
        }
      };
      reverseFilter.filterName = "trivial";
      function collectChildrenDiffFilter(context) {
        if (!context || !context.children) {
          return;
        }
        var length = context.children.length;
        var child = void 0;
        var result = context.result;
        for (var index2 = 0; index2 < length; index2++) {
          child = context.children[index2];
          if (typeof child.result === "undefined") {
            continue;
          }
          result = result || {};
          result[child.childName] = child.result;
        }
        if (result && context.leftIsArray) {
          result._t = "a";
        }
        context.setResult(result).exit();
      }
      collectChildrenDiffFilter.filterName = "collectChildren";
      function objectsDiffFilter(context) {
        if (context.leftIsArray || context.leftType !== "object") {
          return;
        }
        var name = void 0;
        var child = void 0;
        var propertyFilter = context.options.propertyFilter;
        for (name in context.left) {
          if (!Object.prototype.hasOwnProperty.call(context.left, name)) {
            continue;
          }
          if (propertyFilter && !propertyFilter(name, context)) {
            continue;
          }
          child = new DiffContext(context.left[name], context.right[name]);
          context.push(child, name);
        }
        for (name in context.right) {
          if (!Object.prototype.hasOwnProperty.call(context.right, name)) {
            continue;
          }
          if (propertyFilter && !propertyFilter(name, context)) {
            continue;
          }
          if (typeof context.left[name] === "undefined") {
            child = new DiffContext(void 0, context.right[name]);
            context.push(child, name);
          }
        }
        if (!context.children || context.children.length === 0) {
          context.setResult(void 0).exit();
          return;
        }
        context.exit();
      }
      objectsDiffFilter.filterName = "objects";
      var patchFilter$1 = function nestedPatchFilter(context) {
        if (!context.nested) {
          return;
        }
        if (context.delta._t) {
          return;
        }
        var name = void 0;
        var child = void 0;
        for (name in context.delta) {
          child = new PatchContext(context.left[name], context.delta[name]);
          context.push(child, name);
        }
        context.exit();
      };
      patchFilter$1.filterName = "objects";
      var collectChildrenPatchFilter = function collectChildrenPatchFilter2(context) {
        if (!context || !context.children) {
          return;
        }
        if (context.delta._t) {
          return;
        }
        var length = context.children.length;
        var child = void 0;
        for (var index2 = 0; index2 < length; index2++) {
          child = context.children[index2];
          if (Object.prototype.hasOwnProperty.call(context.left, child.childName) && child.result === void 0) {
            delete context.left[child.childName];
          } else if (context.left[child.childName] !== child.result) {
            context.left[child.childName] = child.result;
          }
        }
        context.setResult(context.left).exit();
      };
      collectChildrenPatchFilter.filterName = "collectChildren";
      var reverseFilter$1 = function nestedReverseFilter(context) {
        if (!context.nested) {
          return;
        }
        if (context.delta._t) {
          return;
        }
        var name = void 0;
        var child = void 0;
        for (name in context.delta) {
          child = new ReverseContext(context.delta[name]);
          context.push(child, name);
        }
        context.exit();
      };
      reverseFilter$1.filterName = "objects";
      function collectChildrenReverseFilter(context) {
        if (!context || !context.children) {
          return;
        }
        if (context.delta._t) {
          return;
        }
        var length = context.children.length;
        var child = void 0;
        var delta = {};
        for (var index2 = 0; index2 < length; index2++) {
          child = context.children[index2];
          if (delta[child.childName] !== child.result) {
            delta[child.childName] = child.result;
          }
        }
        context.setResult(delta).exit();
      }
      collectChildrenReverseFilter.filterName = "collectChildren";
      var defaultMatch = function defaultMatch2(array1, array2, index1, index2) {
        return array1[index1] === array2[index2];
      };
      var lengthMatrix = function lengthMatrix2(array1, array2, match, context) {
        var len1 = array1.length;
        var len2 = array2.length;
        var x = void 0, y = void 0;
        var matrix = [len1 + 1];
        for (x = 0; x < len1 + 1; x++) {
          matrix[x] = [len2 + 1];
          for (y = 0; y < len2 + 1; y++) {
            matrix[x][y] = 0;
          }
        }
        matrix.match = match;
        for (x = 1; x < len1 + 1; x++) {
          for (y = 1; y < len2 + 1; y++) {
            if (match(array1, array2, x - 1, y - 1, context)) {
              matrix[x][y] = matrix[x - 1][y - 1] + 1;
            } else {
              matrix[x][y] = Math.max(matrix[x - 1][y], matrix[x][y - 1]);
            }
          }
        }
        return matrix;
      };
      var backtrack = function backtrack2(matrix, array1, array2, context) {
        var index1 = array1.length;
        var index2 = array2.length;
        var subsequence = {
          sequence: [],
          indices1: [],
          indices2: []
        };
        while (index1 !== 0 && index2 !== 0) {
          var sameLetter = matrix.match(array1, array2, index1 - 1, index2 - 1, context);
          if (sameLetter) {
            subsequence.sequence.unshift(array1[index1 - 1]);
            subsequence.indices1.unshift(index1 - 1);
            subsequence.indices2.unshift(index2 - 1);
            --index1;
            --index2;
          } else {
            var valueAtMatrixAbove = matrix[index1][index2 - 1];
            var valueAtMatrixLeft = matrix[index1 - 1][index2];
            if (valueAtMatrixAbove > valueAtMatrixLeft) {
              --index2;
            } else {
              --index1;
            }
          }
        }
        return subsequence;
      };
      var get$1 = function get2(array1, array2, match, context) {
        var innerContext = context || {};
        var matrix = lengthMatrix(array1, array2, match || defaultMatch, innerContext);
        var result = backtrack(matrix, array1, array2, innerContext);
        if (typeof array1 === "string" && typeof array2 === "string") {
          result.sequence = result.sequence.join("");
        }
        return result;
      };
      var lcs = {
        get: get$1
      };
      var ARRAY_MOVE = 3;
      var isArray$2 = typeof Array.isArray === "function" ? Array.isArray : function(a) {
        return a instanceof Array;
      };
      var arrayIndexOf = typeof Array.prototype.indexOf === "function" ? function(array, item) {
        return array.indexOf(item);
      } : function(array, item) {
        var length = array.length;
        for (var i = 0; i < length; i++) {
          if (array[i] === item) {
            return i;
          }
        }
        return -1;
      };
      function arraysHaveMatchByRef(array1, array2, len1, len2) {
        for (var index1 = 0; index1 < len1; index1++) {
          var val1 = array1[index1];
          for (var index2 = 0; index2 < len2; index2++) {
            var val2 = array2[index2];
            if (index1 !== index2 && val1 === val2) {
              return true;
            }
          }
        }
      }
      function matchItems(array1, array2, index1, index2, context) {
        var value1 = array1[index1];
        var value2 = array2[index2];
        if (value1 === value2) {
          return true;
        }
        if ((typeof value1 === "undefined" ? "undefined" : _typeof(value1)) !== "object" || (typeof value2 === "undefined" ? "undefined" : _typeof(value2)) !== "object") {
          return false;
        }
        var objectHash = context.objectHash;
        if (!objectHash) {
          return context.matchByPosition && index1 === index2;
        }
        var hash1 = void 0;
        var hash2 = void 0;
        if (typeof index1 === "number") {
          context.hashCache1 = context.hashCache1 || [];
          hash1 = context.hashCache1[index1];
          if (typeof hash1 === "undefined") {
            context.hashCache1[index1] = hash1 = objectHash(value1, index1);
          }
        } else {
          hash1 = objectHash(value1);
        }
        if (typeof hash1 === "undefined") {
          return false;
        }
        if (typeof index2 === "number") {
          context.hashCache2 = context.hashCache2 || [];
          hash2 = context.hashCache2[index2];
          if (typeof hash2 === "undefined") {
            context.hashCache2[index2] = hash2 = objectHash(value2, index2);
          }
        } else {
          hash2 = objectHash(value2);
        }
        if (typeof hash2 === "undefined") {
          return false;
        }
        return hash1 === hash2;
      }
      var diffFilter$1 = function arraysDiffFilter(context) {
        if (!context.leftIsArray) {
          return;
        }
        var matchContext = {
          objectHash: context.options && context.options.objectHash,
          matchByPosition: context.options && context.options.matchByPosition
        };
        var commonHead = 0;
        var commonTail = 0;
        var index2 = void 0;
        var index1 = void 0;
        var index22 = void 0;
        var array1 = context.left;
        var array2 = context.right;
        var len1 = array1.length;
        var len2 = array2.length;
        var child = void 0;
        if (len1 > 0 && len2 > 0 && !matchContext.objectHash && typeof matchContext.matchByPosition !== "boolean") {
          matchContext.matchByPosition = !arraysHaveMatchByRef(array1, array2, len1, len2);
        }
        while (commonHead < len1 && commonHead < len2 && matchItems(array1, array2, commonHead, commonHead, matchContext)) {
          index2 = commonHead;
          child = new DiffContext(context.left[index2], context.right[index2]);
          context.push(child, index2);
          commonHead++;
        }
        while (commonTail + commonHead < len1 && commonTail + commonHead < len2 && matchItems(array1, array2, len1 - 1 - commonTail, len2 - 1 - commonTail, matchContext)) {
          index1 = len1 - 1 - commonTail;
          index22 = len2 - 1 - commonTail;
          child = new DiffContext(context.left[index1], context.right[index22]);
          context.push(child, index22);
          commonTail++;
        }
        var result = void 0;
        if (commonHead + commonTail === len1) {
          if (len1 === len2) {
            context.setResult(void 0).exit();
            return;
          }
          result = result || {
            _t: "a"
          };
          for (index2 = commonHead; index2 < len2 - commonTail; index2++) {
            result[index2] = [array2[index2]];
          }
          context.setResult(result).exit();
          return;
        }
        if (commonHead + commonTail === len2) {
          result = result || {
            _t: "a"
          };
          for (index2 = commonHead; index2 < len1 - commonTail; index2++) {
            result["_" + index2] = [array1[index2], 0, 0];
          }
          context.setResult(result).exit();
          return;
        }
        delete matchContext.hashCache1;
        delete matchContext.hashCache2;
        var trimmed1 = array1.slice(commonHead, len1 - commonTail);
        var trimmed2 = array2.slice(commonHead, len2 - commonTail);
        var seq = lcs.get(trimmed1, trimmed2, matchItems, matchContext);
        var removedItems = [];
        result = result || {
          _t: "a"
        };
        for (index2 = commonHead; index2 < len1 - commonTail; index2++) {
          if (arrayIndexOf(seq.indices1, index2 - commonHead) < 0) {
            result["_" + index2] = [array1[index2], 0, 0];
            removedItems.push(index2);
          }
        }
        var detectMove = true;
        if (context.options && context.options.arrays && context.options.arrays.detectMove === false) {
          detectMove = false;
        }
        var includeValueOnMove = false;
        if (context.options && context.options.arrays && context.options.arrays.includeValueOnMove) {
          includeValueOnMove = true;
        }
        var removedItemsLength = removedItems.length;
        for (index2 = commonHead; index2 < len2 - commonTail; index2++) {
          var indexOnArray2 = arrayIndexOf(seq.indices2, index2 - commonHead);
          if (indexOnArray2 < 0) {
            var isMove = false;
            if (detectMove && removedItemsLength > 0) {
              for (var removeItemIndex1 = 0; removeItemIndex1 < removedItemsLength; removeItemIndex1++) {
                index1 = removedItems[removeItemIndex1];
                if (matchItems(trimmed1, trimmed2, index1 - commonHead, index2 - commonHead, matchContext)) {
                  result["_" + index1].splice(1, 2, index2, ARRAY_MOVE);
                  if (!includeValueOnMove) {
                    result["_" + index1][0] = "";
                  }
                  index22 = index2;
                  child = new DiffContext(context.left[index1], context.right[index22]);
                  context.push(child, index22);
                  removedItems.splice(removeItemIndex1, 1);
                  isMove = true;
                  break;
                }
              }
            }
            if (!isMove) {
              result[index2] = [array2[index2]];
            }
          } else {
            index1 = seq.indices1[indexOnArray2] + commonHead;
            index22 = seq.indices2[indexOnArray2] + commonHead;
            child = new DiffContext(context.left[index1], context.right[index22]);
            context.push(child, index22);
          }
        }
        context.setResult(result).exit();
      };
      diffFilter$1.filterName = "arrays";
      var compare2 = {
        numerically: function numerically(a, b) {
          return a - b;
        },
        numericallyBy: function numericallyBy(name) {
          return function(a, b) {
            return a[name] - b[name];
          };
        }
      };
      var patchFilter$2 = function nestedPatchFilter(context) {
        if (!context.nested) {
          return;
        }
        if (context.delta._t !== "a") {
          return;
        }
        var index2 = void 0;
        var index1 = void 0;
        var delta = context.delta;
        var array = context.left;
        var toRemove = [];
        var toInsert = [];
        var toModify = [];
        for (index2 in delta) {
          if (index2 !== "_t") {
            if (index2[0] === "_") {
              if (delta[index2][2] === 0 || delta[index2][2] === ARRAY_MOVE) {
                toRemove.push(parseInt(index2.slice(1), 10));
              } else {
                throw new Error("only removal or move can be applied at original array indices," + (" invalid diff type: " + delta[index2][2]));
              }
            } else {
              if (delta[index2].length === 1) {
                toInsert.push({
                  index: parseInt(index2, 10),
                  value: delta[index2][0]
                });
              } else {
                toModify.push({
                  index: parseInt(index2, 10),
                  delta: delta[index2]
                });
              }
            }
          }
        }
        toRemove = toRemove.sort(compare2.numerically);
        for (index2 = toRemove.length - 1; index2 >= 0; index2--) {
          index1 = toRemove[index2];
          var indexDiff = delta["_" + index1];
          var removedValue = array.splice(index1, 1)[0];
          if (indexDiff[2] === ARRAY_MOVE) {
            toInsert.push({
              index: indexDiff[1],
              value: removedValue
            });
          }
        }
        toInsert = toInsert.sort(compare2.numericallyBy("index"));
        var toInsertLength = toInsert.length;
        for (index2 = 0; index2 < toInsertLength; index2++) {
          var insertion = toInsert[index2];
          array.splice(insertion.index, 0, insertion.value);
        }
        var toModifyLength = toModify.length;
        var child = void 0;
        if (toModifyLength > 0) {
          for (index2 = 0; index2 < toModifyLength; index2++) {
            var modification = toModify[index2];
            child = new PatchContext(context.left[modification.index], modification.delta);
            context.push(child, modification.index);
          }
        }
        if (!context.children) {
          context.setResult(context.left).exit();
          return;
        }
        context.exit();
      };
      patchFilter$2.filterName = "arrays";
      var collectChildrenPatchFilter$1 = function collectChildrenPatchFilter2(context) {
        if (!context || !context.children) {
          return;
        }
        if (context.delta._t !== "a") {
          return;
        }
        var length = context.children.length;
        var child = void 0;
        for (var index2 = 0; index2 < length; index2++) {
          child = context.children[index2];
          context.left[child.childName] = child.result;
        }
        context.setResult(context.left).exit();
      };
      collectChildrenPatchFilter$1.filterName = "arraysCollectChildren";
      var reverseFilter$2 = function arraysReverseFilter(context) {
        if (!context.nested) {
          if (context.delta[2] === ARRAY_MOVE) {
            context.newName = "_" + context.delta[1];
            context.setResult([context.delta[0], parseInt(context.childName.substr(1), 10), ARRAY_MOVE]).exit();
          }
          return;
        }
        if (context.delta._t !== "a") {
          return;
        }
        var name = void 0;
        var child = void 0;
        for (name in context.delta) {
          if (name === "_t") {
            continue;
          }
          child = new ReverseContext(context.delta[name]);
          context.push(child, name);
        }
        context.exit();
      };
      reverseFilter$2.filterName = "arrays";
      var reverseArrayDeltaIndex = function reverseArrayDeltaIndex2(delta, index2, itemDelta) {
        if (typeof index2 === "string" && index2[0] === "_") {
          return parseInt(index2.substr(1), 10);
        } else if (isArray$2(itemDelta) && itemDelta[2] === 0) {
          return "_" + index2;
        }
        var reverseIndex = +index2;
        for (var deltaIndex in delta) {
          var deltaItem = delta[deltaIndex];
          if (isArray$2(deltaItem)) {
            if (deltaItem[2] === ARRAY_MOVE) {
              var moveFromIndex = parseInt(deltaIndex.substr(1), 10);
              var moveToIndex = deltaItem[1];
              if (moveToIndex === +index2) {
                return moveFromIndex;
              }
              if (moveFromIndex <= reverseIndex && moveToIndex > reverseIndex) {
                reverseIndex++;
              } else if (moveFromIndex >= reverseIndex && moveToIndex < reverseIndex) {
                reverseIndex--;
              }
            } else if (deltaItem[2] === 0) {
              var deleteIndex = parseInt(deltaIndex.substr(1), 10);
              if (deleteIndex <= reverseIndex) {
                reverseIndex++;
              }
            } else if (deltaItem.length === 1 && deltaIndex <= reverseIndex) {
              reverseIndex--;
            }
          }
        }
        return reverseIndex;
      };
      function collectChildrenReverseFilter$1(context) {
        if (!context || !context.children) {
          return;
        }
        if (context.delta._t !== "a") {
          return;
        }
        var length = context.children.length;
        var child = void 0;
        var delta = {
          _t: "a"
        };
        for (var index2 = 0; index2 < length; index2++) {
          child = context.children[index2];
          var name = child.newName;
          if (typeof name === "undefined") {
            name = reverseArrayDeltaIndex(context.delta, child.childName, child.result);
          }
          if (delta[name] !== child.result) {
            delta[name] = child.result;
          }
        }
        context.setResult(delta).exit();
      }
      collectChildrenReverseFilter$1.filterName = "arraysCollectChildren";
      var diffFilter$2 = function datesDiffFilter(context) {
        if (context.left instanceof Date) {
          if (context.right instanceof Date) {
            if (context.left.getTime() !== context.right.getTime()) {
              context.setResult([context.left, context.right]);
            } else {
              context.setResult(void 0);
            }
          } else {
            context.setResult([context.left, context.right]);
          }
          context.exit();
        } else if (context.right instanceof Date) {
          context.setResult([context.left, context.right]).exit();
        }
      };
      diffFilter$2.filterName = "dates";
      function createCommonjsModule(fn, module3) {
        return module3 = { exports: {} }, fn(module3, module3.exports), module3.exports;
      }
      var diffMatchPatch = createCommonjsModule(function(module3) {
        function diff_match_patch2() {
          this.Diff_Timeout = 1;
          this.Diff_EditCost = 4;
          this.Match_Threshold = 0.5;
          this.Match_Distance = 1e3;
          this.Patch_DeleteThreshold = 0.5;
          this.Patch_Margin = 4;
          this.Match_MaxBits = 32;
        }
        var DIFF_DELETE = -1;
        var DIFF_INSERT = 1;
        var DIFF_EQUAL = 0;
        diff_match_patch2.prototype.diff_main = function(text1, text2, opt_checklines, opt_deadline) {
          if (typeof opt_deadline == "undefined") {
            if (this.Diff_Timeout <= 0) {
              opt_deadline = Number.MAX_VALUE;
            } else {
              opt_deadline = new Date().getTime() + this.Diff_Timeout * 1e3;
            }
          }
          var deadline = opt_deadline;
          if (text1 == null || text2 == null) {
            throw new Error("Null input. (diff_main)");
          }
          if (text1 == text2) {
            if (text1) {
              return [[DIFF_EQUAL, text1]];
            }
            return [];
          }
          if (typeof opt_checklines == "undefined") {
            opt_checklines = true;
          }
          var checklines = opt_checklines;
          var commonlength = this.diff_commonPrefix(text1, text2);
          var commonprefix = text1.substring(0, commonlength);
          text1 = text1.substring(commonlength);
          text2 = text2.substring(commonlength);
          commonlength = this.diff_commonSuffix(text1, text2);
          var commonsuffix = text1.substring(text1.length - commonlength);
          text1 = text1.substring(0, text1.length - commonlength);
          text2 = text2.substring(0, text2.length - commonlength);
          var diffs = this.diff_compute_(text1, text2, checklines, deadline);
          if (commonprefix) {
            diffs.unshift([DIFF_EQUAL, commonprefix]);
          }
          if (commonsuffix) {
            diffs.push([DIFF_EQUAL, commonsuffix]);
          }
          this.diff_cleanupMerge(diffs);
          return diffs;
        };
        diff_match_patch2.prototype.diff_compute_ = function(text1, text2, checklines, deadline) {
          var diffs;
          if (!text1) {
            return [[DIFF_INSERT, text2]];
          }
          if (!text2) {
            return [[DIFF_DELETE, text1]];
          }
          var longtext = text1.length > text2.length ? text1 : text2;
          var shorttext = text1.length > text2.length ? text2 : text1;
          var i = longtext.indexOf(shorttext);
          if (i != -1) {
            diffs = [
              [DIFF_INSERT, longtext.substring(0, i)],
              [DIFF_EQUAL, shorttext],
              [DIFF_INSERT, longtext.substring(i + shorttext.length)]
            ];
            if (text1.length > text2.length) {
              diffs[0][0] = diffs[2][0] = DIFF_DELETE;
            }
            return diffs;
          }
          if (shorttext.length == 1) {
            return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
          }
          var hm = this.diff_halfMatch_(text1, text2);
          if (hm) {
            var text1_a = hm[0];
            var text1_b = hm[1];
            var text2_a = hm[2];
            var text2_b = hm[3];
            var mid_common = hm[4];
            var diffs_a = this.diff_main(text1_a, text2_a, checklines, deadline);
            var diffs_b = this.diff_main(text1_b, text2_b, checklines, deadline);
            return diffs_a.concat([[DIFF_EQUAL, mid_common]], diffs_b);
          }
          if (checklines && text1.length > 100 && text2.length > 100) {
            return this.diff_lineMode_(text1, text2, deadline);
          }
          return this.diff_bisect_(text1, text2, deadline);
        };
        diff_match_patch2.prototype.diff_lineMode_ = function(text1, text2, deadline) {
          var a = this.diff_linesToChars_(text1, text2);
          text1 = a.chars1;
          text2 = a.chars2;
          var linearray = a.lineArray;
          var diffs = this.diff_main(text1, text2, false, deadline);
          this.diff_charsToLines_(diffs, linearray);
          this.diff_cleanupSemantic(diffs);
          diffs.push([DIFF_EQUAL, ""]);
          var pointer = 0;
          var count_delete = 0;
          var count_insert = 0;
          var text_delete = "";
          var text_insert = "";
          while (pointer < diffs.length) {
            switch (diffs[pointer][0]) {
              case DIFF_INSERT:
                count_insert++;
                text_insert += diffs[pointer][1];
                break;
              case DIFF_DELETE:
                count_delete++;
                text_delete += diffs[pointer][1];
                break;
              case DIFF_EQUAL:
                if (count_delete >= 1 && count_insert >= 1) {
                  diffs.splice(pointer - count_delete - count_insert, count_delete + count_insert);
                  pointer = pointer - count_delete - count_insert;
                  var a = this.diff_main(text_delete, text_insert, false, deadline);
                  for (var j = a.length - 1; j >= 0; j--) {
                    diffs.splice(pointer, 0, a[j]);
                  }
                  pointer = pointer + a.length;
                }
                count_insert = 0;
                count_delete = 0;
                text_delete = "";
                text_insert = "";
                break;
            }
            pointer++;
          }
          diffs.pop();
          return diffs;
        };
        diff_match_patch2.prototype.diff_bisect_ = function(text1, text2, deadline) {
          var text1_length = text1.length;
          var text2_length = text2.length;
          var max_d = Math.ceil((text1_length + text2_length) / 2);
          var v_offset = max_d;
          var v_length = 2 * max_d;
          var v1 = new Array(v_length);
          var v2 = new Array(v_length);
          for (var x = 0; x < v_length; x++) {
            v1[x] = -1;
            v2[x] = -1;
          }
          v1[v_offset + 1] = 0;
          v2[v_offset + 1] = 0;
          var delta = text1_length - text2_length;
          var front = delta % 2 != 0;
          var k1start = 0;
          var k1end = 0;
          var k2start = 0;
          var k2end = 0;
          for (var d = 0; d < max_d; d++) {
            if (new Date().getTime() > deadline) {
              break;
            }
            for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
              var k1_offset = v_offset + k1;
              var x1;
              if (k1 == -d || k1 != d && v1[k1_offset - 1] < v1[k1_offset + 1]) {
                x1 = v1[k1_offset + 1];
              } else {
                x1 = v1[k1_offset - 1] + 1;
              }
              var y1 = x1 - k1;
              while (x1 < text1_length && y1 < text2_length && text1.charAt(x1) == text2.charAt(y1)) {
                x1++;
                y1++;
              }
              v1[k1_offset] = x1;
              if (x1 > text1_length) {
                k1end += 2;
              } else if (y1 > text2_length) {
                k1start += 2;
              } else if (front) {
                var k2_offset = v_offset + delta - k1;
                if (k2_offset >= 0 && k2_offset < v_length && v2[k2_offset] != -1) {
                  var x2 = text1_length - v2[k2_offset];
                  if (x1 >= x2) {
                    return this.diff_bisectSplit_(text1, text2, x1, y1, deadline);
                  }
                }
              }
            }
            for (var k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {
              var k2_offset = v_offset + k2;
              var x2;
              if (k2 == -d || k2 != d && v2[k2_offset - 1] < v2[k2_offset + 1]) {
                x2 = v2[k2_offset + 1];
              } else {
                x2 = v2[k2_offset - 1] + 1;
              }
              var y2 = x2 - k2;
              while (x2 < text1_length && y2 < text2_length && text1.charAt(text1_length - x2 - 1) == text2.charAt(text2_length - y2 - 1)) {
                x2++;
                y2++;
              }
              v2[k2_offset] = x2;
              if (x2 > text1_length) {
                k2end += 2;
              } else if (y2 > text2_length) {
                k2start += 2;
              } else if (!front) {
                var k1_offset = v_offset + delta - k2;
                if (k1_offset >= 0 && k1_offset < v_length && v1[k1_offset] != -1) {
                  var x1 = v1[k1_offset];
                  var y1 = v_offset + x1 - k1_offset;
                  x2 = text1_length - x2;
                  if (x1 >= x2) {
                    return this.diff_bisectSplit_(text1, text2, x1, y1, deadline);
                  }
                }
              }
            }
          }
          return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
        };
        diff_match_patch2.prototype.diff_bisectSplit_ = function(text1, text2, x, y, deadline) {
          var text1a = text1.substring(0, x);
          var text2a = text2.substring(0, y);
          var text1b = text1.substring(x);
          var text2b = text2.substring(y);
          var diffs = this.diff_main(text1a, text2a, false, deadline);
          var diffsb = this.diff_main(text1b, text2b, false, deadline);
          return diffs.concat(diffsb);
        };
        diff_match_patch2.prototype.diff_linesToChars_ = function(text1, text2) {
          var lineArray = [];
          var lineHash = {};
          lineArray[0] = "";
          function diff_linesToCharsMunge_(text) {
            var chars = "";
            var lineStart = 0;
            var lineEnd = -1;
            var lineArrayLength = lineArray.length;
            while (lineEnd < text.length - 1) {
              lineEnd = text.indexOf("\n", lineStart);
              if (lineEnd == -1) {
                lineEnd = text.length - 1;
              }
              var line = text.substring(lineStart, lineEnd + 1);
              lineStart = lineEnd + 1;
              if (lineHash.hasOwnProperty ? lineHash.hasOwnProperty(line) : lineHash[line] !== void 0) {
                chars += String.fromCharCode(lineHash[line]);
              } else {
                chars += String.fromCharCode(lineArrayLength);
                lineHash[line] = lineArrayLength;
                lineArray[lineArrayLength++] = line;
              }
            }
            return chars;
          }
          var chars1 = diff_linesToCharsMunge_(text1);
          var chars2 = diff_linesToCharsMunge_(text2);
          return { chars1, chars2, lineArray };
        };
        diff_match_patch2.prototype.diff_charsToLines_ = function(diffs, lineArray) {
          for (var x = 0; x < diffs.length; x++) {
            var chars = diffs[x][1];
            var text = [];
            for (var y = 0; y < chars.length; y++) {
              text[y] = lineArray[chars.charCodeAt(y)];
            }
            diffs[x][1] = text.join("");
          }
        };
        diff_match_patch2.prototype.diff_commonPrefix = function(text1, text2) {
          if (!text1 || !text2 || text1.charAt(0) != text2.charAt(0)) {
            return 0;
          }
          var pointermin = 0;
          var pointermax = Math.min(text1.length, text2.length);
          var pointermid = pointermax;
          var pointerstart = 0;
          while (pointermin < pointermid) {
            if (text1.substring(pointerstart, pointermid) == text2.substring(pointerstart, pointermid)) {
              pointermin = pointermid;
              pointerstart = pointermin;
            } else {
              pointermax = pointermid;
            }
            pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
          }
          return pointermid;
        };
        diff_match_patch2.prototype.diff_commonSuffix = function(text1, text2) {
          if (!text1 || !text2 || text1.charAt(text1.length - 1) != text2.charAt(text2.length - 1)) {
            return 0;
          }
          var pointermin = 0;
          var pointermax = Math.min(text1.length, text2.length);
          var pointermid = pointermax;
          var pointerend = 0;
          while (pointermin < pointermid) {
            if (text1.substring(text1.length - pointermid, text1.length - pointerend) == text2.substring(text2.length - pointermid, text2.length - pointerend)) {
              pointermin = pointermid;
              pointerend = pointermin;
            } else {
              pointermax = pointermid;
            }
            pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
          }
          return pointermid;
        };
        diff_match_patch2.prototype.diff_commonOverlap_ = function(text1, text2) {
          var text1_length = text1.length;
          var text2_length = text2.length;
          if (text1_length == 0 || text2_length == 0) {
            return 0;
          }
          if (text1_length > text2_length) {
            text1 = text1.substring(text1_length - text2_length);
          } else if (text1_length < text2_length) {
            text2 = text2.substring(0, text1_length);
          }
          var text_length = Math.min(text1_length, text2_length);
          if (text1 == text2) {
            return text_length;
          }
          var best = 0;
          var length = 1;
          while (true) {
            var pattern = text1.substring(text_length - length);
            var found = text2.indexOf(pattern);
            if (found == -1) {
              return best;
            }
            length += found;
            if (found == 0 || text1.substring(text_length - length) == text2.substring(0, length)) {
              best = length;
              length++;
            }
          }
        };
        diff_match_patch2.prototype.diff_halfMatch_ = function(text1, text2) {
          if (this.Diff_Timeout <= 0) {
            return null;
          }
          var longtext = text1.length > text2.length ? text1 : text2;
          var shorttext = text1.length > text2.length ? text2 : text1;
          if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
            return null;
          }
          var dmp = this;
          function diff_halfMatchI_(longtext2, shorttext2, i) {
            var seed = longtext2.substring(i, i + Math.floor(longtext2.length / 4));
            var j = -1;
            var best_common = "";
            var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b;
            while ((j = shorttext2.indexOf(seed, j + 1)) != -1) {
              var prefixLength = dmp.diff_commonPrefix(longtext2.substring(i), shorttext2.substring(j));
              var suffixLength = dmp.diff_commonSuffix(longtext2.substring(0, i), shorttext2.substring(0, j));
              if (best_common.length < suffixLength + prefixLength) {
                best_common = shorttext2.substring(j - suffixLength, j) + shorttext2.substring(j, j + prefixLength);
                best_longtext_a = longtext2.substring(0, i - suffixLength);
                best_longtext_b = longtext2.substring(i + prefixLength);
                best_shorttext_a = shorttext2.substring(0, j - suffixLength);
                best_shorttext_b = shorttext2.substring(j + prefixLength);
              }
            }
            if (best_common.length * 2 >= longtext2.length) {
              return [
                best_longtext_a,
                best_longtext_b,
                best_shorttext_a,
                best_shorttext_b,
                best_common
              ];
            } else {
              return null;
            }
          }
          var hm1 = diff_halfMatchI_(longtext, shorttext, Math.ceil(longtext.length / 4));
          var hm2 = diff_halfMatchI_(longtext, shorttext, Math.ceil(longtext.length / 2));
          var hm;
          if (!hm1 && !hm2) {
            return null;
          } else if (!hm2) {
            hm = hm1;
          } else if (!hm1) {
            hm = hm2;
          } else {
            hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
          }
          var text1_a, text1_b, text2_a, text2_b;
          if (text1.length > text2.length) {
            text1_a = hm[0];
            text1_b = hm[1];
            text2_a = hm[2];
            text2_b = hm[3];
          } else {
            text2_a = hm[0];
            text2_b = hm[1];
            text1_a = hm[2];
            text1_b = hm[3];
          }
          var mid_common = hm[4];
          return [text1_a, text1_b, text2_a, text2_b, mid_common];
        };
        diff_match_patch2.prototype.diff_cleanupSemantic = function(diffs) {
          var changes = false;
          var equalities = [];
          var equalitiesLength = 0;
          var lastequality = null;
          var pointer = 0;
          var length_insertions1 = 0;
          var length_deletions1 = 0;
          var length_insertions2 = 0;
          var length_deletions2 = 0;
          while (pointer < diffs.length) {
            if (diffs[pointer][0] == DIFF_EQUAL) {
              equalities[equalitiesLength++] = pointer;
              length_insertions1 = length_insertions2;
              length_deletions1 = length_deletions2;
              length_insertions2 = 0;
              length_deletions2 = 0;
              lastequality = diffs[pointer][1];
            } else {
              if (diffs[pointer][0] == DIFF_INSERT) {
                length_insertions2 += diffs[pointer][1].length;
              } else {
                length_deletions2 += diffs[pointer][1].length;
              }
              if (lastequality && lastequality.length <= Math.max(length_insertions1, length_deletions1) && lastequality.length <= Math.max(length_insertions2, length_deletions2)) {
                diffs.splice(equalities[equalitiesLength - 1], 0, [DIFF_DELETE, lastequality]);
                diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
                equalitiesLength--;
                equalitiesLength--;
                pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1;
                length_insertions1 = 0;
                length_deletions1 = 0;
                length_insertions2 = 0;
                length_deletions2 = 0;
                lastequality = null;
                changes = true;
              }
            }
            pointer++;
          }
          if (changes) {
            this.diff_cleanupMerge(diffs);
          }
          this.diff_cleanupSemanticLossless(diffs);
          pointer = 1;
          while (pointer < diffs.length) {
            if (diffs[pointer - 1][0] == DIFF_DELETE && diffs[pointer][0] == DIFF_INSERT) {
              var deletion = diffs[pointer - 1][1];
              var insertion = diffs[pointer][1];
              var overlap_length1 = this.diff_commonOverlap_(deletion, insertion);
              var overlap_length2 = this.diff_commonOverlap_(insertion, deletion);
              if (overlap_length1 >= overlap_length2) {
                if (overlap_length1 >= deletion.length / 2 || overlap_length1 >= insertion.length / 2) {
                  diffs.splice(pointer, 0, [DIFF_EQUAL, insertion.substring(0, overlap_length1)]);
                  diffs[pointer - 1][1] = deletion.substring(0, deletion.length - overlap_length1);
                  diffs[pointer + 1][1] = insertion.substring(overlap_length1);
                  pointer++;
                }
              } else {
                if (overlap_length2 >= deletion.length / 2 || overlap_length2 >= insertion.length / 2) {
                  diffs.splice(pointer, 0, [DIFF_EQUAL, deletion.substring(0, overlap_length2)]);
                  diffs[pointer - 1][0] = DIFF_INSERT;
                  diffs[pointer - 1][1] = insertion.substring(0, insertion.length - overlap_length2);
                  diffs[pointer + 1][0] = DIFF_DELETE;
                  diffs[pointer + 1][1] = deletion.substring(overlap_length2);
                  pointer++;
                }
              }
              pointer++;
            }
            pointer++;
          }
        };
        diff_match_patch2.prototype.diff_cleanupSemanticLossless = function(diffs) {
          function diff_cleanupSemanticScore_(one, two) {
            if (!one || !two) {
              return 6;
            }
            var char1 = one.charAt(one.length - 1);
            var char2 = two.charAt(0);
            var nonAlphaNumeric1 = char1.match(diff_match_patch2.nonAlphaNumericRegex_);
            var nonAlphaNumeric2 = char2.match(diff_match_patch2.nonAlphaNumericRegex_);
            var whitespace1 = nonAlphaNumeric1 && char1.match(diff_match_patch2.whitespaceRegex_);
            var whitespace2 = nonAlphaNumeric2 && char2.match(diff_match_patch2.whitespaceRegex_);
            var lineBreak1 = whitespace1 && char1.match(diff_match_patch2.linebreakRegex_);
            var lineBreak2 = whitespace2 && char2.match(diff_match_patch2.linebreakRegex_);
            var blankLine1 = lineBreak1 && one.match(diff_match_patch2.blanklineEndRegex_);
            var blankLine2 = lineBreak2 && two.match(diff_match_patch2.blanklineStartRegex_);
            if (blankLine1 || blankLine2) {
              return 5;
            } else if (lineBreak1 || lineBreak2) {
              return 4;
            } else if (nonAlphaNumeric1 && !whitespace1 && whitespace2) {
              return 3;
            } else if (whitespace1 || whitespace2) {
              return 2;
            } else if (nonAlphaNumeric1 || nonAlphaNumeric2) {
              return 1;
            }
            return 0;
          }
          var pointer = 1;
          while (pointer < diffs.length - 1) {
            if (diffs[pointer - 1][0] == DIFF_EQUAL && diffs[pointer + 1][0] == DIFF_EQUAL) {
              var equality1 = diffs[pointer - 1][1];
              var edit = diffs[pointer][1];
              var equality2 = diffs[pointer + 1][1];
              var commonOffset = this.diff_commonSuffix(equality1, edit);
              if (commonOffset) {
                var commonString = edit.substring(edit.length - commonOffset);
                equality1 = equality1.substring(0, equality1.length - commonOffset);
                edit = commonString + edit.substring(0, edit.length - commonOffset);
                equality2 = commonString + equality2;
              }
              var bestEquality1 = equality1;
              var bestEdit = edit;
              var bestEquality2 = equality2;
              var bestScore = diff_cleanupSemanticScore_(equality1, edit) + diff_cleanupSemanticScore_(edit, equality2);
              while (edit.charAt(0) === equality2.charAt(0)) {
                equality1 += edit.charAt(0);
                edit = edit.substring(1) + equality2.charAt(0);
                equality2 = equality2.substring(1);
                var score = diff_cleanupSemanticScore_(equality1, edit) + diff_cleanupSemanticScore_(edit, equality2);
                if (score >= bestScore) {
                  bestScore = score;
                  bestEquality1 = equality1;
                  bestEdit = edit;
                  bestEquality2 = equality2;
                }
              }
              if (diffs[pointer - 1][1] != bestEquality1) {
                if (bestEquality1) {
                  diffs[pointer - 1][1] = bestEquality1;
                } else {
                  diffs.splice(pointer - 1, 1);
                  pointer--;
                }
                diffs[pointer][1] = bestEdit;
                if (bestEquality2) {
                  diffs[pointer + 1][1] = bestEquality2;
                } else {
                  diffs.splice(pointer + 1, 1);
                  pointer--;
                }
              }
            }
            pointer++;
          }
        };
        diff_match_patch2.nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/;
        diff_match_patch2.whitespaceRegex_ = /\s/;
        diff_match_patch2.linebreakRegex_ = /[\r\n]/;
        diff_match_patch2.blanklineEndRegex_ = /\n\r?\n$/;
        diff_match_patch2.blanklineStartRegex_ = /^\r?\n\r?\n/;
        diff_match_patch2.prototype.diff_cleanupEfficiency = function(diffs) {
          var changes = false;
          var equalities = [];
          var equalitiesLength = 0;
          var lastequality = null;
          var pointer = 0;
          var pre_ins = false;
          var pre_del = false;
          var post_ins = false;
          var post_del = false;
          while (pointer < diffs.length) {
            if (diffs[pointer][0] == DIFF_EQUAL) {
              if (diffs[pointer][1].length < this.Diff_EditCost && (post_ins || post_del)) {
                equalities[equalitiesLength++] = pointer;
                pre_ins = post_ins;
                pre_del = post_del;
                lastequality = diffs[pointer][1];
              } else {
                equalitiesLength = 0;
                lastequality = null;
              }
              post_ins = post_del = false;
            } else {
              if (diffs[pointer][0] == DIFF_DELETE) {
                post_del = true;
              } else {
                post_ins = true;
              }
              if (lastequality && (pre_ins && pre_del && post_ins && post_del || lastequality.length < this.Diff_EditCost / 2 && pre_ins + pre_del + post_ins + post_del == 3)) {
                diffs.splice(equalities[equalitiesLength - 1], 0, [DIFF_DELETE, lastequality]);
                diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
                equalitiesLength--;
                lastequality = null;
                if (pre_ins && pre_del) {
                  post_ins = post_del = true;
                  equalitiesLength = 0;
                } else {
                  equalitiesLength--;
                  pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1;
                  post_ins = post_del = false;
                }
                changes = true;
              }
            }
            pointer++;
          }
          if (changes) {
            this.diff_cleanupMerge(diffs);
          }
        };
        diff_match_patch2.prototype.diff_cleanupMerge = function(diffs) {
          diffs.push([DIFF_EQUAL, ""]);
          var pointer = 0;
          var count_delete = 0;
          var count_insert = 0;
          var text_delete = "";
          var text_insert = "";
          var commonlength;
          while (pointer < diffs.length) {
            switch (diffs[pointer][0]) {
              case DIFF_INSERT:
                count_insert++;
                text_insert += diffs[pointer][1];
                pointer++;
                break;
              case DIFF_DELETE:
                count_delete++;
                text_delete += diffs[pointer][1];
                pointer++;
                break;
              case DIFF_EQUAL:
                if (count_delete + count_insert > 1) {
                  if (count_delete !== 0 && count_insert !== 0) {
                    commonlength = this.diff_commonPrefix(text_insert, text_delete);
                    if (commonlength !== 0) {
                      if (pointer - count_delete - count_insert > 0 && diffs[pointer - count_delete - count_insert - 1][0] == DIFF_EQUAL) {
                        diffs[pointer - count_delete - count_insert - 1][1] += text_insert.substring(0, commonlength);
                      } else {
                        diffs.splice(0, 0, [
                          DIFF_EQUAL,
                          text_insert.substring(0, commonlength)
                        ]);
                        pointer++;
                      }
                      text_insert = text_insert.substring(commonlength);
                      text_delete = text_delete.substring(commonlength);
                    }
                    commonlength = this.diff_commonSuffix(text_insert, text_delete);
                    if (commonlength !== 0) {
                      diffs[pointer][1] = text_insert.substring(text_insert.length - commonlength) + diffs[pointer][1];
                      text_insert = text_insert.substring(0, text_insert.length - commonlength);
                      text_delete = text_delete.substring(0, text_delete.length - commonlength);
                    }
                  }
                  if (count_delete === 0) {
                    diffs.splice(pointer - count_insert, count_delete + count_insert, [DIFF_INSERT, text_insert]);
                  } else if (count_insert === 0) {
                    diffs.splice(pointer - count_delete, count_delete + count_insert, [DIFF_DELETE, text_delete]);
                  } else {
                    diffs.splice(pointer - count_delete - count_insert, count_delete + count_insert, [DIFF_DELETE, text_delete], [DIFF_INSERT, text_insert]);
                  }
                  pointer = pointer - count_delete - count_insert + (count_delete ? 1 : 0) + (count_insert ? 1 : 0) + 1;
                } else if (pointer !== 0 && diffs[pointer - 1][0] == DIFF_EQUAL) {
                  diffs[pointer - 1][1] += diffs[pointer][1];
                  diffs.splice(pointer, 1);
                } else {
                  pointer++;
                }
                count_insert = 0;
                count_delete = 0;
                text_delete = "";
                text_insert = "";
                break;
            }
          }
          if (diffs[diffs.length - 1][1] === "") {
            diffs.pop();
          }
          var changes = false;
          pointer = 1;
          while (pointer < diffs.length - 1) {
            if (diffs[pointer - 1][0] == DIFF_EQUAL && diffs[pointer + 1][0] == DIFF_EQUAL) {
              if (diffs[pointer][1].substring(diffs[pointer][1].length - diffs[pointer - 1][1].length) == diffs[pointer - 1][1]) {
                diffs[pointer][1] = diffs[pointer - 1][1] + diffs[pointer][1].substring(0, diffs[pointer][1].length - diffs[pointer - 1][1].length);
                diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
                diffs.splice(pointer - 1, 1);
                changes = true;
              } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) == diffs[pointer + 1][1]) {
                diffs[pointer - 1][1] += diffs[pointer + 1][1];
                diffs[pointer][1] = diffs[pointer][1].substring(diffs[pointer + 1][1].length) + diffs[pointer + 1][1];
                diffs.splice(pointer + 1, 1);
                changes = true;
              }
            }
            pointer++;
          }
          if (changes) {
            this.diff_cleanupMerge(diffs);
          }
        };
        diff_match_patch2.prototype.diff_xIndex = function(diffs, loc) {
          var chars1 = 0;
          var chars2 = 0;
          var last_chars1 = 0;
          var last_chars2 = 0;
          var x;
          for (x = 0; x < diffs.length; x++) {
            if (diffs[x][0] !== DIFF_INSERT) {
              chars1 += diffs[x][1].length;
            }
            if (diffs[x][0] !== DIFF_DELETE) {
              chars2 += diffs[x][1].length;
            }
            if (chars1 > loc) {
              break;
            }
            last_chars1 = chars1;
            last_chars2 = chars2;
          }
          if (diffs.length != x && diffs[x][0] === DIFF_DELETE) {
            return last_chars2;
          }
          return last_chars2 + (loc - last_chars1);
        };
        diff_match_patch2.prototype.diff_prettyHtml = function(diffs) {
          var html2 = [];
          var pattern_amp = /&/g;
          var pattern_lt = /</g;
          var pattern_gt = />/g;
          var pattern_para = /\n/g;
          for (var x = 0; x < diffs.length; x++) {
            var op = diffs[x][0];
            var data = diffs[x][1];
            var text = data.replace(pattern_amp, "&amp;").replace(pattern_lt, "&lt;").replace(pattern_gt, "&gt;").replace(pattern_para, "&para;<br>");
            switch (op) {
              case DIFF_INSERT:
                html2[x] = '<ins style="background:#e6ffe6;">' + text + "</ins>";
                break;
              case DIFF_DELETE:
                html2[x] = '<del style="background:#ffe6e6;">' + text + "</del>";
                break;
              case DIFF_EQUAL:
                html2[x] = "<span>" + text + "</span>";
                break;
            }
          }
          return html2.join("");
        };
        diff_match_patch2.prototype.diff_text1 = function(diffs) {
          var text = [];
          for (var x = 0; x < diffs.length; x++) {
            if (diffs[x][0] !== DIFF_INSERT) {
              text[x] = diffs[x][1];
            }
          }
          return text.join("");
        };
        diff_match_patch2.prototype.diff_text2 = function(diffs) {
          var text = [];
          for (var x = 0; x < diffs.length; x++) {
            if (diffs[x][0] !== DIFF_DELETE) {
              text[x] = diffs[x][1];
            }
          }
          return text.join("");
        };
        diff_match_patch2.prototype.diff_levenshtein = function(diffs) {
          var levenshtein = 0;
          var insertions = 0;
          var deletions = 0;
          for (var x = 0; x < diffs.length; x++) {
            var op = diffs[x][0];
            var data = diffs[x][1];
            switch (op) {
              case DIFF_INSERT:
                insertions += data.length;
                break;
              case DIFF_DELETE:
                deletions += data.length;
                break;
              case DIFF_EQUAL:
                levenshtein += Math.max(insertions, deletions);
                insertions = 0;
                deletions = 0;
                break;
            }
          }
          levenshtein += Math.max(insertions, deletions);
          return levenshtein;
        };
        diff_match_patch2.prototype.diff_toDelta = function(diffs) {
          var text = [];
          for (var x = 0; x < diffs.length; x++) {
            switch (diffs[x][0]) {
              case DIFF_INSERT:
                text[x] = "+" + encodeURI(diffs[x][1]);
                break;
              case DIFF_DELETE:
                text[x] = "-" + diffs[x][1].length;
                break;
              case DIFF_EQUAL:
                text[x] = "=" + diffs[x][1].length;
                break;
            }
          }
          return text.join("	").replace(/%20/g, " ");
        };
        diff_match_patch2.prototype.diff_fromDelta = function(text1, delta) {
          var diffs = [];
          var diffsLength = 0;
          var pointer = 0;
          var tokens = delta.split(/\t/g);
          for (var x = 0; x < tokens.length; x++) {
            var param = tokens[x].substring(1);
            switch (tokens[x].charAt(0)) {
              case "+":
                try {
                  diffs[diffsLength++] = [DIFF_INSERT, decodeURI(param)];
                } catch (ex) {
                  throw new Error("Illegal escape in diff_fromDelta: " + param);
                }
                break;
              case "-":
              case "=":
                var n = parseInt(param, 10);
                if (isNaN(n) || n < 0) {
                  throw new Error("Invalid number in diff_fromDelta: " + param);
                }
                var text = text1.substring(pointer, pointer += n);
                if (tokens[x].charAt(0) == "=") {
                  diffs[diffsLength++] = [DIFF_EQUAL, text];
                } else {
                  diffs[diffsLength++] = [DIFF_DELETE, text];
                }
                break;
              default:
                if (tokens[x]) {
                  throw new Error("Invalid diff operation in diff_fromDelta: " + tokens[x]);
                }
            }
          }
          if (pointer != text1.length) {
            throw new Error("Delta length (" + pointer + ") does not equal source text length (" + text1.length + ").");
          }
          return diffs;
        };
        diff_match_patch2.prototype.match_main = function(text, pattern, loc) {
          if (text == null || pattern == null || loc == null) {
            throw new Error("Null input. (match_main)");
          }
          loc = Math.max(0, Math.min(loc, text.length));
          if (text == pattern) {
            return 0;
          } else if (!text.length) {
            return -1;
          } else if (text.substring(loc, loc + pattern.length) == pattern) {
            return loc;
          } else {
            return this.match_bitap_(text, pattern, loc);
          }
        };
        diff_match_patch2.prototype.match_bitap_ = function(text, pattern, loc) {
          if (pattern.length > this.Match_MaxBits) {
            throw new Error("Pattern too long for this browser.");
          }
          var s = this.match_alphabet_(pattern);
          var dmp = this;
          function match_bitapScore_(e, x) {
            var accuracy = e / pattern.length;
            var proximity = Math.abs(loc - x);
            if (!dmp.Match_Distance) {
              return proximity ? 1 : accuracy;
            }
            return accuracy + proximity / dmp.Match_Distance;
          }
          var score_threshold = this.Match_Threshold;
          var best_loc = text.indexOf(pattern, loc);
          if (best_loc != -1) {
            score_threshold = Math.min(match_bitapScore_(0, best_loc), score_threshold);
            best_loc = text.lastIndexOf(pattern, loc + pattern.length);
            if (best_loc != -1) {
              score_threshold = Math.min(match_bitapScore_(0, best_loc), score_threshold);
            }
          }
          var matchmask = 1 << pattern.length - 1;
          best_loc = -1;
          var bin_min, bin_mid;
          var bin_max = pattern.length + text.length;
          var last_rd;
          for (var d = 0; d < pattern.length; d++) {
            bin_min = 0;
            bin_mid = bin_max;
            while (bin_min < bin_mid) {
              if (match_bitapScore_(d, loc + bin_mid) <= score_threshold) {
                bin_min = bin_mid;
              } else {
                bin_max = bin_mid;
              }
              bin_mid = Math.floor((bin_max - bin_min) / 2 + bin_min);
            }
            bin_max = bin_mid;
            var start = Math.max(1, loc - bin_mid + 1);
            var finish = Math.min(loc + bin_mid, text.length) + pattern.length;
            var rd = Array(finish + 2);
            rd[finish + 1] = (1 << d) - 1;
            for (var j = finish; j >= start; j--) {
              var charMatch = s[text.charAt(j - 1)];
              if (d === 0) {
                rd[j] = (rd[j + 1] << 1 | 1) & charMatch;
              } else {
                rd[j] = (rd[j + 1] << 1 | 1) & charMatch | ((last_rd[j + 1] | last_rd[j]) << 1 | 1) | last_rd[j + 1];
              }
              if (rd[j] & matchmask) {
                var score = match_bitapScore_(d, j - 1);
                if (score <= score_threshold) {
                  score_threshold = score;
                  best_loc = j - 1;
                  if (best_loc > loc) {
                    start = Math.max(1, 2 * loc - best_loc);
                  } else {
                    break;
                  }
                }
              }
            }
            if (match_bitapScore_(d + 1, loc) > score_threshold) {
              break;
            }
            last_rd = rd;
          }
          return best_loc;
        };
        diff_match_patch2.prototype.match_alphabet_ = function(pattern) {
          var s = {};
          for (var i = 0; i < pattern.length; i++) {
            s[pattern.charAt(i)] = 0;
          }
          for (var i = 0; i < pattern.length; i++) {
            s[pattern.charAt(i)] |= 1 << pattern.length - i - 1;
          }
          return s;
        };
        diff_match_patch2.prototype.patch_addContext_ = function(patch3, text) {
          if (text.length == 0) {
            return;
          }
          var pattern = text.substring(patch3.start2, patch3.start2 + patch3.length1);
          var padding = 0;
          while (text.indexOf(pattern) != text.lastIndexOf(pattern) && pattern.length < this.Match_MaxBits - this.Patch_Margin - this.Patch_Margin) {
            padding += this.Patch_Margin;
            pattern = text.substring(patch3.start2 - padding, patch3.start2 + patch3.length1 + padding);
          }
          padding += this.Patch_Margin;
          var prefix = text.substring(patch3.start2 - padding, patch3.start2);
          if (prefix) {
            patch3.diffs.unshift([DIFF_EQUAL, prefix]);
          }
          var suffix = text.substring(patch3.start2 + patch3.length1, patch3.start2 + patch3.length1 + padding);
          if (suffix) {
            patch3.diffs.push([DIFF_EQUAL, suffix]);
          }
          patch3.start1 -= prefix.length;
          patch3.start2 -= prefix.length;
          patch3.length1 += prefix.length + suffix.length;
          patch3.length2 += prefix.length + suffix.length;
        };
        diff_match_patch2.prototype.patch_make = function(a, opt_b, opt_c) {
          var text1, diffs;
          if (typeof a == "string" && typeof opt_b == "string" && typeof opt_c == "undefined") {
            text1 = a;
            diffs = this.diff_main(text1, opt_b, true);
            if (diffs.length > 2) {
              this.diff_cleanupSemantic(diffs);
              this.diff_cleanupEfficiency(diffs);
            }
          } else if (a && typeof a == "object" && typeof opt_b == "undefined" && typeof opt_c == "undefined") {
            diffs = a;
            text1 = this.diff_text1(diffs);
          } else if (typeof a == "string" && opt_b && typeof opt_b == "object" && typeof opt_c == "undefined") {
            text1 = a;
            diffs = opt_b;
          } else if (typeof a == "string" && typeof opt_b == "string" && opt_c && typeof opt_c == "object") {
            text1 = a;
            diffs = opt_c;
          } else {
            throw new Error("Unknown call format to patch_make.");
          }
          if (diffs.length === 0) {
            return [];
          }
          var patches = [];
          var patch3 = new diff_match_patch2.patch_obj();
          var patchDiffLength = 0;
          var char_count1 = 0;
          var char_count2 = 0;
          var prepatch_text = text1;
          var postpatch_text = text1;
          for (var x = 0; x < diffs.length; x++) {
            var diff_type = diffs[x][0];
            var diff_text = diffs[x][1];
            if (!patchDiffLength && diff_type !== DIFF_EQUAL) {
              patch3.start1 = char_count1;
              patch3.start2 = char_count2;
            }
            switch (diff_type) {
              case DIFF_INSERT:
                patch3.diffs[patchDiffLength++] = diffs[x];
                patch3.length2 += diff_text.length;
                postpatch_text = postpatch_text.substring(0, char_count2) + diff_text + postpatch_text.substring(char_count2);
                break;
              case DIFF_DELETE:
                patch3.length1 += diff_text.length;
                patch3.diffs[patchDiffLength++] = diffs[x];
                postpatch_text = postpatch_text.substring(0, char_count2) + postpatch_text.substring(char_count2 + diff_text.length);
                break;
              case DIFF_EQUAL:
                if (diff_text.length <= 2 * this.Patch_Margin && patchDiffLength && diffs.length != x + 1) {
                  patch3.diffs[patchDiffLength++] = diffs[x];
                  patch3.length1 += diff_text.length;
                  patch3.length2 += diff_text.length;
                } else if (diff_text.length >= 2 * this.Patch_Margin) {
                  if (patchDiffLength) {
                    this.patch_addContext_(patch3, prepatch_text);
                    patches.push(patch3);
                    patch3 = new diff_match_patch2.patch_obj();
                    patchDiffLength = 0;
                    prepatch_text = postpatch_text;
                    char_count1 = char_count2;
                  }
                }
                break;
            }
            if (diff_type !== DIFF_INSERT) {
              char_count1 += diff_text.length;
            }
            if (diff_type !== DIFF_DELETE) {
              char_count2 += diff_text.length;
            }
          }
          if (patchDiffLength) {
            this.patch_addContext_(patch3, prepatch_text);
            patches.push(patch3);
          }
          return patches;
        };
        diff_match_patch2.prototype.patch_deepCopy = function(patches) {
          var patchesCopy = [];
          for (var x = 0; x < patches.length; x++) {
            var patch3 = patches[x];
            var patchCopy = new diff_match_patch2.patch_obj();
            patchCopy.diffs = [];
            for (var y = 0; y < patch3.diffs.length; y++) {
              patchCopy.diffs[y] = patch3.diffs[y].slice();
            }
            patchCopy.start1 = patch3.start1;
            patchCopy.start2 = patch3.start2;
            patchCopy.length1 = patch3.length1;
            patchCopy.length2 = patch3.length2;
            patchesCopy[x] = patchCopy;
          }
          return patchesCopy;
        };
        diff_match_patch2.prototype.patch_apply = function(patches, text) {
          if (patches.length == 0) {
            return [text, []];
          }
          patches = this.patch_deepCopy(patches);
          var nullPadding = this.patch_addPadding(patches);
          text = nullPadding + text + nullPadding;
          this.patch_splitMax(patches);
          var delta = 0;
          var results = [];
          for (var x = 0; x < patches.length; x++) {
            var expected_loc = patches[x].start2 + delta;
            var text1 = this.diff_text1(patches[x].diffs);
            var start_loc;
            var end_loc = -1;
            if (text1.length > this.Match_MaxBits) {
              start_loc = this.match_main(text, text1.substring(0, this.Match_MaxBits), expected_loc);
              if (start_loc != -1) {
                end_loc = this.match_main(text, text1.substring(text1.length - this.Match_MaxBits), expected_loc + text1.length - this.Match_MaxBits);
                if (end_loc == -1 || start_loc >= end_loc) {
                  start_loc = -1;
                }
              }
            } else {
              start_loc = this.match_main(text, text1, expected_loc);
            }
            if (start_loc == -1) {
              results[x] = false;
              delta -= patches[x].length2 - patches[x].length1;
            } else {
              results[x] = true;
              delta = start_loc - expected_loc;
              var text2;
              if (end_loc == -1) {
                text2 = text.substring(start_loc, start_loc + text1.length);
              } else {
                text2 = text.substring(start_loc, end_loc + this.Match_MaxBits);
              }
              if (text1 == text2) {
                text = text.substring(0, start_loc) + this.diff_text2(patches[x].diffs) + text.substring(start_loc + text1.length);
              } else {
                var diffs = this.diff_main(text1, text2, false);
                if (text1.length > this.Match_MaxBits && this.diff_levenshtein(diffs) / text1.length > this.Patch_DeleteThreshold) {
                  results[x] = false;
                } else {
                  this.diff_cleanupSemanticLossless(diffs);
                  var index1 = 0;
                  var index2;
                  for (var y = 0; y < patches[x].diffs.length; y++) {
                    var mod = patches[x].diffs[y];
                    if (mod[0] !== DIFF_EQUAL) {
                      index2 = this.diff_xIndex(diffs, index1);
                    }
                    if (mod[0] === DIFF_INSERT) {
                      text = text.substring(0, start_loc + index2) + mod[1] + text.substring(start_loc + index2);
                    } else if (mod[0] === DIFF_DELETE) {
                      text = text.substring(0, start_loc + index2) + text.substring(start_loc + this.diff_xIndex(diffs, index1 + mod[1].length));
                    }
                    if (mod[0] !== DIFF_DELETE) {
                      index1 += mod[1].length;
                    }
                  }
                }
              }
            }
          }
          text = text.substring(nullPadding.length, text.length - nullPadding.length);
          return [text, results];
        };
        diff_match_patch2.prototype.patch_addPadding = function(patches) {
          var paddingLength = this.Patch_Margin;
          var nullPadding = "";
          for (var x = 1; x <= paddingLength; x++) {
            nullPadding += String.fromCharCode(x);
          }
          for (var x = 0; x < patches.length; x++) {
            patches[x].start1 += paddingLength;
            patches[x].start2 += paddingLength;
          }
          var patch3 = patches[0];
          var diffs = patch3.diffs;
          if (diffs.length == 0 || diffs[0][0] != DIFF_EQUAL) {
            diffs.unshift([DIFF_EQUAL, nullPadding]);
            patch3.start1 -= paddingLength;
            patch3.start2 -= paddingLength;
            patch3.length1 += paddingLength;
            patch3.length2 += paddingLength;
          } else if (paddingLength > diffs[0][1].length) {
            var extraLength = paddingLength - diffs[0][1].length;
            diffs[0][1] = nullPadding.substring(diffs[0][1].length) + diffs[0][1];
            patch3.start1 -= extraLength;
            patch3.start2 -= extraLength;
            patch3.length1 += extraLength;
            patch3.length2 += extraLength;
          }
          patch3 = patches[patches.length - 1];
          diffs = patch3.diffs;
          if (diffs.length == 0 || diffs[diffs.length - 1][0] != DIFF_EQUAL) {
            diffs.push([DIFF_EQUAL, nullPadding]);
            patch3.length1 += paddingLength;
            patch3.length2 += paddingLength;
          } else if (paddingLength > diffs[diffs.length - 1][1].length) {
            var extraLength = paddingLength - diffs[diffs.length - 1][1].length;
            diffs[diffs.length - 1][1] += nullPadding.substring(0, extraLength);
            patch3.length1 += extraLength;
            patch3.length2 += extraLength;
          }
          return nullPadding;
        };
        diff_match_patch2.prototype.patch_splitMax = function(patches) {
          var patch_size = this.Match_MaxBits;
          for (var x = 0; x < patches.length; x++) {
            if (patches[x].length1 <= patch_size) {
              continue;
            }
            var bigpatch = patches[x];
            patches.splice(x--, 1);
            var start1 = bigpatch.start1;
            var start2 = bigpatch.start2;
            var precontext = "";
            while (bigpatch.diffs.length !== 0) {
              var patch3 = new diff_match_patch2.patch_obj();
              var empty = true;
              patch3.start1 = start1 - precontext.length;
              patch3.start2 = start2 - precontext.length;
              if (precontext !== "") {
                patch3.length1 = patch3.length2 = precontext.length;
                patch3.diffs.push([DIFF_EQUAL, precontext]);
              }
              while (bigpatch.diffs.length !== 0 && patch3.length1 < patch_size - this.Patch_Margin) {
                var diff_type = bigpatch.diffs[0][0];
                var diff_text = bigpatch.diffs[0][1];
                if (diff_type === DIFF_INSERT) {
                  patch3.length2 += diff_text.length;
                  start2 += diff_text.length;
                  patch3.diffs.push(bigpatch.diffs.shift());
                  empty = false;
                } else if (diff_type === DIFF_DELETE && patch3.diffs.length == 1 && patch3.diffs[0][0] == DIFF_EQUAL && diff_text.length > 2 * patch_size) {
                  patch3.length1 += diff_text.length;
                  start1 += diff_text.length;
                  empty = false;
                  patch3.diffs.push([diff_type, diff_text]);
                  bigpatch.diffs.shift();
                } else {
                  diff_text = diff_text.substring(0, patch_size - patch3.length1 - this.Patch_Margin);
                  patch3.length1 += diff_text.length;
                  start1 += diff_text.length;
                  if (diff_type === DIFF_EQUAL) {
                    patch3.length2 += diff_text.length;
                    start2 += diff_text.length;
                  } else {
                    empty = false;
                  }
                  patch3.diffs.push([diff_type, diff_text]);
                  if (diff_text == bigpatch.diffs[0][1]) {
                    bigpatch.diffs.shift();
                  } else {
                    bigpatch.diffs[0][1] = bigpatch.diffs[0][1].substring(diff_text.length);
                  }
                }
              }
              precontext = this.diff_text2(patch3.diffs);
              precontext = precontext.substring(precontext.length - this.Patch_Margin);
              var postcontext = this.diff_text1(bigpatch.diffs).substring(0, this.Patch_Margin);
              if (postcontext !== "") {
                patch3.length1 += postcontext.length;
                patch3.length2 += postcontext.length;
                if (patch3.diffs.length !== 0 && patch3.diffs[patch3.diffs.length - 1][0] === DIFF_EQUAL) {
                  patch3.diffs[patch3.diffs.length - 1][1] += postcontext;
                } else {
                  patch3.diffs.push([DIFF_EQUAL, postcontext]);
                }
              }
              if (!empty) {
                patches.splice(++x, 0, patch3);
              }
            }
          }
        };
        diff_match_patch2.prototype.patch_toText = function(patches) {
          var text = [];
          for (var x = 0; x < patches.length; x++) {
            text[x] = patches[x];
          }
          return text.join("");
        };
        diff_match_patch2.prototype.patch_fromText = function(textline) {
          var patches = [];
          if (!textline) {
            return patches;
          }
          var text = textline.split("\n");
          var textPointer = 0;
          var patchHeader = /^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;
          while (textPointer < text.length) {
            var m = text[textPointer].match(patchHeader);
            if (!m) {
              throw new Error("Invalid patch string: " + text[textPointer]);
            }
            var patch3 = new diff_match_patch2.patch_obj();
            patches.push(patch3);
            patch3.start1 = parseInt(m[1], 10);
            if (m[2] === "") {
              patch3.start1--;
              patch3.length1 = 1;
            } else if (m[2] == "0") {
              patch3.length1 = 0;
            } else {
              patch3.start1--;
              patch3.length1 = parseInt(m[2], 10);
            }
            patch3.start2 = parseInt(m[3], 10);
            if (m[4] === "") {
              patch3.start2--;
              patch3.length2 = 1;
            } else if (m[4] == "0") {
              patch3.length2 = 0;
            } else {
              patch3.start2--;
              patch3.length2 = parseInt(m[4], 10);
            }
            textPointer++;
            while (textPointer < text.length) {
              var sign = text[textPointer].charAt(0);
              try {
                var line = decodeURI(text[textPointer].substring(1));
              } catch (ex) {
                throw new Error("Illegal escape in patch_fromText: " + line);
              }
              if (sign == "-") {
                patch3.diffs.push([DIFF_DELETE, line]);
              } else if (sign == "+") {
                patch3.diffs.push([DIFF_INSERT, line]);
              } else if (sign == " ") {
                patch3.diffs.push([DIFF_EQUAL, line]);
              } else if (sign == "@") {
                break;
              } else if (sign === "") {
              } else {
                throw new Error('Invalid patch mode "' + sign + '" in: ' + line);
              }
              textPointer++;
            }
          }
          return patches;
        };
        diff_match_patch2.patch_obj = function() {
          this.diffs = [];
          this.start1 = null;
          this.start2 = null;
          this.length1 = 0;
          this.length2 = 0;
        };
        diff_match_patch2.patch_obj.prototype.toString = function() {
          var coords1, coords2;
          if (this.length1 === 0) {
            coords1 = this.start1 + ",0";
          } else if (this.length1 == 1) {
            coords1 = this.start1 + 1;
          } else {
            coords1 = this.start1 + 1 + "," + this.length1;
          }
          if (this.length2 === 0) {
            coords2 = this.start2 + ",0";
          } else if (this.length2 == 1) {
            coords2 = this.start2 + 1;
          } else {
            coords2 = this.start2 + 1 + "," + this.length2;
          }
          var text = ["@@ -" + coords1 + " +" + coords2 + " @@\n"];
          var op;
          for (var x = 0; x < this.diffs.length; x++) {
            switch (this.diffs[x][0]) {
              case DIFF_INSERT:
                op = "+";
                break;
              case DIFF_DELETE:
                op = "-";
                break;
              case DIFF_EQUAL:
                op = " ";
                break;
            }
            text[x + 1] = op + encodeURI(this.diffs[x][1]) + "\n";
          }
          return text.join("").replace(/%20/g, " ");
        };
        module3.exports = diff_match_patch2;
        module3.exports["diff_match_patch"] = diff_match_patch2;
        module3.exports["DIFF_DELETE"] = DIFF_DELETE;
        module3.exports["DIFF_INSERT"] = DIFF_INSERT;
        module3.exports["DIFF_EQUAL"] = DIFF_EQUAL;
      });
      var TEXT_DIFF = 2;
      var DEFAULT_MIN_LENGTH = 60;
      var cachedDiffPatch = null;
      var getDiffMatchPatch = function getDiffMatchPatch2(required) {
        if (!cachedDiffPatch) {
          var instance = void 0;
          if (typeof diff_match_patch !== "undefined") {
            instance = typeof diff_match_patch === "function" ? new diff_match_patch() : new diff_match_patch.diff_match_patch();
          } else if (diffMatchPatch) {
            try {
              instance = diffMatchPatch && new diffMatchPatch();
            } catch (err) {
              instance = null;
            }
          }
          if (!instance) {
            if (!required) {
              return null;
            }
            var error = new Error("text diff_match_patch library not found");
            error.diff_match_patch_not_found = true;
            throw error;
          }
          cachedDiffPatch = {
            diff: function diff2(txt1, txt2) {
              return instance.patch_toText(instance.patch_make(txt1, txt2));
            },
            patch: function patch3(txt1, _patch) {
              var results = instance.patch_apply(instance.patch_fromText(_patch), txt1);
              for (var i = 0; i < results[1].length; i++) {
                if (!results[1][i]) {
                  var _error = new Error("text patch failed");
                  _error.textPatchFailed = true;
                }
              }
              return results[0];
            }
          };
        }
        return cachedDiffPatch;
      };
      var diffFilter$3 = function textsDiffFilter(context) {
        if (context.leftType !== "string") {
          return;
        }
        var minLength = context.options && context.options.textDiff && context.options.textDiff.minLength || DEFAULT_MIN_LENGTH;
        if (context.left.length < minLength || context.right.length < minLength) {
          context.setResult([context.left, context.right]).exit();
          return;
        }
        var diffMatchPatch$$1 = getDiffMatchPatch();
        if (!diffMatchPatch$$1) {
          context.setResult([context.left, context.right]).exit();
          return;
        }
        var diff2 = diffMatchPatch$$1.diff;
        context.setResult([diff2(context.left, context.right), 0, TEXT_DIFF]).exit();
      };
      diffFilter$3.filterName = "texts";
      var patchFilter$3 = function textsPatchFilter(context) {
        if (context.nested) {
          return;
        }
        if (context.delta[2] !== TEXT_DIFF) {
          return;
        }
        var patch3 = getDiffMatchPatch(true).patch;
        context.setResult(patch3(context.left, context.delta[0])).exit();
      };
      patchFilter$3.filterName = "texts";
      var textDeltaReverse = function textDeltaReverse2(delta) {
        var i = void 0;
        var l = void 0;
        var lines = void 0;
        var line = void 0;
        var lineTmp = void 0;
        var header = null;
        var headerRegex = /^@@ +-(\d+),(\d+) +\+(\d+),(\d+) +@@$/;
        var lineHeader = void 0;
        lines = delta.split("\n");
        for (i = 0, l = lines.length; i < l; i++) {
          line = lines[i];
          var lineStart = line.slice(0, 1);
          if (lineStart === "@") {
            header = headerRegex.exec(line);
            lineHeader = i;
            lines[lineHeader] = "@@ -" + header[3] + "," + header[4] + " +" + header[1] + "," + header[2] + " @@";
          } else if (lineStart === "+") {
            lines[i] = "-" + lines[i].slice(1);
            if (lines[i - 1].slice(0, 1) === "+") {
              lineTmp = lines[i];
              lines[i] = lines[i - 1];
              lines[i - 1] = lineTmp;
            }
          } else if (lineStart === "-") {
            lines[i] = "+" + lines[i].slice(1);
          }
        }
        return lines.join("\n");
      };
      var reverseFilter$3 = function textsReverseFilter(context) {
        if (context.nested) {
          return;
        }
        if (context.delta[2] !== TEXT_DIFF) {
          return;
        }
        context.setResult([textDeltaReverse(context.delta[0]), 0, TEXT_DIFF]).exit();
      };
      reverseFilter$3.filterName = "texts";
      var DiffPatcher = function() {
        function DiffPatcher2(options) {
          classCallCheck(this, DiffPatcher2);
          this.processor = new Processor(options);
          this.processor.pipe(new Pipe("diff").append(collectChildrenDiffFilter, diffFilter, diffFilter$2, diffFilter$3, objectsDiffFilter, diffFilter$1).shouldHaveResult());
          this.processor.pipe(new Pipe("patch").append(collectChildrenPatchFilter, collectChildrenPatchFilter$1, patchFilter, patchFilter$3, patchFilter$1, patchFilter$2).shouldHaveResult());
          this.processor.pipe(new Pipe("reverse").append(collectChildrenReverseFilter, collectChildrenReverseFilter$1, reverseFilter, reverseFilter$3, reverseFilter$1, reverseFilter$2).shouldHaveResult());
        }
        createClass(DiffPatcher2, [{
          key: "options",
          value: function options() {
            var _processor;
            return (_processor = this.processor).options.apply(_processor, arguments);
          }
        }, {
          key: "diff",
          value: function diff2(left, right) {
            return this.processor.process(new DiffContext(left, right));
          }
        }, {
          key: "patch",
          value: function patch3(left, delta) {
            return this.processor.process(new PatchContext(left, delta));
          }
        }, {
          key: "reverse",
          value: function reverse2(delta) {
            return this.processor.process(new ReverseContext(delta));
          }
        }, {
          key: "unpatch",
          value: function unpatch2(right, delta) {
            return this.patch(right, this.reverse(delta));
          }
        }, {
          key: "clone",
          value: function clone$$1(value) {
            return clone(value);
          }
        }]);
        return DiffPatcher2;
      }();
      var isArray$3 = typeof Array.isArray === "function" ? Array.isArray : function(a) {
        return a instanceof Array;
      };
      var getObjectKeys = typeof Object.keys === "function" ? function(obj) {
        return Object.keys(obj);
      } : function(obj) {
        var names = [];
        for (var property in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, property)) {
            names.push(property);
          }
        }
        return names;
      };
      var trimUnderscore = function trimUnderscore2(str) {
        if (str.substr(0, 1) === "_") {
          return str.slice(1);
        }
        return str;
      };
      var arrayKeyToSortNumber = function arrayKeyToSortNumber2(key) {
        if (key === "_t") {
          return -1;
        } else {
          if (key.substr(0, 1) === "_") {
            return parseInt(key.slice(1), 10);
          } else {
            return parseInt(key, 10) + 0.1;
          }
        }
      };
      var arrayKeyComparer = function arrayKeyComparer2(key1, key2) {
        return arrayKeyToSortNumber(key1) - arrayKeyToSortNumber(key2);
      };
      var BaseFormatter = function() {
        function BaseFormatter2() {
          classCallCheck(this, BaseFormatter2);
        }
        createClass(BaseFormatter2, [{
          key: "format",
          value: function format2(delta, left) {
            var context = {};
            this.prepareContext(context);
            this.recurse(context, delta, left);
            return this.finalize(context);
          }
        }, {
          key: "prepareContext",
          value: function prepareContext(context) {
            context.buffer = [];
            context.out = function() {
              var _buffer;
              (_buffer = this.buffer).push.apply(_buffer, arguments);
            };
          }
        }, {
          key: "typeFormattterNotFound",
          value: function typeFormattterNotFound(context, deltaType) {
            throw new Error("cannot format delta type: " + deltaType);
          }
        }, {
          key: "typeFormattterErrorFormatter",
          value: function typeFormattterErrorFormatter(context, err) {
            return err.toString();
          }
        }, {
          key: "finalize",
          value: function finalize(_ref) {
            var buffer = _ref.buffer;
            if (isArray$3(buffer)) {
              return buffer.join("");
            }
          }
        }, {
          key: "recurse",
          value: function recurse(context, delta, left, key, leftKey, movedFrom, isLast) {
            var useMoveOriginHere = delta && movedFrom;
            var leftValue = useMoveOriginHere ? movedFrom.value : left;
            if (typeof delta === "undefined" && typeof key === "undefined") {
              return void 0;
            }
            var type = this.getDeltaType(delta, movedFrom);
            var nodeType = type === "node" ? delta._t === "a" ? "array" : "object" : "";
            if (typeof key !== "undefined") {
              this.nodeBegin(context, key, leftKey, type, nodeType, isLast);
            } else {
              this.rootBegin(context, type, nodeType);
            }
            var typeFormattter = void 0;
            try {
              typeFormattter = this["format_" + type] || this.typeFormattterNotFound(context, type);
              typeFormattter.call(this, context, delta, leftValue, key, leftKey, movedFrom);
            } catch (err) {
              this.typeFormattterErrorFormatter(context, err, delta, leftValue, key, leftKey, movedFrom);
              if (typeof console !== "undefined" && console.error) {
                console.error(err.stack);
              }
            }
            if (typeof key !== "undefined") {
              this.nodeEnd(context, key, leftKey, type, nodeType, isLast);
            } else {
              this.rootEnd(context, type, nodeType);
            }
          }
        }, {
          key: "formatDeltaChildren",
          value: function formatDeltaChildren(context, delta, left) {
            var self = this;
            this.forEachDeltaKey(delta, left, function(key, leftKey, movedFrom, isLast) {
              self.recurse(context, delta[key], left ? left[leftKey] : void 0, key, leftKey, movedFrom, isLast);
            });
          }
        }, {
          key: "forEachDeltaKey",
          value: function forEachDeltaKey(delta, left, fn) {
            var keys = getObjectKeys(delta);
            var arrayKeys = delta._t === "a";
            var moveDestinations = {};
            var name = void 0;
            if (typeof left !== "undefined") {
              for (name in left) {
                if (Object.prototype.hasOwnProperty.call(left, name)) {
                  if (typeof delta[name] === "undefined" && (!arrayKeys || typeof delta["_" + name] === "undefined")) {
                    keys.push(name);
                  }
                }
              }
            }
            for (name in delta) {
              if (Object.prototype.hasOwnProperty.call(delta, name)) {
                var value = delta[name];
                if (isArray$3(value) && value[2] === 3) {
                  moveDestinations[value[1].toString()] = {
                    key: name,
                    value: left && left[parseInt(name.substr(1))]
                  };
                  if (this.includeMoveDestinations !== false) {
                    if (typeof left === "undefined" && typeof delta[value[1]] === "undefined") {
                      keys.push(value[1].toString());
                    }
                  }
                }
              }
            }
            if (arrayKeys) {
              keys.sort(arrayKeyComparer);
            } else {
              keys.sort();
            }
            for (var index2 = 0, length = keys.length; index2 < length; index2++) {
              var key = keys[index2];
              if (arrayKeys && key === "_t") {
                continue;
              }
              var leftKey = arrayKeys ? typeof key === "number" ? key : parseInt(trimUnderscore(key), 10) : key;
              var isLast = index2 === length - 1;
              fn(key, leftKey, moveDestinations[leftKey], isLast);
            }
          }
        }, {
          key: "getDeltaType",
          value: function getDeltaType(delta, movedFrom) {
            if (typeof delta === "undefined") {
              if (typeof movedFrom !== "undefined") {
                return "movedestination";
              }
              return "unchanged";
            }
            if (isArray$3(delta)) {
              if (delta.length === 1) {
                return "added";
              }
              if (delta.length === 2) {
                return "modified";
              }
              if (delta.length === 3 && delta[2] === 0) {
                return "deleted";
              }
              if (delta.length === 3 && delta[2] === 2) {
                return "textdiff";
              }
              if (delta.length === 3 && delta[2] === 3) {
                return "moved";
              }
            } else if ((typeof delta === "undefined" ? "undefined" : _typeof(delta)) === "object") {
              return "node";
            }
            return "unknown";
          }
        }, {
          key: "parseTextDiff",
          value: function parseTextDiff(value) {
            var output = [];
            var lines = value.split("\n@@ ");
            for (var i = 0, l = lines.length; i < l; i++) {
              var line = lines[i];
              var lineOutput = {
                pieces: []
              };
              var location = /^(?:@@ )?[-+]?(\d+),(\d+)/.exec(line).slice(1);
              lineOutput.location = {
                line: location[0],
                chr: location[1]
              };
              var pieces = line.split("\n").slice(1);
              for (var pieceIndex = 0, piecesLength = pieces.length; pieceIndex < piecesLength; pieceIndex++) {
                var piece = pieces[pieceIndex];
                if (!piece.length) {
                  continue;
                }
                var pieceOutput = {
                  type: "context"
                };
                if (piece.substr(0, 1) === "+") {
                  pieceOutput.type = "added";
                } else if (piece.substr(0, 1) === "-") {
                  pieceOutput.type = "deleted";
                }
                pieceOutput.text = piece.slice(1);
                lineOutput.pieces.push(pieceOutput);
              }
              output.push(lineOutput);
            }
            return output;
          }
        }]);
        return BaseFormatter2;
      }();
      var base = Object.freeze({
        default: BaseFormatter
      });
      var HtmlFormatter = function(_BaseFormatter) {
        inherits(HtmlFormatter2, _BaseFormatter);
        function HtmlFormatter2() {
          classCallCheck(this, HtmlFormatter2);
          return possibleConstructorReturn(this, (HtmlFormatter2.__proto__ || Object.getPrototypeOf(HtmlFormatter2)).apply(this, arguments));
        }
        createClass(HtmlFormatter2, [{
          key: "typeFormattterErrorFormatter",
          value: function typeFormattterErrorFormatter(context, err) {
            context.out('<pre class="jsondiffpatch-error">' + err + "</pre>");
          }
        }, {
          key: "formatValue",
          value: function formatValue(context, value) {
            context.out("<pre>" + htmlEscape(JSON.stringify(value, null, 2)) + "</pre>");
          }
        }, {
          key: "formatTextDiffString",
          value: function formatTextDiffString(context, value) {
            var lines = this.parseTextDiff(value);
            context.out('<ul class="jsondiffpatch-textdiff">');
            for (var i = 0, l = lines.length; i < l; i++) {
              var line = lines[i];
              context.out('<li><div class="jsondiffpatch-textdiff-location">' + ('<span class="jsondiffpatch-textdiff-line-number">' + line.location.line + '</span><span class="jsondiffpatch-textdiff-char">' + line.location.chr + '</span></div><div class="jsondiffpatch-textdiff-line">'));
              var pieces = line.pieces;
              for (var pieceIndex = 0, piecesLength = pieces.length; pieceIndex < piecesLength; pieceIndex++) {
                var piece = pieces[pieceIndex];
                context.out('<span class="jsondiffpatch-textdiff-' + piece.type + '">' + htmlEscape(decodeURI(piece.text)) + "</span>");
              }
              context.out("</div></li>");
            }
            context.out("</ul>");
          }
        }, {
          key: "rootBegin",
          value: function rootBegin(context, type, nodeType) {
            var nodeClass = "jsondiffpatch-" + type + (nodeType ? " jsondiffpatch-child-node-type-" + nodeType : "");
            context.out('<div class="jsondiffpatch-delta ' + nodeClass + '">');
          }
        }, {
          key: "rootEnd",
          value: function rootEnd(context) {
            context.out("</div>" + (context.hasArrows ? '<script type="text/javascript">setTimeout(' + (adjustArrows.toString() + ",10);<\/script>") : ""));
          }
        }, {
          key: "nodeBegin",
          value: function nodeBegin(context, key, leftKey, type, nodeType) {
            var nodeClass = "jsondiffpatch-" + type + (nodeType ? " jsondiffpatch-child-node-type-" + nodeType : "");
            context.out('<li class="' + nodeClass + '" data-key="' + leftKey + '">' + ('<div class="jsondiffpatch-property-name">' + leftKey + "</div>"));
          }
        }, {
          key: "nodeEnd",
          value: function nodeEnd(context) {
            context.out("</li>");
          }
        }, {
          key: "format_unchanged",
          value: function format_unchanged(context, delta, left) {
            if (typeof left === "undefined") {
              return;
            }
            context.out('<div class="jsondiffpatch-value">');
            this.formatValue(context, left);
            context.out("</div>");
          }
        }, {
          key: "format_movedestination",
          value: function format_movedestination(context, delta, left) {
            if (typeof left === "undefined") {
              return;
            }
            context.out('<div class="jsondiffpatch-value">');
            this.formatValue(context, left);
            context.out("</div>");
          }
        }, {
          key: "format_node",
          value: function format_node(context, delta, left) {
            var nodeType = delta._t === "a" ? "array" : "object";
            context.out('<ul class="jsondiffpatch-node jsondiffpatch-node-type-' + nodeType + '">');
            this.formatDeltaChildren(context, delta, left);
            context.out("</ul>");
          }
        }, {
          key: "format_added",
          value: function format_added(context, delta) {
            context.out('<div class="jsondiffpatch-value">');
            this.formatValue(context, delta[0]);
            context.out("</div>");
          }
        }, {
          key: "format_modified",
          value: function format_modified(context, delta) {
            context.out('<div class="jsondiffpatch-value jsondiffpatch-left-value">');
            this.formatValue(context, delta[0]);
            context.out('</div><div class="jsondiffpatch-value jsondiffpatch-right-value">');
            this.formatValue(context, delta[1]);
            context.out("</div>");
          }
        }, {
          key: "format_deleted",
          value: function format_deleted(context, delta) {
            context.out('<div class="jsondiffpatch-value">');
            this.formatValue(context, delta[0]);
            context.out("</div>");
          }
        }, {
          key: "format_moved",
          value: function format_moved(context, delta) {
            context.out('<div class="jsondiffpatch-value">');
            this.formatValue(context, delta[0]);
            context.out('</div><div class="jsondiffpatch-moved-destination">' + delta[1] + "</div>");
            context.out('<div class="jsondiffpatch-arrow" style="position: relative; left: -34px;">\n          <svg width="30" height="60" style="position: absolute; display: none;">\n          <defs>\n              <marker id="markerArrow" markerWidth="8" markerHeight="8"\n                 refx="2" refy="4"\n                     orient="auto" markerUnits="userSpaceOnUse">\n                  <path d="M1,1 L1,7 L7,4 L1,1" style="fill: #339;" />\n              </marker>\n          </defs>\n          <path d="M30,0 Q-10,25 26,50"\n            style="stroke: #88f; stroke-width: 2px; fill: none; stroke-opacity: 0.5; marker-end: url(#markerArrow);"\n          ></path>\n          </svg>\n      </div>');
            context.hasArrows = true;
          }
        }, {
          key: "format_textdiff",
          value: function format_textdiff(context, delta) {
            context.out('<div class="jsondiffpatch-value">');
            this.formatTextDiffString(context, delta[0]);
            context.out("</div>");
          }
        }]);
        return HtmlFormatter2;
      }(BaseFormatter);
      function htmlEscape(text) {
        var html2 = text;
        var replacements = [[/&/g, "&amp;"], [/</g, "&lt;"], [/>/g, "&gt;"], [/'/g, "&apos;"], [/"/g, "&quot;"]];
        for (var i = 0; i < replacements.length; i++) {
          html2 = html2.replace(replacements[i][0], replacements[i][1]);
        }
        return html2;
      }
      var adjustArrows = function jsondiffpatchHtmlFormatterAdjustArrows(nodeArg) {
        var node = nodeArg || document;
        var getElementText = function getElementText2(_ref) {
          var textContent = _ref.textContent, innerText = _ref.innerText;
          return textContent || innerText;
        };
        var eachByQuery = function eachByQuery2(el, query, fn) {
          var elems = el.querySelectorAll(query);
          for (var i = 0, l = elems.length; i < l; i++) {
            fn(elems[i]);
          }
        };
        var eachChildren = function eachChildren2(_ref2, fn) {
          var children = _ref2.children;
          for (var i = 0, l = children.length; i < l; i++) {
            fn(children[i], i);
          }
        };
        eachByQuery(node, ".jsondiffpatch-arrow", function(_ref3) {
          var parentNode = _ref3.parentNode, children = _ref3.children, style = _ref3.style;
          var arrowParent = parentNode;
          var svg = children[0];
          var path = svg.children[1];
          svg.style.display = "none";
          var destination = getElementText(arrowParent.querySelector(".jsondiffpatch-moved-destination"));
          var container = arrowParent.parentNode;
          var destinationElem = void 0;
          eachChildren(container, function(child) {
            if (child.getAttribute("data-key") === destination) {
              destinationElem = child;
            }
          });
          if (!destinationElem) {
            return;
          }
          try {
            var distance = destinationElem.offsetTop - arrowParent.offsetTop;
            svg.setAttribute("height", Math.abs(distance) + 6);
            style.top = -8 + (distance > 0 ? 0 : distance) + "px";
            var curve = distance > 0 ? "M30,0 Q-10," + Math.round(distance / 2) + " 26," + (distance - 4) : "M30," + -distance + " Q-10," + Math.round(-distance / 2) + " 26,4";
            path.setAttribute("d", curve);
            svg.style.display = "";
          } catch (err) {
          }
        });
      };
      var showUnchanged = function showUnchanged2(show, node, delay) {
        var el = node || document.body;
        var prefix = "jsondiffpatch-unchanged-";
        var classes = {
          showing: prefix + "showing",
          hiding: prefix + "hiding",
          visible: prefix + "visible",
          hidden: prefix + "hidden"
        };
        var list = el.classList;
        if (!list) {
          return;
        }
        if (!delay) {
          list.remove(classes.showing);
          list.remove(classes.hiding);
          list.remove(classes.visible);
          list.remove(classes.hidden);
          if (show === false) {
            list.add(classes.hidden);
          }
          return;
        }
        if (show === false) {
          list.remove(classes.showing);
          list.add(classes.visible);
          setTimeout(function() {
            list.add(classes.hiding);
          }, 10);
        } else {
          list.remove(classes.hiding);
          list.add(classes.showing);
          list.remove(classes.hidden);
        }
        var intervalId = setInterval(function() {
          adjustArrows(el);
        }, 100);
        setTimeout(function() {
          list.remove(classes.showing);
          list.remove(classes.hiding);
          if (show === false) {
            list.add(classes.hidden);
            list.remove(classes.visible);
          } else {
            list.add(classes.visible);
            list.remove(classes.hidden);
          }
          setTimeout(function() {
            list.remove(classes.visible);
            clearInterval(intervalId);
          }, delay + 400);
        }, delay);
      };
      var hideUnchanged = function hideUnchanged2(node, delay) {
        return showUnchanged(false, node, delay);
      };
      var defaultInstance = void 0;
      function format(delta, left) {
        if (!defaultInstance) {
          defaultInstance = new HtmlFormatter();
        }
        return defaultInstance.format(delta, left);
      }
      var html = Object.freeze({
        showUnchanged,
        hideUnchanged,
        default: HtmlFormatter,
        format
      });
      var AnnotatedFormatter = function(_BaseFormatter) {
        inherits(AnnotatedFormatter2, _BaseFormatter);
        function AnnotatedFormatter2() {
          classCallCheck(this, AnnotatedFormatter2);
          var _this = possibleConstructorReturn(this, (AnnotatedFormatter2.__proto__ || Object.getPrototypeOf(AnnotatedFormatter2)).call(this));
          _this.includeMoveDestinations = false;
          return _this;
        }
        createClass(AnnotatedFormatter2, [{
          key: "prepareContext",
          value: function prepareContext(context) {
            get(AnnotatedFormatter2.prototype.__proto__ || Object.getPrototypeOf(AnnotatedFormatter2.prototype), "prepareContext", this).call(this, context);
            context.indent = function(levels) {
              this.indentLevel = (this.indentLevel || 0) + (typeof levels === "undefined" ? 1 : levels);
              this.indentPad = new Array(this.indentLevel + 1).join("&nbsp;&nbsp;");
            };
            context.row = function(json, htmlNote) {
              context.out('<tr><td style="white-space: nowrap;"><pre class="jsondiffpatch-annotated-indent" style="display: inline-block">');
              context.out(context.indentPad);
              context.out('</pre><pre style="display: inline-block">');
              context.out(json);
              context.out('</pre></td><td class="jsondiffpatch-delta-note"><div>');
              context.out(htmlNote);
              context.out("</div></td></tr>");
            };
          }
        }, {
          key: "typeFormattterErrorFormatter",
          value: function typeFormattterErrorFormatter(context, err) {
            context.row("", '<pre class="jsondiffpatch-error">' + err + "</pre>");
          }
        }, {
          key: "formatTextDiffString",
          value: function formatTextDiffString(context, value) {
            var lines = this.parseTextDiff(value);
            context.out('<ul class="jsondiffpatch-textdiff">');
            for (var i = 0, l = lines.length; i < l; i++) {
              var line = lines[i];
              context.out('<li><div class="jsondiffpatch-textdiff-location">' + ('<span class="jsondiffpatch-textdiff-line-number">' + line.location.line + '</span><span class="jsondiffpatch-textdiff-char">' + line.location.chr + '</span></div><div class="jsondiffpatch-textdiff-line">'));
              var pieces = line.pieces;
              for (var pieceIndex = 0, piecesLength = pieces.length; pieceIndex < piecesLength; pieceIndex++) {
                var piece = pieces[pieceIndex];
                context.out('<span class="jsondiffpatch-textdiff-' + piece.type + '">' + piece.text + "</span>");
              }
              context.out("</div></li>");
            }
            context.out("</ul>");
          }
        }, {
          key: "rootBegin",
          value: function rootBegin(context, type, nodeType) {
            context.out('<table class="jsondiffpatch-annotated-delta">');
            if (type === "node") {
              context.row("{");
              context.indent();
            }
            if (nodeType === "array") {
              context.row('"_t": "a",', "Array delta (member names indicate array indices)");
            }
          }
        }, {
          key: "rootEnd",
          value: function rootEnd(context, type) {
            if (type === "node") {
              context.indent(-1);
              context.row("}");
            }
            context.out("</table>");
          }
        }, {
          key: "nodeBegin",
          value: function nodeBegin(context, key, leftKey, type, nodeType) {
            context.row("&quot;" + key + "&quot;: {");
            if (type === "node") {
              context.indent();
            }
            if (nodeType === "array") {
              context.row('"_t": "a",', "Array delta (member names indicate array indices)");
            }
          }
        }, {
          key: "nodeEnd",
          value: function nodeEnd(context, key, leftKey, type, nodeType, isLast) {
            if (type === "node") {
              context.indent(-1);
            }
            context.row("}" + (isLast ? "" : ","));
          }
        }, {
          key: "format_unchanged",
          value: function format_unchanged() {
          }
        }, {
          key: "format_movedestination",
          value: function format_movedestination() {
          }
        }, {
          key: "format_node",
          value: function format_node(context, delta, left) {
            this.formatDeltaChildren(context, delta, left);
          }
        }]);
        return AnnotatedFormatter2;
      }(BaseFormatter);
      var wrapPropertyName = function wrapPropertyName2(name) {
        return '<pre style="display:inline-block">&quot;' + name + "&quot;</pre>";
      };
      var deltaAnnotations = {
        added: function added(delta, left, key, leftKey) {
          var formatLegend = " <pre>([newValue])</pre>";
          if (typeof leftKey === "undefined") {
            return "new value" + formatLegend;
          }
          if (typeof leftKey === "number") {
            return "insert at index " + leftKey + formatLegend;
          }
          return "add property " + wrapPropertyName(leftKey) + formatLegend;
        },
        modified: function modified(delta, left, key, leftKey) {
          var formatLegend = " <pre>([previousValue, newValue])</pre>";
          if (typeof leftKey === "undefined") {
            return "modify value" + formatLegend;
          }
          if (typeof leftKey === "number") {
            return "modify at index " + leftKey + formatLegend;
          }
          return "modify property " + wrapPropertyName(leftKey) + formatLegend;
        },
        deleted: function deleted(delta, left, key, leftKey) {
          var formatLegend = " <pre>([previousValue, 0, 0])</pre>";
          if (typeof leftKey === "undefined") {
            return "delete value" + formatLegend;
          }
          if (typeof leftKey === "number") {
            return "remove index " + leftKey + formatLegend;
          }
          return "delete property " + wrapPropertyName(leftKey) + formatLegend;
        },
        moved: function moved(delta, left, key, leftKey) {
          return 'move from <span title="(position to remove at original state)">' + ("index " + leftKey + '</span> to <span title="(position to insert at final') + (' state)">index ' + delta[1] + "</span>");
        },
        textdiff: function textdiff(delta, left, key, leftKey) {
          var location = typeof leftKey === "undefined" ? "" : typeof leftKey === "number" ? " at index " + leftKey : " at property " + wrapPropertyName(leftKey);
          return "text diff" + location + ', format is <a href="https://code.google.com/p/google-diff-match-patch/wiki/Unidiff">a variation of Unidiff</a>';
        }
      };
      var formatAnyChange = function formatAnyChange2(context, delta) {
        var deltaType = this.getDeltaType(delta);
        var annotator = deltaAnnotations[deltaType];
        var htmlNote = annotator && annotator.apply(annotator, Array.prototype.slice.call(arguments, 1));
        var json = JSON.stringify(delta, null, 2);
        if (deltaType === "textdiff") {
          json = json.split("\\n").join('\\n"+\n   "');
        }
        context.indent();
        context.row(json, htmlNote);
        context.indent(-1);
      };
      AnnotatedFormatter.prototype.format_added = formatAnyChange;
      AnnotatedFormatter.prototype.format_modified = formatAnyChange;
      AnnotatedFormatter.prototype.format_deleted = formatAnyChange;
      AnnotatedFormatter.prototype.format_moved = formatAnyChange;
      AnnotatedFormatter.prototype.format_textdiff = formatAnyChange;
      var defaultInstance$1 = void 0;
      function format$1(delta, left) {
        if (!defaultInstance$1) {
          defaultInstance$1 = new AnnotatedFormatter();
        }
        return defaultInstance$1.format(delta, left);
      }
      var annotated = Object.freeze({
        default: AnnotatedFormatter,
        format: format$1
      });
      var OPERATIONS = {
        add: "add",
        remove: "remove",
        replace: "replace",
        move: "move"
      };
      var JSONFormatter = function(_BaseFormatter) {
        inherits(JSONFormatter2, _BaseFormatter);
        function JSONFormatter2() {
          classCallCheck(this, JSONFormatter2);
          var _this = possibleConstructorReturn(this, (JSONFormatter2.__proto__ || Object.getPrototypeOf(JSONFormatter2)).call(this));
          _this.includeMoveDestinations = true;
          return _this;
        }
        createClass(JSONFormatter2, [{
          key: "prepareContext",
          value: function prepareContext(context) {
            get(JSONFormatter2.prototype.__proto__ || Object.getPrototypeOf(JSONFormatter2.prototype), "prepareContext", this).call(this, context);
            context.result = [];
            context.path = [];
            context.pushCurrentOp = function(obj) {
              var op = obj.op, value = obj.value;
              var val = {
                op,
                path: this.currentPath()
              };
              if (typeof value !== "undefined") {
                val.value = value;
              }
              this.result.push(val);
            };
            context.pushMoveOp = function(to) {
              var from = this.currentPath();
              this.result.push({
                op: OPERATIONS.move,
                from,
                path: this.toPath(to)
              });
            };
            context.currentPath = function() {
              return "/" + this.path.join("/");
            };
            context.toPath = function(toPath) {
              var to = this.path.slice();
              to[to.length - 1] = toPath;
              return "/" + to.join("/");
            };
          }
        }, {
          key: "typeFormattterErrorFormatter",
          value: function typeFormattterErrorFormatter(context, err) {
            context.out("[ERROR] " + err);
          }
        }, {
          key: "rootBegin",
          value: function rootBegin() {
          }
        }, {
          key: "rootEnd",
          value: function rootEnd() {
          }
        }, {
          key: "nodeBegin",
          value: function nodeBegin(_ref, key, leftKey) {
            var path = _ref.path;
            path.push(leftKey);
          }
        }, {
          key: "nodeEnd",
          value: function nodeEnd(_ref2) {
            var path = _ref2.path;
            path.pop();
          }
        }, {
          key: "format_unchanged",
          value: function format_unchanged() {
          }
        }, {
          key: "format_movedestination",
          value: function format_movedestination() {
          }
        }, {
          key: "format_node",
          value: function format_node(context, delta, left) {
            this.formatDeltaChildren(context, delta, left);
          }
        }, {
          key: "format_added",
          value: function format_added(context, delta) {
            context.pushCurrentOp({ op: OPERATIONS.add, value: delta[0] });
          }
        }, {
          key: "format_modified",
          value: function format_modified(context, delta) {
            context.pushCurrentOp({ op: OPERATIONS.replace, value: delta[1] });
          }
        }, {
          key: "format_deleted",
          value: function format_deleted(context) {
            context.pushCurrentOp({ op: OPERATIONS.remove });
          }
        }, {
          key: "format_moved",
          value: function format_moved(context, delta) {
            var to = delta[1];
            context.pushMoveOp(to);
          }
        }, {
          key: "format_textdiff",
          value: function format_textdiff() {
            throw new Error("Not implemented");
          }
        }, {
          key: "format",
          value: function format2(delta, left) {
            var context = {};
            this.prepareContext(context);
            this.recurse(context, delta, left);
            return context.result;
          }
        }]);
        return JSONFormatter2;
      }(BaseFormatter);
      var last = function last2(arr) {
        return arr[arr.length - 1];
      };
      var sortBy = function sortBy2(arr, pred) {
        arr.sort(pred);
        return arr;
      };
      var compareByIndexDesc = function compareByIndexDesc2(indexA, indexB) {
        var lastA = parseInt(indexA, 10);
        var lastB = parseInt(indexB, 10);
        if (!(isNaN(lastA) || isNaN(lastB))) {
          return lastB - lastA;
        } else {
          return 0;
        }
      };
      var opsByDescendingOrder = function opsByDescendingOrder2(removeOps) {
        return sortBy(removeOps, function(a, b) {
          var splitA = a.path.split("/");
          var splitB = b.path.split("/");
          if (splitA.length !== splitB.length) {
            return splitA.length - splitB.length;
          } else {
            return compareByIndexDesc(last(splitA), last(splitB));
          }
        });
      };
      var partitionOps = function partitionOps2(arr, fns) {
        var initArr = Array(fns.length + 1).fill().map(function() {
          return [];
        });
        return arr.map(function(item) {
          var position = fns.map(function(fn) {
            return fn(item);
          }).indexOf(true);
          if (position < 0) {
            position = fns.length;
          }
          return { item, position };
        }).reduce(function(acc, item) {
          acc[item.position].push(item.item);
          return acc;
        }, initArr);
      };
      var isMoveOp = function isMoveOp2(_ref3) {
        var op = _ref3.op;
        return op === "move";
      };
      var isRemoveOp = function isRemoveOp2(_ref4) {
        var op = _ref4.op;
        return op === "remove";
      };
      var reorderOps = function reorderOps2(diff2) {
        var _partitionOps = partitionOps(diff2, [isMoveOp, isRemoveOp]), _partitionOps2 = slicedToArray(_partitionOps, 3), moveOps = _partitionOps2[0], removedOps = _partitionOps2[1], restOps = _partitionOps2[2];
        var removeOpsReverse = opsByDescendingOrder(removedOps);
        return [].concat(toConsumableArray(removeOpsReverse), toConsumableArray(moveOps), toConsumableArray(restOps));
      };
      var defaultInstance$2 = void 0;
      var format$2 = function format2(delta, left) {
        if (!defaultInstance$2) {
          defaultInstance$2 = new JSONFormatter();
        }
        return reorderOps(defaultInstance$2.format(delta, left));
      };
      var log = function log2(delta, left) {
        console.log(format$2(delta, left));
      };
      var jsonpatch2 = Object.freeze({
        default: JSONFormatter,
        partitionOps,
        format: format$2,
        log
      });
      function chalkColor(name) {
        return chalk && chalk[name] || function() {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return args;
        };
      }
      var colors = {
        added: chalkColor("green"),
        deleted: chalkColor("red"),
        movedestination: chalkColor("gray"),
        moved: chalkColor("yellow"),
        unchanged: chalkColor("gray"),
        error: chalkColor("white.bgRed"),
        textDiffLine: chalkColor("gray")
      };
      var ConsoleFormatter = function(_BaseFormatter) {
        inherits(ConsoleFormatter2, _BaseFormatter);
        function ConsoleFormatter2() {
          classCallCheck(this, ConsoleFormatter2);
          var _this = possibleConstructorReturn(this, (ConsoleFormatter2.__proto__ || Object.getPrototypeOf(ConsoleFormatter2)).call(this));
          _this.includeMoveDestinations = false;
          return _this;
        }
        createClass(ConsoleFormatter2, [{
          key: "prepareContext",
          value: function prepareContext(context) {
            get(ConsoleFormatter2.prototype.__proto__ || Object.getPrototypeOf(ConsoleFormatter2.prototype), "prepareContext", this).call(this, context);
            context.indent = function(levels) {
              this.indentLevel = (this.indentLevel || 0) + (typeof levels === "undefined" ? 1 : levels);
              this.indentPad = new Array(this.indentLevel + 1).join("  ");
              this.outLine();
            };
            context.outLine = function() {
              this.buffer.push("\n" + (this.indentPad || ""));
            };
            context.out = function() {
              for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }
              for (var i = 0, l = args.length; i < l; i++) {
                var lines = args[i].split("\n");
                var text = lines.join("\n" + (this.indentPad || ""));
                if (this.color && this.color[0]) {
                  text = this.color[0](text);
                }
                this.buffer.push(text);
              }
            };
            context.pushColor = function(color) {
              this.color = this.color || [];
              this.color.unshift(color);
            };
            context.popColor = function() {
              this.color = this.color || [];
              this.color.shift();
            };
          }
        }, {
          key: "typeFormattterErrorFormatter",
          value: function typeFormattterErrorFormatter(context, err) {
            context.pushColor(colors.error);
            context.out("[ERROR]" + err);
            context.popColor();
          }
        }, {
          key: "formatValue",
          value: function formatValue(context, value) {
            context.out(JSON.stringify(value, null, 2));
          }
        }, {
          key: "formatTextDiffString",
          value: function formatTextDiffString(context, value) {
            var lines = this.parseTextDiff(value);
            context.indent();
            for (var i = 0, l = lines.length; i < l; i++) {
              var line = lines[i];
              context.pushColor(colors.textDiffLine);
              context.out(line.location.line + "," + line.location.chr + " ");
              context.popColor();
              var pieces = line.pieces;
              for (var pieceIndex = 0, piecesLength = pieces.length; pieceIndex < piecesLength; pieceIndex++) {
                var piece = pieces[pieceIndex];
                context.pushColor(colors[piece.type]);
                context.out(piece.text);
                context.popColor();
              }
              if (i < l - 1) {
                context.outLine();
              }
            }
            context.indent(-1);
          }
        }, {
          key: "rootBegin",
          value: function rootBegin(context, type, nodeType) {
            context.pushColor(colors[type]);
            if (type === "node") {
              context.out(nodeType === "array" ? "[" : "{");
              context.indent();
            }
          }
        }, {
          key: "rootEnd",
          value: function rootEnd(context, type, nodeType) {
            if (type === "node") {
              context.indent(-1);
              context.out(nodeType === "array" ? "]" : "}");
            }
            context.popColor();
          }
        }, {
          key: "nodeBegin",
          value: function nodeBegin(context, key, leftKey, type, nodeType) {
            context.pushColor(colors[type]);
            context.out(leftKey + ": ");
            if (type === "node") {
              context.out(nodeType === "array" ? "[" : "{");
              context.indent();
            }
          }
        }, {
          key: "nodeEnd",
          value: function nodeEnd(context, key, leftKey, type, nodeType, isLast) {
            if (type === "node") {
              context.indent(-1);
              context.out(nodeType === "array" ? "]" : "}" + (isLast ? "" : ","));
            }
            if (!isLast) {
              context.outLine();
            }
            context.popColor();
          }
        }, {
          key: "format_unchanged",
          value: function format_unchanged(context, delta, left) {
            if (typeof left === "undefined") {
              return;
            }
            this.formatValue(context, left);
          }
        }, {
          key: "format_movedestination",
          value: function format_movedestination(context, delta, left) {
            if (typeof left === "undefined") {
              return;
            }
            this.formatValue(context, left);
          }
        }, {
          key: "format_node",
          value: function format_node(context, delta, left) {
            this.formatDeltaChildren(context, delta, left);
          }
        }, {
          key: "format_added",
          value: function format_added(context, delta) {
            this.formatValue(context, delta[0]);
          }
        }, {
          key: "format_modified",
          value: function format_modified(context, delta) {
            context.pushColor(colors.deleted);
            this.formatValue(context, delta[0]);
            context.popColor();
            context.out(" => ");
            context.pushColor(colors.added);
            this.formatValue(context, delta[1]);
            context.popColor();
          }
        }, {
          key: "format_deleted",
          value: function format_deleted(context, delta) {
            this.formatValue(context, delta[0]);
          }
        }, {
          key: "format_moved",
          value: function format_moved(context, delta) {
            context.out("==> " + delta[1]);
          }
        }, {
          key: "format_textdiff",
          value: function format_textdiff(context, delta) {
            this.formatTextDiffString(context, delta[0]);
          }
        }]);
        return ConsoleFormatter2;
      }(BaseFormatter);
      var defaultInstance$3 = void 0;
      var format$3 = function format2(delta, left) {
        if (!defaultInstance$3) {
          defaultInstance$3 = new ConsoleFormatter();
        }
        return defaultInstance$3.format(delta, left);
      };
      function log$1(delta, left) {
        console.log(format$3(delta, left));
      }
      var console$1 = Object.freeze({
        default: ConsoleFormatter,
        format: format$3,
        log: log$1
      });
      var index = Object.freeze({
        base,
        html,
        annotated,
        jsonpatch: jsonpatch2,
        console: console$1
      });
      function dateReviver(key, value) {
        var parts = void 0;
        if (typeof value === "string") {
          parts = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d*))?(Z|([+-])(\d{2}):(\d{2}))$/.exec(value);
          if (parts) {
            return new Date(Date.UTC(+parts[1], +parts[2] - 1, +parts[3], +parts[4], +parts[5], +parts[6], +(parts[7] || 0)));
          }
        }
        return value;
      }
      function create(options) {
        return new DiffPatcher(options);
      }
      var defaultInstance$4 = void 0;
      function diff() {
        if (!defaultInstance$4) {
          defaultInstance$4 = new DiffPatcher();
        }
        return defaultInstance$4.diff.apply(defaultInstance$4, arguments);
      }
      function patch2() {
        if (!defaultInstance$4) {
          defaultInstance$4 = new DiffPatcher();
        }
        return defaultInstance$4.patch.apply(defaultInstance$4, arguments);
      }
      function unpatch() {
        if (!defaultInstance$4) {
          defaultInstance$4 = new DiffPatcher();
        }
        return defaultInstance$4.unpatch.apply(defaultInstance$4, arguments);
      }
      function reverse() {
        if (!defaultInstance$4) {
          defaultInstance$4 = new DiffPatcher();
        }
        return defaultInstance$4.reverse.apply(defaultInstance$4, arguments);
      }
      function clone$1() {
        if (!defaultInstance$4) {
          defaultInstance$4 = new DiffPatcher();
        }
        return defaultInstance$4.clone.apply(defaultInstance$4, arguments);
      }
      exports2.DiffPatcher = DiffPatcher;
      exports2.formatters = index;
      exports2.console = console$1;
      exports2.create = create;
      exports2.dateReviver = dateReviver;
      exports2.diff = diff;
      exports2.patch = patch2;
      exports2.unpatch = unpatch;
      exports2.reverse = reverse;
      exports2.clone = clone$1;
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
  }
});

// js/live_json/index.js
__export(exports, {
  createLiveJsonHooks: () => createLiveJsonHooks,
  sendData: () => sendData
});

// node_modules/fast-json-patch/module/core.mjs
var core_exports = {};
__export(core_exports, {
  JsonPatchError: () => JsonPatchError,
  _areEquals: () => _areEquals,
  applyOperation: () => applyOperation,
  applyPatch: () => applyPatch,
  applyReducer: () => applyReducer,
  deepClone: () => deepClone,
  getValueByPointer: () => getValueByPointer,
  validate: () => validate,
  validator: () => validator
});

// node_modules/fast-json-patch/module/helpers.mjs
var __extends = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var _hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwnProperty(obj, key) {
  return _hasOwnProperty.call(obj, key);
}
function _objectKeys(obj) {
  if (Array.isArray(obj)) {
    var keys_1 = new Array(obj.length);
    for (var k = 0; k < keys_1.length; k++) {
      keys_1[k] = "" + k;
    }
    return keys_1;
  }
  if (Object.keys) {
    return Object.keys(obj);
  }
  var keys = [];
  for (var i in obj) {
    if (hasOwnProperty(obj, i)) {
      keys.push(i);
    }
  }
  return keys;
}
function _deepClone(obj) {
  switch (typeof obj) {
    case "object":
      return JSON.parse(JSON.stringify(obj));
    case "undefined":
      return null;
    default:
      return obj;
  }
}
function isInteger(str) {
  var i = 0;
  var len = str.length;
  var charCode;
  while (i < len) {
    charCode = str.charCodeAt(i);
    if (charCode >= 48 && charCode <= 57) {
      i++;
      continue;
    }
    return false;
  }
  return true;
}
function escapePathComponent(path) {
  if (path.indexOf("/") === -1 && path.indexOf("~") === -1)
    return path;
  return path.replace(/~/g, "~0").replace(/\//g, "~1");
}
function unescapePathComponent(path) {
  return path.replace(/~1/g, "/").replace(/~0/g, "~");
}
function hasUndefined(obj) {
  if (obj === void 0) {
    return true;
  }
  if (obj) {
    if (Array.isArray(obj)) {
      for (var i_1 = 0, len = obj.length; i_1 < len; i_1++) {
        if (hasUndefined(obj[i_1])) {
          return true;
        }
      }
    } else if (typeof obj === "object") {
      var objKeys = _objectKeys(obj);
      var objKeysLength = objKeys.length;
      for (var i = 0; i < objKeysLength; i++) {
        if (hasUndefined(obj[objKeys[i]])) {
          return true;
        }
      }
    }
  }
  return false;
}
function patchErrorMessageFormatter(message, args) {
  var messageParts = [message];
  for (var key in args) {
    var value = typeof args[key] === "object" ? JSON.stringify(args[key], null, 2) : args[key];
    if (typeof value !== "undefined") {
      messageParts.push(key + ": " + value);
    }
  }
  return messageParts.join("\n");
}
var PatchError = function(_super) {
  __extends(PatchError2, _super);
  function PatchError2(message, name, index, operation, tree) {
    var _newTarget = this.constructor;
    var _this = _super.call(this, patchErrorMessageFormatter(message, { name, index, operation, tree })) || this;
    _this.name = name;
    _this.index = index;
    _this.operation = operation;
    _this.tree = tree;
    Object.setPrototypeOf(_this, _newTarget.prototype);
    _this.message = patchErrorMessageFormatter(message, { name, index, operation, tree });
    return _this;
  }
  return PatchError2;
}(Error);

// node_modules/fast-json-patch/module/core.mjs
var JsonPatchError = PatchError;
var deepClone = _deepClone;
var objOps = {
  add: function(obj, key, document2) {
    obj[key] = this.value;
    return { newDocument: document2 };
  },
  remove: function(obj, key, document2) {
    var removed = obj[key];
    delete obj[key];
    return { newDocument: document2, removed };
  },
  replace: function(obj, key, document2) {
    var removed = obj[key];
    obj[key] = this.value;
    return { newDocument: document2, removed };
  },
  move: function(obj, key, document2) {
    var removed = getValueByPointer(document2, this.path);
    if (removed) {
      removed = _deepClone(removed);
    }
    var originalValue = applyOperation(document2, { op: "remove", path: this.from }).removed;
    applyOperation(document2, { op: "add", path: this.path, value: originalValue });
    return { newDocument: document2, removed };
  },
  copy: function(obj, key, document2) {
    var valueToCopy = getValueByPointer(document2, this.from);
    applyOperation(document2, { op: "add", path: this.path, value: _deepClone(valueToCopy) });
    return { newDocument: document2 };
  },
  test: function(obj, key, document2) {
    return { newDocument: document2, test: _areEquals(obj[key], this.value) };
  },
  _get: function(obj, key, document2) {
    this.value = obj[key];
    return { newDocument: document2 };
  }
};
var arrOps = {
  add: function(arr, i, document2) {
    if (isInteger(i)) {
      arr.splice(i, 0, this.value);
    } else {
      arr[i] = this.value;
    }
    return { newDocument: document2, index: i };
  },
  remove: function(arr, i, document2) {
    var removedList = arr.splice(i, 1);
    return { newDocument: document2, removed: removedList[0] };
  },
  replace: function(arr, i, document2) {
    var removed = arr[i];
    arr[i] = this.value;
    return { newDocument: document2, removed };
  },
  move: objOps.move,
  copy: objOps.copy,
  test: objOps.test,
  _get: objOps._get
};
function getValueByPointer(document2, pointer) {
  if (pointer == "") {
    return document2;
  }
  var getOriginalDestination = { op: "_get", path: pointer };
  applyOperation(document2, getOriginalDestination);
  return getOriginalDestination.value;
}
function applyOperation(document2, operation, validateOperation, mutateDocument, banPrototypeModifications, index) {
  if (validateOperation === void 0) {
    validateOperation = false;
  }
  if (mutateDocument === void 0) {
    mutateDocument = true;
  }
  if (banPrototypeModifications === void 0) {
    banPrototypeModifications = true;
  }
  if (index === void 0) {
    index = 0;
  }
  if (validateOperation) {
    if (typeof validateOperation == "function") {
      validateOperation(operation, 0, document2, operation.path);
    } else {
      validator(operation, 0);
    }
  }
  if (operation.path === "") {
    var returnValue = { newDocument: document2 };
    if (operation.op === "add") {
      returnValue.newDocument = operation.value;
      return returnValue;
    } else if (operation.op === "replace") {
      returnValue.newDocument = operation.value;
      returnValue.removed = document2;
      return returnValue;
    } else if (operation.op === "move" || operation.op === "copy") {
      returnValue.newDocument = getValueByPointer(document2, operation.from);
      if (operation.op === "move") {
        returnValue.removed = document2;
      }
      return returnValue;
    } else if (operation.op === "test") {
      returnValue.test = _areEquals(document2, operation.value);
      if (returnValue.test === false) {
        throw new JsonPatchError("Test operation failed", "TEST_OPERATION_FAILED", index, operation, document2);
      }
      returnValue.newDocument = document2;
      return returnValue;
    } else if (operation.op === "remove") {
      returnValue.removed = document2;
      returnValue.newDocument = null;
      return returnValue;
    } else if (operation.op === "_get") {
      operation.value = document2;
      return returnValue;
    } else {
      if (validateOperation) {
        throw new JsonPatchError("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", index, operation, document2);
      } else {
        return returnValue;
      }
    }
  } else {
    if (!mutateDocument) {
      document2 = _deepClone(document2);
    }
    var path = operation.path || "";
    var keys = path.split("/");
    var obj = document2;
    var t = 1;
    var len = keys.length;
    var existingPathFragment = void 0;
    var key = void 0;
    var validateFunction = void 0;
    if (typeof validateOperation == "function") {
      validateFunction = validateOperation;
    } else {
      validateFunction = validator;
    }
    while (true) {
      key = keys[t];
      if (key && key.indexOf("~") != -1) {
        key = unescapePathComponent(key);
      }
      if (banPrototypeModifications && (key == "__proto__" || key == "prototype" && t > 0 && keys[t - 1] == "constructor")) {
        throw new TypeError("JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");
      }
      if (validateOperation) {
        if (existingPathFragment === void 0) {
          if (obj[key] === void 0) {
            existingPathFragment = keys.slice(0, t).join("/");
          } else if (t == len - 1) {
            existingPathFragment = operation.path;
          }
          if (existingPathFragment !== void 0) {
            validateFunction(operation, 0, document2, existingPathFragment);
          }
        }
      }
      t++;
      if (Array.isArray(obj)) {
        if (key === "-") {
          key = obj.length;
        } else {
          if (validateOperation && !isInteger(key)) {
            throw new JsonPatchError("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index", "OPERATION_PATH_ILLEGAL_ARRAY_INDEX", index, operation, document2);
          } else if (isInteger(key)) {
            key = ~~key;
          }
        }
        if (t >= len) {
          if (validateOperation && operation.op === "add" && key > obj.length) {
            throw new JsonPatchError("The specified index MUST NOT be greater than the number of elements in the array", "OPERATION_VALUE_OUT_OF_BOUNDS", index, operation, document2);
          }
          var returnValue = arrOps[operation.op].call(operation, obj, key, document2);
          if (returnValue.test === false) {
            throw new JsonPatchError("Test operation failed", "TEST_OPERATION_FAILED", index, operation, document2);
          }
          return returnValue;
        }
      } else {
        if (t >= len) {
          var returnValue = objOps[operation.op].call(operation, obj, key, document2);
          if (returnValue.test === false) {
            throw new JsonPatchError("Test operation failed", "TEST_OPERATION_FAILED", index, operation, document2);
          }
          return returnValue;
        }
      }
      obj = obj[key];
      if (validateOperation && t < len && (!obj || typeof obj !== "object")) {
        throw new JsonPatchError("Cannot perform operation at the desired path", "OPERATION_PATH_UNRESOLVABLE", index, operation, document2);
      }
    }
  }
}
function applyPatch(document2, patch2, validateOperation, mutateDocument, banPrototypeModifications) {
  if (mutateDocument === void 0) {
    mutateDocument = true;
  }
  if (banPrototypeModifications === void 0) {
    banPrototypeModifications = true;
  }
  if (validateOperation) {
    if (!Array.isArray(patch2)) {
      throw new JsonPatchError("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
    }
  }
  if (!mutateDocument) {
    document2 = _deepClone(document2);
  }
  var results = new Array(patch2.length);
  for (var i = 0, length_1 = patch2.length; i < length_1; i++) {
    results[i] = applyOperation(document2, patch2[i], validateOperation, true, banPrototypeModifications, i);
    document2 = results[i].newDocument;
  }
  results.newDocument = document2;
  return results;
}
function applyReducer(document2, operation, index) {
  var operationResult = applyOperation(document2, operation);
  if (operationResult.test === false) {
    throw new JsonPatchError("Test operation failed", "TEST_OPERATION_FAILED", index, operation, document2);
  }
  return operationResult.newDocument;
}
function validator(operation, index, document2, existingPathFragment) {
  if (typeof operation !== "object" || operation === null || Array.isArray(operation)) {
    throw new JsonPatchError("Operation is not an object", "OPERATION_NOT_AN_OBJECT", index, operation, document2);
  } else if (!objOps[operation.op]) {
    throw new JsonPatchError("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", index, operation, document2);
  } else if (typeof operation.path !== "string") {
    throw new JsonPatchError("Operation `path` property is not a string", "OPERATION_PATH_INVALID", index, operation, document2);
  } else if (operation.path.indexOf("/") !== 0 && operation.path.length > 0) {
    throw new JsonPatchError('Operation `path` property must start with "/"', "OPERATION_PATH_INVALID", index, operation, document2);
  } else if ((operation.op === "move" || operation.op === "copy") && typeof operation.from !== "string") {
    throw new JsonPatchError("Operation `from` property is not present (applicable in `move` and `copy` operations)", "OPERATION_FROM_REQUIRED", index, operation, document2);
  } else if ((operation.op === "add" || operation.op === "replace" || operation.op === "test") && operation.value === void 0) {
    throw new JsonPatchError("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_REQUIRED", index, operation, document2);
  } else if ((operation.op === "add" || operation.op === "replace" || operation.op === "test") && hasUndefined(operation.value)) {
    throw new JsonPatchError("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED", index, operation, document2);
  } else if (document2) {
    if (operation.op == "add") {
      var pathLen = operation.path.split("/").length;
      var existingPathLen = existingPathFragment.split("/").length;
      if (pathLen !== existingPathLen + 1 && pathLen !== existingPathLen) {
        throw new JsonPatchError("Cannot perform an `add` operation at the desired path", "OPERATION_PATH_CANNOT_ADD", index, operation, document2);
      }
    } else if (operation.op === "replace" || operation.op === "remove" || operation.op === "_get") {
      if (operation.path !== existingPathFragment) {
        throw new JsonPatchError("Cannot perform the operation at a path that does not exist", "OPERATION_PATH_UNRESOLVABLE", index, operation, document2);
      }
    } else if (operation.op === "move" || operation.op === "copy") {
      var existingValue = { op: "_get", path: operation.from, value: void 0 };
      var error = validate([existingValue], document2);
      if (error && error.name === "OPERATION_PATH_UNRESOLVABLE") {
        throw new JsonPatchError("Cannot perform the operation from a path that does not exist", "OPERATION_FROM_UNRESOLVABLE", index, operation, document2);
      }
    }
  }
}
function validate(sequence, document2, externalValidator) {
  try {
    if (!Array.isArray(sequence)) {
      throw new JsonPatchError("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
    }
    if (document2) {
      applyPatch(_deepClone(document2), _deepClone(sequence), externalValidator || true);
    } else {
      externalValidator = externalValidator || validator;
      for (var i = 0; i < sequence.length; i++) {
        externalValidator(sequence[i], i, document2, void 0);
      }
    }
  } catch (e) {
    if (e instanceof JsonPatchError) {
      return e;
    } else {
      throw e;
    }
  }
}
function _areEquals(a, b) {
  if (a === b)
    return true;
  if (a && b && typeof a == "object" && typeof b == "object") {
    var arrA = Array.isArray(a), arrB = Array.isArray(b), i, length, key;
    if (arrA && arrB) {
      length = a.length;
      if (length != b.length)
        return false;
      for (i = length; i-- !== 0; )
        if (!_areEquals(a[i], b[i]))
          return false;
      return true;
    }
    if (arrA != arrB)
      return false;
    var keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length)
      return false;
    for (i = length; i-- !== 0; )
      if (!b.hasOwnProperty(keys[i]))
        return false;
    for (i = length; i-- !== 0; ) {
      key = keys[i];
      if (!_areEquals(a[key], b[key]))
        return false;
    }
    return true;
  }
  return a !== a && b !== b;
}

// node_modules/fast-json-patch/module/duplex.mjs
var duplex_exports = {};
__export(duplex_exports, {
  compare: () => compare,
  generate: () => generate,
  observe: () => observe,
  unobserve: () => unobserve
});
var beforeDict = new WeakMap();
var Mirror = function() {
  function Mirror2(obj) {
    this.observers = new Map();
    this.obj = obj;
  }
  return Mirror2;
}();
var ObserverInfo = function() {
  function ObserverInfo2(callback, observer) {
    this.callback = callback;
    this.observer = observer;
  }
  return ObserverInfo2;
}();
function getMirror(obj) {
  return beforeDict.get(obj);
}
function getObserverFromMirror(mirror, callback) {
  return mirror.observers.get(callback);
}
function removeObserverFromMirror(mirror, observer) {
  mirror.observers.delete(observer.callback);
}
function unobserve(root, observer) {
  observer.unobserve();
}
function observe(obj, callback) {
  var patches = [];
  var observer;
  var mirror = getMirror(obj);
  if (!mirror) {
    mirror = new Mirror(obj);
    beforeDict.set(obj, mirror);
  } else {
    var observerInfo = getObserverFromMirror(mirror, callback);
    observer = observerInfo && observerInfo.observer;
  }
  if (observer) {
    return observer;
  }
  observer = {};
  mirror.value = _deepClone(obj);
  if (callback) {
    observer.callback = callback;
    observer.next = null;
    var dirtyCheck = function() {
      generate(observer);
    };
    var fastCheck = function() {
      clearTimeout(observer.next);
      observer.next = setTimeout(dirtyCheck);
    };
    if (typeof window !== "undefined") {
      window.addEventListener("mouseup", fastCheck);
      window.addEventListener("keyup", fastCheck);
      window.addEventListener("mousedown", fastCheck);
      window.addEventListener("keydown", fastCheck);
      window.addEventListener("change", fastCheck);
    }
  }
  observer.patches = patches;
  observer.object = obj;
  observer.unobserve = function() {
    generate(observer);
    clearTimeout(observer.next);
    removeObserverFromMirror(mirror, observer);
    if (typeof window !== "undefined") {
      window.removeEventListener("mouseup", fastCheck);
      window.removeEventListener("keyup", fastCheck);
      window.removeEventListener("mousedown", fastCheck);
      window.removeEventListener("keydown", fastCheck);
      window.removeEventListener("change", fastCheck);
    }
  };
  mirror.observers.set(callback, new ObserverInfo(callback, observer));
  return observer;
}
function generate(observer, invertible) {
  if (invertible === void 0) {
    invertible = false;
  }
  var mirror = beforeDict.get(observer.object);
  _generate(mirror.value, observer.object, observer.patches, "", invertible);
  if (observer.patches.length) {
    applyPatch(mirror.value, observer.patches);
  }
  var temp = observer.patches;
  if (temp.length > 0) {
    observer.patches = [];
    if (observer.callback) {
      observer.callback(temp);
    }
  }
  return temp;
}
function _generate(mirror, obj, patches, path, invertible) {
  if (obj === mirror) {
    return;
  }
  if (typeof obj.toJSON === "function") {
    obj = obj.toJSON();
  }
  var newKeys = _objectKeys(obj);
  var oldKeys = _objectKeys(mirror);
  var changed = false;
  var deleted = false;
  for (var t = oldKeys.length - 1; t >= 0; t--) {
    var key = oldKeys[t];
    var oldVal = mirror[key];
    if (hasOwnProperty(obj, key) && !(obj[key] === void 0 && oldVal !== void 0 && Array.isArray(obj) === false)) {
      var newVal = obj[key];
      if (typeof oldVal == "object" && oldVal != null && typeof newVal == "object" && newVal != null && Array.isArray(oldVal) === Array.isArray(newVal)) {
        _generate(oldVal, newVal, patches, path + "/" + escapePathComponent(key), invertible);
      } else {
        if (oldVal !== newVal) {
          changed = true;
          if (invertible) {
            patches.push({ op: "test", path: path + "/" + escapePathComponent(key), value: _deepClone(oldVal) });
          }
          patches.push({ op: "replace", path: path + "/" + escapePathComponent(key), value: _deepClone(newVal) });
        }
      }
    } else if (Array.isArray(mirror) === Array.isArray(obj)) {
      if (invertible) {
        patches.push({ op: "test", path: path + "/" + escapePathComponent(key), value: _deepClone(oldVal) });
      }
      patches.push({ op: "remove", path: path + "/" + escapePathComponent(key) });
      deleted = true;
    } else {
      if (invertible) {
        patches.push({ op: "test", path, value: mirror });
      }
      patches.push({ op: "replace", path, value: obj });
      changed = true;
    }
  }
  if (!deleted && newKeys.length == oldKeys.length) {
    return;
  }
  for (var t = 0; t < newKeys.length; t++) {
    var key = newKeys[t];
    if (!hasOwnProperty(mirror, key) && obj[key] !== void 0) {
      patches.push({ op: "add", path: path + "/" + escapePathComponent(key), value: _deepClone(obj[key]) });
    }
  }
}
function compare(tree1, tree2, invertible) {
  if (invertible === void 0) {
    invertible = false;
  }
  var patches = [];
  _generate(tree1, tree2, patches, "", invertible);
  return patches;
}

// node_modules/fast-json-patch/index.mjs
var fast_json_patch_default = Object.assign({}, core_exports, duplex_exports, {
  JsonPatchError: PatchError,
  deepClone: _deepClone,
  escapePathComponent,
  unescapePathComponent
});

// js/live_json/live_json.js
var jsondiffpatch = __toModule(require_jsondiffpatch_umd());
function dispatchGlobalEvent(eventName) {
  let event;
  if (typeof window.CustomEvent === "function") {
    event = new window.CustomEvent(eventName, {});
  } else {
    event = document.createEvent("Event");
    event.initEvent(eventName, false, true);
  }
  window.dispatchEvent(event);
}
function createLiveJsonHooks() {
  return {
    LiveJSON: {
      mounted() {
        this.handleEvent("lj:patch", ({ doc_name, patch: patch2, method }) => {
          if (method == "rfc") {
            window[doc_name] = applyPatch(window[doc_name], patch2).newDocument;
          } else {
            window[doc_name] = jsondiffpatch.patch(window[doc_name], patch2);
          }
          dispatchGlobalEvent(doc_name + "_patched");
        });
        this.handleEvent("lj:init", ({ doc_name, data }) => {
          window[doc_name] = data;
          dispatchGlobalEvent(doc_name + "_initialized");
        });
        this.handleEvent("lj:assign", ({ doc_name, data }) => {
          window[doc_name] = data;
          dispatchGlobalEvent(doc_name + "_assigned");
        });
        this.handleEvent("lj:append", ({ doc_name, data }) => {
          if (!(doc_name in window)) {
            window[doc_name] = [];
          }
          window[doc_name].push(data);
          dispatchGlobalEvent(doc_name + "_appended");
        });
        this.handleEvent("lj:put", ({ doc_name, key, value }) => {
          if (!(doc_name in window)) {
            window[doc_name] = {};
          }
          window[doc_name].set(key, value);
          dispatchGlobalEvent(doc_name + "_put");
        });
        this.el.addEventListener("send_data", (e) => {
          this.pushEvent(e.detail.name, e.detail.data);
        });
      }
    }
  };
}
function sendData(handler_name, data_to_send, elid = "lj") {
  const ljEvent = new CustomEvent("send_data", {
    bubbles: true,
    detail: {
      name: handler_name,
      data: data_to_send
    }
  });
  document.getElementById(elid).dispatchEvent(ljEvent);
}
/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017-2021 Joachim Wester
 * MIT license
 */
/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017-2022 Joachim Wester
 * MIT licensed
 */
//# sourceMappingURL=live_json.cjs.js.map
