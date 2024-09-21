import img1 from '../base/images/CoffeeBanner.jpg'
import img2 from '../base/images/AlotCanHappenOverCoffeeBanner.jpg'
import { useEffect, useState } from 'react'


export function Slides() {

    const [currentImage, setCurrentImage] = useState(img1)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const images = [img1, img2]

    useEffect(() => {
        const displaySlide = () => {
            setCurrentImage(images[currentImageIndex])
            const nextIndex = (currentImageIndex + 1) % images.length
            setCurrentImageIndex(nextIndex)
        }

        const intervalID = setInterval(displaySlide, 8000)
        return () => clearInterval(intervalID)
    }, [currentImageIndex, images])

    return (
        <div className="slides-main-wrap">
            <div className='slide-img-container'>
                <img src={currentImage} alt="" className='slide-img' />
            </div>
            <div className='heading'>
                coffeeday.com
            </div>
        </div>
    )
}