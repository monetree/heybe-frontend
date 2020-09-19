import React from 'react'
import { loadHomeScripts } from 'utils/loadScriptsForHomePage';


class WorkoutPlans extends React.Component{
  componentDidMount(){
    document.getElementsByTagName('body')[0].id = 'workout_plans_browse';
    loadHomeScripts();
  }

    render(){
        return (
 

            <section className="main workout_plans-browse">
            {/*Normal view*/}
            <div className="row expand">
              {/* FILTER BLOCK*/}
              <div className="large-3 small-12 columns right" id="video-filter">
                <div id="filter-title-block">
                  <span className="filter_title">Filter</span>
                  <span className="clear_all small">Clear all</span>
                </div>
                <form action="https://www.booyafitness.com/workout-plans/browse" method="post" id="filter_wop_form" data-remote="true">
                  <fieldset>
                    <p className="title">
                      <input type="checkbox" id="enable_length_input" name="filter[enable_length]" defaultValue={1} />
                      <span>enable length</span>
                    </p>
                    <div id="length_lable">
                      <span className="minus">
                        <p className="small">1 week</p>
                        <br />
                        -
                      </span>
                      <span className="plus">
                        <p className="small">12 weeks</p>
                        <br />
                        +
                      </span>
                    </div>
                    <div id="length">
                      <div id="length_sliders" />
                    </div>
                    <input id="length_input" name="filter[length]" hidden="true" defaultValue="0.5" />
                  </fieldset>
                  <fieldset>
                    <p className="title">
                      <input type="checkbox" id="enable_intensity_level" name="filter[enable_intensity_level]" defaultValue={1} />
                      <span>&nbsp;commitment level</span>
                      <span className="question_mark has-tip" data-tooltip aria-haspopup="true" title="The level of commitment reflects how many days you’ll be working out relative to rest days.
               Remember that real change only comes from hard work and dedication to your fitness and diet!">
                        <img alt="Question_mark" src="../assets/workout/question_mark-1063ad293548b59102777cfd5d5f50a5.png" />
                      </span>
                    </p>
                    <div id="intensity_lable">
                      <span className="minus">
                        <p className="small">Light</p>
                        <br />
                        -
                      </span>
                      <span className="plus">
                        <p className="small">High</p>
                        <br />
                        +
                      </span>
                    </div>
                    <div id="intensity_level">
                      <div id="intensity_sliders" />
                    </div>
                    <input id="intensity_input" name="filter[intensity]" hidden="true" defaultValue={2} />
                  </fieldset>
                  <fieldset>
                    <p className="title"><span>equipment</span>
                      <span className="question_mark has-tip" data-tooltip aria-haspopup="true" title="Tell us what props you have available to use.">
                        <img alt="Question_mark" src="../assets/workout/question_mark-1063ad293548b59102777cfd5d5f50a5.png" />
                      </span></p>
                    <ul className="equipment-checkboxes no-bullet">
                      <li>
                        <input data-name="I have no equipment" id="equipment_none" name="filter[equipments][]" type="checkbox" defaultValue="none" />
                        <label htmlFor="equipment_none">I have no equipment</label>
                      </li>
                      <li>
                        <input data-name="Yoga Mat" id="equipment_1" name="filter[equipments][]" type="checkbox" defaultValue={1} />
                        <label htmlFor="equipment_1">Yoga Mat</label>
                      </li>
                      <li>
                        <input data-name="Chair" id="equipment_3" name="filter[equipments][]" type="checkbox" defaultValue={3} />
                        <label htmlFor="equipment_3">Chair</label>
                      </li>
                      <li>
                        <input data-name="Dumbbells" id="equipment_4" name="filter[equipments][]" type="checkbox" defaultValue={4} />
                        <label htmlFor="equipment_4">Dumbbells</label>
                      </li>
                      <li>
                        <input data-name="Resistance Band" id="equipment_2" name="filter[equipments][]" type="checkbox" defaultValue={2} />
                        <label htmlFor="equipment_2">Resistance Band</label>
                      </li>
                      <li>
                        <input data-name="Boutique Equipment" id="equipment_6" name="filter[equipments][]" type="checkbox" defaultValue={6} />
                        <label htmlFor="equipment_6">Boutique Equipment</label>
                      </li>
                    </ul>
                  </fieldset>
                  <input type="submit" defaultValue="submit" hidden="true" />
                </form>
              </div>
              {/*CONTENT BLOCK*/}
              <div className="large-9 small-12 columns" id="wop-list">
                {/* FEATURED BLOCK */}
                {/* WOP LIST BLOCK*/}
                <div className="row expand render-browse-list" id="list">
                  <ul className="large-block-grid-3 item-width-1-3 no-bullet">
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="14-day-clean-eating-challenge-n4wt0g.html">14 Day Clean Eating Challenge</a></h2>
                        <div className="author-info">
                          by Team Lorna Jane
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="14-day-clean-eating-challenge-n4wt0g.html"><img alt="Convert?crop=0,0,1771,1002&cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/lAA2xARWOPVxs3Pd7bQO/convert?crop=0,0,1771,1002&cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          Want to eat clean &amp; get in top shape? Our nourishing philosophy of eating sim...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Uis922ezquymsgffljim?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uIs922ezQUyMsgFfLJim?cache=true" width={45} /></div>
                            <div className="title">Chair</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                            <div className="title">Dumbbells</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">10</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">2</div>
                            <div className="wop-info-name">WEEKs</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">High </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="21-day-body-chisel-ymulvo.html">21-Day Body Chisel</a></h2>
                        <div className="author-info">
                          by Booya Fitness
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="21-day-body-chisel-ymulvo.html"><img alt="3g11npsfsvc53a8hfbjd?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/3g11NpsFSvc53a8HFbJD?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          This 21 day workout program combines four days of high intensity cardio and s...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Naxoae2qxgs55ndfsasa?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nAXOaE2QXGS55nDfSAsA?cache=true" width={45} /></div>
                            <div className="title">Resistance Band</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">15</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">3</div>
                            <div className="wop-info-name">WEEKs</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">High </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="wop-i7mk2b.html">28 Day Clean Eating Challenge </a></h2>
                        <div className="author-info">
                          by Booya Fitness
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="wop-i7mk2b.html"><img alt="Convert?crop=0,0,1773,1000&cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/3tsM5AyLTkmMiktvr6wg/convert?crop=0,0,1773,1000&cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          Kick-start your clean eating lifestyle! It typically takes 4 weeks to turn a ...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">12</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">4</div>
                            <div className="wop-info-name">WEEKs</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">Medium </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="wop-bf353s.html">2 Weeks Until the Aisle</a></h2>
                        <div className="author-info">
                          by Erin Campbell
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="wop-bf353s.html"><img alt="W8n9fzbzriymkkd3gcji?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/w8N9FzbZRiyMkkD3gcji?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          Get confident and inspired with this 2-week workout and nutritional plan! Thi...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Naxoae2qxgs55ndfsasa?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nAXOaE2QXGS55nDfSAsA?cache=true" width={45} /></div>
                            <div className="title">Resistance Band</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                            <div className="title">Dumbbells</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">11</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">2</div>
                            <div className="wop-info-name">WEEKs</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">High </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="8-weeks-until-the-aisle-copy-hs67pn.html">4 Weeks Until the Aisle </a></h2>
                        <div className="author-info">
                          by Erin Campbell
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="8-weeks-until-the-aisle-copy-hs67pn.html"><img alt="Oc33guy4rn2ohw6bilc5?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/Oc33GuY4RN2ohW6BiLC5?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          Get confident and inspired with this 4-week workout and nutritional plan!  Th...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Naxoae2qxgs55ndfsasa?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nAXOaE2QXGS55nDfSAsA?cache=true" width={45} /></div>
                            <div className="title">Resistance Band</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                            <div className="title">Dumbbells</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Omn4jr7psr6m9qapwhqd?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/oMn4Jr7PSr6M9QAPWHqd?cache=true" width={45} /></div>
                            <div className="title">Boutique Equipment</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">21</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">4</div>
                            <div className="wop-info-name">WEEKs</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">High </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="7-day-clean-eating-challenge--x1o1qn.html">7 Day Teaser: Clean Eating ...</a></h2>
                        <div className="author-info">
                          by Booya Fitness
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="7-day-clean-eating-challenge--x1o1qn.html"><img alt="Uswybsb8tcyf6ahpk5uj?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/UsWYBsb8TCyf6AhPK5uJ?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          Kick-start your clean eating lifestyle! It typically takes 4 weeks to turn a ...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">3</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">1</div>
                            <div className="wop-info-name">WEEK</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">Medium </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="sculpt-a-dancer-s-body-copy-95d3fn.html">7 Day Teaser: Sculpt a Danc...</a></h2>
                        <div className="author-info">
                          by Brittany Nilson
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="sculpt-a-dancer-s-body-copy-95d3fn.html"><img alt="Brlydybgrcqbimzpwp3i?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/brlydYbGRCqBiMZPWp3i?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          This plan will help you sculpt, tone and stretch your body to look like a lea...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Naxoae2qxgs55ndfsasa?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nAXOaE2QXGS55nDfSAsA?cache=true" width={45} /></div>
                            <div className="title">Resistance Band</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Uis922ezquymsgffljim?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uIs922ezQUyMsgFfLJim?cache=true" width={45} /></div>
                            <div className="title">Chair</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">6</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">1</div>
                            <div className="wop-info-name">WEEK</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">High </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="the-happiness-challenge-copy-8ckvge.html">7 Day Teaser: The Happiness...</a></h2>
                        <div className="author-info">
                          by Janelle Martel
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="the-happiness-challenge-copy-8ckvge.html"><img alt="Dtrlapucrfqg9tb1xzfr?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/dtrLapucRFqg9tb1xzfr?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          Whether you've been feeling down in the dumps or are simply looking for a way...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Naxoae2qxgs55ndfsasa?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nAXOaE2QXGS55nDfSAsA?cache=true" width={45} /></div>
                            <div className="title">Resistance Band</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Uis922ezquymsgffljim?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uIs922ezQUyMsgFfLJim?cache=true" width={45} /></div>
                            <div className="title">Chair</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">6</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">1</div>
                            <div className="wop-info-name">WEEK</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">High </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="total-body-transformation-lab-copy-vt5zk.html">7 Day Teaser: Total Body Tr...</a></h2>
                        <div className="author-info">
                          by Soho Strength Lab
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="total-body-transformation-lab-copy-vt5zk.html"><img alt="4ghj55ohs4opbya6dcqn?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/4GhJ55oHS4OPByA6dCqn?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          This 1-Week Plan is perfect for people committed to transforming their bodies...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                            <div className="title">Dumbbells</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">3</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">1</div>
                            <div className="wop-info-name">WEEK</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">Medium </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="8-weeks-until-the-aisle-8ai0xn.html">8 Weeks Until the Aisle</a></h2>
                        <div className="author-info">
                          by Erin Campbell
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="8-weeks-until-the-aisle-8ai0xn.html"><img alt="J6aimfutxc6dpfy1rcoj?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/j6AimfuTxC6dpFY1rCoj?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          Get confident and inspired with this 8-week workout and nutritional plan!  Th...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Naxoae2qxgs55ndfsasa?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nAXOaE2QXGS55nDfSAsA?cache=true" width={45} /></div>
                            <div className="title">Resistance Band</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                            <div className="title">Dumbbells</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Uis922ezquymsgffljim?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uIs922ezQUyMsgFfLJim?cache=true" width={45} /></div>
                            <div className="title">Chair</div>
                          </div>
                          <span className="tiny">&amp; more</span>
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">41</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">8</div>
                            <div className="wop-info-name">WEEKs</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">High </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="adore-your-core.html">Adore Your Core</a></h2>
                        <div className="author-info">
                          by Lynette Pettinicchi
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="adore-your-core.html"><img alt="Knjyzqbsly86uxf64l9g" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/kNJyzQBSly86Uxf64L9g" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          Creating a strong core isn't just for bathing suit season. 
                          Your abs assis...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Naxoae2qxgs55ndfsasa?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nAXOaE2QXGS55nDfSAsA?cache=true" width={45} /></div>
                            <div className="title">Resistance Band</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">5</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">1</div>
                            <div className="wop-info-name">WEEK</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">High </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="all-about-that-barre-6hkpjg.html">All About That Barre</a></h2>
                        <div className="author-info">
                          by Team Barre
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="all-about-that-barre-6hkpjg.html"><img alt="U8bfoeorr6qemas2jbp4?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/U8bfoeOrR6qEmAS2jbp4?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          Make the absolute most of every minute in your workout and break a serious sw...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Naxoae2qxgs55ndfsasa?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nAXOaE2QXGS55nDfSAsA?cache=true" width={45} /></div>
                            <div className="title">Resistance Band</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Uis922ezquymsgffljim?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uIs922ezQUyMsgFfLJim?cache=true" width={45} /></div>
                            <div className="title">Chair</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">17</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">4</div>
                            <div className="wop-info-name">WEEKs</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">Medium </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="broga-workout-plan-zpxuoy.html">Broga Workout Plan</a></h2>
                        <div className="author-info">
                          by Team  Broga
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="broga-workout-plan-zpxuoy.html"><img alt="Zkiqb6mtlo56avaswp55?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/ZKiQB6mTlO56AVASwP55?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          Strong, energetic,and challenging, our Broga Workout Plan combines the best c...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">17</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">4</div>
                            <div className="wop-info-name">WEEKs</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">Medium </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="bust-out-of-your-comfort-zone-ecu7ne.html">Bust Out of Your Comfort Zone</a></h2>
                        <div className="author-info">
                          by Fit Bottomed Girls
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="bust-out-of-your-comfort-zone-ecu7ne.html"><img alt="Qi6ytmoqou4fniqpekgq?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/qI6YtmOQOu4fNiqpeKgQ?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          Feel like you're stuck in a fitness rut, or just hoping to find some new insp...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Naxoae2qxgs55ndfsasa?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nAXOaE2QXGS55nDfSAsA?cache=true" width={45} /></div>
                            <div className="title">Resistance Band</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Uis922ezquymsgffljim?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uIs922ezQUyMsgFfLJim?cache=true" width={45} /></div>
                            <div className="title">Chair</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                            <div className="title">Dumbbells</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">23</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">4</div>
                            <div className="wop-info-name">WEEKs</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">High </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="busy-mom-workout-plan-dml62.html">Busy Mom's 4 Week Workout Plan</a></h2>
                        <div className="author-info">
                          by Lucie Palka
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="busy-mom-workout-plan-dml62.html"><img alt="Lzqdh7znrwydm4wxjqh8?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/LzQdH7znRwyDm4WxJqh8?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          This 4 week program is designed for busy moms. There are 4 workouts a week. E...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                            <div className="title">Dumbbells</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Uis922ezquymsgffljim?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uIs922ezQUyMsgFfLJim?cache=true" width={45} /></div>
                            <div className="title">Chair</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">16</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">4</div>
                            <div className="wop-info-name">WEEKs</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">Medium </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="busy-mom-s-full-body-circuit-1sb8kf.html">Busy People's Full Body Cir...</a></h2>
                        <div className="author-info">
                          by Megan Mc Gown
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="busy-mom-s-full-body-circuit-1sb8kf.html"><img alt="77mujoonq4git3otfur3?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/77mUjOonQ4GIT3oTFur3?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          We are full time working parents, students, or individuals trying to get the ...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">5</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">1</div>
                            <div className="wop-info-name">WEEK</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">High </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="chilly-challenge-z8wedm.html">Chilly Challenge</a></h2>
                        <div className="author-info">
                          by Amy Caine
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="chilly-challenge-z8wedm.html"><img alt="5jbjir41shk0lxeib2l4?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/5JBjiR41SHK0LXEib2l4?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          Stay in shape through the winter with this 4 week plan that will make you str...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                            <div className="title">Dumbbells</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">24</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">4</div>
                            <div className="wop-info-name">WEEKs</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">High </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="strength-training-for-runners-t9lmkh.html">Cross Training for Runners</a></h2>
                        <div className="author-info">
                          by Lea Genders
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="strength-training-for-runners-t9lmkh.html"><img alt="Pm3thxvyrssewe9k2m1h?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/pm3tHXvyRsSEwE9k2M1h?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          You love to run and there is no doubt running is a great way to stay in shape...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Naxoae2qxgs55ndfsasa?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nAXOaE2QXGS55nDfSAsA?cache=true" width={45} /></div>
                            <div className="title">Resistance Band</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                            <div className="title">Dumbbells</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">15</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">3</div>
                            <div className="wop-info-name">WEEKs</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">High </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="drop-a-dress-size-plan-e7p1yf.html">Drop a Dress Size Plan</a></h2>
                        <div className="author-info">
                          by Stacey Mebs
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="drop-a-dress-size-plan-e7p1yf.html"><img alt="S6xayvtfteegdruipfo2?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/s6XAyVTFTeegDRUiPFo2?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          This workout plan is for people that already exercise, but want to increase t...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                            <div className="title">Dumbbells</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Uis922ezquymsgffljim?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uIs922ezQUyMsgFfLJim?cache=true" width={45} /></div>
                            <div className="title">Chair</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">20</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">4</div>
                            <div className="wop-info-name">WEEKs</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">High </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="drop-a-dress-size-without-dropping-muscle-or0obk.html">Drop A Dress Size, Without ...</a></h2>
                        <div className="author-info">
                          by Taylor Kiser
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="drop-a-dress-size-without-dropping-muscle-or0obk.html"><img alt="Werjkexqly2f1oqovhgh?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/WErjkExQLy2f1OqOvHGh?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          Everyone has that pair of jeans in the back of their closet that they WISH th...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Naxoae2qxgs55ndfsasa?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nAXOaE2QXGS55nDfSAsA?cache=true" width={45} /></div>
                            <div className="title">Resistance Band</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                            <div className="title">Dumbbells</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">24</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">4</div>
                            <div className="wop-info-name">WEEKs</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">High </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="eat-clean-get-lean-6rkycd.html">Eat Clean, Get Lean</a></h2>
                        <div className="author-info">
                          by Katie Norris
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="eat-clean-get-lean-6rkycd.html"><img alt="Dvbnkiw5qlgrq9txfa87?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/DVbNkIw5QlGRQ9txFA87?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          Eat Clean, Get Lean is a two week program designed to get you feeling energiz...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">8</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">2</div>
                            <div className="wop-info-name">WEEKs</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">Medium </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="fhiit-for-fall-no-equipment-workouts-to-shed-the-summer-pounds-wantw1.html">fHIIT for the New Year: No-...</a></h2>
                        <div className="author-info">
                          by Nicole Handler
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="fhiit-for-fall-no-equipment-workouts-to-shed-the-summer-pounds-wantw1.html"><img alt="8nuztm04qi9spg9rcvom?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/8nUzTm04Qi9Spg9rCVom?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          Let the New Year begin! With about 30 minutes or less a day, this no-equipmen...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">20</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">4</div>
                            <div className="wop-info-name">WEEKs</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">High </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="fit-foodies-z7b6ww.html">Fit Foodies</a></h2>
                        <div className="author-info">
                          by Annie Wang
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="fit-foodies-z7b6ww.html"><img alt="Mltu5zftteiluu9m8hlp?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/mLTu5zfTTEiluu9m8Hlp?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          When food is your career, you need to balance out indulgences with healthy ha...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Naxoae2qxgs55ndfsasa?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nAXOaE2QXGS55nDfSAsA?cache=true" width={45} /></div>
                            <div className="title">Resistance Band</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Uis922ezquymsgffljim?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uIs922ezQUyMsgFfLJim?cache=true" width={45} /></div>
                            <div className="title">Chair</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">10</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">2</div>
                            <div className="wop-info-name">WEEKs</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">High </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="get-in-the-habit-vlqhqa.html">Get in the Habit</a></h2>
                        <div className="author-info">
                          by Fit Bottomed Girls
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="get-in-the-habit-vlqhqa.html"><img alt="A7ovr2lqv4tauzymwj9g?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/a7oVr2LQV4TaUZymWj9g?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          Do you know the secret to eating right and working out consistently? It all c...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Naxoae2qxgs55ndfsasa?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nAXOaE2QXGS55nDfSAsA?cache=true" width={45} /></div>
                            <div className="title">Resistance Band</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Uis922ezquymsgffljim?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uIs922ezQUyMsgFfLJim?cache=true" width={45} /></div>
                            <div className="title">Chair</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                            <div className="title">Dumbbells</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">17</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">4</div>
                            <div className="wop-info-name">WEEKs</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">Medium </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="get-your-bounce-on-t4ncgi.html">Get Your Bounce On</a></h2>
                        <div className="author-info">
                          by Krystal Dwyer
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="get-your-bounce-on-t4ncgi.html"><img alt="Gvkf6tvrm2o1wbdydxlp?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gVKf6TVRM2o1wbdYDxLP?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          This 4-Week Trampoline Challenge includes workouts that are meant for all lev...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Uis922ezquymsgffljim?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uIs922ezQUyMsgFfLJim?cache=true" width={45} /></div>
                            <div className="title">Chair</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Omn4jr7psr6m9qapwhqd?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/oMn4Jr7PSr6M9QAPWHqd?cache=true" width={45} /></div>
                            <div className="title">Boutique Equipment</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">18</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">4</div>
                            <div className="wop-info-name">WEEKs</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">Medium </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="high-low-cn2iv.html">High-Impact &amp; Rapid Recovery</a></h2>
                        <div className="author-info">
                          by Team Mpg
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="high-low-cn2iv.html"><img alt="O9dmmnbyqowndofb8xry?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/O9DMMNBYQoWNDOFb8XRY?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          This workout plan features high &amp; low impact workouts as it works your entire...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">10</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">2</div>
                            <div className="wop-info-name">WEEKs</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">High </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="hiit-it-surviving-the-zombie-apocalypse-1t04f8.html">HIIT It: Surviving the Zomb...</a></h2>
                        <div className="author-info">
                          by Jen Elliott
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="hiit-it-surviving-the-zombie-apocalypse-1t04f8.html"><img alt="Fhniavkragk2fk1p02xr?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/fhNIavkRAGK2FK1p02Xr?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          With Halloween around the corner, this 4 week plan will consist of a combinat...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                            <div className="title">Dumbbells</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">22</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">4</div>
                            <div className="wop-info-name">WEEKs</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">High </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="kick-hiit-96fvw1.html">KICK &amp; HIIT</a></h2>
                        <div className="author-info">
                          by Urban Kick
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="kick-hiit-96fvw1.html"><img alt="8whe7ctltkmstqyqog8q?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/8WHe7CTLTKmstQYQOg8q?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          By combining punch and kick sequences with H.I.I.T. drills, UrbanKick challen...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">14</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">4</div>
                            <div className="wop-info-name">WEEKs</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">Medium </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="let-s-put-a-little-muscle-on-2mpde1.html">Let's put a little muscle on!</a></h2>
                        <div className="author-info">
                          by Taylor Kiser
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="let-s-put-a-little-muscle-on-2mpde1.html"><img alt="W8ero8jq25anckvtwttw?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/w8eRo8jQ25ANcKvTwTtw?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          This plan is for those people who aren't concerned about losing fat, but want...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Naxoae2qxgs55ndfsasa?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nAXOaE2QXGS55nDfSAsA?cache=true" width={45} /></div>
                            <div className="title">Resistance Band</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                            <div className="title">Dumbbells</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">20</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">4</div>
                            <div className="wop-info-name">WEEKs</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">High </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="mindfulness-morning-routine-kq5aio.html">Low to High-Energy Mantra Week</a></h2>
                        <div className="author-info">
                          by Sami Sattva
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="mindfulness-morning-routine-kq5aio.html"><img alt="Tp3gn3ffqwowr4axvhge?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/tp3GN3fFQwOWR4axVHge?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          Welcome! This workout plan is designed for everything to be done in the A.M.,...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                            <div className="title">Dumbbells</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">4</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">1</div>
                            <div className="wop-info-name">WEEK</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">Medium </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="mental-detox-wavu0g.html">Mental Detox</a></h2>
                        <div className="author-info">
                          by Fit Bottomed Girls
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="mental-detox-wavu0g.html"><img alt="Hmehbeq8fed8uv6yadgt?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/HmeHBeQ8fEd8uV6yaDgt?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          Stressed out? Had a bad week? Going through a break up or other tough relatio...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Naxoae2qxgs55ndfsasa?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nAXOaE2QXGS55nDfSAsA?cache=true" width={45} /></div>
                            <div className="title">Resistance Band</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Uis922ezquymsgffljim?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uIs922ezQUyMsgFfLJim?cache=true" width={45} /></div>
                            <div className="title">Chair</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">5</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">1</div>
                            <div className="wop-info-name">WEEK</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">High </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="new-year-new-you-9848nq.html">New Year New YOU!</a></h2>
                        <div className="author-info">
                          by Chelsey Amer
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="new-year-new-you-9848nq.html"><img alt="Ugkyaxsxgpkd07khnyqw?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/UgkYaxSXGPkd07kHnYQw?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          The new year is here and it's time to rediscover a new you! 
                          Experts say it ...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Naxoae2qxgs55ndfsasa?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nAXOaE2QXGS55nDfSAsA?cache=true" width={45} /></div>
                            <div className="title">Resistance Band</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Uis922ezquymsgffljim?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uIs922ezQUyMsgFfLJim?cache=true" width={45} /></div>
                            <div className="title">Chair</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">12</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">3</div>
                            <div className="wop-info-name">WEEKs</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">Medium </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="post-baby-bounce-back-xhj971.html">Post-Baby Bounce Back</a></h2>
                        <div className="author-info">
                          by Brittany Nilson
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="post-baby-bounce-back-xhj971.html"><img alt="Convert?crop=0,0,1772,1000&cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/5G3ccIiLSy2yILXmRonP/convert?crop=0,0,1772,1000&cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          Getting back into a workout routine after having a baby is tough but Booya Fi...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Uis922ezquymsgffljim?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uIs922ezQUyMsgFfLJim?cache=true" width={45} /></div>
                            <div className="title">Chair</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Omn4jr7psr6m9qapwhqd?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/oMn4Jr7PSr6M9QAPWHqd?cache=true" width={45} /></div>
                            <div className="title">Boutique Equipment</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">20</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">4</div>
                            <div className="wop-info-name">WEEKs</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">High </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="pre-holiday-season-fat-blaster-6b2fmk.html">Post-Holiday Season Fat Bla...</a></h2>
                        <div className="author-info">
                          by Lori Lanham
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="pre-holiday-season-fat-blaster-6b2fmk.html"><img alt="Od8dcdfbrqoonkizdyqt?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/OD8dcDFBRQOOnKIzDyqT?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          Holiday parties have concluded, and it's time to get in shape for 2016! We wi...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Naxoae2qxgs55ndfsasa?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nAXOaE2QXGS55nDfSAsA?cache=true" width={45} /></div>
                            <div className="title">Resistance Band</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Uis922ezquymsgffljim?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uIs922ezQUyMsgFfLJim?cache=true" width={45} /></div>
                            <div className="title">Chair</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">24</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">4</div>
                            <div className="wop-info-name">WEEKs</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">High </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="results-only-working-mom-edition-bm743d.html">Results Only: Working Mom E...</a></h2>
                        <div className="author-info">
                          by Stacey Mebs
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="results-only-working-mom-edition-bm743d.html"><img alt="Zrj8pwtxsnaglgycpaa7?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zRJ8PWtXSnaglgYcPaA7?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          This workout plan is busy moms that don't have time for everything!  Quick wo...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Uis922ezquymsgffljim?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uIs922ezQUyMsgFfLJim?cache=true" width={45} /></div>
                            <div className="title">Chair</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">20</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">4</div>
                            <div className="wop-info-name">WEEKs</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">High </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="rexisting-limits-b6v3u4.html">ReXisting Limits</a></h2>
                        <div className="author-info">
                          by Team Re Xist360
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="rexisting-limits-b6v3u4.html"><img alt="Uhdpwh09snaszfwrkip4?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uHDpWH09SnasZfwrkIP4?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          This plan includes workouts that employ ReXist360 power bands made for both n...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Naxoae2qxgs55ndfsasa?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nAXOaE2QXGS55nDfSAsA?cache=true" width={45} /></div>
                            <div className="title">Resistance Band</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Uis922ezquymsgffljim?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uIs922ezQUyMsgFfLJim?cache=true" width={45} /></div>
                            <div className="title">Chair</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Omn4jr7psr6m9qapwhqd?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/oMn4Jr7PSr6M9QAPWHqd?cache=true" width={45} /></div>
                            <div className="title">Boutique Equipment</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">16</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">4</div>
                            <div className="wop-info-name">WEEKs</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">Medium </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="run-strong-and-injury-free-copy-8jnsnq.html">Runners' Guide to Building ...</a></h2>
                        <div className="author-info">
                          by Corey Melke
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="run-strong-and-injury-free-copy-8jnsnq.html"><img alt="Z9rhpfe1shsdj7ziobom?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/Z9RHpfE1ShSDj7ZiOBom?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          You must combine running w/strength training &amp; stretching if you want to beco...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Naxoae2qxgs55ndfsasa?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nAXOaE2QXGS55nDfSAsA?cache=true" width={45} /></div>
                            <div className="title">Resistance Band</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                            <div className="title">Dumbbells</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Uis922ezquymsgffljim?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uIs922ezQUyMsgFfLJim?cache=true" width={45} /></div>
                            <div className="title">Chair</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">21</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">4</div>
                            <div className="wop-info-name">WEEKs</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">High </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="runstreet-5k-training-plan-for-new-runners-x8rxwz.html">Runstreet 5K Training Plan ...</a></h2>
                        <div className="author-info">
                          by Marnie Kunz
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="runstreet-5k-training-plan-for-new-runners-x8rxwz.html"><img alt="Sidvcq8ot5uhjx57kqpn?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/SiDVcq8oT5uhjx57KQPN?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          This 8-week program will take you from never having run to completing your fi...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Naxoae2qxgs55ndfsasa?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nAXOaE2QXGS55nDfSAsA?cache=true" width={45} /></div>
                            <div className="title">Resistance Band</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Uis922ezquymsgffljim?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uIs922ezQUyMsgFfLJim?cache=true" width={45} /></div>
                            <div className="title">Chair</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">48</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">8</div>
                            <div className="wop-info-name">WEEKs</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">High </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="8-weeks-to-a-dancer-s-body-iwc9tj.html">Sculpt a Dancer's Body</a></h2>
                        <div className="author-info">
                          by Brittany Nilson
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="8-weeks-to-a-dancer-s-body-iwc9tj.html"><img alt="Convert?crop=0,0,1771,1000&cache=true" className="display-block" src="https://www.filepicker.io/api/file/esBD9KtGQsGnIqKEDJuJ/convert?crop=0,0,1771,1000&cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          This 8 Week Plan will help you sculpt, tone and stretch your body to look lik...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Naxoae2qxgs55ndfsasa?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nAXOaE2QXGS55nDfSAsA?cache=true" width={45} /></div>
                            <div className="title">Resistance Band</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Uis922ezquymsgffljim?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uIs922ezQUyMsgFfLJim?cache=true" width={45} /></div>
                            <div className="title">Chair</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">48</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">8</div>
                            <div className="wop-info-name">WEEKs</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">High </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="slim-strong-workout-plan-5mpfok.html">Slim &amp; Strong Workout Plan</a></h2>
                        <div className="author-info">
                          by Brooklyn Bridge Bootcamp
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="slim-strong-workout-plan-5mpfok.html"><img alt="Ckzcd5dus1qg2agwimmy?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/CKzCd5DuS1qG2aGwiMmy?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          BBBC's Slim &amp; Strong Workout Plan is a high intensity-interval-training progr...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                            <div className="title">Dumbbells</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">16</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">4</div>
                            <div className="wop-info-name">WEEKs</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">Medium </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="prenatal-fitness-second-trimester-k1lyzp.html">Stay Strong During Pregnancy</a></h2>
                        <div className="author-info">
                          by Anita Mirchandani
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="prenatal-fitness-second-trimester-k1lyzp.html"><img alt="Convert?crop=0,0,1772,1000&cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/ZlweBsgXScmZkazPHVCt/convert?crop=0,0,1772,1000&cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          Congrats on your pregnancy! This workout plan is for intermediate/advanced fi...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Naxoae2qxgs55ndfsasa?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nAXOaE2QXGS55nDfSAsA?cache=true" width={45} /></div>
                            <div className="title">Resistance Band</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Uis922ezquymsgffljim?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uIs922ezQUyMsgFfLJim?cache=true" width={45} /></div>
                            <div className="title">Chair</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                            <div className="title">Dumbbells</div>
                          </div>
                          <span className="tiny">&amp; more</span>
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">60</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">12</div>
                            <div className="wop-info-name">WEEKs</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">High </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="strength-stretch-workout-plan-hunnax.html">Strength, Stretch, and Restore</a></h2>
                        <div className="author-info">
                          by Jennifer Pullman
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="strength-stretch-workout-plan-hunnax.html"><img alt="1vagymctyqigpotmp0xi?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/1vaGYmCTyqIGPOTMP0Xi?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          Are you new to exercise? Are you recovering from an injury. This workout plan...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Naxoae2qxgs55ndfsasa?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nAXOaE2QXGS55nDfSAsA?cache=true" width={45} /></div>
                            <div className="title">Resistance Band</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Uis922ezquymsgffljim?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uIs922ezQUyMsgFfLJim?cache=true" width={45} /></div>
                            <div className="title">Chair</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">20</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">4</div>
                            <div className="wop-info-name">WEEKs</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">High </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="the-busy-working-girl-s-workout-guide-cjfply.html">The Busy Working Girl's Wor...</a></h2>
                        <div className="author-info">
                          by Lynette Pettinicchi
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="the-busy-working-girl-s-workout-guide-cjfply.html"><img alt="Crzwlsfoq8yiyi1pj8d4?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/crZWlsFOQ8yIyi1Pj8d4?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          Having trouble fitting in workouts and making nutritious choices while you're...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Uis922ezquymsgffljim?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uIs922ezQUyMsgFfLJim?cache=true" width={45} /></div>
                            <div className="title">Chair</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">5</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">1</div>
                            <div className="wop-info-name">WEEK</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">High </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="the-happiness-challenge-7gwu60.html">The Happiness Challenge</a></h2>
                        <div className="author-info">
                          by Janelle Martel
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="the-happiness-challenge-7gwu60.html"><img alt="Ahcwdguerqan1fgqhiyo?cache=true" className="display-block" src="https://www.filepicker.io/api/file/AhcWDGUeRqan1FgqHIYo?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          Whether you've been feeling down in the dumps or are simply looking for a way...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Naxoae2qxgs55ndfsasa?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nAXOaE2QXGS55nDfSAsA?cache=true" width={45} /></div>
                            <div className="title">Resistance Band</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Uis922ezquymsgffljim?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uIs922ezQUyMsgFfLJim?cache=true" width={45} /></div>
                            <div className="title">Chair</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">12</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">2</div>
                            <div className="wop-info-name">WEEKs</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">High </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="the-mind-body-plan-ztbnu6.html">The Mind &amp; Body Plan</a></h2>
                        <div className="author-info">
                          by Rachael Hartley
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="the-mind-body-plan-ztbnu6.html"><img alt="Dfn0nhorts2bhnytqyog?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/dfn0NhORtS2bhnyTQyog?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          The mind and body plan is a four week plan designed to nourish both your body...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Uis922ezquymsgffljim?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uIs922ezQUyMsgFfLJim?cache=true" width={45} /></div>
                            <div className="title">Chair</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">20</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">4</div>
                            <div className="wop-info-name">WEEKs</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">High </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="full-body-blast-fxzdsc.html">Total Body Shape Up</a></h2>
                        <div className="author-info">
                          by Ivanna Baron
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="full-body-blast-fxzdsc.html"><img alt="Convert?crop=0,0,1772,1000&cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/I3RPgWrVTZqsmcyzLdXK/convert?crop=0,0,1772,1000&cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          Over the next 4 weeks we will be targeting the entire body to help you get in...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                            <div className="title">Dumbbells</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">10</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">2</div>
                            <div className="wop-info-name">WEEKs</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">High </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="total-body-transformation-lab-y8qei1.html">Total Body Transformation Lab</a></h2>
                        <div className="author-info">
                          by Soho Strength Lab
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="total-body-transformation-lab-y8qei1.html"><img alt="Qpehnad1s3qsghza4u9m?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/qpehnad1S3qsGHza4u9M?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          This 12-Week plan is perfect for people committed to transforming their bodie...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                            <div className="title">Dumbbells</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">50</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">12</div>
                            <div className="wop-info-name">WEEKs</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">Medium </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="train-dirty-fitness-7-day-shrink-ts83nc.html">Train Dirty Fitness - 7 Day...</a></h2>
                        <div className="author-info">
                          by Crystal Honeycutt
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="train-dirty-fitness-7-day-shrink-ts83nc.html"><img alt="Convert?crop=0,0,1771,1000&cache=true" className="display-block" src="https://www.filepicker.io/api/file/NzYy5TjBTNeFKlPcYLj6/convert?crop=0,0,1771,1000&cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          The next 7 days we focus on reviving not only with fitness but also your conf...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">6</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">1</div>
                            <div className="wop-info-name">WEEK</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">High </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="happy-and-raw-qse4ji.html">Upgrade Your Health, Diet &amp;...</a></h2>
                        <div className="author-info">
                          by Laura Dawn
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="happy-and-raw-qse4ji.html"><img alt="Qgbacxrdihhjf2heagww?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/qGbaCxRdiHHjF2HEaGww?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          Only 28 Days to a healthier, happier you! This course focuses on transitionin...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Naxoae2qxgs55ndfsasa?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nAXOaE2QXGS55nDfSAsA?cache=true" width={45} /></div>
                            <div className="title">Resistance Band</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                            <div className="title">Dumbbells</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Uis922ezquymsgffljim?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uIs922ezQUyMsgFfLJim?cache=true" width={45} /></div>
                            <div className="title">Chair</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">20</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">4</div>
                            <div className="wop-info-name">WEEKs</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">High </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="weatherproof-workouts-the-most-comprehensive-no-excuses-plan-qc9grm.html">Weatherproof Workouts - The...</a></h2>
                        <div className="author-info">
                          by Jennifer Smith
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="weatherproof-workouts-the-most-comprehensive-no-excuses-plan-qc9grm.html"><img alt="Iqrbklshqyqpr2fxzkxy?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/IQRbkLshQyqPr2fXZKXy?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          Nothing threatens to derail workout plans quite like bad weather.  From blizz...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                            <div className="title">Dumbbells</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Uis922ezquymsgffljim?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uIs922ezQUyMsgFfLJim?cache=true" width={45} /></div>
                            <div className="title">Chair</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">20</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">4</div>
                            <div className="wop-info-name">WEEKs</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">High </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="couch-to-aisle-workout-plan.html">WeddingWire's Couch to Aisl...</a></h2>
                        <div className="author-info">
                          by Fit Bottomed Girls
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="couch-to-aisle-workout-plan.html"><img alt="Koicqiasq6fxd2a2q7dg?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/koiCQIASQ6fxd2a2q7Dg?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          Starting to prep for your big day? Then, this four-week plan from WeddingWire...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Naxoae2qxgs55ndfsasa?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nAXOaE2QXGS55nDfSAsA?cache=true" width={45} /></div>
                            <div className="title">Resistance Band</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Uis922ezquymsgffljim?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uIs922ezQUyMsgFfLJim?cache=true" width={45} /></div>
                            <div className="title">Chair</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                            <div className="title">Dumbbells</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">23</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">4</div>
                            <div className="wop-info-name">WEEKs</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">High </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="ultimate-pre-wedding-workout-plan.html">WeddingWire's Ultimate Pre-...</a></h2>
                        <div className="author-info">
                          by Erin Campbell
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="ultimate-pre-wedding-workout-plan.html"><img alt="Zrdr5sqs7o98c0w6l9nj?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zRdR5sqS7O98c0w6L9nJ?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          Looking to get in shape before your wedding day? This pre-wedding workout pla...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Naxoae2qxgs55ndfsasa?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nAXOaE2QXGS55nDfSAsA?cache=true" width={45} /></div>
                            <div className="title">Resistance Band</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                            <div className="title">Dumbbells</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Uis922ezquymsgffljim?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uIs922ezQUyMsgFfLJim?cache=true" width={45} /></div>
                            <div className="title">Chair</div>
                          </div>
                          <span className="tiny">&amp; more</span>
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">41</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">8</div>
                            <div className="wop-info-name">WEEKs</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">High </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="working-moms-rock-v4ou8i.html">Working Moms Rock!</a></h2>
                        <div className="author-info">
                          by Jessica Valant
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="working-moms-rock-v4ou8i.html"><img alt="Klmgtmts6eogusizzyta?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/KlMGTmtS6EOguSIZzyTA?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          You are balancing work, family, kids, activities and appointments. If you are...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Naxoae2qxgs55ndfsasa?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nAXOaE2QXGS55nDfSAsA?cache=true" width={45} /></div>
                            <div className="title">Resistance Band</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Uis922ezquymsgffljim?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uIs922ezQUyMsgFfLJim?cache=true" width={45} /></div>
                            <div className="title">Chair</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                            <div className="title">Dumbbells</div>
                          </div>
                          <span className="tiny">&amp; more</span>
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">8</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">2</div>
                            <div className="wop-info-name">WEEKs</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">Medium </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="wop-card border-bottom">
                      <div className="panel-header">
                        <h2><a href="zen-out-copy-61oplv.html">Zen Out</a></h2>
                        <div className="author-info">
                          by Fit Bottomed Girls
                        </div>
                      </div>{/*
              */}
                      <div className="thumbnail">
                        <a href="zen-out-copy-61oplv.html"><img alt="Ftynlazhqxulqhnqoh56?cache=true" className="display-block" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/fTYnLAzhQxuLQhNQOh56?cache=true" /></a>
                      </div>{/*
              */}<div className="panel-content border-bottom">
                        <div className="wop-description border-bottom">
                          Stressed? Feeling out of sorts? Need to take some time for you to reconnect a...
                        </div>
                        <div className="row collapse icons-container">
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                            <div className="title">Yoga Mat</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Naxoae2qxgs55ndfsasa?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nAXOaE2QXGS55nDfSAsA?cache=true" width={45} /></div>
                            <div className="title">Resistance Band</div>
                          </div>
                          <div className="equipment">
                            <div className="ico"><img align="center" alt="Uis922ezquymsgffljim?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uIs922ezQUyMsgFfLJim?cache=true" width={45} /></div>
                            <div className="title">Chair</div>
                          </div>
                          <span className="tiny" />
                        </div>
                        <div className="row collapse credentials-container">
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">20</div>
                            <div className="wop-info-name">workouts</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">4</div>
                            <div className="wop-info-name">WEEKs</div>
                          </div>
                          <div className="columns large-4 small-4">
                            <div className="wop-info-value">High </div>
                            <div className="wop-info-name">
                              <div>Commitment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*add script filter, magic select*/}
          </section>
    
        
        )
    }
}

export default WorkoutPlans;