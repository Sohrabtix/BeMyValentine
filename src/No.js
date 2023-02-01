
import React from 'react';

import madCat from './MadCat.jpg'
class No extends React.Component{

    render(){
        return (
            <div className="App">
              <header className="App-header">
                <div className='checkBox'>
                  <h1>:/</h1>
                  <h3>Du bist blöd</h3>
                  <p>Dann halt nicht</p>
                  <img src={madCat}></img>
                </div>
              </header>
            </div>);
    }
}
export default No