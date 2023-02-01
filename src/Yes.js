import React from 'react';


import './yes.css';
import pic1 from './yesPic/IMG_0110.JPG'
import pic2 from './yesPic/IMG_0209.JPG'
import pic4 from './yesPic/IMG_8219.jpg'
import pic5 from './yesPic/IMG_8614.jpg'


class Yes extends React.Component{

    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="App">
              <header className="App-header">
                <div className='checkBox'>
                  <h1>Yayyyyyyy!!! </h1>
                  <h3>Hier ein paar Bilder von uns 😅</h3>
                  <p>btw. Ich bräuchte mal deine Adresse ;)</p>
                </div>
                <div>
                    <div id="n1">
                        <p>Ein wunderschöhn schreckliches Foto</p>
                        <img id="n1" src={pic1}/>     
                    </div>
                    <div id="n2">
                        <p>Ein üblicher Filmeabend mit dir</p>
                        <img id="n2" src={pic2}/>     
                    </div>
                    <div id="n3">
                        <p>Die Weihnachtszeit ist die schöhnste Zeit.(ohne die Kälte)</p>
                        <img id="n3" src={pic4}/>     
                    </div>
                    <div id="n4">
                        <p>Einen schönen und schreckhaften Start ins das neue Jahr</p>
                        <img id="n4" src={pic5}/>     
                    </div>
                </div>
              </header>
            </div>);
    }
}
export default Yes