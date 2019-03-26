/**
 * 统计结果组件
 */

import * as React from "react";
import stores from './stores';


class ScoresCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rightSum: stores.errorSum,
            scores:100 - stores.errorSum.length * 5,
            answer_box_flag: false,
            quesId: 0
        };

    }

    //渲染解析
    __renderAnswerBox() {
        let quesId = this.state.quesId;
        return (

            <div className="scores_box">
                <div className="answer_title">{stores.questions[quesId]['q_title']}</div>
                <div className="answer_r">{`正确答案：${stores.questions[quesId][stores.questions[quesId]['R']]}`}</div>

            </div>
        )
    }

    //控制解析
    __answerController(quesId) {
        let tmp = this.state;
        tmp.answer_box_flag = true;
        tmp.quesId = quesId;
        this.setState(tmp)
    }

    render() {
        return (
            <div>
                <div className="scores_box">
                    <img className="index_header_logo " src="./res/logo.png" onClick={()=>{
                        $('.index_header_logo').addClass('rotate');
                    }}/>
                    <div className="scores_title">你一共得了：{this.state.scores}分</div>
                    <div className="scores_tips">下面是你的错题，点击查看答案！</div>
                    <div className="errors_box row">
                        {
                            this.state.rightSum.map((row, idx) => {
                                return (
                                    <div key={idx}>
                                        <div className="errors_item col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                            <p onClick={() => {
                                                console.log(stores.questions[row]);
                                                this.__answerController(row);

                                            }}> {
                                                row + 1
                                            }</p>
                                        </div>

                                    </div>
                                )
                            }, this)
                        }
                    </div>
                    <button className="btn btn-success over_btn center-block" onClick={() => {
                        this.props.callback_begin();
                    }}>重新来过！
                    </button>
                    <a href="http://wendaedu.com.cn/tsg/m/" target="_blank" className="more_tips">了解更多
                    </a>
                </div>
                {this.state.answer_box_flag ? this.__renderAnswerBox() : ""}
                <footer className="index_footer"> <a href="http://wendaedu.com.cn/tsg/m/" target="_blank" className="index_footer_text"> 文达学院图书馆 </a><p> IWH 2019.03.25|| V1.0</p> </footer>
            </div>
        )
    }
}

export default ScoresCard