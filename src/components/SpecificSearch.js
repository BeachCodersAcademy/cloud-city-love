import React from 'react';

export default class SpecificSearch extends React.Component {
  render() {
    return (
      <div class="col-md-5">
        <div class="row">
          <div class="col-md-3">
            Height (in cm):
          </div>
          <div class="col-md-9">
            <div class="inputheight">
              <input id="from-height" type="number" placeholder="min"> <input id="to-height" type="number" placeholder="max">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            Weight (in kg):
          </div>
          <div class="col-md-9">
            <div class="inputweight">
              <input id="from-weight" type="number" placeholder="min"> <input id="to-weight" type="number" placeholder="max">
            </div>
          </div>
        </div>
        <!-- <div class="row">
        <div class="col-md-3">
        Age:
      </div>
      <div class="col-md-9">
      <input id="from-age" type="number"> to <input id="to-age" type="number">
    </div>
  </div> -->
  <div class="row">
    <div class="col-md-3">
      Gender:
    </div>
    <div class="col-md-9">
      <select id="gender">
        <option value="any"></option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="n/a">N/A</option>
        <option value="any">Any</option>
      </select>
    </div>
  </div>
  <div class="row">
    <div class="col-md-3">
      Hair Color:
    </div>
    <div class="col-md-9">
      <input type="text" id="hair-color" class="haircolor">
    </div>
  </div>
  <div class="row">
    <div class="col-md-3">
      Skin Color:
    </div>
    <div class="col-md-9">
      <input type="text" id="skin-color" class="skincolor">
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <div id="find-love-btn" class="btn btn-success form-control">
        Find Love!
      </div>
    </div>
  </div>
    );
  }
}