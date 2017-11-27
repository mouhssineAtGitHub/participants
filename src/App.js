import React from 'react';
import ReactDOM from 'react-dom';

import {MyHeaderContent} from './MyHeaderContent.js';
import {AddParticipant} from './AddParticipant.js';
import {Participant} from './Participant.js';

import './App.css';

class App extends React.Component {
   constructor() {
      
	super();
		
    this.state = {
		 
		 newId:'', newName:'', newEmail:'', newPhone:'',
		 
		 nameError:'', emailError:'', phoneError:'',
		 
         sortById:'up', sortByName:'up', sortByEmail:'up', sortByPhone:'up',
		 
		 participantsIdIncrement: 20,
		 
		 messageErrors:'',
		 
         participantsData:
		 [
            {id:1, name:'Aparticipant1', email:'participant1@email.com', phone:'0405678906'},
            {id:2, name:'Bparticipant2', email:'participant2@email.com', phone:'0405678906'},
            {id:3, name:'Cparticipant3', email:'participant3@email.com', phone:'0405678906'},
            {id:4, name:'Dparticipant4', email:'participant4@email.com', phone:'0405678906'},
            {id:5, name:'Eparticipant5', email:'participant5@email.com', phone:'0405678906'},
            {id:6, name:'Fparticipant6', email:'participant6@email.com', phone:'0405678906'},
            {id:7, name:'Gparticipant7', email:'participant7@email.com', phone:'0405678906'},
            {id:8, name:'Hparticipant8', email:'participant8@email.com', phone:'0405678906'},
            {id:9, name:'Iparticipant9', email:'participant9@email.com', phone:'0405678906'},
            
			{id:10, name:'Jparticipant10', email:'participant10@email.com', phone:'0405678906'},
			{id:11, name:'Kparticipant11', email:'participant11@email.com', phone:'0405678906'},
			{id:12, name:'Lparticipant12', email:'participant12@email.com', phone:'0405678906'},
			{id:13, name:'Mparticipant13', email:'participant13@email.com', phone:'0405678906'},
			{id:14, name:'Nparticipant14', email:'participant14@email.com', phone:'0405678906'},
			{id:15, name:'Oparticipant15', email:'participant15@email.com', phone:'0405678906'},
			{id:16, name:'Pparticipant16', email:'participant16@email.com', phone:'0405678906'},
			{id:17, name:'Rparticipant17', email:'participant17@email.com', phone:'0405678906'},
			{id:18, name:'Sparticipant18', email:'participant18@email.com', phone:'0405678906'},
			{id:19, name:'Tparticipant19', email:'participant19@email.com', phone:'0405678906'},
			{id:20, name:'Vparticipant20', email:'participant20@email.com', phone:'0405678906'}
         ]
		 

      }
	  
	 /* Binding functions */ 	 
	this.addNewParticipant = this.addNewParticipant.bind(this);    
	this.deleteParticipant = this.deleteParticipant.bind(this);		 
    this.sortParticipantsByName = this.sortParticipantsByName.bind(this);
	this.sortParticipantsByEmail = this.sortParticipantsByEmail.bind(this);
	this.sortParticipantsByPhone = this.sortParticipantsByPhone.bind(this);
	this.updateInputNameState = this.updateInputNameState.bind(this);
    this.updateInputEmailState = this.updateInputEmailState.bind(this); 
    this.updateInputPhoneState = this.updateInputPhoneState.bind(this);
   }
   
  
	/* Sort participants by name */
    sortParticipantsByName(){	   
	   var mySort = this.state.sortByName;
	   var myArr = this.state.participantsData;
	    
		if(mySort == 'up'){
			 myArr.sort(function(a,b) {return b.name.localeCompare(a.name);});
			 mySort='down';
		}
		else
		{
			myArr.sort(function(a,b) {return a.name.localeCompare(b.name);});
			mySort='up';
		}
		
	   
	   this.setState( {sortByName: mySort} );
	   this.setState( {participantsData: myArr} );
    }

	/* Sort participants by email */	
    sortParticipantsByEmail(){	   
	   var mySort= this.state.sortByEmail;
	   var myArr=this.state.participantsData;
	    
		if(mySort == 'up'){
			 myArr.sort(function(a,b) {return b.email.localeCompare(a.email);});
			 mySort='down';
		}
		else
		{
			myArr.sort(function(a,b) {return a.email.localeCompare(b.email);});
			mySort='up';
		}
		
	   
	   this.setState( {sortByEmail: mySort} );
	   this.setState( {participantsData: myArr} );
    }
	
	/* Sort participants by phone */
    sortParticipantsByPhone(){	   
	   var mySort= this.state.sortByPhone;
	   var myArr=this.state.participantsData;
	    
		if(mySort == 'up'){
			 myArr.sort(function(a,b) {return b.phone.localeCompare(a.phone);});
			 mySort='down';
		}
		else
		{
			myArr.sort(function(a,b) {return a.phone.localeCompare(b.phone);});
			mySort='up';
		}
		
	   
	   this.setState( {sortByPhone: mySort} );
	   this.setState( {participantsData: myArr} );
    }
	
   
    /* Delete a participant */
    deleteParticipant(ev){
	   
	    if( (ev.currentTarget.id) ){
			var index = -1;	
            var clength = this.state.participantsData.length;
      		for( var i = 0; i < clength; i++ ) {
      			if( this.state.participantsData[i].id == ev.currentTarget.id ) {
      				index = i;
      				break;
      			}
      		}
      		this.state.participantsData.splice( index, 1 );	
      		this.setState( { participantsData: this.state.participantsData } );
	        alert(ev.currentTarget.id + ': Participant deleted');
			
		}
		else
		{
			alert("Element not deleted. Try again");
			
		} 
	      
    }
   /* Find if email exsists in participant list */
   searchEmailParticipant(s_email){
	    var found = 0
	    
		if( (s_email && s_email != '') ){
			;	
            var clength = this.state.participantsData.length;
      		for( var i = 0; i < clength; i++ ) {
      			if( this.state.participantsData[i].email == s_email ) {
      				found = 1;
      				break;
      			}
      		}
      		
			
		}
		return found;
	      
    }
   
   updateInputNameState(e) {
      this.setState({newName: e.currentTarget.value});
   }
   
   updateInputEmailState(e) {
	  this.setState({newEmail: e.currentTarget.value});
   }
   
   updateInputPhoneState(e) {
	  this.setState({newPhone: e.currentTarget.value});
   }
   /* Add a new participant */ 
   addNewParticipant() {
	    		
	    var validForm=0;
		
		/*RegEx for name: it should be at least 2 letters or more and maximum 60 letters*/
	    var nameValid = /^([a-zA-Z\s]){2,60}$/.test(this.state.newName);
		
		/*RegEx to check email format*/
	    var emailValid = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(this.state.newEmail);
		
		/*RegEx to check phone format which must be ten numbers*/
	    var phoneValid = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test(this.state.newPhone);
		
		/*Check if email exists or not 0=notExists and 1=Exists*/
		var isEmailExist = this.searchEmailParticipant(this.state.newEmail);

	    if( this.state.newName=='' || !nameValid  )
	    {
			this.setState({ nameError: 'myError' });
			validForm+= 1;			
		}
        else
		{
			this.setState({ nameError: '' });
		}
		

		if( this.state.newEmail=='' || !emailValid || isEmailExist==1 ){
			
			this.setState({ emailError: 'myError' });
			validForm+= 1;			
			
		}
        else
		{
			this.setState({ emailError: '' });
		}

		

		if(this.state.newPhone=='' || !phoneValid ){
			
			this.setState({ phoneError: 'myError' });
			validForm+= 1;			
			
		}
        else
		{
			this.setState({ phoneError: '' });
		}


	    if(validForm == 0){
			
			var myArray = this.state.participantsData.slice();
		
		    /*
				Make new ID for the new participant. 
				by incrmementing state variable participantsIdIncrement.
			*/
		    this.setState({ participantsIdIncrement: this.state.participantsIdIncrement++ })
		    
			var val0 = this.state.participantsIdIncrement;		    
			var val1 = this.state.newName;
	        var val2 = this.state.newEmail;
	        var val3 = this.state.newPhone;
			
			myArray.unshift( { id:val0, name:val1, email:val2, phone:val3 } );
        
		    this.setState({ participantsIdIncrement: val0 });
		    
			this.setState({ participantsData: myArray });
        
		    this.setState({ newName: '' }); this.setState({ nameError: '' });
		    this.setState({ newEmail: '' });this.setState({ emailError: '' });
		    this.setState({ newPhone: '' });this.setState({ phoneError: '' });
            
			alert('New participant added');
            
		}       					
        
    }
   
   
	
   render() {

      return (
	  
       <div className="row">
	
	    <div className="col-sm-1"></div>
		  
	    <div className="col-sm-10">
		  
	    <div className="mainBody">
						
		<MyHeaderContent/* MyHeaderContent Component */ /> 					
		
		<div className="myBody">				
		<br />	
		
		<div className="listTitle">List of particpants</div>
		
		
    	<AddParticipant /* AddParticipant Component */
			
			addNewParticipantProp = {this.addNewParticipant}
			
			updateInputNameStateProp = {this.updateInputNameState}
			updateInputEmailStateProp = {this.updateInputEmailState}
			updateInputPhoneStateProp = {this.updateInputPhoneState}
			
			newNameProp  = {this.state.newName} 
			newEmailProp = {this.state.newEmail} 
			newPhoneProp = {this.state.newPhone} 
			
			nameErrorProp  = {this.state.nameError}
			emailErrorProp  = {this.state.emailError}
			phoneErrorProp  = {this.state.phoneError}
		/>
		
		<div class="tableContainer">
			 
			<table class="table">
				<tr>
				    <th onClick={this.sortParticipantsByName}>
						Name
						<span class={'btn btn-sm glyphicon glyphicon-arrow-' + this.state.sortByName}></span>
					</th> 
					<th onClick={this.sortParticipantsByEmail}>
						E-mail address 
						<span class={'btn btn-sm glyphicon glyphicon-arrow-' + this.state.sortByEmail}></span>
					</th> 
					<th onClick={this.sortParticipantsByPhone}>
						Phone 
						<span class={'btn btn-sm glyphicon glyphicon-arrow-' + this.state.sortByPhone}></span>
					</th>
					<th>
					</th>
				</tr>
							
					<tbody> 
							                                                      
					    {this.state.participantsData.map((dynamicComponent, i) => <Participant /* Participant Component */
						   deleteParticipantProp={this.deleteParticipant} key = {i} myDataLine = {dynamicComponent}/>)}
									 
					</tbody>
							
			</table>	
			 
		</div>
		
	</div>									
	</div>
		  
		  </div>
		  
		  <div class="col-sm-1"></div>
</div>
	  
       
      );
   }
}


export default App;

