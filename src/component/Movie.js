import React, { Component } from 'react'
import m1 from './m1.jpg';
import m2 from './m2.jpg';
import m3 from './m3.jpg';

export class Movie extends Component {
    render() {
        return (
            <>
            <div className="container my-4">
              <div className="row">
            <div className="col-md-4">
              <div className="info">
                <div className="icon icon-rose">
                  <img src={m1} alt="img" className="material-icons"/>
                </div>
                <h4 className="info-title">Huge Number of Components</h4>
                <p>Every element that you need in a product comes built in as a component. All components fit perfectly with each other and can take variations in colour.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="info">
                <div className="icon icon-info">
                  <img src={m2} alt="jj" className="material-icons"/>
                </div>
                <h4 className="info-title">Multi-Purpose Sections</h4>
                <p>Putting together a page has never been easier than matching together sections. From team presentation to pricing options, you can easily customise and built your pages.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="info">
                <div className="icon icon-success">
                  <img src={m3} alt="aaa" className="material-icons"/>
                </div>
                <h4 className="info-title">Example Pages</h4>
                <p>If you want to get inspiration or just show something directly 
                    to your clients, you can jump start your development with our pre-built example pages.</p>
              </div>
            </div>
          </div>  
          </div>
            </>
        )
    }
}

export default Movie
