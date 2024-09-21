import './base.css'
import { Slides } from '../slides/slides'
import { UserReviews } from '../user-reviews/user-reviews'
import { Video } from '../video/video'
import { Footer } from '../footer/footer'
import img1 from './images/history-plx.jpg'


export function Base() {
    return (
        <div className="base-main-wrap">
            <img src={img1} alt="" className='base-img' />
            <Slides />
            <UserReviews />
            <Video />
            <Footer />
        </div>
    )
}