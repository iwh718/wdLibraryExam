/**
 * 统计结果组件
 */
import * as React from "react";
import stores from './stores';


class QuestionsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            questions: stores.questions,
            currentQuestionIndex:stores.currentQuestionIndex,
            cur: stores.questions[stores.currentQuestionIndex]
        };
        this.__checkSelect = this.__checkSelect.bind(this);



    }

    __checkSelect(e) {

        console.log(e.target.value);
        if(e.target.value !== this.state.cur['R']){
            console.log('回答错误！');
            stores.errorSum.push(this.state.currentQuestionIndex);
            console.log('正确答案为：'+ this.state.cur['R'])
        }
        console.log('下一题目');
        ++stores.currentQuestionIndex;
        /** stores.questions.length -1 **/
        if(stores.currentQuestionIndex > stores.questions.length -1 ){
            console.log('题目做完了！');
            this.props.callback_over();
            alert('你已完成所有的题目！');

            return
        }

        let tmp = {
            errorSum:stores.errorSum,
            currentQuestionIndex:stores.currentQuestionIndex,
            questions: stores.questions,
            cur: stores.questions[stores.currentQuestionIndex]
        };

        this.setState(tmp,()=>{
            //清楚单选，给用户留下缓冲
            setTimeout(()=>{
               $('input[type=radio][name="optionsRadios"]:checked').prop("checked", false);
            },200);

        });
    }


    render() {

        return (
            <div className="ques_box">
                <div className="ques_title">{`第${this.state.currentQuestionIndex+1}题：`}{this.state.cur['q_title']}</div>
                <div className="ques_select">
                    <div className="radio">
                        <label>
                            <input  type="radio" onChange={this.__checkSelect} name="optionsRadios"
                                   defaultValue="A"/> {this.state.cur['A']}
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input  onChange={this.__checkSelect} type="radio" name="optionsRadios"
                                   defaultValue="B"/>{this.state.cur['B']}
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input  onChange={this.__checkSelect} type="radio" name="optionsRadios"
                                   defaultValue="C"/>{this.state.cur['C']}
                        </label>
                    </div>
                </div>

            </div>
        )
    }
}

export default QuestionsList