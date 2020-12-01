import React from 'react'
import styles from './tweet.module.css'
import container from './container.module.css'

const Tweet = () => {
    return (
        <div className={`${container.fullBleed} ${styles.wrapper}`}>
              <a class="twitter-timeline" data-width="300"
  data-height="300" href="https://twitter.com/NASA?ref_src=twsrc%5Etfw" data-chrome="nofooter noborders noheader"  data-tweet-limit="1">Tweets by NASA</a>  
    <a class="twitter-timeline" data-width="300"
  data-height="300"  href="https://twitter.com/SpaceX?ref_src=twsrc%5Etfw" data-chrome="nofooter noborders noheader"  data-tweet-limit="1">Tweets by Space X</a>  
  <a class="twitter-timeline" data-width="300"
  data-height="300"  href="https://twitter.com/SpaceX?ref_src=twsrc%5Etfw" data-chrome="nofooter noborders noheader"  data-tweet-limit="1">Tweets by Space X</a>  
    <a class="twitter-timeline" data-width="300"
  data-height="300" href="https://twitter.com/NatureAstronomy?ref_src=twsrc%5Etfw" data-chrome="nofooter noborders noheader"  data-tweet-limit="1">Tweets by Space X</a>  
        </div>
    )
}

export default Tweet
