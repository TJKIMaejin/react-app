import React, { Component, component } from 'react';
import './App.css';
import TOC from "./components/TOC";
import ReadContent from "./components/Readcontent";
import Subject from "./components/subject";
import Control from "./components/Control";
import CreateContent from "./components/Createcontent";
import Updatecontent from "./components/Updatecontent";



class App extends Component {

  constructor(props) {
    super(props); // 가장 먼저 실행하는 코드
    this.max_content_id = 3;
    this.state = {
      mode: 'create',

      selected_content_id: 2,

      Subject: { title: 'Web', sub: "World Wide Web" },

      welcome: { title: 'welcome', desc: "Hello, React" },

      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is for information' },
        { id: 2, title: 'CSS', desc: 'CSS is for design' },
        { id: 3, title: 'JavaScirpt', desc: 'JavaScript is for interactive' }


      ]
    }
  }

  getReadContent() {

    var i = 0;
    while (i < this.state.contents.length) {
      var data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
       
        break;
      }
     
      i = i + 1;
    }

  }
  getContent() {
    console.log('App render');
    var _title, _desc, _article = null
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc} ></ReadContent>
    } else if (this.state.mode === 'read') {

      var _content = this.getReadContent();
      _article = <ReadContent title={_title} desc={_desc} ></ReadContent>
    }
    // console.log('render', this)

    else if (this.state.mode === "create") {
      _article = <CreateContent onSubmit={function (_title, _desc) {
        //add content to this.state.contents
        console.log(_title, _desc)
        this.max_content_id = this.max_content_id + 1;
        // this.state.contents.push(   /* 기존 data에 추가하는 내요 따라서 퍼포먼스 측면에서 좋지 못하다*/
        // {id:this.max_content_id,
        // title:_title,   
        // desc:_desc
        // });

        var _contents= this.state.contents.concat(   /* 기존 data를 새롭게 만들어주는 내용 */
          {id:this.max_content_id,
          title:_title,
          desc:_desc
          });
        this.setState({
          contents:_contents
        });

        var newContents = Array.from(this.state.contents);
        newContents.push({
          id: this.max_content_id,
          title: _title,
          desc: _desc
        });
        this.setState({
          contents: newContents
        });
      }.bind(this)} ></CreateContent>
    }

    else if (this.state.mode === "update") {
      var _contents = this.getReadContent();
      _article = <Updatecontent data={_content} onSubmit={
        function (_id, _title, _desc) {

          console.log(_title, _desc)

          var _contents = Array.from(this.state.contents);
          var i = 0;

          while (i < _contents.length) {
            if (_contents[i].id === _id) {

              _contents[i] = { id: _id, title: _title, desc: _desc };

              break;
            }
            i = i + 1;
          }
          this.setState({
            contents: _contents
          });
        }.bind(this)} ></Updatecontent>
    }

    return _article;

  }
  render() {





    return (
      <div className="App">
        {<Subject

          title={this.state.Subject.title}
          sub={this.state.Subject.sub}
          onChangePage={function () {

            this.setState({ mode: 'welcome' })

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

        <TOC

          onChangePage={function (id) {

            this.setState({
              mode: 'read',
              selected_content_id: Number(id)
            });
            alert('hi');


          }.bind(this)} data={this.state.contents}></TOC>
        <Control onChangeMode={function (_mode) {

          this.setState({
            mode: _mode
          })

        }.bind(this)}></Control>


        {this.getContent()}


      </div>
    );
  }
}

export default App;
