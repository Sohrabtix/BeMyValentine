import React from "react"; 
import './Valentine.css';
import heart from './heart.png';
import emailjs from '@emailjs/browser';


class Valentine extends React.Component{
    constructor(props){
        super(props);
        this.state={
            path: '/#/No'
        };
        this.handleYes = this.handleChangeButton.bind(this,'#/Yes');
        this.handleNo = this.handleChangeButton.bind(this,'#/No');
        this.handleMaybe = this.handleChangeButton.bind(this,'#/Maybe');
    }


    handleChangeButton(value){
        this.setState({
            path:value
        });
    }

    render(){
        const redirect = () => {
            // WITH SWITCH STATEMENT
            window.location.href=this.state.path;
        }
            var templateParam ={
                name: 'TESTING',
                notes: 'TEST'
            }
            const sendEmail = (e) => {
                console.log('HERE');
                e.preventDefault();
                emailjs.send("service_dszp3au","template_ecbm417",{
                    name: "Lisa",
                    notes: "I Clicked "+this.state.path,
                    },'SMNC4A85o1F1q2Yy-')
                .then(function(response) {
                   console.log('SUCCESS!', response.status, response.text);
                }, function(error) {
                   console.log('FAILED...', error);
                });
                window.location.href=this.state.path;
        }
        return (
            <div className="App">
              <header className="App-header">
                <div className='checkBox'>
                  <h1>Willst du mein Valentin sein?</h1>
                        <input type="radio" name='valentine' onClick={this.handleYes} id="y"/><label htmlFor="y">Ja ♥</label><br/>
                        <input type="radio" name='valentine' onClick={this.handleNo} id="n"/><label htmlFor="n">Nein</label><br/>
                        <input type="radio" name='valentine' onClick={this.handleMaybe} id="m"/><label htmlFor="m">Vielleicht (:</label><br/>
                        <div className='container'>
                            <img className='button' id='heart' src={heart} alt="test"/>
                            <button className='button' onClick={sendEmail} type="submit">Klick</button>
                        </div>
                </div>
              </header>
            </div>
          );
    }
    
}
export default Valentine;