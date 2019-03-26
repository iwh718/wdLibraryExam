"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var ReactDOM = _interopRequireWildcard(_reactDom);

var _stores = require("./stores");

var _stores2 = _interopRequireDefault(_stores);

var _QuestionsList = require("./QuestionsList");

var _QuestionsList2 = _interopRequireDefault(_QuestionsList);

var _ScoresCard = require("./ScoresCard");

var _ScoresCard2 = _interopRequireDefault(_ScoresCard);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 主程序
 * @author IWH
 * QQ:2868579699
 * 文达学院图书馆入学引导小测试！
 */
var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.__beginExam = _this.__beginExam.bind(_this);
        _this.state = {
            initStatus: _stores2.default.componentsStatus
        };

        return _this;
    }
    //开始答题


    _createClass(App, [{
        key: "__beginExam",
        value: function __beginExam() {
            console.log('开始答题');
            //加一个回退栈
            window.history.pushState("", "", "");
            _stores2.default.componentsStatus = [false, true, false];
            this.setState({
                initStatus: _stores2.default.componentsStatus
            });
            this.__callback_over = this.__callback_over.bind(this);
            this.__callback_begin = this.__callback_begin.bind(this);
        }
    }, {
        key: "__callback_begin",
        value: function __callback_begin() {
            console.log('重新做题！！');
            _stores2.default.errorSum = [];
            _stores2.default.currentQuestionIndex = 0;
            _stores2.default.componentsStatus = [true, false, false];
            this.setState({
                initStatus: _stores2.default.componentsStatus
            });
        }
    }, {
        key: "__callback_over",
        value: function __callback_over() {
            console.log('开始结算！');
            _stores2.default.componentsStatus = [false, false, true];
            this.setState({
                initStatus: _stores2.default.componentsStatus
            });
        }
        //渲染首页

    }, {
        key: "__renderIndex",
        value: function __renderIndex() {
            return _react2.default.createElement(
                "div",
                { className: "index_box" },
                _react2.default.createElement(
                    "header",
                    { className: "index_header" },
                    _react2.default.createElement("img", { className: "index_header_logo", src: "./res/logo.png" }),
                    _react2.default.createElement(
                        "div",
                        { className: "index_header_text" },
                        _react2.default.createElement(
                            "h3",
                            null,
                            "\u6587\u8FBE\u56FE\u4E66\u9986\u77E5\u8BC6\u5C0F\u6D4B\u9A8C"
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "index_tips" },
                        _react2.default.createElement(
                            "p",
                            null,
                            "\u4E00\u517120\u9898\uFF0C\u6BCF\u98985\u5206\uFF01"
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "btn_exam", onClick: this.__beginExam },
                        "\u5F00\u59CB\u7B54\u9898\uFF01"
                    )
                ),
                _react2.default.createElement(
                    "footer",
                    { className: "index_footer" },
                    " ",
                    _react2.default.createElement(
                        "a",
                        { href: "http://wendaedu.com.cn/tsg/m/", target: "_blank", className: "index_footer_text" },
                        " \u6587\u8FBE\u5B66\u9662\u56FE\u4E66\u9986 "
                    ),
                    _react2.default.createElement(
                        "p",
                        null,
                        " IWH 2019.03.25|| V1.0"
                    ),
                    " "
                )
            );
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                this.state.initStatus[0] ? this.__renderIndex() : "",
                this.state.initStatus[1] ? _react2.default.createElement(_QuestionsList2.default, { callback_over: this.__callback_over }) : "",
                this.state.initStatus[2] ? _react2.default.createElement(_ScoresCard2.default, { callback_begin: this.__callback_begin }) : ""
            );
        }
    }]);

    return App;
}(_react2.default.Component);

//渲染程序


ReactDOM.render(_react2.default.createElement(App, null), document.getElementById('app'));