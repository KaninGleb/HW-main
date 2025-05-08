import {useState, useEffect} from 'react';
import Ellipse1 from './assets/Ellipse1.svg'
import Ellipse2 from './assets/Ellipse2.svg'
import Ellipse3 from './assets/Ellipse3.svg'
import Ellipse4 from './assets/Ellipse4.svg'
import s from './Loader.module.css'


type LoaderType = {
  timing: number
}

export const Loader = ({ timing }: LoaderType) => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    Ellipse1,
    Ellipse2,
    Ellipse3,
    Ellipse4,
  ]

  useEffect(() => {
    const id = setInterval(() => {
      setImageIndex(imageIndex => imageIndex + 1)
    }, timing / images.length)

    return () => clearInterval(id)
  }, []);

  return (
    <div className={s.loader}>
      <img className={s.image} src={images[imageIndex]} alt=""/>
    </div>
  )
}
