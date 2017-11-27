import React from 'react';


export class MyHeaderContent extends React.Component{
		  
render() {
          
		    return ( 
            
				<div className={this.props.divCssProp}>
		          <img className={this.props.logoCssProp} src={this.props.logoSrcProp} />
     		      <span className={this.props.companyCssProp}>{this.props.companyNameProp}</span>
				</div>					
            );
        }
		
}
MyHeaderContent.defaultProps = {
								  divCssProp:"myHeader",
								  logoCssProp:"myLogo" ,
								  logoSrcProp:"./logo.jpg", 
								  companyCssProp:"myLogoText", 
								  companyNameProp:"Nord Software"		
								}
