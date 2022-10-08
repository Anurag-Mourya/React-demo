import React from 'react'

function Iframe() {
  return (

    <div className="bg-dark ">

      <div className="row my-5 container" data-aos="fade-up">

        <h1 className=' text-white text-center p-3'>Current and Upcoming events</h1>

        <div className="col-lg-7">
          <span className='iFramSpan'> 
              <iframe name="fa2a9994ce81c" data-testid="fb:page Facebook Social Plugin" title="fb:page Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="on" allow="encrypted-media" src="https://www.facebook.com/v10.0/plugins/page.php?app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df15c9824ecb3d68%26domain%3Dsimmifoundation.org%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fsimmifoundation.org%252Ff173e1ab5321e24%26relation%3Dparent.parent&amp;container_width=529&amp;height=650&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fsimmifoundation.org%2F&amp;locale=en_GB&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline&amp;width=650"  className="iFrameStyle"></iframe>

          </span>

         
        </div>

        <div className="col-lg-5 p-4">
          <iframe id="twitter-widget-0" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" className="iFrameStyle2" title="Twitter Timeline" src="https://syndication.twitter.com/srv/timeline-profile/screen-name/simmifoundation?dnt=false&amp;embedId=twitter-widget-0&amp;frame=false&amp;hideBorder=false&amp;hideFooter=false&amp;hideHeader=false&amp;hideScrollBar=false&amp;lang=en&amp;maxHeight=650px&amp;origin=https%3A%2F%2Fsimmifoundation.org%2Fhome%2Fhome.php%23&amp;sessionId=4353cf242d9d5647be7864c83cb54fd0639cfd7e&amp;showHeader=true&amp;showReplies=false&amp;theme=light&amp;transparent=false&amp;widgetsVersion=1c23387b1f70c%3A1664388199485"></iframe>
        </div>


      </div>
    </div>


  )
}

export default Iframe