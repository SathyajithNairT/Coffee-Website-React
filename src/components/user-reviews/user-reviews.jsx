import img1 from '../base/images/CoffeeImg1.png'
import img2 from '../base/images/CoffeeImg2.png'
import img3 from '../base/images/CoffeeImg3.png'
import img4 from '../base/images/CoffeeImg4.png'


export function UserReviews() {
    return (
        <div className="user-reviews-main-wrap">
            <img src={img1} alt="" className='user-review-img' />
            <img src={img2} alt="" className='user-review-img' />
            <img src={img3} alt="" className='user-review-img' />
            <img src={img4} alt="" className='user-review-img' />
        </div>
    )
}