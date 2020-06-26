import React from 'react';

const signUp = (props) => {
    return(
        <section>
                <div>
                  <form class="js-cm-form" id="subForm" action="https://www.createsend.com/t/subscribeerror?description=" method="post" data-id="92D4C54F0FEC16E5ADC2B1904DE9ED1ACD56C5311688EC04D43D634003A62F6B815AC91A48D863CAB75843975B4F725B95BBCE3B19AD113F206275E4ABF03977">
                    <div>
                      <div>
                        <label>Email </label>
                        <input autocomplete="Email" aria-label="Email" class="js-cm-email-input qa-input-email" id="fieldEmail" maxlength="200" name="cm-jldytuk-jldytuk" required="" type="email" />
                      </div>
                      <div>
                        <div>
                          <div>
                            <input aria-required="" id="cm-privacy-consent" name="cm-privacy-consent" required="" type="checkbox" />
                            <label for="cm-privacy-consent">I agree to receive email communications from Special-Lite.</label>
                          </div>
                          <input id="cm-privacy-consent-hidden" name="cm-privacy-consent-hidden" type="hidden" value="true"/>
                          </div>
                        </div>
                      </div>
                    <button type="submit">Subscribe</button>
                  </form>
                </div>
                <script type="text/javascript" src="https://js.createsend1.com/javascript/copypastesubscribeformlogic.js"></script>
              </section>
    )
};

export default signUp;