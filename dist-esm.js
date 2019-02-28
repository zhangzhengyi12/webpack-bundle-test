// 这个一个非常巨大的IIFE 参数在这个函数的后面，由Webpack直接导出生成
;(function(modules) {
  var installedModules = {} // 该对象为模块缓存
  /**
   * @param {*} moduleId
   * 在老版的Webpack里其实是一个数字ID 等于后面参数的下标(老版里面moudules是一个数组)
   * 在webpack4.0里面变成了一个key 是该模块的路径 如 './index.js'
   */
  function __webpack_require__(moduleId) {
    // 如果该模块已经导出过了 直接返回缓存
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports
    }
    // 建立一个基本模块 准备进行安装
    var module = (installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    })
    
    // 每个模块都被封装成了一个函数
    // 这里就执行该函数 获取导出值
    // 请注意参数顺序
    // 这里可以思考一下 为什么当我们使用CommonJS模块导出的时候
    // module.exports = xx 有效 但直接 exports = xx无效
    // 原因其实就是因为 exports = xx只是给函数的实参重新赋值而已
    // 但module.exports是一个真正的外部应用 改变是有效的
    modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    )

    module.l = true
    // 一旦完成调用 该模块的导出值就会注射到module.exports上
    // 无论你在默认的exports上增加属性 还是直接改变module.exports的指向
    return module.exports
  }

  // 这里面都是一些工具函数 应该是提供给每个模块内部去使用

  __webpack_require__.m = modules

  __webpack_require__.c = installedModules

  __webpack_require__.d = function(exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      })
    }
  }
  __webpack_require__.r = function(exports) {
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      })
    }
    Object.defineProperty(exports, '__esModule', { value: true })
  }
  __webpack_require__.t = function(value, mode) {
    if (mode & 1) value = __webpack_require__(value)
    if (mode & 8) return value
    if (mode & 4 && typeof value === 'object' && value && value.__esModule)
      return value
    var ns = Object.create(null)
    __webpack_require__.r(ns)
    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    })
    if (mode & 2 && typeof value != 'string')
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key]
          }.bind(null, key)
        )
    return ns
  }

  __webpack_require__.n = function(module) {
    var getter =
      module && module.__esModule
        ? function getDefault() {
            return module['default']
          }
        : function getModuleExports() {
            return module
          }
    __webpack_require__.d(getter, 'a', getter)
    return getter
  }

  __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property)
  }

  __webpack_require__.p = '' // Load entry module and return exports

  return __webpack_require__((__webpack_require__.s = './index.js'))
})({
  './index.js': function(module, __webpack_exports__, __webpack_require__) {
    'use strict'
    // 可以看到 第一步其实就是使用工具函数，设定该模块是一个ESModule 
    // 如果是CommonJS模块的话，其实就不会帮你去改变参数的名字了,第二个参数就会是exports
    // ESModule 改参数名应该是为了避免冲突
    eval(
      '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mod_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mod.js */ "./mod.js");\n\n\nObject(_mod_js__WEBPACK_IMPORTED_MODULE_0__["default"])()\n\n\n//# sourceURL=webpack:///./index.js?'
    )
  },

  './mod.js': function(module, __webpack_exports__, __webpack_require__) {
    'use strict'
    eval(
      '__webpack_require__.r(__webpack_exports__);\nfunction sayHello() {\n  console.log(\'Hello\')\n}\n\n/* harmony default export */ __webpack_exports__["default"] = (sayHello);\n\n\n//# sourceURL=webpack:///./mod.js?'
    )
  }
})
