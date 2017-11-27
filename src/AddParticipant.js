import React from 'react';


export class AddParticipant extends React.Component{
		  
render() {
          
		    return ( 
            
				<div className="formContainer">				 
					<form className="" >
					  
						<input 
						        required  
						        className={this.props.nameErrorProp} 
								type="text" value={this.props.newNameProp} 
								onChange={this.props.updateInputNameStateProp} 
								placeholder="Full Name"		
						/>
					  
						<input 
						        required  
								className={this.props.emailErrorProp} 
								type="email" 
								value={this.props.newEmailProp} 
								onChange={this.props.updateInputEmailStateProp} 
								placeholder="E-mail address"
						/>

						<input 
								required  
								className={this.props.phoneErrorProp} 
								type="text" value={this.props.newPhoneProp} 
								onChange={this.props.updateInputPhoneStateProp} 
								placeholder="Phone number" 
						/>

						<input 
								required  
								type="button" 
								onClick={this.props.addNewParticipantProp}  
								value="Add new"
						/>
					  
					</form>
				</div>
            );
        }
}

