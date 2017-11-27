import React from 'react';


export class Participant extends React.Component {
	
    render() {			
      return (
		<tr id={this.props.myDataLine.id} > 					
					
					<td>{this.props.myDataLine.name}</td>
					<td>{this.props.myDataLine.email}</td>
					<td>{this.props.myDataLine.phone}</td>
					<td>
					        <span 
							      className="tableButtons btn glyphicon glyphicon-trash" 
							      id={this.props.myDataLine.id} 
								  type="button" 
								  onClick={this.props.deleteParticipantProp}
							></span>
							
						    <span className="tableButtons btn glyphicon glyphicon-pencil"></span>
					</td>
		</tr>
      );
    }
}

