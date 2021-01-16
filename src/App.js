import React, {Component, component} from 'react';
import './App.css';
import TOC from "./components/TOC";
import Content from "./components/content";
import Subject from "./components/subject";




 


class App extends Component{

  constructor(props){
    super(props); // 가장 먼저 실행하는 코드
    this.state ={
      mode:'welcome',
      Subject:{title:'Web', sub:"World Wide Web"},
      welcome:{title:'welcome',desc:"Hello, React"},
      contents:[
      {id:1,title:'HTML',desc:'HTML is for' },
      {id:2,title:'CSS',desc:'CSS is for design' },
      {id:3,title:'JavaScirpt',desc:'JavaScript is for interactive' }
    ]
    }
  }
  render(){

    console.log('App render');
    var _title, _desc =null
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }

    else if(this.state.mode === 'read'){

      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return(
      <div className="App">
        <Subject 
        
        title = {this.state.Subject.title} 
        sub={this.state.Subject.sub}>

        </Subject>
        
        <TOC data={this.state.contents}></TOC>

        <Content title={_title} ></Content> {_desc}
      </div>
   ); 
  }
}

export default App;
