'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _stores = require('./stores');

var _stores2 = _interopRequireDefault(_stores);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 统计结果组件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * 首页组件
 */
var Index = function (_React$Component) {
    _inherits(Index, _React$Component);

    function Index(props) {
        _classCallCheck(this, Index);

        var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

        Index.__beginExam = Index.__beginExam.bind(_this);

        return _this;
    }
    //开始答题


    _createClass(Index, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'index_box' },
                React.createElement(
                    'header',
                    { className: 'index_header' },
                    React.createElement('img', { className: 'index_header_logo', src: './res/logo.png' }),
                    React.createElement(
                        'div',
                        { className: 'index_header_text' },
                        React.createElement(
                            'h3',
                            null,
                            '\u6587\u8FBE\u56FE\u4E66\u9986\u77E5\u8BC6\u5C0F\u6D4B\u9A8C'
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'index_tips' },
                        React.createElement(
                            'p',
                            null,
                            '\u4E00\u517120\u9898\uFF0C\u6BCF\u98985\u5206\uFF01'
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'btn_exam', onClick: Index.__beginExam },
                        '\u5F00\u59CB\u7B54\u9898\uFF01'
                    )
                ),
                React.createElement(
                    'footer',
                    { className: 'index_footer' },
                    ' ',
                    React.createElement(
                        'p',
                        { className: 'index_footer_text' },
                        ' \u6587\u8FBE\u5B66\u9662\u56FE\u4E66\u9986 '
                    ),
                    React.createElement(
                        'p',
                        null,
                        ' IWH 2019.03.25|| V1.0'
                    ),
                    ' '
                )
            );
        }
    }], [{
        key: '__beginExam',
        value: function __beginExam() {
            console.log('开始答题');
            _stores2.default.componentsStatus = [false, true, false];
        }
    }]);

    return Index;
}(React.Component);

exports.default = Index;