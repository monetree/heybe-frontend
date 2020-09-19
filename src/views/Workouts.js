import React from 'react'
import { loadHomeScripts } from 'utils/loadScriptsForHomePage';


class Workouts extends React.Component{

  componentDidMount(){
    document.getElementById("top-bar-main").classList.remove("expanded")
    document.getElementsByTagName('body')[0].id = 'videos_browse';
    loadHomeScripts();

  }


    render(){
        return (

          <section className="main videos-browse">
          <div className="row" id="videos-browse">
            <div className="large-9 columns" id="videos-list">
              <h1><img alt="Workouts_browse_header2" src="../assets/workout/workouts_browse_header2-5723fa6f9b592f16ce5eea1593c0a3d4.jpg" /></h1>
              <div id="list">
                <p>Ballet / Pilates</p>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/flex-fold-are1t7.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Flex & Flow thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/5IwAarsTRgax363bBdmY?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/flex-fold-are1t7.html">
                          <h2>Flex &amp; Flow</h2>
                          <div className="short-description">A chair and a stocking or resistance band are the only props you need to lengthen your spine and increase your s...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Fa3yltrftp6kfnthfc1f?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/FA3YlTrfTP6KfNthfc1f?cache=true" width={45} /></div>
                        Ballet / Pilates
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Naxoae2qxgs55ndfsasa?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nAXOaE2QXGS55nDfSAsA?cache=true" width={45} /></div>
                        Resistance Band
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">225 - 275</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">28</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/IZOjfpSoSOu1cF1wcQsl?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/flex-fold-are1t7.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/chaisesculpt-iemd5m.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="ChaiseSculpt thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/aKwyOTlQJGU8QCEnRPcQ?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/chaisesculpt-iemd5m.html">
                          <h2>ChaiseSculpt</h2>
                          <div className="short-description">A combination of pilates and ballet movements plus a little bit of strength training will tone and lengthen your...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Fa3yltrftp6kfnthfc1f?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/FA3YlTrfTP6KfNthfc1f?cache=true" width={45} /></div>
                        Ballet / Pilates
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Naxoae2qxgs55ndfsasa?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nAXOaE2QXGS55nDfSAsA?cache=true" width={45} /></div>
                        Resistance Band
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">225 - 275</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">29</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/IZOjfpSoSOu1cF1wcQsl?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/chaisesculpt-iemd5m.html">Preview Wokout</a>
                  </div>
                </div>
                <p>Barre</p>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/toning-at-the-barre-fnfmaz.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Toning At the Barre thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/AJGQUgqzQsiN1AVqzQ3K?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/toning-at-the-barre-fnfmaz.html">
                          <h2>Toning At the Barre</h2>
                          <div className="short-description">Get ready to plie and releve with a toning session at the ballet barre.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="7chltuwrsg6gtgmrevy7?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/7cHLtuwRSg6gTGmrEVY7?cache=true" width={45} /></div>
                        Barre
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Uis922ezquymsgffljim?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uIs922ezQUyMsgFfLJim?cache=true" width={45} /></div>
                        Chair
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">300 - 350</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">39</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/bLqYWImLQT2Au18kavpG?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/toning-at-the-barre-fnfmaz.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/flex-barre-total-body-express-18m369.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Flex Barre Total Body Express thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/tI7jn6dOTzmTkGrAehwx?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/flex-barre-total-body-express-18m369.html">
                          <h2>Flex Barre Total Body Express</h2>
                          <div className="short-description">A form focused, Barre-inspired total body workout with an emphasis on toning the thighs and glutes will create a...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="7chltuwrsg6gtgmrevy7?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/7cHLtuwRSg6gTGmrEVY7?cache=true" width={45} /></div>
                        Barre
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Uis922ezquymsgffljim?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uIs922ezQUyMsgFfLJim?cache=true" width={45} /></div>
                        Chair
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">250 - 300</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">24</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/VrMcuvudQ3SSCTAEMhHl?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/flex-barre-total-body-express-18m369.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/barre-glide-cardio-blvvap.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Barre Glide Cardio thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/qv9fsn4WSiiNPgPI85QF?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/barre-glide-cardio-blvvap.html">
                          <h2>Barre Glide Cardio</h2>
                          <div className="short-description">Barre, cardio and mat exercises target your thighs while building balance and stability.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="7chltuwrsg6gtgmrevy7?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/7cHLtuwRSg6gTGmrEVY7?cache=true" width={45} /></div>
                        Barre
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Uis922ezquymsgffljim?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uIs922ezQUyMsgFfLJim?cache=true" width={45} /></div>
                        Chair
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">275 - 325</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">33</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/bLqYWImLQT2Au18kavpG?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/barre-glide-cardio-blvvap.html">Preview Workout</a>
                  </div>
                </div>
                <p>Beginner Yoga</p>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/yoga-express-2u512r.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Yoga Express thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/D0oxb6icQFSzVvyP749L?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/yoga-express-2u512r.html">
                          <h2>Yoga Express</h2>
                          <div className="short-description">Work every part of your body from your toes to your head in just 30 minutes with Robert's signature yoga class.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Goupmaxdskyoi9hlys9u?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/GOupMaXdSkyoi9hLYS9U?cache=true" width={45} /></div>
                        Beginner Yoga
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                        Yoga Mat
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">150 - 200</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">31</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/O3xwkWlQTMygdmqARgql?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/yoga-express-2u512r.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/beginner-flow-1whdiv.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Beginner Flow thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/qQejaStJTsahoqyN4WQH?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/beginner-flow-1whdiv.html">
                          <h2>Beginner Flow</h2>
                          <div className="short-description">Though this workout is targeted for beginners, you can still get a lot out of this quick Broga flow session.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Goupmaxdskyoi9hlys9u?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/GOupMaXdSkyoi9hLYS9U?cache=true" width={45} /></div>
                        Beginner Yoga
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                        Yoga Mat
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">125 - 175</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">24</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/sxaaUYzSDizQ2yGCqsgD?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/beginner-flow-1whdiv.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/fusion-yoga-gdhmbx.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Fusion Yoga thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/mm0SSPlJT9WrNzZusTt9?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/fusion-yoga-gdhmbx.html">
                          <h2>Fusion Yoga</h2>
                          <div className="short-description">This is not your average yoga class. A little bit of cardio is combined with traditional poses and strength trai...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Goupmaxdskyoi9hlys9u?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/GOupMaXdSkyoi9hLYS9U?cache=true" width={45} /></div>
                        Beginner Yoga
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                        Yoga Mat
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">160 - 210</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">31</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zdJX0eQTGzPptn7AhPgt?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/fusion-yoga-gdhmbx.html">Preview Workout</a>
                  </div>
                </div>
                <p>Body Weight Sculpting</p>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/stoked-primal-m96w93.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Stoked Primal thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/1tA29GT6SlEdTwbuiifw?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/stoked-primal-m96w93.html">
                          <h2>Stoked Primal</h2>
                          <div className="short-description">GET STOKED to bring out your inner animal! This creative bodyweight workout will introduce you to unique movemen...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Uqkxq8a0trmgjbwjehqt?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uQkXQ8a0TrmgJbWjehQT?cache=true" width={45} /></div>
                        Body Weight Sculpting
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="9hrem69xsc2onrqpkmou?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/9Hrem69XSc2onRqpkmoU?cache=true" width={45} /></div>
                        None
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">215 - 265</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">22</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/wGhHlZplTPyFeZDiYH6Q?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/stoked-primal-m96w93.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/strength-conditioning-core-legs-yjixrs.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Strength Conditioning: Core & Legs thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/Bbb2Zw3sS20cJOp1GSAo?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/strength-conditioning-core-legs-yjixrs.html">
                          <h2>Strength Conditioning: Core &amp; Legs</h2>
                          <div className="short-description">This sculpting workout will target your core, obliques, and legs through both standing and seated dance-inspired...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Uqkxq8a0trmgjbwjehqt?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uQkXQ8a0TrmgJbWjehQT?cache=true" width={45} /></div>
                        Body Weight Sculpting
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                        Yoga Mat
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">150 - 200</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">26</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/hEdGYcYSnyozEO7YSvmV?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/strength-conditioning-core-legs-yjixrs.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/total-body-toning-ahyl98.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Total Body Toning thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/pBBcFuARMJbTkIPQfIgM?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/total-body-toning-ahyl98.html">
                          <h2>Total Body Toning</h2>
                          <div className="short-description">Target the major muscle groups with exercises that become increasingly more difficult.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Uqkxq8a0trmgjbwjehqt?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uQkXQ8a0TrmgJbWjehQT?cache=true" width={45} /></div>
                        Body Weight Sculpting
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                        Yoga Mat
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">175 - 225</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">29</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/B67J8UHQ8i5xPUkeFoOT?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/total-body-toning-ahyl98.html">Preview Workout</a>
                  </div>
                </div>
                <p>Bootcamp</p>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/slim-strong-drills-ghdcmz.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Slim & Strong: Drills thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/OzkTbdSG6m7sKzdJaQO3?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/slim-strong-drills-ghdcmz.html">
                          <h2>Slim &amp; Strong: Drills</h2>
                          <div className="short-description">This intense bootcamp workout features five exercises for one minute each for five rounds of sweat-inducing drills.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Vac9ignso0n3qc4iwo8g?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/VAc9IGNSO0N3Qc4IWo8g?cache=true" width={45} /></div>
                        Bootcamp
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                        Yoga Mat
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">350 - 400</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">30</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/RQlZXQGSWgNe0YevT3Kw?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/slim-strong-drills-ghdcmz.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/climb-squat-push-sweat-f27x79.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Climb, Squat, Push, Sweat! thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/UvyrkEM8QZ2WRR6MwR5T?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/climb-squat-push-sweat-f27x79.html">
                          <h2>Climb, Squat, Push, Sweat!</h2>
                          <div className="short-description">You'll complete 300 mountain climbers, 200 squats, and 100 push ups (all different kinds) in this express 15-min...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Vac9ignso0n3qc4iwo8g?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/VAc9IGNSO0N3Qc4IWo8g?cache=true" width={45} /></div>
                        Bootcamp
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                        Yoga Mat
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">200 - 250</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">18</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/RQlZXQGSWgNe0YevT3Kw?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/climb-squat-push-sweat-f27x79.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/cardio-drills-zklluz.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Cardio Drills thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/h5NfggXfTWOppk9DZmIg?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/cardio-drills-zklluz.html">
                          <h2>Cardio Drills</h2>
                          <div className="short-description">30 exercises for one minute each with all-out effort turn this workout into an intense sweat session.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Vac9ignso0n3qc4iwo8g?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/VAc9IGNSO0N3Qc4IWo8g?cache=true" width={45} /></div>
                        Bootcamp
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="9hrem69xsc2onrqpkmou?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/9Hrem69XSc2onRqpkmoU?cache=true" width={45} /></div>
                        None
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">400 - 450</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">35</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/RQlZXQGSWgNe0YevT3Kw?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/cardio-drills-zklluz.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/kickstarter-n8799k.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Sprint: Kickstarter thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/C2iMmokQoyeHRXM6tV9Q?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/kickstarter-n8799k.html">
                          <h2>Sprint: Kickstarter</h2>
                          <div className="short-description">Kickstart your day utilizing various Mind/Body, Agility &amp; Strength, and High-intensity moves to get those energy...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Vac9ignso0n3qc4iwo8g?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/VAc9IGNSO0N3Qc4IWo8g?cache=true" width={45} /></div>
                        Bootcamp
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                        Dumbbells
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">155 - 205</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">16</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/DBFzA4W3Q2jnlle8xFsw?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/kickstarter-n8799k.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/butt-kicking-extreme-boot-camp-f7uw58.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Butt-Kicking Extreme Boot Camp thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/yNYved5RSLCUHOxj5dDs?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/butt-kicking-extreme-boot-camp-f7uw58.html">
                          <h2>Butt-Kicking Extreme Boot Camp</h2>
                          <div className="short-description">This extremely challenging total body routine is for the advanced athletes who want to test their physical and m...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Vac9ignso0n3qc4iwo8g?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/VAc9IGNSO0N3Qc4IWo8g?cache=true" width={45} /></div>
                        Bootcamp
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                        Dumbbells
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">550 - 600</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">46</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/RQlZXQGSWgNe0YevT3Kw?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/butt-kicking-extreme-boot-camp-f7uw58.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/double-header-cardio-yoga-mashup-g09dio.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Double Header: Cardio Yoga Mashup thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/xs8bo5thR2Wws6MndG2M?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/double-header-cardio-yoga-mashup-g09dio.html">
                          <h2>Double Header: Cardio Yoga Mashup</h2>
                          <div className="short-description">This double header combines Cardio Drills and Advanced Yoga to give you a cardio blast and an active cool down.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Vac9ignso0n3qc4iwo8g?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/VAc9IGNSO0N3Qc4IWo8g?cache=true" width={45} /></div>
                        Bootcamp
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                        Yoga Mat
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">600 - 650</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">56</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/RQlZXQGSWgNe0YevT3Kw?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/double-header-cardio-yoga-mashup-g09dio.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/military-bodyweight-conditioning-4tvqtq.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Trooper Bodyweight Conditioning thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/yyTUDvpMSGiDVDzVuphs?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/military-bodyweight-conditioning-4tvqtq.html">
                          <h2>Trooper Bodyweight Conditioning</h2>
                          <div className="short-description">Use just your body weight in this high intensity interval training session to challenge your cardiovascular syst...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Vac9ignso0n3qc4iwo8g?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/VAc9IGNSO0N3Qc4IWo8g?cache=true" width={45} /></div>
                        Bootcamp
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                        Yoga Mat
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">275 - 325</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">27</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/LUY4NImQoW6DAU9nlWqA?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/military-bodyweight-conditioning-4tvqtq.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/why-get-hit-when-you-can-get-phit-vpo970.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Why Get HIIT When You Can Get PHIT thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/eOE5HOYvQNSgUcw48OVV?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/why-get-hit-when-you-can-get-phit-vpo970.html">
                          <h2>Why Get HIIT When You Can Get PHIT</h2>
                          <div className="short-description">This workout combines cardio and pilates exercises to tone your core and sculpt long, lean muscles.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Vac9ignso0n3qc4iwo8g?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/VAc9IGNSO0N3Qc4IWo8g?cache=true" width={45} /></div>
                        Bootcamp
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="9oooewq7sg6akywg6ww8?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/9OOOewQ7SG6AkYWg6WW8?cache=true" width={45} /></div>
                        Towel
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">275 - 325</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">29</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/kh41zy1NR52S1S5GACAa?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/why-get-hit-when-you-can-get-phit-vpo970.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/mind-body-meltdown-73i1jp.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Endurance: Mind/Body Meltdown thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/TQIIE1zMRtSY0zdXB8C7?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/mind-body-meltdown-73i1jp.html">
                          <h2>Endurance: Mind/Body Meltdown</h2>
                          <div className="short-description">Reap the benefits of yoga and Pilates with this full-body workout focused on strengthening your core while impro...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Vac9ignso0n3qc4iwo8g?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/VAc9IGNSO0N3Qc4IWo8g?cache=true" width={45} /></div>
                        Bootcamp
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                        Yoga Mat
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">125 - 175</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">16</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/DBFzA4W3Q2jnlle8xFsw?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/mind-body-meltdown-73i1jp.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/core-crusher-rfjqkg.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Sprint: Core Crusher thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/a3lODgThSWOAVLYdtGav/convert?crop=0,0,1771,1002&cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/core-crusher-rfjqkg.html">
                          <h2>Sprint: Core Crusher</h2>
                          <div className="short-description">Strengthen your abs and back through various high-intensity &amp; recovery moves in only 15 minutes. </div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Vac9ignso0n3qc4iwo8g?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/VAc9IGNSO0N3Qc4IWo8g?cache=true" width={45} /></div>
                        Bootcamp
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                        Dumbbells
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">140 - 190</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">15</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/DBFzA4W3Q2jnlle8xFsw?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/core-crusher-rfjqkg.html">Preview Workout</a>
                  </div>
                </div>
                <p>Cardio Barre</p>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/total-body-trx-barre-h4fbfu.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Double Header: Total Body TRX + Barre  thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/vGMFsvSeo5rh59Gh0AxE?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/total-body-trx-barre-h4fbfu.html">
                          <h2>Double Header: Total Body TRX + Barre </h2>
                          <div className="short-description">This double header combines Flex TRX Inspired Workout and Flex Barre Total Body Express for an hour long, total ...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Rjdqhsksshikfhuc2dws?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/rjDQHSKsSHiKFHUC2dwS?cache=true" width={45} /></div>
                        Cardio Barre
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Uis922ezquymsgffljim?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uIs922ezQUyMsgFfLJim?cache=true" width={45} /></div>
                        Chair
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">475 - 525</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">53</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/VrMcuvudQ3SSCTAEMhHl?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/total-body-trx-barre-h4fbfu.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/flex-barre-cardio-infused-9btnhf.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Flex Barre Cardio Infused thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/UE1QElfiRKKjb1VEcS0E?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/flex-barre-cardio-infused-9btnhf.html">
                          <h2>Flex Barre Cardio Infused</h2>
                          <div className="short-description">An innovative barre routine designed to make you sweat, this workout includes bursts of cardio to get your heart...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Rjdqhsksshikfhuc2dws?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/rjDQHSKsSHiKFHUC2dwS?cache=true" width={45} /></div>
                        Cardio Barre
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Uis922ezquymsgffljim?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uIs922ezQUyMsgFfLJim?cache=true" width={45} /></div>
                        Chair
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">300 - 350</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">31</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/VrMcuvudQ3SSCTAEMhHl?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/flex-barre-cardio-infused-9btnhf.html">Preview Workout</a>
                  </div>
                </div>
                <p>Cardio Kickbox</p>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/hiit-it-and-quit-it-nx2z0c.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="HIIT It and Quit It thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/RKiHxGqQJyZlOCQbbA6o?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/hiit-it-and-quit-it-nx2z0c.html">
                          <h2>HIIT It and Quit It</h2>
                          <div className="short-description">This quick and high energy workout perfectly combines kickboxing with HIIT drills for that metabolic boost and t...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Pcnstamt0u7yfwbcd2pz?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/PcNSTAMT0u7YfWBCD2PZ?cache=true" width={45} /></div>
                        Cardio Kickbox
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="9hrem69xsc2onrqpkmou?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/9Hrem69XSc2onRqpkmoU?cache=true" width={45} /></div>
                        None
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">325 - 375</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">29</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/wjekGgeT7C2Ic9lcJcNw?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/hiit-it-and-quit-it-nx2z0c.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/off-the-grid-9ugm9o.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Off the Grid thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zBUIe6R3i1IXCYKuRxVA?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/off-the-grid-9ugm9o.html">
                          <h2>Off the Grid</h2>
                          <div className="short-description">Go “off the grid” with punch and kick combinations that work your upper and lower body while improving your spee...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Pcnstamt0u7yfwbcd2pz?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/PcNSTAMT0u7YfWBCD2PZ?cache=true" width={45} /></div>
                        Cardio Kickbox
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="9hrem69xsc2onrqpkmou?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/9Hrem69XSc2onRqpkmoU?cache=true" width={45} /></div>
                        None
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">325 - 375</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">29</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/wjekGgeT7C2Ic9lcJcNw?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/off-the-grid-9ugm9o.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/double-header-total-body-urban-kick-3kppqe.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Double Header: Total Body UrbanKick thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/yEFQGsHXRUOvdY4fRT0O?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/double-header-total-body-urban-kick-3kppqe.html">
                          <h2>Double Header: Total Body UrbanKick</h2>
                          <div className="short-description">This double-header combines Drop It Like A Squat &amp; Mama Said Knock You Out for a longer, total body workout.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Pcnstamt0u7yfwbcd2pz?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/PcNSTAMT0u7YfWBCD2PZ?cache=true" width={45} /></div>
                        Cardio Kickbox
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="9hrem69xsc2onrqpkmou?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/9Hrem69XSc2onRqpkmoU?cache=true" width={45} /></div>
                        None
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">575 - 625</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">54</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/wjekGgeT7C2Ic9lcJcNw?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/double-header-total-body-urban-kick-3kppqe.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/mama-said-knock-you-out-nd3dlz.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Mama Said Knock You Out thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/36QYryljS9G1sykeezof?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/mama-said-knock-you-out-nd3dlz.html">
                          <h2>Mama Said Knock You Out</h2>
                          <div className="short-description">Knock it out with dynamic punch combinations in this powerful and high energy workout.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Pcnstamt0u7yfwbcd2pz?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/PcNSTAMT0u7YfWBCD2PZ?cache=true" width={45} /></div>
                        Cardio Kickbox
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="9hrem69xsc2onrqpkmou?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/9Hrem69XSc2onRqpkmoU?cache=true" width={45} /></div>
                        None
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">275 - 325</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">25</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/wjekGgeT7C2Ic9lcJcNw?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/mama-said-knock-you-out-nd3dlz.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/double-dog-dare-le8e9m.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Double Dog Dare thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/fQZwq1DRTOU68U7umF0P?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/double-dog-dare-le8e9m.html">
                          <h2>Double Dog Dare</h2>
                          <div className="short-description">Full of doubles, this dynamic kickboxing workout will improve your power with punch and kick combinations.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Pcnstamt0u7yfwbcd2pz?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/PcNSTAMT0u7YfWBCD2PZ?cache=true" width={45} /></div>
                        Cardio Kickbox
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="9hrem69xsc2onrqpkmou?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/9Hrem69XSc2onRqpkmoU?cache=true" width={45} /></div>
                        None
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">275 - 325</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">26</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/wjekGgeT7C2Ic9lcJcNw?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/double-dog-dare-le8e9m.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/double-header-urban-kick-combo-blast-bon1lv.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Double Header: UrbanKick Combo Blast thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/rLo3GeGsTaiuGV3PPbhg?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/double-header-urban-kick-combo-blast-bon1lv.html">
                          <h2>Double Header: UrbanKick Combo Blast</h2>
                          <div className="short-description">This double-header combines Double Dog Dare &amp; Off the Grid for a longer, total body workout.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Pcnstamt0u7yfwbcd2pz?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/PcNSTAMT0u7YfWBCD2PZ?cache=true" width={45} /></div>
                        Cardio Kickbox
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="9hrem69xsc2onrqpkmou?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/9Hrem69XSc2onRqpkmoU?cache=true" width={45} /></div>
                        None
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">625 - 675</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">56</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/wjekGgeT7C2Ic9lcJcNw?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/double-header-urban-kick-combo-blast-bon1lv.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/double-header-bootcamp-kickbox-se2nfa.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Double Header: Bootcamp Kickbox  thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/xtHcHq8eSUqwWpPrfTZo?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/double-header-bootcamp-kickbox-se2nfa.html">
                          <h2>Double Header: Bootcamp Kickbox </h2>
                          <div className="short-description">This double header combines Climb, Squat, Push, Sweat and Mama Said Knock You Out for a full hour of high-energy...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Pcnstamt0u7yfwbcd2pz?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/PcNSTAMT0u7YfWBCD2PZ?cache=true" width={45} /></div>
                        Cardio Kickbox
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                        Yoga Mat
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">500 - 550</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">43</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/RQlZXQGSWgNe0YevT3Kw?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/double-header-bootcamp-kickbox-se2nfa.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/gritty-cardio-kickbox-3ga4zj.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Gritty Cardio Kickbox thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/sH3FcLZcRTiqZvRlhdnH?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/gritty-cardio-kickbox-3ga4zj.html">
                          <h2>Gritty Cardio Kickbox</h2>
                          <div className="short-description">Punches, jabs, athletic drills and everything in between are set to a heart-pumping beat that'll motivate your w...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Pcnstamt0u7yfwbcd2pz?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/PcNSTAMT0u7YfWBCD2PZ?cache=true" width={45} /></div>
                        Cardio Kickbox
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="9hrem69xsc2onrqpkmou?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/9Hrem69XSc2onRqpkmoU?cache=true" width={45} /></div>
                        None
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">350 - 400</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">34</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/NdHaayXjTaWfG2mgeHuB?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/gritty-cardio-kickbox-3ga4zj.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/drop-it-like-a-squat-wz48b1.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Drop it Like a Squat thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nSoONhQSDCNsEE4Znvng?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/drop-it-like-a-squat-wz48b1.html">
                          <h2>Drop it Like a Squat</h2>
                          <div className="short-description">Get ready to kick and squat with this high energy kickboxing workout that will leave you squatting for more.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Pcnstamt0u7yfwbcd2pz?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/PcNSTAMT0u7YfWBCD2PZ?cache=true" width={45} /></div>
                        Cardio Kickbox
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="9hrem69xsc2onrqpkmou?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/9Hrem69XSc2onRqpkmoU?cache=true" width={45} /></div>
                        None
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">300 - 350</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">28</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/wjekGgeT7C2Ic9lcJcNw?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/drop-it-like-a-squat-wz48b1.html">Preview Workout</a>
                  </div>
                </div>
                <p>Cardio Yoga</p>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/express-cardio-flow-jpzl7.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Express Cardio Flow thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/RIHxKk09Sl2WWgWtE4AY?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/express-cardio-flow-jpzl7.html">
                          <h2>Express Cardio Flow</h2>
                          <div className="short-description">With a fast-paced flow and strong poses, this quick workout will get you sweating in minutes with only tradition...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="6qamj6ferbuuwcmlke7w?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/6qaMJ6feRbuuWcmlkE7w?cache=true" width={45} /></div>
                        Cardio Yoga
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                        Yoga Mat
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">50 - 100</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">12</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/sxaaUYzSDizQ2yGCqsgD?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/express-cardio-flow-jpzl7.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/advanced-fusion-yoga-omtjzl.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Advanced Fusion Yoga thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/4gIxbx7pSAG4c6YCJB33?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/advanced-fusion-yoga-omtjzl.html">
                          <h2>Advanced Fusion Yoga</h2>
                          <div className="short-description">Challenging positions and deep stretches turn traditional yoga moves into a more demanding session.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="6qamj6ferbuuwcmlke7w?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/6qaMJ6feRbuuWcmlkE7w?cache=true" width={45} /></div>
                        Cardio Yoga
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                        Yoga Mat
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">175 - 225</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">28</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zdJX0eQTGzPptn7AhPgt?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/advanced-fusion-yoga-omtjzl.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/crossflowx-1-tx842s.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="CrossFlowX thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/ia1kp79TVu6qVi6EGWyP?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/crossflowx-1-tx842s.html">
                          <h2>CrossFlowX</h2>
                          <div className="short-description">This mashup of yoga flow, cardio intervals and kunilini (repetitions and breathing) can all be done on the space...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="6qamj6ferbuuwcmlke7w?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/6qaMJ6feRbuuWcmlkE7w?cache=true" width={45} /></div>
                        Cardio Yoga
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                        Yoga Mat
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">225 - 275</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">32</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/W9KfwtB0RuGAXe7DBMqs?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/crossflowx-1-tx842s.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/crossflowx-2-ljuf53.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="CrossFlowX 2 thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/Lpyosg5Q324aP20eJZWA?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/crossflowx-2-ljuf53.html">
                          <h2>CrossFlowX 2</h2>
                          <div className="short-description">This mashup of yoga flow, cardio intervals and kunilini (repetitions and breathing) can all be done on the space...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="6qamj6ferbuuwcmlke7w?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/6qaMJ6feRbuuWcmlkE7w?cache=true" width={45} /></div>
                        Cardio Yoga
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                        Yoga Mat
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">225 - 275</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">30</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/W9KfwtB0RuGAXe7DBMqs?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/crossflowx-2-ljuf53.html">Preview Workout</a>
                  </div>
                </div>
                <p>Core</p>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/abliterating-pilates-core-y23hr3.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="ABliterating Pilates Core thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/kcsDEpP1SoCrpWBMrhy5?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/abliterating-pilates-core-y23hr3.html">
                          <h2>ABliterating Pilates Core</h2>
                          <div className="short-description">You will stretch your body out longer than ever before with this core-focused pilates workout.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Huherufgsvqzjmouugks?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/huHERUfGSVqZJmoUuGkS?cache=true" width={45} /></div>
                        Core
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                        Yoga Mat
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">225 - 275</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">27</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nCo4buBmQOy9Ew0xKt9A?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/abliterating-pilates-core-y23hr3.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/core-abs-express-99h4je.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Core Abs Express thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/xZHV4n4JRGCmov9kwaax?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/core-abs-express-99h4je.html">
                          <h2>Core Abs Express</h2>
                          <div className="short-description">Get ready to show off your abs after this pilates workout that focuses on your core.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Huherufgsvqzjmouugks?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/huHERUfGSVqZJmoUuGkS?cache=true" width={45} /></div>
                        Core
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                        Yoga Mat
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">210 - 260</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">33</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/BOstUhgyTXaRLKkOZZPN?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/core-abs-express-99h4je.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/rexist360-target-glutes-abs-ybgtgn.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="ReXist360: Target Glutes & Abs  thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/NytsZIJrQaCUsVfLBtAp?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/rexist360-target-glutes-abs-ybgtgn.html">
                          <h2>ReXist360: Target Glutes &amp; Abs </h2>
                          <div className="short-description">Take targeted toning to the next level with 25 exercises in 25 minutes. ReXist360 bands intensify targeted glute...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Huherufgsvqzjmouugks?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/huHERUfGSVqZJmoUuGkS?cache=true" width={45} /></div>
                        Core
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Omn4jr7psr6m9qapwhqd?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/oMn4Jr7PSr6M9QAPWHqd?cache=true" width={45} /></div>
                        Re Xist360 Bands
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">275 - 325</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">31</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uoyl5L11TodixtOE53hI?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/rexist360-target-glutes-abs-ybgtgn.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/extreme-core-challenge-9ucstr.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Extreme Core Challenge thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/OGrklU10T86VWI6f8grj?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/extreme-core-challenge-9ucstr.html">
                          <h2>Extreme Core Challenge</h2>
                          <div className="short-description">This intense core workout will make you sweat but power through to feel your torso and back getting stronger.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Huherufgsvqzjmouugks?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/huHERUfGSVqZJmoUuGkS?cache=true" width={45} /></div>
                        Core
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                        Yoga Mat
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">150 - 200</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">19</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/ORYBcsiHSeKOmbum1kFA?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/extreme-core-challenge-9ucstr.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/stoked-endurance-core-dzr8oj.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Stoked Endurance Core thumbnail image" fit="scale" height={156} src="https://www.filepicker.io/api/file/J8r9lbgOTOOloJ4F4cPw?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/stoked-endurance-core-dzr8oj.html">
                          <h2>Stoked Endurance Core</h2>
                          <div className="short-description">GET STOKED for an all out assault on your abs. Embrace the burn that sparks change during this 20 minute action-...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Huherufgsvqzjmouugks?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/huHERUfGSVqZJmoUuGkS?cache=true" width={45} /></div>
                        Core
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                        Yoga Mat
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">185 - 235</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">21</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/wGhHlZplTPyFeZDiYH6Q?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/stoked-endurance-core-dzr8oj.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/stoked-crunchless-core-jvx5fx.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Stoked Crunchless Core thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/T6C3uVxZRRqItMnzieRI?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/stoked-crunchless-core-jvx5fx.html">
                          <h2>Stoked Crunchless Core</h2>
                          <div className="short-description">GET STOKED to tap into the powerhouse of your body with unique crunch-free core exercises. Think standing, dynam...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Huherufgsvqzjmouugks?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/huHERUfGSVqZJmoUuGkS?cache=true" width={45} /></div>
                        Core
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                        Dumbbells
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">225 - 275</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">25</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/wGhHlZplTPyFeZDiYH6Q?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/stoked-crunchless-core-jvx5fx.html">Preview Workout</a>
                  </div>
                </div>
                <p>Dance (Ethnic) </p>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/the-bollywood-workout-arm3kp.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="The Bollywood Workout thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/chceuHZjSOGQpNuIVXqY?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/the-bollywood-workout-arm3kp.html">
                          <h2>The Bollywood Workout</h2>
                          <div className="short-description">Let your personality shine with this dance routine set to Bollywood beats for a cardio workout with a bit of swag.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Ruazvyjrveldfum8olkw?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/RuaZvyjRVeldFUm8OLKw?cache=true" width={45} /></div>
                        Dance (Ethnic) 
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="9hrem69xsc2onrqpkmou?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/9Hrem69XSc2onRqpkmoU?cache=true" width={45} /></div>
                        None
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">325 - 375</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">32</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nmSfVLMFRnmzwXhI0A4x?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/the-bollywood-workout-arm3kp.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/bhangra-burn-w9xtda.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Bhangra Burn thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/Prr4v22sSKT6vVEUdIsO?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/bhangra-burn-w9xtda.html">
                          <h2>Bhangra Burn</h2>
                          <div className="short-description">Spice up your cardio routine with Gail's Bhangra-inspired dance workout.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Ruazvyjrveldfum8olkw?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/RuaZvyjRVeldFUm8OLKw?cache=true" width={45} /></div>
                        Dance (Ethnic) 
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="9hrem69xsc2onrqpkmou?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/9Hrem69XSc2onRqpkmoU?cache=true" width={45} /></div>
                        None
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">320 - 370</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">28</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/vNpGORPbQ4aAPexMTb42?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/bhangra-burn-w9xtda.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/bollywood-blast-ebjk2i.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Bollywood Blast thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/mDcNj5CHSt6SMWEimsPW?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/bollywood-blast-ebjk2i.html">
                          <h2>Bollywood Blast</h2>
                          <div className="short-description">Get ready to get your Bollywood grove on and burn tons of calories on the way.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Ruazvyjrveldfum8olkw?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/RuaZvyjRVeldFUm8OLKw?cache=true" width={45} /></div>
                        Dance (Ethnic) 
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="9hrem69xsc2onrqpkmou?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/9Hrem69XSc2onRqpkmoU?cache=true" width={45} /></div>
                        None
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">335 - 385</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">29</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/vNpGORPbQ4aAPexMTb42?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/bollywood-blast-ebjk2i.html">Preview Workout</a>
                  </div>
                </div>
                <p>Dance (Jazz)</p>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/burlesque-strength-z6l42l.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Burlesque & Strength thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/1cEhhxQOSgzPWWsXAadA?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/burlesque-strength-z6l42l.html">
                          <h2>Burlesque &amp; Strength</h2>
                          <div className="short-description">Focus on triceps, glutes, thighs and core; everything you need for a sexy body.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Lhdnnlvtrqofmb9csayv?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/LHdNNlvtRqOFmB9CSayV?cache=true" width={45} /></div>
                        Dance (Jazz)
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Uis922ezquymsgffljim?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uIs922ezQUyMsgFfLJim?cache=true" width={45} /></div>
                        Chair
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">175 - 225</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">30</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/B67J8UHQ8i5xPUkeFoOT?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/burlesque-strength-z6l42l.html">Preview Workout</a>
                  </div>
                </div>
                <p>Dance (Pop)</p>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/signature-dance-cardio-workout-ppfkey.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Signature Dance Cardio Workout thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/PmC3u9DxSkGsF066Y66v?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/signature-dance-cardio-workout-ppfkey.html">
                          <h2>Signature Dance Cardio Workout</h2>
                          <div className="short-description">Follow fun choreography in this cardio-dance routine that'll get your heart pumping.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="He24f1vztnctmmoi9zex?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/hE24F1vzTnCtmMoI9zEX?cache=true" width={45} /></div>
                        Dance (Pop)
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="9hrem69xsc2onrqpkmou?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/9Hrem69XSc2onRqpkmoU?cache=true" width={45} /></div>
                        None
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">325 - 375</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">35</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/Skagp8z5RaaLaJHELtH3?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/signature-dance-cardio-workout-ppfkey.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/shrink-session-mind-body-f79e6p.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Shrink Session: Mind & Body thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/OI55McnTqCUzqfmhNKSw?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/shrink-session-mind-body-f79e6p.html">
                          <h2>Shrink Session: Mind &amp; Body</h2>
                          <div className="short-description">This dance workout is all about resistance and resilience with powerful mantras that'll motivate you to finish s...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="He24f1vztnctmmoi9zex?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/hE24F1vzTnCtmMoI9zEX?cache=true" width={45} /></div>
                        Dance (Pop)
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="9hrem69xsc2onrqpkmou?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/9Hrem69XSc2onRqpkmoU?cache=true" width={45} /></div>
                        None
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">325 - 375</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">35</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/Skagp8z5RaaLaJHELtH3?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/shrink-session-mind-body-f79e6p.html">Preview Workout</a>
                  </div>
                </div>
                <p>HIIT</p>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/fast-furious-me088.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Tempo: Fast & Furious thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/aNG1N3bjQMSWso6YUxUZ?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/fast-furious-me088.html">
                          <h2>Tempo: Fast &amp; Furious</h2>
                          <div className="short-description">Get in and out with this 15-minute, full-body workout combining Mind/Body, Agility &amp; Strength, and High-intensit...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="6cyggbovr9aykgqlabwb?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/6CyggBovR9aYKgQlabwB?cache=true" width={45} /></div>
                        HIIT
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                        Dumbbells
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">155 - 205</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">15</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/DBFzA4W3Q2jnlle8xFsw?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/fast-furious-me088.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/deck-of-cards-workout-jk0o8b.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Deck of Cards Workout thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/Al3vEQAIToK8l06506LA?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/deck-of-cards-workout-jk0o8b.html">
                          <h2>Deck of Cards Workout</h2>
                          <div className="short-description">Get an intense workout in just twenty minutes using only your body weight.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="6cyggbovr9aykgqlabwb?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/6CyggBovR9aYKgQlabwB?cache=true" width={45} /></div>
                        HIIT
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                        Yoga Mat
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">225 - 275</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">19</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/GS2nVhkQQ2jHaG4x0Ab7?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/deck-of-cards-workout-jk0o8b.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/the-throwback-challenge-7xa2uw.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="The Throwback Challenge thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/QH8s9JwQL3RluRzudqiQ?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/the-throwback-challenge-7xa2uw.html">
                          <h2>The Throwback Challenge</h2>
                          <div className="short-description">Find a motivation buddy and workout together with this session that'll have you competing against the clock.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="6cyggbovr9aykgqlabwb?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/6CyggBovR9aYKgQlabwB?cache=true" width={45} /></div>
                        HIIT
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                        Yoga Mat
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">250 - 300</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">27</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/5F8XaNT3mHjhiN7vxRbA?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/the-throwback-challenge-7xa2uw.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/fat-fighter-x8vzy4.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Tempo: Fat Fighter thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/27S82abqQ86BWJK1vH3z?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/fat-fighter-x8vzy4.html">
                          <h2>Tempo: Fat Fighter</h2>
                          <div className="short-description">Rev up your furnace with this circuit-based, full-body workout to skyrocket your fat-burning potential up to 48 ...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="6cyggbovr9aykgqlabwb?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/6CyggBovR9aYKgQlabwB?cache=true" width={45} /></div>
                        HIIT
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                        Dumbbells
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">155 - 205</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">16</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/DBFzA4W3Q2jnlle8xFsw?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/fat-fighter-x8vzy4.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/simple-but-not-easy-circuit-l44e8c.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Simple but Not Easy Circuit thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/iGR6Yv64TVGnDYPtJvzu?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/simple-but-not-easy-circuit-l44e8c.html">
                          <h2>Simple but Not Easy Circuit</h2>
                          <div className="short-description">Exhaust every muscle group in just 20 minutes with 25-second interval drills.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="6cyggbovr9aykgqlabwb?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/6CyggBovR9aYKgQlabwB?cache=true" width={45} /></div>
                        HIIT
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                        Yoga Mat
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">250 - 300</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">20</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/GS2nVhkQQ2jHaG4x0Ab7?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/simple-but-not-easy-circuit-l44e8c.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/flex-trx-inspired-workout-4v5fs.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Flex TRX Inspired Workout thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/MyenYSdjR0WM1pGOkUQt?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/flex-trx-inspired-workout-4v5fs.html">
                          <h2>Flex TRX Inspired Workout</h2>
                          <div className="short-description">This TRX-inspired HIIT workout is high energy and high power as you will use your own body weight as resistance ...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="6cyggbovr9aykgqlabwb?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/6CyggBovR9aYKgQlabwB?cache=true" width={45} /></div>
                        HIIT
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                        Yoga Mat
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">325 - 375</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">29</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/VrMcuvudQ3SSCTAEMhHl?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/flex-trx-inspired-workout-4v5fs.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/hiit-with-rexist360-gt25j8.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="HIIT with ReXist360  thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/Ik44ZtquRgWxzsibm7Qh?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/hiit-with-rexist360-gt25j8.html">
                          <h2>HIIT with ReXist360 </h2>
                          <div className="short-description">Jump, dive and dip to burn a ton of calories with ReXist360's new revolutionary patented resistance-gear product.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="6cyggbovr9aykgqlabwb?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/6CyggBovR9aYKgQlabwB?cache=true" width={45} /></div>
                        HIIT
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Omn4jr7psr6m9qapwhqd?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/oMn4Jr7PSr6M9QAPWHqd?cache=true" width={45} /></div>
                        Re Xist360 Bands
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">325 - 375</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">31</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uoyl5L11TodixtOE53hI?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/hiit-with-rexist360-gt25j8.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/metcon-lab-wvlbd8.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="MetCon Lab thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/YosocpRqRkOboVXC1nJu?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/metcon-lab-wvlbd8.html">
                          <h2>MetCon Lab</h2>
                          <div className="short-description">Andy adds his creative flare to six dynamic exercises that become increasingly challenging as you progress throu...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="6cyggbovr9aykgqlabwb?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/6CyggBovR9aYKgQlabwB?cache=true" width={45} /></div>
                        HIIT
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                        Dumbbells
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">350 - 400</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">28</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/iFf3u7SRZKt244POBpnA?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/metcon-lab-wvlbd8.html">Preview Workout</a>
                  </div>
                </div>
                <p>Nutrition</p>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/fat-burning-101-gsw4we.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Fat-Burning 101 thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/xWo3OCZTbCmg2jcyyWGw?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/fat-burning-101-gsw4we.html">
                          <h2>Fat-Burning 101</h2>
                          <div className="short-description">Weight loss is 80% nutrition based. Ariane provides some helpful tips to improve your diet in this segment.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Ecvaecbtbp6u6zwwjuax?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/EcvAecbTbp6U6zWWJuAx?cache=true" width={45} /></div>
                        Nutrition
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="9hrem69xsc2onrqpkmou?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/9Hrem69XSc2onRqpkmoU?cache=true" width={45} /></div>
                        None
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">N/A</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">11</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/RQlZXQGSWgNe0YevT3Kw?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/fat-burning-101-gsw4we.html">Preview Workout</a>
                  </div>
                </div>
                <p>Pilates</p>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/double-header-pilates-stretch-yoralq.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Double Header: Pilates & Stretch thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/0asKnLUKSKS04OEk30xw/convert?crop=0,0,1770,1000&cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/double-header-pilates-stretch-yoralq.html">
                          <h2>Double Header: Pilates &amp; Stretch</h2>
                          <div className="short-description">This double header combines The Classic Pilates Body &amp; Dynamic Stretch to sculpt, lengthen and stretch your musc...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Aynzj9fvsuiixjido6yu?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/aYNzJ9FvSUiixjiDo6yU?cache=true" width={45} /></div>
                        Pilates
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Naxoae2qxgs55ndfsasa?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nAXOaE2QXGS55nDfSAsA?cache=true" width={45} /></div>
                        Resistance Band
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">295 - 345</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">46</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/BOstUhgyTXaRLKkOZZPN?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/double-header-pilates-stretch-yoralq.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/flexpilates-upper-body-mc1t2y.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="FlexPilates Upper Body thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/2QuGCk3SAFmjaPwkQxww?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/flexpilates-upper-body-mc1t2y.html">
                          <h2>FlexPilates Upper Body</h2>
                          <div className="short-description">Using a theraband to simulate the resistance of a reformer machine, this high energy and form-focused Pilates wo...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Aynzj9fvsuiixjido6yu?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/aYNzJ9FvSUiixjiDo6yU?cache=true" width={45} /></div>
                        Pilates
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Naxoae2qxgs55ndfsasa?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nAXOaE2QXGS55nDfSAsA?cache=true" width={45} /></div>
                        Resistance Band
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">250 - 300</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">31</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/VrMcuvudQ3SSCTAEMhHl?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/flexpilates-upper-body-mc1t2y.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/flexpilates-lower-body-b5rpxe.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="FlexPilates Lower Body thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/LEvkqxCTCOsS6IvGC5j9?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/flexpilates-lower-body-b5rpxe.html">
                          <h2>FlexPilates Lower Body</h2>
                          <div className="short-description">Combining lengthening and toning Pilates exercises with conditioning body weight and functional training using j...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Aynzj9fvsuiixjido6yu?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/aYNzJ9FvSUiixjiDo6yU?cache=true" width={45} /></div>
                        Pilates
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="9oooewq7sg6akywg6ww8?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/9OOOewQ7SG6AkYWg6WW8?cache=true" width={45} /></div>
                        Towel
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">225 - 275</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">29</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/VrMcuvudQ3SSCTAEMhHl?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/flexpilates-lower-body-b5rpxe.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/pilates-planks-push-ups-vzryox.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Pilates Planks & Push Ups thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/NIdGbbiTEqkBb0F366eS?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/pilates-planks-push-ups-vzryox.html">
                          <h2>Pilates Planks &amp; Push Ups</h2>
                          <div className="short-description">Feel the burn in your arms &amp; abs during this dynamic pilates workout.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Aynzj9fvsuiixjido6yu?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/aYNzJ9FvSUiixjiDo6yU?cache=true" width={45} /></div>
                        Pilates
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                        Yoga Mat
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">175 - 225</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">25</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/BOstUhgyTXaRLKkOZZPN?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/pilates-planks-push-ups-vzryox.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/awaken-the-core-24akv4.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Awaken the Core thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/KaExk369SVWICwW9P9Uu?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/awaken-the-core-24akv4.html">
                          <h2>Awaken the Core</h2>
                          <div className="short-description">This mat pilates class will focus on flow and transition as you sculpt and tone your core through a series of ex...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Aynzj9fvsuiixjido6yu?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/aYNzJ9FvSUiixjiDo6yU?cache=true" width={45} /></div>
                        Pilates
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                        Yoga Mat
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">200 - 250</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">28</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/BOstUhgyTXaRLKkOZZPN?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/awaken-the-core-24akv4.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/pilates-arm-plan-with-hand-weights-g7070n.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Pilates Arm Plan with Hand Weights thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/NxJFBo43TyPziC8Y5VWO?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/pilates-arm-plan-with-hand-weights-g7070n.html">
                          <h2>Pilates Arm Plan with Hand Weights</h2>
                          <div className="short-description">Using just light dumbbells, your arms &amp; core will start shaking and burning in no time.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Aynzj9fvsuiixjido6yu?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/aYNzJ9FvSUiixjiDo6yU?cache=true" width={45} /></div>
                        Pilates
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                        Dumbbells
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">205 - 255</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">26</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nCo4buBmQOy9Ew0xKt9A?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/pilates-arm-plan-with-hand-weights-g7070n.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/the-classic-pilates-body-zeejt8.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="The Classic Pilates Body thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/2rK3mDwhRhS3YJo5ecSU?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/the-classic-pilates-body-zeejt8.html">
                          <h2>The Classic Pilates Body</h2>
                          <div className="short-description">Get ready to create the classic pilates body with a series of exercises that will target your whole body, leavin...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Aynzj9fvsuiixjido6yu?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/aYNzJ9FvSUiixjiDo6yU?cache=true" width={45} /></div>
                        Pilates
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                        Yoga Mat
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">235 - 285</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">32</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/BOstUhgyTXaRLKkOZZPN?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/the-classic-pilates-body-zeejt8.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/scoop-squat-nx2avg.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Scoop & Squat thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/kdmvp3pRSgCJQHwk2KXd?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/scoop-squat-nx2avg.html">
                          <h2>Scoop &amp; Squat</h2>
                          <div className="short-description">Sculpt your abs, tone your legs and tighten your glutes with this energetic pilates class. </div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Aynzj9fvsuiixjido6yu?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/aYNzJ9FvSUiixjiDo6yU?cache=true" width={45} /></div>
                        Pilates
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                        Yoga Mat
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">245 - 295</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">34</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/BOstUhgyTXaRLKkOZZPN?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/scoop-squat-nx2avg.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/double-header-pilates-conditioning-hy6awu.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Double Header: Pilates Conditioning thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/yFCr29v4RWWP1bXjsf7M/convert?crop=0,0,1770,1000&cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/double-header-pilates-conditioning-hy6awu.html">
                          <h2>Double Header: Pilates Conditioning</h2>
                          <div className="short-description">This double header combines Scoop &amp; Squat with Pilates Planks &amp; Pushups for a total-body pilates workout.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Aynzj9fvsuiixjido6yu?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/aYNzJ9FvSUiixjiDo6yU?cache=true" width={45} /></div>
                        Pilates
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                        Yoga Mat
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">445 - 495</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">59</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/BOstUhgyTXaRLKkOZZPN?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/double-header-pilates-conditioning-hy6awu.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/whole-back-booty-band-workout-h6tcyc.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Whole Back, Booty, Band Workout thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/ViHvK11S7WAxsl7mVNiA?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/whole-back-booty-band-workout-h6tcyc.html">
                          <h2>Whole Back, Booty, Band Workout</h2>
                          <div className="short-description">You will use your resistance band during this entire lower body and core focused workout. </div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Aynzj9fvsuiixjido6yu?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/aYNzJ9FvSUiixjiDo6yU?cache=true" width={45} /></div>
                        Pilates
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Naxoae2qxgs55ndfsasa?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nAXOaE2QXGS55nDfSAsA?cache=true" width={45} /></div>
                        Resistance Band
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">195 - 245</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">24</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nCo4buBmQOy9Ew0xKt9A?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/whole-back-booty-band-workout-h6tcyc.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/stand-tall-be-toned-oh4ljt.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Stand Tall & Be Toned thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/WU2ALfskS2SKhWfo1HQr?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/stand-tall-be-toned-oh4ljt.html">
                          <h2>Stand Tall &amp; Be Toned</h2>
                          <div className="short-description">Lift, lower, squat and pulse for a booty-blasting workout that is great for all levels.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Aynzj9fvsuiixjido6yu?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/aYNzJ9FvSUiixjiDo6yU?cache=true" width={45} /></div>
                        Pilates
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                        Yoga Mat
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">190 - 240</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">24</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nCo4buBmQOy9Ew0xKt9A?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/stand-tall-be-toned-oh4ljt.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/body-be-strong-jdnsk9.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Body Be Strong thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/6bPvtKgvSdKVkQ0BEjHc?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/body-be-strong-jdnsk9.html">
                          <h2>Body Be Strong</h2>
                          <div className="short-description">Chelsea incorporates cardio with classic pilates exercises to get your heart rate up and tone your total body. </div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Aynzj9fvsuiixjido6yu?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/aYNzJ9FvSUiixjiDo6yU?cache=true" width={45} /></div>
                        Pilates
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                        Yoga Mat
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">225 - 275</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">28</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nCo4buBmQOy9Ew0xKt9A?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/body-be-strong-jdnsk9.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/cardio-pilates-o73fr.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Cardio Pilates thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/NPxHlFMqRDicz7Z5O7FX?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/cardio-pilates-o73fr.html">
                          <h2>Cardio Pilates</h2>
                          <div className="short-description">This fast-paced twist on traditional pilates will get your blood circulating as you develop lean muscle mass and...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Aynzj9fvsuiixjido6yu?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/aYNzJ9FvSUiixjiDo6yU?cache=true" width={45} /></div>
                        Pilates
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                        Yoga Mat
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">275 - 325</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">34</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/O3xwkWlQTMygdmqARgql?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/cardio-pilates-o73fr.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/dynamic-stretching-lt714f.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Dynamic Stretching thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/wHPgzoTWRxeCc91WpRF0?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/dynamic-stretching-lt714f.html">
                          <h2>Dynamic Stretching</h2>
                          <div className="short-description">This quick stretching routine will release tension &amp; lengthen your muscles. </div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Aynzj9fvsuiixjido6yu?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/aYNzJ9FvSUiixjiDo6yU?cache=true" width={45} /></div>
                        Pilates
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Naxoae2qxgs55ndfsasa?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nAXOaE2QXGS55nDfSAsA?cache=true" width={45} /></div>
                        Resistance Band
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">100 - 150</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">15</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/BOstUhgyTXaRLKkOZZPN?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/dynamic-stretching-lt714f.html">Preview Workout</a>
                  </div>
                </div>
                <p>Posture</p>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/how-to-improve-posture-agdsh7.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="How to Improve Posture thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/fBbSX6YtRlWjrEOhrP66?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/how-to-improve-posture-agdsh7.html">
                          <h2>How to Improve Posture</h2>
                          <div className="short-description">Instantly improve your posture during this quick video with Brandi.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Ijlbmw9aqtamkdd1hkz1?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/ijlbmW9AQTamkDd1HkZ1?cache=true" width={45} /></div>
                        Posture
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Naxoae2qxgs55ndfsasa?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nAXOaE2QXGS55nDfSAsA?cache=true" width={45} /></div>
                        Resistance Band
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">55 - 105</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">11</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/kh41zy1NR52S1S5GACAa?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/how-to-improve-posture-agdsh7.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/de-quasimoto-x86xin.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="De-Quasimoto thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/YizTIJ6CTfqC7WeAdOim?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/de-quasimoto-x86xin.html">
                          <h2>De-Quasimoto</h2>
                          <div className="short-description">Realign your body by opening up your chest, shoulder and hip muscles.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Ijlbmw9aqtamkdd1hkz1?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/ijlbmW9AQTamkDd1HkZ1?cache=true" width={45} /></div>
                        Posture
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Fmdtlybnrtqg0lplfqkq?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/fMdTlyBnRTqG0lPlFQKQ?cache=true" width={45} /></div>
                        Ball
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">65 - 115</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">12</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/kh41zy1NR52S1S5GACAa?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/de-quasimoto-x86xin.html">Preview Workout</a>
                  </div>
                </div>
                <p>Prenatal</p>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/fit-mama-prenatal-workout-e19tk6.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Fit Mama Prenatal Workout  thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/fdLDPuiiQEmxeturTpX8?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/fit-mama-prenatal-workout-e19tk6.html">
                          <h2>Fit Mama Prenatal Workout </h2>
                          <div className="short-description">Grab your ReXist360 bands, a chair and a set of weights for this workout that's specially designed for expecting...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Atmil2hrimkzqbsevf9a?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/aTMiL2hRimKZqbseVf9A?cache=true" width={45} /></div>
                        Prenatal
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Omn4jr7psr6m9qapwhqd?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/oMn4Jr7PSr6M9QAPWHqd?cache=true" width={45} /></div>
                        Re Xist360 Bands
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">275 - 325</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">30</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uoyl5L11TodixtOE53hI?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/fit-mama-prenatal-workout-e19tk6.html">Preview Workout</a>
                  </div>
                </div>
                <p>Sports Conditioning</p>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/double-header-stoked-jump-rope-plyo-core-combo-gctm71.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Double Header: Stoked Jump Rope Plyo + Core Combo thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/sNeUCQl1RZuihtBh50yT?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/double-header-stoked-jump-rope-plyo-core-combo-gctm71.html">
                          <h2>Double Header: Stoked Jump Rope Plyo + Core Combo</h2>
                          <div className="short-description">This double header combines Kira Stokes’ Jump Rope Plyometrics and Crunchless Core to get your cardiovascular fi...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Cuqpeuwqqfmtamuzhyyz?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/cUQPeuwQQFmtamUZhYYZ?cache=true" width={45} /></div>
                        Sports Conditioning
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Ncyoqzluqmcvkgh4zh4y?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nCYOqZLUQmCvkgH4zH4Y?cache=true" width={45} /></div>
                        Jump Rope 
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">465 - 515</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">45</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/wGhHlZplTPyFeZDiYH6Q?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/double-header-stoked-jump-rope-plyo-core-combo-gctm71.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/speed-lab-2d0f36.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Speed Lab thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/lC6Wp6FRTMAYmZxGpRST?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/speed-lab-2d0f36.html">
                          <h2>Speed Lab</h2>
                          <div className="short-description">Tap into your inner athlete with 20 fun, cardio drills you'll recognize from the field. </div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Cuqpeuwqqfmtamuzhyyz?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/cUQPeuwQQFmtamUZhYYZ?cache=true" width={45} /></div>
                        Sports Conditioning
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="9hrem69xsc2onrqpkmou?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/9Hrem69XSc2onRqpkmoU?cache=true" width={45} /></div>
                        None
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">225 - 275</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">20</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/iFf3u7SRZKt244POBpnA?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/speed-lab-2d0f36.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/no-excuses-3tiy7h.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Tempo: No Excuses thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/1HzNBGCMRGy1HVLm7jRT?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/no-excuses-3tiy7h.html">
                          <h2>Tempo: No Excuses</h2>
                          <div className="short-description">Throw your excuses out the window, and knock out this quick full-body workout to energize your day. </div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Cuqpeuwqqfmtamuzhyyz?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/cUQPeuwQQFmtamUZhYYZ?cache=true" width={45} /></div>
                        Sports Conditioning
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                        Dumbbells
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">155 - 205</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">16</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/DBFzA4W3Q2jnlle8xFsw?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/no-excuses-3tiy7h.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/plyometric-sports-conditioning-5gxbqm.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Plyometric Sports Conditioning thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/Po8yeC69Sqa8QPuxTSUO?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/plyometric-sports-conditioning-5gxbqm.html">
                          <h2>Plyometric Sports Conditioning</h2>
                          <div className="short-description">Shred and tone your legs and increase your athleticism with an intense workout that's designed to burn fat.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Cuqpeuwqqfmtamuzhyyz?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/cUQPeuwQQFmtamUZhYYZ?cache=true" width={45} /></div>
                        Sports Conditioning
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                        Yoga Mat
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">350 - 400</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">33</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/iFf3u7SRZKt244POBpnA?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/plyometric-sports-conditioning-5gxbqm.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/high-intensity-hitman-arnd7l.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Endurance: High-Intensity Hitman thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/HvaN0hUaT6qElDWqNEgO?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/high-intensity-hitman-arnd7l.html">
                          <h2>Endurance: High-Intensity Hitman</h2>
                          <div className="short-description">This workout features three HIIT circuits that will burn fat and rev your metabolism.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Cuqpeuwqqfmtamuzhyyz?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/cUQPeuwQQFmtamUZhYYZ?cache=true" width={45} /></div>
                        Sports Conditioning
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                        Yoga Mat
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">155 - 205</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">15</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/DBFzA4W3Q2jnlle8xFsw?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/high-intensity-hitman-arnd7l.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/rexist360-train-like-an-athlete-2yihmo.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="ReXist360: Train like an Athlete thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/TZ1wEk6bRCGqtuUGx3Dl?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/rexist360-train-like-an-athlete-2yihmo.html">
                          <h2>ReXist360: Train like an Athlete</h2>
                          <div className="short-description">Tap into your inner athlete led by the pros: you'll throw jabs with UFC Fighter King Pito Gator and work on your...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Cuqpeuwqqfmtamuzhyyz?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/cUQPeuwQQFmtamUZhYYZ?cache=true" width={45} /></div>
                        Sports Conditioning
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Omn4jr7psr6m9qapwhqd?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/oMn4Jr7PSr6M9QAPWHqd?cache=true" width={45} /></div>
                        Re Xist360 Bands
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">375 - 425</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">37</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uoyl5L11TodixtOE53hI?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/rexist360-train-like-an-athlete-2yihmo.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/stoked-jump-rope-plyometrics-boi6qq.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Stoked Jump Rope + Plyometrics thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/LXkdOM1iQ2SSnASRolrT/convert?crop=0,0,1771,1001&cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/stoked-jump-rope-plyometrics-boi6qq.html">
                          <h2>Stoked Jump Rope + Plyometrics</h2>
                          <div className="short-description">GET STOKED for a cardiovascular challenge with this high intensity workout that combines jumping rope and plyome...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Cuqpeuwqqfmtamuzhyyz?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/cUQPeuwQQFmtamUZhYYZ?cache=true" width={45} /></div>
                        Sports Conditioning
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Ncyoqzluqmcvkgh4zh4y?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nCYOqZLUQmCvkgH4zH4Y?cache=true" width={45} /></div>
                        Jump Rope 
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">215 - 265</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">20</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/wGhHlZplTPyFeZDiYH6Q?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/stoked-jump-rope-plyometrics-boi6qq.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/double-header-high-low-cardio-blast-zwveze.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Double Header: High Low Cardio Blast thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/njc4HmSHAuiAK4V3ApCY?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/double-header-high-low-cardio-blast-zwveze.html">
                          <h2>Double Header: High Low Cardio Blast</h2>
                          <div className="short-description">This double header combines Speed Lab with Flex Barre Cardio Infused for a non-stop sweat session.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Cuqpeuwqqfmtamuzhyyz?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/cUQPeuwQQFmtamUZhYYZ?cache=true" width={45} /></div>
                        Sports Conditioning
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                        Yoga Mat
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">550 - 600</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">51</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/iFf3u7SRZKt244POBpnA?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/double-header-high-low-cardio-blast-zwveze.html">Preview Workout</a>
                  </div>
                </div>
                <p>Strength-based Yoga</p>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/45-min-traditional-flow-3pdblh.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="45-Min Traditional Flow thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/9nKMcKPiSilA6H1ISJWr?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/45-min-traditional-flow-3pdblh.html">
                          <h2>45-Min Traditional Flow</h2>
                          <div className="short-description">This complete and total mind and body experience is a great foundation for your ongoing yoga practice.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="R6bsqbvtuu5l6kcbkvna?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/R6bSQbVTUu5l6KcBkVnA?cache=true" width={45} /></div>
                        Strength-based Yoga
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                        Yoga Mat
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">300 - 350</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">47</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/sxaaUYzSDizQ2yGCqsgD?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/45-min-traditional-flow-3pdblh.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/cardio-strength-flow-ah0x9d.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Cardio Strength Flow thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/Mggqjaf9QQSAFwKRqbuW?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/cardio-strength-flow-ah0x9d.html">
                          <h2>Cardio Strength Flow</h2>
                          <div className="short-description">Even though Robert uses traditional yoga poses, the movements are fast-paced, ensuring a traditional session mar...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="R6bsqbvtuu5l6kcbkvna?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/R6bSQbVTUu5l6KcBkVnA?cache=true" width={45} /></div>
                        Strength-based Yoga
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                        Yoga Mat
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">250 - 300</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">37</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/sxaaUYzSDizQ2yGCqsgD?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/cardio-strength-flow-ah0x9d.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/express-core-flow-293jal.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Express Core Flow thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/6rNbYmYvQAWMoWLgwMqS?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/express-core-flow-293jal.html">
                          <h2>Express Core Flow</h2>
                          <div className="short-description">This is not a traditional core workout, it is a posture-based session that will strengthen your body with each p...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="R6bsqbvtuu5l6kcbkvna?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/R6bSQbVTUu5l6KcBkVnA?cache=true" width={45} /></div>
                        Strength-based Yoga
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                        Yoga Mat
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">60 - 110</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">14</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/sxaaUYzSDizQ2yGCqsgD?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/express-core-flow-293jal.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/advanced-flow-svvc51.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Advanced Flow thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/UD6CHvKSIyHsv14UTkDQ?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/advanced-flow-svvc51.html">
                          <h2>Advanced Flow</h2>
                          <div className="short-description">This shorter but still intense practice will focus on strength, flexibility, mobility and balance with powerful ...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="R6bsqbvtuu5l6kcbkvna?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/R6bSQbVTUu5l6KcBkVnA?cache=true" width={45} /></div>
                        Strength-based Yoga
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                        Yoga Mat
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">125 - 175</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">21</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/sxaaUYzSDizQ2yGCqsgD?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/advanced-flow-svvc51.html">Preview Workout</a>
                  </div>
                </div>
                <p>Strength Conditioning</p>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/saved-by-the-bell-b9opku.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Saved by the Bell thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/QPByuFKTqefdxz9UYCQy?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/saved-by-the-bell-b9opku.html">
                          <h2>Saved by the Bell</h2>
                          <div className="short-description">Use your kettlebell to tone every major muscle group in your body.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Uisetlvft0gibd8clgzu?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/UiSetLvfT0Gibd8cLgzU?cache=true" width={45} /></div>
                        Strength Conditioning
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Qxleiqr1teouxgjp11z7?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/qXLeiQR1TeOuxGJP11Z7?cache=true" width={45} /></div>
                        Kettlebell
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">295 - 345</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">32</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/kh41zy1NR52S1S5GACAa?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/saved-by-the-bell-b9opku.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/pain-pleasure-lower-body-e3tbis.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Pain & Pleasure: Lower Body thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/P5j7HvnqR22hM3REKKjZ?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/pain-pleasure-lower-body-e3tbis.html">
                          <h2>Pain &amp; Pleasure: Lower Body</h2>
                          <div className="short-description">This dumbbell circuit-based workout is designed to add lean muscle mass to your lower body.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Uisetlvft0gibd8clgzu?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/UiSetLvfT0Gibd8cLgzU?cache=true" width={45} /></div>
                        Strength Conditioning
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                        Dumbbells
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">325 - 375</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">34</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/O3xwkWlQTMygdmqARgql?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/pain-pleasure-lower-body-e3tbis.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/pain-pleasure-upper-body-qxbhum.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Pain & Pleasure: Upper Body thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/6Yhlg6PEQlipZoVZio7v?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/pain-pleasure-upper-body-qxbhum.html">
                          <h2>Pain &amp; Pleasure: Upper Body</h2>
                          <div className="short-description">This dumbbell circuit-based workout is designed to add lean muscle mass to your upper body.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Uisetlvft0gibd8clgzu?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/UiSetLvfT0Gibd8cLgzU?cache=true" width={45} /></div>
                        Strength Conditioning
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                        Dumbbells
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">325 - 375</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">35</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/O3xwkWlQTMygdmqARgql?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/pain-pleasure-upper-body-qxbhum.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/rexist360-hotel-workout-91no5c.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="ReXist360: Hotel Workout  thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/dLbUYJeTJeWMCNe38qQv?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/rexist360-hotel-workout-91no5c.html">
                          <h2>ReXist360: Hotel Workout </h2>
                          <div className="short-description">This low impact, space conscious workout is actually filmed in a hotel, so there are no more excuses on business...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Uisetlvft0gibd8clgzu?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/UiSetLvfT0Gibd8cLgzU?cache=true" width={45} /></div>
                        Strength Conditioning
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Omn4jr7psr6m9qapwhqd?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/oMn4Jr7PSr6M9QAPWHqd?cache=true" width={45} /></div>
                        Re Xist360 Bands
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">325 - 375</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">31</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uoyl5L11TodixtOE53hI?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/rexist360-hotel-workout-91no5c.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/dumbbell-burnout-xrsjld.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Dumbbell Burnout thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/ZEVeAM3dSkOD8uguJXZ8?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/dumbbell-burnout-xrsjld.html">
                          <h2>Dumbbell Burnout</h2>
                          <div className="short-description">Get stronger by using dumbbells for incremental time and rep-based intervals.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Uisetlvft0gibd8clgzu?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/UiSetLvfT0Gibd8cLgzU?cache=true" width={45} /></div>
                        Strength Conditioning
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                        Dumbbells
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">375 - 425</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">36</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/iFf3u7SRZKt244POBpnA?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/dumbbell-burnout-xrsjld.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/rexist360-low-intensity-interval-training-9yklpw.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="ReXist360: Low Impact Flow thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/lJKZ4sNBRNeaJYeGmkrG?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/rexist360-low-intensity-interval-training-9yklpw.html">
                          <h2>ReXist360: Low Impact Flow</h2>
                          <div className="short-description">Low-intensity combination moves work every muscle in the body white still being gentle on the back, knees and an...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Uisetlvft0gibd8clgzu?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/UiSetLvfT0Gibd8cLgzU?cache=true" width={45} /></div>
                        Strength Conditioning
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Omn4jr7psr6m9qapwhqd?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/oMn4Jr7PSr6M9QAPWHqd?cache=true" width={45} /></div>
                        Re Xist360 Bands
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">250 - 300</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">25</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/uoyl5L11TodixtOE53hI?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/rexist360-low-intensity-interval-training-9yklpw.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/skinny-jean-workout-nfy32g.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Skinny Jean Workout thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/Dp6lgTqPQxCFTaAKeKiW?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/skinny-jean-workout-nfy32g.html">
                          <h2>Skinny Jean Workout</h2>
                          <div className="short-description">Rock your skinny jeans with confidence after this lower body-focused workout. </div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Uisetlvft0gibd8clgzu?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/UiSetLvfT0Gibd8cLgzU?cache=true" width={45} /></div>
                        Strength Conditioning
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                        Dumbbells
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">375 - 425</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">45</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/kh41zy1NR52S1S5GACAa?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/skinny-jean-workout-nfy32g.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/slim-strong-weights-challenge-c9xofj.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Slim & Strong: Weights Challenge thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/Lj3BdYhQJuG8ln5IJtDC?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/slim-strong-weights-challenge-c9xofj.html">
                          <h2>Slim &amp; Strong: Weights Challenge</h2>
                          <div className="short-description">Body weight and dumbbell strengthening are combined with cardio moves for an intense workout.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Uisetlvft0gibd8clgzu?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/UiSetLvfT0Gibd8cLgzU?cache=true" width={45} /></div>
                        Strength Conditioning
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                        Dumbbells
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">350 - 400</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">30</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/RQlZXQGSWgNe0YevT3Kw?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/slim-strong-weights-challenge-c9xofj.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/hakuna-ma-squata-hs26hd.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Tempo: Hakuna Ma Squata thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/0Gi02coDQOefak5mqRUW?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/hakuna-ma-squata-hs26hd.html">
                          <h2>Tempo: Hakuna Ma Squata</h2>
                          <div className="short-description">This workout trains your body as a whole, with a special emphasis on movements involving various types of squats...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Uisetlvft0gibd8clgzu?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/UiSetLvfT0Gibd8cLgzU?cache=true" width={45} /></div>
                        Strength Conditioning
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                        Dumbbells
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">135 - 185</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">16</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/DBFzA4W3Q2jnlle8xFsw?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/hakuna-ma-squata-hs26hd.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/dumbbell-kettlebell-power-lab-v8n556.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Dumbbell / Kettlebell Power Lab thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/HFp3GfxJSDWucJIiRoxI?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/dumbbell-kettlebell-power-lab-v8n556.html">
                          <h2>Dumbbell / Kettlebell Power Lab</h2>
                          <div className="short-description">These dumbbell / kettlebell exercises will really challenge your cardio exertion and your strength in each circu...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Uisetlvft0gibd8clgzu?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/UiSetLvfT0Gibd8cLgzU?cache=true" width={45} /></div>
                        Strength Conditioning
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                        Dumbbells
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">325 - 375</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">31</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/iFf3u7SRZKt244POBpnA?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/dumbbell-kettlebell-power-lab-v8n556.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/muscle-mania-9nrh66.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Endurance: Muscle Mania thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/YZGh1ZObRrClHGs5Xk87?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/muscle-mania-9nrh66.html">
                          <h2>Endurance: Muscle Mania</h2>
                          <div className="short-description">This full-body workout focuses solely on agility &amp; strength, offering modifications for all fitness levels leavi...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Uisetlvft0gibd8clgzu?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/UiSetLvfT0Gibd8cLgzU?cache=true" width={45} /></div>
                        Strength Conditioning
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                        Dumbbells
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">155 - 205</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">16</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/DBFzA4W3Q2jnlle8xFsw?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/muscle-mania-9nrh66.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/50-min-power-lab-9jow7w.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="50-Min Power Lab thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/7OrvpO0JS7WGQbUDepdY?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/50-min-power-lab-9jow7w.html">
                          <h2>50-Min Power Lab</h2>
                          <div className="short-description">With a full 50 minute workout you'll get a great warm-up that leads into ab work, a lifting circuit, a dumbbell ...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Uisetlvft0gibd8clgzu?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/UiSetLvfT0Gibd8cLgzU?cache=true" width={45} /></div>
                        Strength Conditioning
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                        Dumbbells
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">475 - 525</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">47</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/iFf3u7SRZKt244POBpnA?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/50-min-power-lab-9jow7w.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/stoked-360-cye4ws.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Stoked 360 thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/UW4WHeHdQuiv8sWVV3nV?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/stoked-360-cye4ws.html">
                          <h2>Stoked 360</h2>
                          <div className="short-description"> GET STOKED for the ultimate total body challenge with this high intensity workout. </div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Uisetlvft0gibd8clgzu?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/UiSetLvfT0Gibd8cLgzU?cache=true" width={45} /></div>
                        Strength Conditioning
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                        Dumbbells
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">650 - 700</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">60</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/wGhHlZplTPyFeZDiYH6Q?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/stoked-360-cye4ws.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/stoked-upper-body-core-zxxqn4.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Stoked Upper Body & Core thumbnail image" fit="scale" height={156} src="https://www.filepicker.io/api/file/2DxbwlG1SqW042U4PWWk?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/stoked-upper-body-core-zxxqn4.html">
                          <h2>Stoked Upper Body &amp; Core</h2>
                          <div className="short-description">GET STOKED to challenge your upper body and core with this 30 minute strength-based workout.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Uisetlvft0gibd8clgzu?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/UiSetLvfT0Gibd8cLgzU?cache=true" width={45} /></div>
                        Strength Conditioning
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                        Dumbbells
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">280 - 330</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">28</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/wGhHlZplTPyFeZDiYH6Q?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/stoked-upper-body-core-zxxqn4.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/double-header-stoked-upper-body-core-combo-7sky6g.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Double Header: Stoked Upper Body Core Combo thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/ejgsSpFRQZqkmonI0bBv?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/double-header-stoked-upper-body-core-combo-7sky6g.html">
                          <h2>Double Header: Stoked Upper Body Core Combo</h2>
                          <div className="short-description">This double header combines Kira Stokes’ Upper Body &amp; Core and Endurance Core for an intense upper-body, strengt...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Uisetlvft0gibd8clgzu?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/UiSetLvfT0Gibd8cLgzU?cache=true" width={45} /></div>
                        Strength Conditioning
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                        Dumbbells
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">490 - 540</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">50</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/wGhHlZplTPyFeZDiYH6Q?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/double-header-stoked-upper-body-core-combo-7sky6g.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/stoked-lower-body-core-eixpem.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Stoked Lower Body & Core thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/sfPjNyPTKdvbqWV1v2iQ?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/stoked-lower-body-core-eixpem.html">
                          <h2>Stoked Lower Body &amp; Core</h2>
                          <div className="short-description">GET STOKED for your lower body, core and heart to be fully challenged during this intense, results driven workout.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Uisetlvft0gibd8clgzu?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/UiSetLvfT0Gibd8cLgzU?cache=true" width={45} /></div>
                        Strength Conditioning
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                        Dumbbells
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">375 - 425</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">38</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/wGhHlZplTPyFeZDiYH6Q?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/stoked-lower-body-core-eixpem.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/double-header-heavy-weight-bodyweight-conditioning-4jvvwv.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Double Header: Heavy Weight & Bodyweight Conditioning thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/HEwoKUnQNOiKJQGfkKXh?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/double-header-heavy-weight-bodyweight-conditioning-4jvvwv.html">
                          <h2>Double Header: Heavy Weight &amp; Bodyweight Conditioning</h2>
                          <div className="short-description">This double header combines Metcon Lab and Fusion Yoga for a dynamic, strength conditioning workout that burns m...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Uisetlvft0gibd8clgzu?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/UiSetLvfT0Gibd8cLgzU?cache=true" width={45} /></div>
                        Strength Conditioning
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                        Dumbbells
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">535 - 585</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">59</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/iFf3u7SRZKt244POBpnA?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/double-header-heavy-weight-bodyweight-conditioning-4jvvwv.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/girls-just-wanna-have-guns-xkx2tl.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Girls Just Wanna Have Guns thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/geKkuyHHQS0zlp7EZvKQ?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/girls-just-wanna-have-guns-xkx2tl.html">
                          <h2>Girls Just Wanna Have Guns</h2>
                          <div className="short-description">Build upper body strength and resistance with this dynamic kettlebell workout.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Uisetlvft0gibd8clgzu?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/UiSetLvfT0Gibd8cLgzU?cache=true" width={45} /></div>
                        Strength Conditioning
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Qxleiqr1teouxgjp11z7?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/qXLeiQR1TeOuxGJP11Z7?cache=true" width={45} /></div>
                        Kettlebell
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">245 - 295</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">27</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/kh41zy1NR52S1S5GACAa?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/girls-just-wanna-have-guns-xkx2tl.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/arms-abs-legs-and-butt-f8g197.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Arms, Abs, Legs and Butt! thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/tcx2jiaRlmuXeK4WgXQd?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/arms-abs-legs-and-butt-f8g197.html">
                          <h2>Arms, Abs, Legs and Butt!</h2>
                          <div className="short-description">All you need is a set of dumbbells and ten minutes per body part at maximum intensity for this strength training...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Uisetlvft0gibd8clgzu?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/UiSetLvfT0Gibd8cLgzU?cache=true" width={45} /></div>
                        Strength Conditioning
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                        Dumbbells
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">325 - 375</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">31</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/RQlZXQGSWgNe0YevT3Kw?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/arms-abs-legs-and-butt-f8g197.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/turn-it-up-resistance-band-challenge-ga53sj.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Turn It Up: Resistance Band Challenge thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/suUNFeAfSA6hTJ24vYZ6?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/turn-it-up-resistance-band-challenge-ga53sj.html">
                          <h2>Turn It Up: Resistance Band Challenge</h2>
                          <div className="short-description">Use resistance bands, dumbbells or just your own body weight to tailor this session to your workout level.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Uisetlvft0gibd8clgzu?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/UiSetLvfT0Gibd8cLgzU?cache=true" width={45} /></div>
                        Strength Conditioning
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Naxoae2qxgs55ndfsasa?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/nAXOaE2QXGS55nDfSAsA?cache=true" width={45} /></div>
                        Resistance Band
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">250 - 300</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">27</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/LUY4NImQoW6DAU9nlWqA?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/turn-it-up-resistance-band-challenge-ga53sj.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/plateau-buster-yf5i8s.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Sprint: Plateau Buster thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/lE33PUn1SZuJrPYNyiPe?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/plateau-buster-yf5i8s.html">
                          <h2>Sprint: Plateau Buster</h2>
                          <div className="short-description">Challenge yourself to try something different and see your body start to change with this full-body workout for ...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Uisetlvft0gibd8clgzu?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/UiSetLvfT0Gibd8cLgzU?cache=true" width={45} /></div>
                        Strength Conditioning
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Gqgjesqrx6n0qvwtoa6s?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/gQgjesQRx6N0qVwtoA6s?cache=true" width={45} /></div>
                        Dumbbells
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">155 - 205</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">16</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/DBFzA4W3Q2jnlle8xFsw?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/plateau-buster-yf5i8s.html">Preview Workout</a>
                  </div>
                </div>
                <p>Stretch &amp; Restore</p>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/grid-method-lower-leg-release-8ppgls.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Grid Method Lower Leg Release thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/BZGhX9O5TrSDB6ba3cHr?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/grid-method-lower-leg-release-8ppgls.html">
                          <h2>Grid Method Lower Leg Release</h2>
                          <div className="short-description">Release tension and improve flexibility in your calf and ankle using a foam roller.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Bwpiq37qqeoaq6avytjq?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/bwpiQ37QQEOaq6AVYtJq?cache=true" width={45} /></div>
                        Stretch &amp; Restore
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="0cixucis8mxmakiyymux?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/0CixUCIS8mXMAkiyYmuX?cache=true" width={45} /></div>
                        Foam Roller
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">5 - 55</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">2</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/0qkcTb4NQASO16dSAbES?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/grid-method-lower-leg-release-8ppgls.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/stretch-upper-body-hamstrings-g8yn00.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Stretch: Upper Body & Hamstrings thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/F01ozCnSvaU7s3cmQyeG?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/stretch-upper-body-hamstrings-g8yn00.html">
                          <h2>Stretch: Upper Body &amp; Hamstrings</h2>
                          <div className="short-description">You'll work your shoulders and hamstrings, improve your posture, and relieve pain, making you feel rested and lo...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Bwpiq37qqeoaq6avytjq?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/bwpiQ37QQEOaq6AVYtJq?cache=true" width={45} /></div>
                        Stretch &amp; Restore
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                        Yoga Mat
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">125 - 175</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">27</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/hEdGYcYSnyozEO7YSvmV?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/stretch-upper-body-hamstrings-g8yn00.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/rest-restore-flow-lgb6p8.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Rest & Restore Flow thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/Gl4dOBsJSpKnmeHLYe36?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/rest-restore-flow-lgb6p8.html">
                          <h2>Rest &amp; Restore Flow</h2>
                          <div className="short-description">This practice is all about rest and breathing by holding poses from one to three minutes, depending on the posture.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Bwpiq37qqeoaq6avytjq?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/bwpiQ37QQEOaq6AVYtJq?cache=true" width={45} /></div>
                        Stretch &amp; Restore
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                        Yoga Mat
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">175 - 225</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">33</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/sxaaUYzSDizQ2yGCqsgD?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/rest-restore-flow-lgb6p8.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/stoked-stretch-hhxfrj.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Stoked Stretch thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/IWpdCXYWRyudCamUCZb5?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/stoked-stretch-hhxfrj.html">
                          <h2>Stoked Stretch</h2>
                          <div className="short-description">GET STOKED to recover. Give your body a little TLC with this simple stretch flow.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Bwpiq37qqeoaq6avytjq?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/bwpiQ37QQEOaq6AVYtJq?cache=true" width={45} /></div>
                        Stretch &amp; Restore
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                        Yoga Mat
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">25 - 75</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">7</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/wGhHlZplTPyFeZDiYH6Q?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/stoked-stretch-hhxfrj.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/grid-method-upper-leg-release-4dy2y1.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Grid Method Upper Leg Release thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/MZb3HZNsQeGfPCAc4AYM?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/grid-method-upper-leg-release-4dy2y1.html">
                          <h2>Grid Method Upper Leg Release</h2>
                          <div className="short-description">Reduce aches, pains and soreness in your legs with basic foam rolling moves.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Bwpiq37qqeoaq6avytjq?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/bwpiQ37QQEOaq6AVYtJq?cache=true" width={45} /></div>
                        Stretch &amp; Restore
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="0cixucis8mxmakiyymux?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/0CixUCIS8mXMAkiyYmuX?cache=true" width={45} /></div>
                        Foam Roller
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">5 - 55</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">3</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/0qkcTb4NQASO16dSAbES?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/grid-method-upper-leg-release-4dy2y1.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/grid-method-mid-upper-back-release-x1l13v.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Grid Method Mid & Upper Back Release  thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/t8Lx8CcRHuUjHIpaptoK?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/grid-method-mid-upper-back-release-x1l13v.html">
                          <h2>Grid Method Mid &amp; Upper Back Release </h2>
                          <div className="short-description">Use a foam roller to improve your posture and lengthen your torso.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Bwpiq37qqeoaq6avytjq?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/bwpiQ37QQEOaq6AVYtJq?cache=true" width={45} /></div>
                        Stretch &amp; Restore
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="0cixucis8mxmakiyymux?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/0CixUCIS8mXMAkiyYmuX?cache=true" width={45} /></div>
                        Foam Roller
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">5 - 55</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">2</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/0qkcTb4NQASO16dSAbES?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/grid-method-mid-upper-back-release-x1l13v.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/endurance-lab-1ojkrx.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Endurance Lab thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/vJz1gDqRUyxpHp7GQGYn?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/endurance-lab-1ojkrx.html">
                          <h2>Endurance Lab</h2>
                          <div className="short-description">Challenge your muscular endurance and core stability while improving mobility and flexibility with this rejuvena...</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Bwpiq37qqeoaq6avytjq?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/bwpiQ37QQEOaq6AVYtJq?cache=true" width={45} /></div>
                        Stretch &amp; Restore
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                        Yoga Mat
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">250 - 300</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">28</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/iFf3u7SRZKt244POBpnA?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/endurance-lab-1ojkrx.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/grid-total-body-roll-out-72wbk6.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Grid Total Body Roll Out thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/dCAMgRErSgifrFzU9gX9?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/grid-total-body-roll-out-72wbk6.html">
                          <h2>Grid Total Body Roll Out</h2>
                          <div className="short-description">John will help you roll through knots and kinks that prevent you from moving well and feeling great.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Bwpiq37qqeoaq6avytjq?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/bwpiQ37QQEOaq6AVYtJq?cache=true" width={45} /></div>
                        Stretch &amp; Restore
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="0cixucis8mxmakiyymux?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/0CixUCIS8mXMAkiyYmuX?cache=true" width={45} /></div>
                        Foam Roller
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">55 - 105</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">16</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/0qkcTb4NQASO16dSAbES?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/grid-total-body-roll-out-72wbk6.html">Preview Workout</a>
                  </div>
                </div>
                <p>Trampoline Cardio</p>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/the-trampoline-series-hiit-w0tadx.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="The Trampoline Series: HIIT thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/iC1zG8OUQTGMhJ2Cw6AN?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/the-trampoline-series-hiit-w0tadx.html">
                          <h2>The Trampoline Series: HIIT</h2>
                          <div className="short-description">This high energy trampoline workout features HIIT drills for a metabolic boost.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Ggx1d5vssnijut9sfsrx?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/GGX1d5VsSniJUt9SfSrX?cache=true" width={45} /></div>
                        Trampoline Cardio
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="7uyr7jlatuxoixzbvth9?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/7UyR7jlATUxOiXZBvTh9?cache=true" width={45} /></div>
                        Mini Trampoline
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">250 - 300</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">27</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/0XrpXu4iSMGlgudrYY97?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/the-trampoline-series-hiit-w0tadx.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/double-header-trampoline-blast-qukedp.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Double Header: Trampoline Blast thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/0huuewLjRi6wMJnMsBbE?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/double-header-trampoline-blast-qukedp.html">
                          <h2>Double Header: Trampoline Blast</h2>
                          <div className="short-description">This double-header combines Trampoline  HIIT and Total Body &amp; Cardio for a longer, total body workout.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Ggx1d5vssnijut9sfsrx?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/GGX1d5VsSniJUt9SfSrX?cache=true" width={45} /></div>
                        Trampoline Cardio
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="7uyr7jlatuxoixzbvth9?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/7UyR7jlATUxOiXZBvTh9?cache=true" width={45} /></div>
                        Mini Trampoline
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">575 - 625</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">52</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/0XrpXu4iSMGlgudrYY97?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/double-header-trampoline-blast-qukedp.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/the-trampoline-series-total-body-cardio-us23q0.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="The Trampoline Series: Total Body & Cardio thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/SHFW8G3MS4aTC1jhuTTh?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/the-trampoline-series-total-body-cardio-us23q0.html">
                          <h2>The Trampoline Series: Total Body &amp; Cardio</h2>
                          <div className="short-description">A classic trampoline workout full of jump-based cardio and total body toning exercises. </div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Ggx1d5vssnijut9sfsrx?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/GGX1d5VsSniJUt9SfSrX?cache=true" width={45} /></div>
                        Trampoline Cardio
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="7uyr7jlatuxoixzbvth9?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/7UyR7jlATUxOiXZBvTh9?cache=true" width={45} /></div>
                        Mini Trampoline
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">250 - 300</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">24</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/0XrpXu4iSMGlgudrYY97?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/the-trampoline-series-total-body-cardio-us23q0.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/double-header-total-body-trampoline-hc318b.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Double Header: Total Body Trampoline thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/i3GE2UkKQDWVBCqljPiM?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/double-header-total-body-trampoline-hc318b.html">
                          <h2>Double Header: Total Body Trampoline</h2>
                          <div className="short-description"> This double-header combines The Trampoline Series: Upper &amp; Lower Body for a longer, total body workout.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Ggx1d5vssnijut9sfsrx?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/GGX1d5VsSniJUt9SfSrX?cache=true" width={45} /></div>
                        Trampoline Cardio
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="7uyr7jlatuxoixzbvth9?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/7UyR7jlATUxOiXZBvTh9?cache=true" width={45} /></div>
                        Mini Trampoline
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">575 - 625</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">59</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/0XrpXu4iSMGlgudrYY97?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/double-header-total-body-trampoline-hc318b.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/the-trampoline-series-lower-body-cardio-vidre1.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="The Trampoline Series: Lower Body & Cardio thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/V8avS8H8QkSwlwHndMgE?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/the-trampoline-series-lower-body-cardio-vidre1.html">
                          <h2>The Trampoline Series: Lower Body &amp; Cardio</h2>
                          <div className="short-description">A great combination of high energy trampoline cardio + targeted toning exercises focused on the lower body. </div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Ggx1d5vssnijut9sfsrx?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/GGX1d5VsSniJUt9SfSrX?cache=true" width={45} /></div>
                        Trampoline Cardio
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="7uyr7jlatuxoixzbvth9?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/7UyR7jlATUxOiXZBvTh9?cache=true" width={45} /></div>
                        Mini Trampoline
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">275 - 325</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">28</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/0XrpXu4iSMGlgudrYY97?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/the-trampoline-series-lower-body-cardio-vidre1.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/the-trampoline-series-upper-body-cardio-jv2e9i.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="The Trampoline Series: Upper Body & Cardio thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/Hr0OCbmHRW29dRQhK9Om?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/the-trampoline-series-upper-body-cardio-jv2e9i.html">
                          <h2>The Trampoline Series: Upper Body &amp; Cardio</h2>
                          <div className="short-description">A great workout with high energy trampoline cardio + targeted toning exercises focused on the upper body. </div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Ggx1d5vssnijut9sfsrx?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/GGX1d5VsSniJUt9SfSrX?cache=true" width={45} /></div>
                        Trampoline Cardio
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="7uyr7jlatuxoixzbvth9?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/7UyR7jlATUxOiXZBvTh9?cache=true" width={45} /></div>
                        Mini Trampoline
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">300 - 350</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">30</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/0XrpXu4iSMGlgudrYY97?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/the-trampoline-series-upper-body-cardio-jv2e9i.html">Preview Workout</a>
                  </div>
                </div>
                <p>Yoga Boxing</p>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/warrior-fight-club-ii-wmdjy1.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Warrior Fight Club II thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/TvposYlAQNaNrYoE8YGo?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/warrior-fight-club-ii-wmdjy1.html">
                          <h2>Warrior Fight Club II</h2>
                          <div className="short-description">Warm up with traditional boxing moves like jumping rope before incorporating traditional yoga poses.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Riwxlwtvsfa2ogt0xpmx?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/riwXLWtVSfa2OGT0xpmX?cache=true" width={45} /></div>
                        Yoga Boxing
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                        Yoga Mat
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">325 - 375</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">34</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/3hX4au6uQny3BLMm3gJr?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/warrior-fight-club-ii-wmdjy1.html">Preview Workout</a>
                  </div>
                </div>
                <div className="row result">
                  <div className="large-4 columns expand-column">
                    <a href="../videos/warrior-fight-club-2hdtyi.html" className="filepicker-image-wrap-link">
                      <div className="filepicker_image">
                        <img alt="Warrior Fight Club thumbnail image" fit="scale" height={156} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/rOOaQKYRnBoPPiVmt1bw?cache=true" width={276} />
                        <span className="short-video-icon">
                          <i className="fi fi-lock" />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="large-8 columns">
                    <div className="row info">
                      <div className="columns">
                        <a href="../videos/warrior-fight-club-2hdtyi.html">
                          <h2>Warrior Fight Club</h2>
                          <div className="short-description">Combine elements of boxing and yoga to get a total body workout that'll have you sweating before you know it.</div>
                        </a>
                      </div>
                    </div>{/*/info*/}
                    <div className="icons-container">
                      <div className="icon-large genre">
                        <div className="ico"><img align="center" alt="Riwxlwtvsfa2ogt0xpmx?cache=true" fit="clip" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/riwXLWtVSfa2OGT0xpmX?cache=true" width={45} /></div>
                        Yoga Boxing
                      </div>{/*
          */}<div className="icon-large equipment">
                        <div className="ico"><img align="center" alt="Zkllowear9o9uu32lw2u?cache=true" height={45} src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/zKlLowEAR9O9uu32Lw2u?cache=true" width={45} /></div>
                        Yoga Mat
                      </div>{/*
          */}<div className="icon-large calories">
                        <div className="standout-quadrant">250 - 300</div>
                        <span className="calories-tooltip">Calories*</span>
                      </div>{/*
          */}<div className="icon-large time">
                        <div className="standout-quadrant">32</div>
                        <span>Minutes</span>
                      </div>
                      <img alt="partner_logo" className="logo" src="https://d3nqjjn0fvaas1.cloudfront.net/api/file/3hX4au6uQny3BLMm3gJr?cache=true" />
                    </div>{/*/icons-container*/}
                  </div>
                  <div className="watch-now">
                    <a href="../videos/warrior-fight-club-2hdtyi.html">Preview Workout</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="large-3 columns" id="video-filter">  
              <div id="filter-title-block">
                <span className="filter_title">Filter</span>
                <span className="clear_all small">Clear all</span>
              </div>
              <form action="https://www.booyafitness.com/workouts/browse" method="post" id="filter_video_form" data-remote="true">
                <fieldset>
                  <div>
                    <select name="quick_search" id="quick_search" className>
                      <option selected disabled>Select quick filter</option>
                      <option value="popular">Popular</option>
                      <option value="low-impact">Low impact</option>
                      <option value="high-intensity">High intensity</option>
                    </select>
                  </div>
                </fieldset>
                <fieldset>
                  <p className="title">
                    <input type="checkbox" id="enable_energy_level" name="filter[enable_energy_level]" defaultValue={1} />
                    <span>my energy level</span>
                    <span className="question_mark has-tip" data-tooltip aria-haspopup="true" title="Tell us how you feel. We won't make you do burpees when you're feeling sluggish and we won't slow you down when you're ready to rock.">
                      <img alt="Question_mark" src="../assets/workout/question_mark-1063ad293548b59102777cfd5d5f50a5.png" />
                    </span>
                  </p>
                  <div id="energy_lable"><span id="sluggish_lable">sluggish</span>
                    <span id="booya_lable">booya!</span>
                  </div>
                  <div id="energy_level">
                    <span className="minus">-</span>
                    <div id="energy_sliders" />
                    <span className="plus">+</span>
                  </div>
                  <input id="energy_input" name="filter[video_attr][intensity]" hidden="true" defaultValue={2} />
                </fieldset>
                <fieldset>
                  <p className="title">my goal</p>
                  <ul>
                    <li>
                      <input data-name="Calorie Burn" id="goal_1" name="filter[goals][]" type="checkbox" defaultValue={1} />
                      <label htmlFor="goal_1">Calorie Burn</label>
                    </li>
                    <li>
                      <input data-name="Sculpt & Tone" id="goal_2" name="filter[goals][]" type="checkbox" defaultValue={2} />
                      <label htmlFor="goal_2">Sculpt &amp; Tone</label>
                    </li>
                    <li>
                      <input data-name="Energize" id="goal_3" name="filter[goals][]" type="checkbox" defaultValue={3} />
                      <label htmlFor="goal_3">Energize</label>
                    </li>
                  </ul>
                </fieldset>
                <fieldset>
                  <p className="title"><span>equipment</span>
                    <span className="question_mark has-tip" data-tooltip aria-haspopup="true" title="Tell us what props you have available to use.">
                      <img alt="Question_mark" src="../assets/workout/question_mark-1063ad293548b59102777cfd5d5f50a5.png" />
                    </span></p>
                  <ul className="equipment-checkboxes">
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
                <fieldset>
                  <div id="surroundings">
                    <p className="title">my surroundings</p>
                    <ul className="noise">
                      <li className="subtitle "><strong>Noise</strong></li>
                      <li>
                        <input type="checkbox" id="quiet" name="filter[video_attr][is_noise][]" defaultValue={1} />
                        <label htmlFor="quiet">Quiet only</label>
                      </li>
                    </ul>
                    <ul className="space">
                      <li className="subtitle"><strong>Space</strong></li>
                      <li>
                        <input type="checkbox" id="limited" name="filter[video_attr][is_space][]" defaultValue={1} />
                        <label htmlFor="limited">I have limited space</label>
                      </li>
                    </ul>
                  </div>
                </fieldset>
                <fieldset>
                  <p className="title">Video Length</p>
                  <ul className="video-checkboxes">
                    <li>
                      <input data-name=" Less than 25 minutes" id="length_1" name="filter[video_length][]" type="checkbox" defaultValue={1} />
                      <label htmlFor="length_1"> Less than 25 minutes</label>
                    </li>
                    <li>
                      <input data-name="26 to 40 minutes" id="length_2" name="filter[video_length][]" type="checkbox" defaultValue={2} />
                      <label htmlFor="length_2">26 to 40 minutes</label>
                    </li>
                    <li>
                      <input data-name="41 minutes and longer" id="length_3" name="filter[video_length][]" type="checkbox" defaultValue={3} />
                      <label htmlFor="length_3">41 minutes and longer</label>
                    </li>
                  </ul>
                </fieldset>
                <fieldset>
                  <p className="title"><label htmlFor="partner_id">partner</label></p>
                  <select name="filter[video_attr][partner_id]" id="partner">
                    <option selected disabled>Select partner</option>
                    <option value={0}>All Partners</option>
                    <option value={23} name="partner.name">
                      Krystal Dwyer
                    </option>
                    <option value={11} name="partner.name">
                      Soho Strength Lab
                    </option>
                    <option value={25} name="partner.name">
                      Core Pilates NYC
                    </option>
                    <option value={31} name="partner.name">
                      The Beyond Studios
                    </option>
                    <option value={14} name="partner.name">
                      BollyX
                    </option>
                    <option value={18} name="partner.name">
                      Broga
                    </option>
                    <option value={17} name="partner.name">
                      CrossFlowX
                    </option>
                    <option value={9} name="partner.name">
                      ZaxFit
                    </option>
                    <option value={10} name="partner.name">
                      Shay Kostabi
                    </option>
                    <option value={1} name="partner.name">
                      Amanda Rose Wellness
                    </option>
                    <option value={20} name="partner.name">
                      Flex Studios
                    </option>
                    <option value={13} name="partner.name">
                      Throwback Fitness
                    </option>
                    <option value={4} name="partner.name">
                      ChaiseFitness
                    </option>
                    <option value={8} name="partner.name">
                      Zander Gladish
                    </option>
                    <option value={19} name="partner.name">
                      Essentrics
                    </option>
                    <option value={15} name="partner.name">
                      ReXist360
                    </option>
                    <option value={12} name="partner.name">
                      BeyondBarre
                    </option>
                    <option value={7} name="partner.name">
                      Trooper Fitness
                    </option>
                    <option value={5} name="partner.name">
                      GRIT by Brit
                    </option>
                    <option value={6} name="partner.name">
                      Shrink Session
                    </option>
                    <option value={2} name="partner.name">
                      As One Effect
                    </option>
                    <option value={3} name="partner.name">
                      Brooklyn Bridge Boot Camp
                    </option>
                    <option value={22} name="partner.name">
                      URBANKICK
                    </option>
                    <option value={16} name="partner.name">
                      David Barton Gym
                    </option>
                    <option value={27} name="partner.name">
                      Body Be Well Pilates
                    </option>
                    <option value={26} name="partner.name">
                      Kira Stokes
                    </option>
                    <option value={28} name="partner.name">
                      Trigger Point
                    </option>
                    <option value={30} name="partner.name">
                      MASHUP™
                    </option>
                    <option value={32} name="partner.name">
                      Masala Bhangra
                    </option>
                  </select>
                </fieldset>
                <fieldset>
                  <p className="title">Workout type</p>
                  <select name="filter[video_type]" id="video_type">
                    <option selected disabled>Select type</option>
                    <option value={0}>All Types</option>
                    <option value={3} name="workout.name">
                      Bootcamp
                    </option>
                    <option value={5} name="workout.name">
                      Cardio Yoga
                    </option>
                    <option value={6} name="workout.name">
                      Strength Conditioning
                    </option>
                    <option value={7} name="workout.name">
                      Barre
                    </option>
                    <option value={9} name="workout.name">
                      Dance (Jazz)
                    </option>
                    <option value={10} name="workout.name">
                      Ballet / Pilates
                    </option>
                    <option value={11} name="workout.name">
                      HIIT
                    </option>
                    <option value={12} name="workout.name">
                      Core
                    </option>
                    <option value={13} name="workout.name">
                      Beginner Yoga
                    </option>
                    <option value={15} name="workout.name">
                      Sports Conditioning
                    </option>
                    <option value={16} name="workout.name">
                      Dance (Pop)
                    </option>
                    <option value={17} name="workout.name">
                      Dance (Ethnic) 
                    </option>
                    <option value={18} name="workout.name">
                      Body Weight Sculpting
                    </option>
                    <option value={19} name="workout.name">
                      Yoga Boxing
                    </option>
                    <option value={22} name="workout.name">
                      Stretch &amp; Restore
                    </option>
                    <option value={23} name="workout.name">
                      Strength-based Yoga
                    </option>
                    <option value={24} name="workout.name">
                      Nutrition
                    </option>
                    <option value={14} name="workout.name">
                      Cardio Kickbox
                    </option>
                    <option value={21} name="workout.name">
                      Prenatal
                    </option>
                    <option value={20} name="workout.name">
                      Pilates
                    </option>
                    <option value={25} name="workout.name">
                      Cardio Barre
                    </option>
                    <option value={26} name="workout.name">
                      Trampoline Cardio
                    </option>
                    <option value={28} name="workout.name">
                      Posture
                    </option>
                  </select>
                </fieldset>
                <fieldset>
                  <p className="title"><label htmlFor="keyword">keywords</label></p>
                  <div id="tags" />
                </fieldset>
                <input type="submit" defaultValue="submit" hidden="true" />
              </form>
            </div>
          </div>
        </section>
  
  
        )
    }
  }


export default Workouts;