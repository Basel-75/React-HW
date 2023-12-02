import React, { Component } from "react";
import TeamMember from "./TeamMember";
import memberInfo from "./memberInfo";

class Team extends Component {
  constructor() {
    super();
    this.state = {
      memberinfo: memberInfo,
      members: [],
      counter: 0,
    };
    this.clickEvent = this.clickEvent.bind(this);
  }

  clickEvent() {
    if (this.state.counter < this.state.memberinfo.length) {
      this.state.members.push(this.state.memberinfo[this.state.counter]);
      this.setState((prevState) => {
        return { counter: prevState.counter + 1 };
      });
      this.newMembers = this.state.members.map((member) => {
        return (
          <TeamMember
            key={member.id}
            img={member.img}
            name={member.name}
            position={member.position}
            phone={member.phone}
            email={member.email}
            website={member.website}
          />
        );
      });
    }
  }

  render() {
    return (
      <div className="row">
        <div className="container">
          <button
            className="btn clickMeBtn btn-primary btn-lg btn-block"
            onClick={this.clickEvent}
          >
            انقر هنا لرؤية اعضاء الفريق
          </button>
        </div>
        {this.newMembers}
      </div>
    );
  }
}

export default Team;
