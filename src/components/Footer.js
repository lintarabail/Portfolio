import React from 'react'
import './Footer.css'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'

const Footer = () => {
  return (
   <div className="footer">
     <div className="foot-con">
       <span>lintarabaill@gmail.com</span>
       <div className="f-icons">
         <a href="https://instagram.com/itx_rabail03?igshid=YmMyMTA2M2Y=">
         <Insta color='white' size='3rem'/>
         </a>
         <a href="https://github.com/lintarabail">
         <Github color='white' size='3rem'/>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100029088894120">
         <Facebook color='white' size='3rem'/>
         </a>
         <a href="https://www.linkedin.com/in/linta-rabail-%F0%9F%92%9C-web-developer%F0%9F%8C%B8-bb1094238/">
         <Linkedin color='white' size='3rem'/>
         </a>
       </div>
     </div>
   </div>
    )
}

export default Footer