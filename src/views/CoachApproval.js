import React from 'react';

class CoachApproval extends React.Component{
    componentDidMount(){
        document.getElementsByTagName('body')[0].id = 'sessions_new';
      }
    
    render(){
        return (
            <section class="main general">
             
            <div class="row">
              <div class="large-12 columns general-container">
                <center><h4 style={{ color:'#d62424', padding:'6.6cm 1cm 7cm 1cm' }}>Registration Success Waiting For Admin Approval !!</h4></center>
        
              </div>
            </div>
          </section>
        )
    }
}

export default CoachApproval;