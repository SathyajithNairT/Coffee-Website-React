import vid1 from '../base/videos/coffeevideo1.mp4'
import vid2 from '../base/videos/coffeevideo2.mp4'


export function Video(){
    return(
        <div className="video-main-wrap">
            <div className='video-heading'>
                A place to hangout
            </div>
            <video width="100%" autoPlay loop muted preload='auto' style={{boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.8)', marginBottom: '2rem'}}>
                <source src={vid1} type="video/mp4"/>
            </video>
            <video width='100%' autoPlay loop muted preload='auto' style={{boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.8)'}}>
                <source src={vid2}/>
            </video>
        </div>
    )
}