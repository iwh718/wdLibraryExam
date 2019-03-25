'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _stores = require('./stores');

var _stores2 = _interopRequireDefault(_stores);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 统计结果组件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var QuestionsList = function (_React$Component) {
    _inherits(QuestionsList, _React$Component);

    function QuestionsList(props) {
        _classCallCheck(this, QuestionsList);

        var _this = _possibleConstructorReturn(this, (QuestionsList.__proto__ || Object.getPrototypeOf(QuestionsList)).call(this, props));

        _this.state = {
            questions: _stores2.default.questions,
            currentQuestionIndex: _stores2.default.currentQuestionIndex,
            cur: _stores2.default.questions[_stores2.default.currentQuestionIndex]
        };
        _this.__checkSelect = _this.__checkSelect.bind(_this);

        return _this;
    }

    _createClass(QuestionsList, [{
        key: '__checkSelect',
        value: function __checkSelect(e) {

            console.log(e.target.value);
            if (e.target.value !== this.state.cur['R']) {
                console.log('回答错误！');
                console.log('正确答案为：' + this.state.cur['R']);
            } else {
                console.log('回答正确！');
                _stores2.default.rightSum.push(this.state.cur['id']);
            }
            console.log('下一题目');
            ++_stores2.default.currentQuestionIndex;
            if (_stores2.default.currentQuestionIndex > _stores2.default.questions.length - 1) {
                console.log('题目做完了！');
                this.props.callback_over();
                alert('你已完成所有的题目！');

                return;
            }

            var tmp = {
                rightSum: _stores2.default.rightSum,
                currentQuestionIndex: _stores2.default.currentQuestionIndex,
                questions: _stores2.default.questions,
                cur: _stores2.default.questions[_stores2.default.currentQuestionIndex]
            };

            this.setState(tmp, function () {
                //清楚单选，给用户留下缓冲
                setTimeout(function () {
                    (0, _jquery2.default)('input[type=radio][name="optionsRadios"]:checked').prop("checked", false);
                }, 200);
            });
        }
    }, {
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                { className: 'ques_box' },
                React.createElement(
                    'div',
                    { className: 'ques_title' },
                    '\u7B2C' + (this.state.currentQuestionIndex + 1) + '\u9898\uFF1A',
                    this.state.cur['q_title']
                ),
                React.createElement(
                    'div',
                    { className: 'ques_select' },
                    React.createElement(
                        'div',
                        { className: 'radio' },
                        React.createElement(
                            'label',
                            null,
                            React.createElement('input', { type: 'radio', onChange: this.__checkSelect, name: 'optionsRadios',
                                defaultValue: 'A' }),
                            ' ',
                            this.state.cur['A']
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'radio' },
                        React.createElement(
                            'label',
                            null,
                            React.createElement('input', { onChange: this.__checkSelect, type: 'radio', name: 'optionsRadios',
                                defaultValue: 'B' }),
                            this.state.cur['B']
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'radio' },
                        React.createElement(
                            'label',
                            null,
                            React.createElement('input', { onChange: this.__checkSelect, type: 'radio', name: 'optionsRadios',
                                defaultValue: 'C' }),
                            this.state.cur['C']
                        )
                    )
                )
            );
        }
    }]);

    return QuestionsList;
}(React.Component);

exports.default = QuestionsList;