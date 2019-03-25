import React from "react";
import * as ReactDOM from "react-dom";
import stores from "./stores";
import QuestionsList from "./QuestionsList";
import ScoresCard from "./ScoresCard";

/**
 * 主程序
 */
class App extends React.Component{
    constructor(props){
        super(props);
        this.__beginExam = this.__beginExam.bind(this);
        this.state = {
            initStatus:stores.componentsStatus
        }

    }
    //开始答题
     __beginExam(){
        console.log('开始答题');
        //加一个回退栈
        window.history.pushState("","","");
        stores.componentsStatus = [false,true,false];
        this.setState({
            initStatus:stores.componentsStatus
        });
        this.__callback_over = this.__callback_over.bind(this);
        this.__callback_begin = this.__callback_begin.bind(this);



    }
    __callback_begin(){
        console.log('重新做题！！');
        stores.rightSum = [];
        stores.currentQuestionIndex = 0;
        stores.componentsStatus = [true,false,false];
        this.setState({
            initStatus:stores.componentsStatus
        });
    }
    __callback_over(){
        console.log('开始结算！');
        stores.componentsStatus = [false,false,true];
        this.setState({
            initStatus:stores.componentsStatus
        });
    }
    //渲染首页
    __renderIndex(){
        return(
            <div className="index_box">
                <header className="index_header">
                    <img className="index_header_logo" src="./res/logo.png"/>
                    <div className="index_header_text"><h3>文达图书馆知识小测验</h3></div>
                    <div className="index_tips"><p>一共20题，每题5分！</p></div>
                    <div className="btn_exam" onClick={this.__beginExam}>开始答题！</div>
                </header>

                <footer className="index_footer"> <p className="index_footer_text"> 文达学院图书馆 </p><p> IWH 2019.03.25|| V1.0</p> </footer>
            </div>
        )
    }
    render(){
        return(
           <div>
               {this.state.initStatus[0] ? this.__renderIndex() :""}
               {this.state.initStatus[1] ? <QuestionsList callback_over = {this.__callback_over}  /> :""}
               {this.state.initStatus[2] ? <ScoresCard callback_begin={this.__callback_begin}/> : ""}
           </div>
        )
    }
}


//渲染程序
ReactDOM.render(<App/>,document.getElementById('app'));