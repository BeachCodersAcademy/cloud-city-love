import React from 'react';

export default class SpecificSearch extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-3">
            Height (in cm):
          </div>
          <div className="col-md-9">
            <div className="inputheight">
              <input id="from-height" type="number" placeholder="min" /> 
              <input id="to-height" type="number" placeholder="max" />
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-3">
            Weight (in kg):
          </div>
          <div className="col-md-9">
            <div className="inputweight">
              <input id="from-weight" type="number" placeholder="min" />
              <input id="to-weight" type="number" placeholder="max" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            Gender:
          </div>
          <div className="col-md-9">
            <select id="gender">
              <option value="any"></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="n/a">N/A</option>
              <option value="any">Any</option>
            </select>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-3">
            Hair Color:
          </div>
          <div className="col-md-9">
            <input type="text" id="hair-color" className="haircolor" />
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-3">
            Skin Color:
          </div>
          <div className="col-md-9">
            <input type="text" id="skin-color" className="skincolor" />
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-12">
            <div id="find-love-btn" className="btn btn-success form-control">
              Find Love!
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}