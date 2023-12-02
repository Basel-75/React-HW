import React, { Component } from "react";

class TeamMember extends Component {
  render() {
    return (
      <div className="col-md-4 col-sm-6 cards">
        <div
          className="card"
          style={{ borderColor: this.props.website ? "white" : "red" }}
        >
          <div className="card-header">
            <img
              style={{ maxWidth: "100%" }}
              src={this.props.img}
              alt={this.props.name}
            />
          </div>
          <div className="card-body">
            <h2>{this.props.name}</h2>
            <h5>{this.props.name}</h5>
            <div>{this.props.phone}</div>
            <div>{this.props.email}</div>
            <div>{this.props.website}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default TeamMember;

/* 

import React, { Component } from 'react';

class TeamMember extends Component {
	render() {
		return (
			<div className="col-md-4 col-sm-6">
				<div className="card">
					<div className="card-header">
						<img style={{ maxWidth: '100%' }} src={this.props.info.img} />
					</div>
					<div className="card-body" style={{ backgroundColor: this.props.info.website ? 'white' : 'black' }}>
						<h2>{this.props.info.name}</h2>
						<h5>{this.props.info.name}</h5>
						<div>{this.props.info.phone}</div>
						<div>{this.props.info.email}</div>
						<div>{this.props.info.website}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default TeamMember;

*/
