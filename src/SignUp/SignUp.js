import React from 'react';
// import { useCookies } from 'react-cookie';
// import Modal from 'react-modal';

const dataCaptureScript = document.createElement('script');
dataCaptureScript.src = "https://special-lite.activehosted.com/f/embed.php?id=1";
// dataCaptureScript.async = true;
document.body.appendChild(dataCaptureScript);

// const [cookies, setCookie] = useCookies(['subscribed']);

// const customStyles = {
//   content : {
//     top : '50%',
//     left : '50%',
//     right : 'auto',
//     bottom : 'auto',
//     marginRight : '-50%',
//     transform : 'transalte(-50%, -50%'
//   }
// };

// Modal.setAppElement( '#root' )

// const signUp = (props) => {
//   return(
//     <script src="https://special-lite.activehosted.com/f/embed.php?id=1" type="text/javascript" charSet="utf-8"></script>
//   )
// }

const signUp = (props) => {
    // var subtitle;
    // const [modalIsOpen,setIsOpen] = React.useState(false);
    // function openModal() {
    //   setIsOpen(true);
    // }
    return(
      <p>Hello</p>
//         <section className="sign-up">
//                 <div className="grid-container">
//                   <h2 className="text-center">Keep in Touch</h2>
//                   <hr></hr>
//                   <h3 className="text-center">Sign up below for the latest news, product&nbsp;releases,&nbsp;and&nbsp;more</h3>
//                   <form className="js-cm-form grid-x" id="subForm" action="https://www.createsend.com/t/subscribeerror?description=" method="post" data-id="92D4C54F0FEC16E5ADC2B1904DE9ED1ACD56C5311688EC04D43D634003A62F6B815AC91A48D863CAB75843975B4F725B95BBCE3B19AD113F206275E4ABF03977">
//                     <div className="cell">
//                       <div>
//                         <label>Email </label>
//                         <input autoComplete="Email" aria-label="Email" className="js-cm-email-input qa-input-email" id="fieldEmail" maxLength="200" name="cm-jldytuk-jldytuk" required="" type="email" />
//                       </div>
//                       <div>
//                         <div>
//                           <div>
//                             {//<input aria-required="" id="cm-privacy-consent" name="cm-privacy-consent" required="" type="checkbox" />
//                             }
//                             <label htmlFor="cm-privacy-consent">I agree to receive email communications from Special-Lite.</label>
//                           </div>
//                           <input id="cm-privacy-consent-hidden" name="cm-privacy-consent-hidden" type="hidden" value="true"/>
//                           </div>
//                         </div>
//                       </div>
//                     <button type="submit">Subscribe</button>
//                   </form>
//                 </div>
//               </section>
    )
};

export default signUp;