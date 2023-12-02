import React, { Component } from 'react';
import TeamMember from './TeamMember';
import memberInfo from './memberInfo';
class Team extends Component {
	constructor() {
		super();
		this.state = { memberinfo: memberInfo };
	}

	mapping(x) {
		const members = x.map((member) => (
			<TeamMember
				key={member.id}
				img={member.img}
				name={member.name}
				position={member.position}
				phone={member.phone}
				email={member.email}
				website={member.website}
			/>
		));
		return members;
	}

	render() {
		return <div className="row">{this.mapping(this.state.memberinfo)}</div>;
	}

	/*
	render() {
		return (
			<div className="row">
				<button className="btn btn-primary btn-lg btn-block" onClick={this.clickEvent}>
					click me!
				</button>
				<TeamMember
					info={{
						img: '/images/01.jpg',
						name: 'Walter White',
						position: 'Bryan   Cranston',
						phone: '+49 12345678',
						email: 'walter@b-bad.com',
						website: 'walterwhite.com'
					}}
				/>

				<TeamMember
					info={{
						img: '/images/02.jpg',
						name: 'Jesse Pinkman',
						position: 'Aaron Paul',
						phone: '+49 12345678',
						email: 'jesse@b-bad.com',
						website: 'Jessepinkman.com'
					}}
				/>

				<TeamMember
					info={{
						img: '/images/03.jpg',
						name: 'Skyler White',
						position: 'Anna Gunn',
						phone: '+49 12345678',
						email: 'skyler@b-bad.com',
						website: 'Skylerwhite.com'
					}}
				/>

				<TeamMember
					info={{
						img: '/images/04.jpg',
						name: 'Gus Fring',
						position: 'Giancarlo Esposito',
						phone: '+49 12345678',
						email: 'gus@b-bad.com'
					}}
				/>
				<TeamMember
					info={{
						img: '/images/05.jpg',
						name: 'Saul Goodman',
						position: 'Bob Odenkirk',
						phone: '+49 12345678',
						email: 'saul@b-bad.com'
					}}
				/>
				<TeamMember
					info={{
						img: '/images/06.jpg',
						name: 'Hunk Schrader',
						position: 'Dean Norris',
						phone: '+49 12345678',
						email: 'hunk@b-bad.com'
					}}
				/>
			</div>
		);
	}
	*/
}

export default Team;
//<TeamMember info={{}} />
