"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _GreenComp = _interopRequireDefault(require("./GreenComp"));
var _ImgComp = _interopRequireDefault(require("./ImgComp1"));
var _ImgComp2 = _interopRequireDefault(require("./ImgComp2"));
var _OrangeComp = _interopRequireDefault(require("./OrangeComp"));
var _GrayComp = _interopRequireDefault(require("./GrayComp"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
class AboutComp extends _react.Component {
  render() {
    let content = null;
    let {
      type,
      title,
      desc
    } = this.props;
    if (type === "green") {
      content = /*#__PURE__*/_react.default.createElement(_GreenComp.default, null);
    } else if (type === "orange") {
      content = /*#__PURE__*/_react.default.createElement(_OrangeComp.default, {
        title: title,
        desc: desc
      });
    } else if (type === "gray") {
      content = /*#__PURE__*/_react.default.createElement(_GrayComp.default, {
        title: title,
        desc: desc
      });
    } else if (type === "img1") {
      content = /*#__PURE__*/_react.default.createElement(_ImgComp.default, null);
    } else if (type === "img2") {
      content = /*#__PURE__*/_react.default.createElement(_ImgComp2.default, null);
    }
    return /*#__PURE__*/_react.default.createElement("div", null, content);
  }
}
var _default = exports.default = AboutComp;