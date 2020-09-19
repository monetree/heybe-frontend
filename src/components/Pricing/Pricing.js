import React from 'react';


class Pricing extends React.Component {
    render(){
        return (
          <div id="general_pricing">
  <section class="main marketing">
    <div class="row padding-top-40">
  <div class="large-12 small-12 columns">
    <section class="pricing-header">
  <div class="row">
    <div class="small-12 columns">
      <h1>pick your plan</h1>

      <div class="subheader-text">
        <p>Get ready to:</p>
      </div>
      <br/>
    </div>
  </div>
</section>
  </div>
</div>

<div class="row pricing-container" style={{ background:'#fff', padding:'20px !important', paddingLeft: '5px',paddingRight: '5px',paddingBottom: '20px'}}>
  <div class="large-7 small-12 columns large-push-right">
    <div class="row text-center choices">
      <div class="large-3 columns choice-wrap trial">
      <div class="choice"></div>
      </div>
      <div class="large-4 small-4 choice-wrap columns">
        <div class="choice"><div id="monthly" class="choice-content">
    <a href="javascript:void(0)" class="select_plan_trial_month subscribe-to-plan" data-plan="trial_month">

    <h4>1 Month</h4>

    <div class="price">
      <span class="dollar">$</span>
      <span class="price">9.99</span>
    </div>
    <div class="button-container">
      <div class="button rounded small">start your free month</div>
    </div>
  </a>
</div></div>
      </div>
      <div class="large-4 small-4 choice-wrap columns">
        <div class="choice"><div id="quarterly" class="choice-content">
    <a href="javascript:void(0)" class="select_plan_premium_quarterly subscribe-to-plan" data-plan="premium_quarter">

  <h4>3 months</h4>

  <div class="price">
    <span class="dollar">$</span>
    <span class="price">26.99</span>
  </div>
  <div class="button-container">
    <div class="button rounded small">Get Started</div>
  </div>
  </a>
</div></div>
      </div>
      <div class="large-4 small-4 choice-wrap columns">
        <div class="choice rotate-label-container">
          <div class="rotate-45 rotate-label">best value</div>
          <div id="annual" class="choice-content">
    <a href="javascript:void(0)" class="select_plan_premium_annual subscribe-to-plan" data-plan="premium_year">

    <h4>12 months</h4>

    <div class="price">
      <span class="dollar">$</span>
      <span class="price">99.99</span>
    </div>
    <div class="button-container">
      <div class="button rounded small">Get Started</div>
    </div>
  </a>
</div>
        </div>
      </div>
    </div>
  </div>
  <div class="large-5 small-12 columns">
    <div class="row show-for-medium-up">
      <div class="large-12 small-12 columns">
        <ul class="padding-left-15">
          <li>Have unlimited access to our ENTIRE fitness library</li>
          <li>Stream your workout video anytime, anywhere</li>
          <li>Choose from a variety of boutique fitness genres</li>
          <li>Tap into curated resources to help accomplish your fitness goals</li>
          <li>Unlock 50+ Workout Plans from as low as $2.99
            <span class="has-tip" data-tooltip title='Advanced coaching with greater detail on modifications, diet, and tips.'><i class="fa fa-question-circle"></i></span>
          </li>
        </ul>
      </div>
    </div>
    <div class="row coupon-block">
      <div class="columns large-12 small-12">
  <p class="medium text-center text-bold uppercase">have a coupon code?</p>
<br/>
<div class="row collapse padding-bottom-20">
  <div class="large-9 small-9 columns">
     used html input form for correct js work with input's value 
    <input id="coupon-code" name="coupon" placeholder="Enter your coupon code" type="text" value=""/>
  </div>
  <div class="small-3 columns large-3">
    <a id="apply-coupon-button" href="#" class="button small reply-validation padding-top-10">Apply</a>
    <div class='label coupon-status invalid hide'>Invalid</div>
    <div class='label coupon-status valid hide'>Valid</div>
  </div>
</div>
<div id='validation_code' class='checking-in-progress text-center padding-bottom-20'>Please wait. Checking code ...</div>
</div>
<div class="small-12 columns medium coupon-info hide">
<p class="medium">
<table class="no-styles coupon-info-price">
<tr><td class="plan-name"></td><td class="plan-price price-value"></td></tr>
<tr><td class="discount-info">Discount:</td><td class="coupon-discount price-value"></td></tr>
<tr><td class="grand-total-info">Grand Total:</td><td class="grand-total price-value"></td></tr>
</table>
</p>
<p class="medium sub-info coupon-description-info coupon-description"></p>
<p class="medium margin-top-15">*Your billing statement may reflect a lower total than reported
here due to a prorated credit from your previous membership plan.</p>
</div>
    </div>
    <div class="row show-for-small">
      <div class="large-12 small-12 columns">
        <ul class="padding-left-15">
          <li>Have unlimited access to our ENTIRE fitness library</li>
          <li>Stream your workout video anytime, anywhere</li>
          <li>Choose from a variety of boutique fitness genres</li>
          <li>Tap into curated resources to help accomplish your fitness goals</li>
          <li>Unlock 50+ Workout Plans from as low as $2.99
            <span class="has-tip" data-tooltip title='Advanced coaching with greater detail on modifications, diet, and tips.'><i class="fa fa-question-circle"></i></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
<div class="row padding-top-20 padding-bottom-20 subscribe-description">
  <div class="columns large-6 small-12">
    <div class="small ">&#42All payment plans auto-renew following the 30-day trial. Cancel anytime.</div>
  </div>
  <div class="columns large-6 small-12">
    <div class="small last">Prices in USD.</div>
  </div>
</div>
  </section>

</div>
        )
    }
}


export default Pricing;