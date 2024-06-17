import React from 'react';
import Icon from './Icon';
import linkedin from '../Images/linkedin.png'
import instagram from '../Images/instagram.png'
import facebook from '../Images/facebook.png'
import whatsapp from '../Images/whatsapp.png'
import phone from '../Images/phone.png'
import gmail from '../Images/gmail.png'
import location from '../Images/location.png'
import calander from '../Images/calander.png'


export default function SideProfile(props) {

    

  return (
    <aside className= {props.activeClass}>
        <div className='innerProfileContainer'>
            <img className='profileImg'  src={props.profileImg}  alt={props.profileAlts} />
            <h2 className='Name'>Harshal Borkar</h2>
            <h5 className='title'>Web Developer</h5>
            <div className="profileIconContainer">
                <Icon iconImg={linkedin} iconAlt="LI" className="smallIcon"></Icon>
                <Icon iconImg={facebook} iconAlt="FB" className="smallIcon"></Icon>
                <Icon iconImg={instagram} iconAlt="IG" className="smallIcon"></Icon>
                <Icon iconImg={whatsapp} iconAlt="WA" className="smallIcon"></Icon>
            </div>

            <table className='infoTable'>
                <tr style={{marginBottom:'10px'}}>
                    <td><Icon iconImg={phone} iconAlt="Call" className="smallIcon mediumIcon"></Icon></td>
                    <td>
                        <tr style={{fontSize:'13px'}}>Contact No.</tr>
                        <tr>+91 8668371109</tr>
                    </td>
                </tr>
                <tr style={{marginBottom:'10px'}}>
                    <td><Icon iconImg={gmail} iconAlt="Gmail" className="smallIcon mediumIcon"></Icon></td>
                    <td style={{marginInline:'10px'}}>
                        <tr style={{fontSize:'13px'}}>Email</tr>
                        <tr>harshalborkar10105@gmail.com</tr>
                    </td>
                </tr>
                <tr style={{marginBottom:'10px'}}>
                    <td><Icon iconImg={location} iconAlt="LOC" className="smallIcon mediumIcon"></Icon></td>
                    <td>
                        <tr style={{fontSize:'13px'}}>Location</tr>
                        <tr>Nagpur, Maharashtra, India</tr>
                    </td> 
                </tr>
                <tr style={{marginBottom:'10px'}}>
                    <td><Icon iconImg={calander} iconAlt="DOB" className="smallIcon mediumIcon"></Icon></td>
                    <td>
                        <tr style={{fontSize:'13px'}}>DOB</tr>
                        <tr>28/12/2002</tr>
                    </td>
                </tr>
            </table>

            <p onClick={props.moveProfile}>{props.content}</p>
        </div>
    </aside>
  )
}
