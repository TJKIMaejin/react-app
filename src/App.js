import React, { Component, component } from 'react';
import './App.css';
import TOC from "./components/TOC";
import Content from "./components/content";
import Subject from "./components/subject";







class App extends Component {

  constructor(props) {
    super(props); // 가장 먼저 실행하는 코드
    this.state = {
      mode: 'read',
      Subject: { title: 'Web', sub: "World Wide Web" },
      welcome: { title: 'welcome', desc: "Hello, React" },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is for information' },
        { id: 2, title: 'CSS', desc: 'CSS is for design' },
        { id: 3, title: 'JavaScirpt', desc: 'JavaScript is for interactive' }
      ]
    }
  }
  render() {

    console.log('App render');
    var _title, _desc = null
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {

      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    console.log('render', this)
    return (
      <div className="App">
        {<Subject

          title={this.state.Subject.title} 
          sub={this.state.Subject.sub}
          onChangePage = {function () { 

            this.setState({mode:'welcome'})

            alert('hi');
          }.bind(this)}
          >
          


        </Subject>}

        {/* <header>
          <h1><a href="/" onClick={function (e) {
            alert('hi')
            console.log(e);
            // debugger;
            e.preventDefault();

            // this.state.mode='welcome';

            this.setState({
              mode:'welcome'
              
            });

            

          }.bind(this)}>{this.state.Subject.title}</a></h1>
          {this.state.Subject.sub}
        </header> */}

        <TOC data={this.state.contents}></TOC>

        <Content title={_title} ></Content> {_desc}
      </div>
    );
  }
}

export default App;
