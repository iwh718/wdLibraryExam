"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _stores = require("./stores");

var _stores2 = _interopRequireDefault(_stores);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 统计结果组件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var ScoresCard = function (_React$Component) {
    _inherits(ScoresCard, _React$Component);

    function ScoresCard(props) {
        _classCallCheck(this, ScoresCard);

        var _this = _possibleConstructorReturn(this, (ScoresCard.__proto__ || Object.getPrototypeOf(ScoresCard)).call(this, props));

        _this.state = {
            rightSum: _stores2.default.errorSum,
            scores: 100 - _stores2.default.errorSum.length * 5,
            answer_box_flag: false,
            quesId: 0
        };

        return _this;
    }

    //渲染解析


    _createClass(ScoresCard, [{
        key: "__renderAnswerBox",
        value: function __renderAnswerBox() {
            var quesId = this.state.quesId;
            return React.createElement(
                "div",
                { className: "scores_box" },
                React.createElement(
                    "div",
                    { className: "answer_title" },
                    _stores2.default.questions[quesId]['q_title']
                ),
                React.createElement(
                    "div",
                    { className: "answer_r" },
                    "\u6B63\u786E\u7B54\u6848\uFF1A" + _stores2.default.questions[quesId][_stores2.default.questions[quesId]['R']]
                )
            );
        }

        //控制解析

    }, {
        key: "__answerController",
        value: function __answerController(quesId) {
            var tmp = this.state;
            tmp.answer_box_flag = true;
            tmp.quesId = quesId;
            this.setState(tmp);
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { className: "scores_box" },
                    React.createElement("img", { className: "index_header_logo ", src: "./res/logo.png", onClick: function onClick() {
                            $('.index_header_logo').addClass('rotate');
                        } }),
                    React.createElement(
                        "div",
                        { className: "scores_title" },
                        "\u4F60\u4E00\u5171\u5F97\u4E86\uFF1A",
                        this.state.scores,
                        "\u5206"
                    ),
                    React.createElement(
                        "div",
                        { className: "scores_tips" },
                        "\u4E0B\u9762\u662F\u4F60\u7684\u9519\u9898\uFF0C\u70B9\u51FB\u67E5\u770B\u7B54\u6848\uFF01"
                    ),
                    React.createElement(
                        "div",
                        { className: "errors_box row" },
                        this.state.rightSum.map(function (row, idx) {
                            return React.createElement(
                                "div",
                                { key: idx },
                                React.createElement(
                                    "div",
                                    { className: "errors_item col-xs-2 col-sm-2 col-md-2 col-lg-2" },
                                    React.createElement(
                                        "p",
                                        { onClick: function onClick() {
                                                console.log(_stores2.default.questions[row]);
                                                _this2.__answerController(row);
                                            } },
                                        " ",
                                        row + 1
                                    )
                                )
                            );
                        }, this)
                    ),
                    React.createElement(
                        "button",
                        { className: "btn btn-success over_btn center-block", onClick: function onClick() {
                                _this2.props.callback_begin();
                            } },
                        "\u91CD\u65B0\u6765\u8FC7\uFF01"
                    ),
                    React.createElement(
                        "a",
                        { href: "http://wendaedu.com.cn/tsg/m/", target: "_blank", className: "more_tips" },
                        "\u4E86\u89E3\u66F4\u591A"
                    )
                ),
                this.state.answer_box_flag ? this.__renderAnswerBox() : "",
                React.createElement(
                    "footer",
                    { className: "index_footer" },
                    " ",
                    React.createElement(
                        "a",
                        { href: "http://wendaedu.com.cn/tsg/m/", target: "_blank", className: "index_footer_text" },
                        " \u6587\u8FBE\u5B66\u9662\u56FE\u4E66\u9986 "
                    ),
                    React.createElement(
                        "p",
                        null,
                        " IWH 2019.03.25|| V1.0"
                    ),
                    " "
                )
            );
        }
    }]);

    return ScoresCard;
}(React.Component);

exports.default = ScoresCard;