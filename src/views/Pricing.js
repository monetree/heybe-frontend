import React from 'react';

class Pricing extends React.Component {


  componentDidMount(){
    let data = JSON.parse(localStorage.getItem("data"))
    if(data && data.type === "coach"){
      window.location = "/"
    }
    document.getElementById("top-bar-main").classList.remove("expanded")
    document.getElementsByTagName('body')[0].id = 'general_pricing';
  }

    render(){
        return (
          <section className="main marketing">
          <div className="row padding-top-40">
            <div className="large-12 small-12 columns">
              <section className="pricing-header">
                <div className="row">
                  <div className="small-12 columns">
                    <h1>pick your plan</h1>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="row pricing-container" style={{ background:'#ffffff' }}>  
            <div className="large-7 small-12 columns large-push-right">
              <div className="row text-center choices">
                <div className="large-4 small-4 choice-wrap columns">
                  <div className="choice"><div id="monthly" className="choice-content">
                      <a href="javascript:void(0)" className="select_plan_trial_month subscribe-to-plan" data-plan="trial_month">
                        <h4>1 Month</h4>
                        <div className="price">
                          <span className="dollar">$</span>
                          <span className="price">9.99</span>
                        </div>
                        <div className="button-container">
                          <div className="button rounded small">Get started</div>
                        </div>
                      </a>
                    </div></div>
                </div>
                <div className="large-4 small-4 choice-wrap columns">
                  <div className="choice"><div id="quarterly" className="choice-content">
                      <a href="javascript:void(0)" className="select_plan_premium_quarterly subscribe-to-plan" data-plan="premium_quarter">
                        <h4>3 months</h4>
                        <div className="price">
                          <span className="dollar">$</span>
                          <span className="price">26.99</span>
                        </div>
                        <div className="button-container">
                          <div className="button rounded small">Get Started</div>
                        </div>
                      </a>
                    </div></div>
                </div>
                <div className="large-4 small-4 choice-wrap columns">
                  <div className="choice rotate-label-container">
                    <div className="rotate-45 rotate-label">best value</div>
                    <div id="annual" className="choice-content">
                      <a href="javascript:void(0)" className="select_plan_premium_annual subscribe-to-plan" data-plan="premium_year">
                        <h4>12 months</h4>
                        <div className="price">
                          <span className="dollar">$</span>
                          <span className="price">99.99</span>
                        </div>
                        <div className="button-container">
                          <div className="button rounded small">Get Started</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="large-5 small-12 columns">
              <div className="row show-for-medium-up">
                <div className="large-12 small-12 columns">
                  <ul className="padding-left-15">
                    <li>Have unlimited access to our ENTIRE fitness library</li>
                    <li>Stream your workout video anytime, anywhere</li>
                    <li>Choose from a variety of boutique fitness genres</li>
                    <li>Tap into curated resources to help accomplish your fitness goals</li>
                    <li>Unlock 50+ Workout Plans from as low as $2.99
                      <span className="has-tip" data-tooltip title="Advanced coaching with greater detail on modifications, diet, and tips."><i className="fa fa-question-circle" /></span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row coupon-block">
                <div className="columns large-12 small-12">
                  <p className="medium text-center text-bold uppercase">have a coupon code?</p>
                  <br />
                  <div className="row collapse padding-bottom-20">
                    <div className="large-9 small-9 columns">
                      {/* used html input form for correct js work with input's value */}
                      <input placeholder="Enter your coupon code" type="text" style={{ padding:'2px !important' }} />
                    </div>
                    <div className="small-3 columns large-3">
                      <a id="apply-coupon-button" href className="button small reply-validation padding-top-10" style={{ 
fontSize: '1em',
padding: '15px',
border: 'none',
textTransform: 'uppercase',
letterSpacing: '0.0225em',
background: 'rgb(34, 49, 63)',
borderRadius: '3px',
marginTop: '0px',
margin: '10px !important'
    }}>Apply</a>
                      <div className="label coupon-status invalid hide">Invalid</div>
                      <div className="label coupon-status valid hide">Valid</div>
                    </div>
                  </div>
                  <div id="validation_code" className="checking-in-progress text-center padding-bottom-20">Please wait. Checking code ...</div>
                </div>
                {/*<div class="small-12 columns medium coupon-info hide">*/}
                {/*<p class="medium">*/}
                {/*<table class="no-styles coupon-info-price">*/}
                {/*<tr><td class="plan-name"></td><td class="plan-price price-value"></td></tr>*/}
                {/*<tr><td class="discount-info">Discount:</td><td class="coupon-discount price-value"></td></tr>*/}
                {/*<tr><td class="grand-total-info">Grand Total:</td><td class="grand-total price-value"></td></tr>*/}
                {/*</table>*/}
                {/*</p>*/}
                {/*<p class="medium sub-info coupon-description-info coupon-description"></p>*/}
                {/*<p class="medium margin-top-15">*Your billing statement may reflect a lower total than reported*/}
                {/*here due to a prorated credit from your previous membership plan.</p>*/}
                {/*</div>*/}
              </div>
              <div className="row show-for-small">
                <div className="large-12 small-12 columns">
                  <ul className="padding-left-15">
                    <li style={{ textAlign:'left !important' }}>Have unlimited access to our ENTIRE fitness library</li>
                    <li>Stream your workout video anytime, anywhere</li>
                    <li>Choose from a variety of boutique fitness genres</li>
                    <li>Tap into curated resources to help accomplish your fitness goals</li>
                    <li>Unlock 50+ Workout Plans from as low as $2.99&nbsp;&nbsp;
                      <span className="has-tip" data-tooltip title="Advanced coaching with greater detail on modifications, diet, and tips."><i className="fa fa-question-circle" /></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row padding-top-20 padding-bottom-20 subscribe-description">
            <div className="columns large-6 small-12">
              {/* <div className="small ">*All payment plans auto-renew following the 30-day trial. Cancel anytime.</div> */}
            </div>
            <div className="columns large-6 small-12">
              <div className="small last">Prices in USD.</div>
            </div>
          </div>
          <br/><br/><br/><br/><br/><br/>
        </section>
        )
    }
}


export default Pricing;