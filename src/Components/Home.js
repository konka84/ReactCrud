import React, { Component } from 'react';
import './Home.css'
class  Home extends Component {

    constructor(props) {
      super(props);
      this.state = {
        act: 0,
       index: '',
        datas: []
      }
    }
  
   
  
    formSubmit = (e) => {
      e.preventDefault();
    
  
      const datas = this.state.datas;
      const name = this.refs.name.value;
      const mail = this.refs.mail.value;
      const ToDo = this.refs.ToDo.value;
  
  
      if (this.state.act === 0) {   //new
        const data = {
          name, mail, ToDo
        }
        datas.push(data);
      } 
      else {                      //update
        const index = this.state.index;
        datas[index].name = name;
        datas[index].mail = mail;
        datas[index].ToDo = ToDo;
      }
  
      this.setState({
        datas: datas,
        act: 0
      });
  
      this.refs.myForm.reset();
      this.refs.name.focus();
    }
    
    
  
    formRemove = (i) => {
     const formRemoveFilter=(k,j)=>{
        if (i==j) {return false;}
        return true;
       }
        
     
     const datas = this.state.datas;
     
    
       this.setState({
        datas: datas.filter(formRemoveFilter)
        
     });
  
      this.ref.myForm.reset();
      this.ref.name.focus();
    }
  
  
    formEdit = (i) => {
      const data = this.state.datas[i];
      this.ref.name.value = data.name;
      this.ref.mail.value = data.mail;
      this.ref.ToDo.value = data.ToDo;
  
  
      this.setState({
        act: 1,
        index: i
      });
  
      this.ref.name.focus();
    }
  
    render() {
      const datas = this.state.datas;
      return (
        <div className="Home">
          <h2>{this.state.title}</h2>
          <form ref="myForm" className="myForm" onSubmit={(e) => this.formSubmit(e)} che >
            <input required type="text" ref="name" placeholder="Name" className="formField" />
            <input required type="email" ref="mail" placeholder="E-mail" className="formField" />
            <input required  type="text" ref="ToDo" placeholder="To-Do" className="formField" />
            <button type="submit"  className="myButton">Submit </button>
          </form>
          <pre>
            {datas.map((data, i) =>
              <div key={i} className="myList" >
                <div style={{ display: 'flex', flexFlow: "row", justifyContent: "space-between" }}>
                  <div class="user" >
                  <b> User{i +1}</b><br/>Name:{data.name}<br/>Email:<a href={"mailto:"+data.mail}> {data.mail}</a><br/>Task:{data.ToDo}
                  </div>
                  <div className="myListButtonDesign" style={{float : 'right'}}>
                    <button onClick={() => this.formRemove(i)} className="myListButton"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                    </svg></button>
                    <button onClick={() => this.formEdit(i)} className="myListButton"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg> </button>
                  </div>
                </div>
              </div>
            )}
          </pre>
        </div>
      );
    }
  }
  export default Home;