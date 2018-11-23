import React,{Component} from 'react';
import Divider from '@material-ui/core/Divider';

class Footer extends Component {
	render() {
		return (
        <div className="footer" style={{background:"#deb886",marginTop:"20px"}}>
        	<ul style={{display:"flex",display:"-webkit-flex",flexWrap:"wrap",
                listStyle:"none",padding:"20px 0",justifyContent:"space-around",alignContent:"center",
                width: "100%",maxWidth: "80%",margin:"auto",
             }}>
        		<li><a href="#" style={{color:"#fff",fontWeight:"700",textShadow:"1px 0px rgba(0,0,0,0.5)",textDecoration:"none"}}>About Us</a></li>
        		<li><a href="#" style={{color:"#fff",fontWeight:"700",textShadow:"1px 0px rgba(0,0,0,0.5)",textDecoration:"none"}}>Travel Guide</a></li>
        		<li><a href="#" style={{color:"#fff",fontWeight:"700",textShadow:"1px 0px rgba(0,0,0,0.5)",textDecoration:"none"}}>Contact Us</a></li>
        		<li><a href="#" style={{color:"#fff",fontWeight:"700",textShadow:"1px 0px rgba(0,0,0,0.5)",textDecoration:"none"}}>Notice Board</a></li>
        		<li><a href="#" style={{color:"#fff",fontWeight:"700",textShadow:"1px 0px rgba(0,0,0,0.5)",textDecoration:"none"}}>Disclaimer</a></li>

        	</ul>
            <Divider style={{background:"#fff"}}/>
        	<p style={{fontSize:"12px",fontFamily:"Roboto",fontWeight:"300",margin:"0",textAlign:"center",color:"#fff"
             ,textShadow:"1px 0px rgba(0,0,0,0.5)",
           padding: "5px 0"}}>@Copyright All rights reserved | Hotel.bt</p>
        </div>



		)
	}
}

export default Footer;