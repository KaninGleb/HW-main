import React, {useState} from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW13.module.css'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import axios from 'axios'
import success200 from './images/200.svg'
import error400 from './images/400.svg'
import error500 from './images/500.svg'
import errorUnknown from './images/error.svg'
import {Loader} from '../hw10/Loader';


// * 1 - дописать функцию send
// * 2 - дизэйблить кнопки пока идёт запрос
// * 3 - сделать стили в соответствии с дизайном

const HW13 = () => {
  const [code, setCode] = useState('')
  const [text, setText] = useState('')
  const [info, setInfo] = useState('')
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)

  const send = (x?: boolean | null) => () => {
    const url =
      x === null
        ? 'https://xxxxxx.ccc' // имитация запроса на не корректный адрес
        : 'https://samurai.it-incubator.io/api/3.0/homework/test'

    setLoading(true)

    axios.post(url, { success: x }).then((res) => {
      setCode('Код 200!')
      setImage(success200)
      // дописать
      setText(res.data.errorText)
      setInfo(res.data.info)

    }).catch((e) => {
      // дописать
      setImage(errorUnknown)

      if (e.response.data) {
        setCode(`Ошибка ${e.response.status}!`);
        setText(e.response.data.errorText);

        if (e.response.status === 400) {
          setImage(error400)
          setInfo(e.response.data.info)
        } else if (e.response.status === 500) {
          setImage(error500)
          setInfo(e.response.data.info)
        }

      } else {
        setCode('Error!')
        setText(e.message);
        setInfo(e.name)
      }

    }).finally(() => {
      setLoading(false)
    })
  }

  const buttons = [
    { id: 'hw13-send-true', label: 'Send true', value: true },
    { id: 'hw13-send-false', label: 'Send false', value: false },
    { id: 'hw13-send-undefined', label: 'Send undefined', value: undefined },
    { id: 'hw13-send-null', label: 'Send null', value: null },
  ]

  return (
    <div id={'hw13'} className={s.hw13}>
      <div className={s2.hwTitle}>Homework #13</div>

      <div className={s2.hw}>
        <div className={s.buttonsContainer}>
          {buttons.map((btn) => (
            <SuperButton
              key={btn.id}
              id={btn.id}
              onClick={send(btn.value)}
              xType={'secondary'}
              disabled={loading}
            >
              {btn.label}
            </SuperButton>
          ))}
        </div>

        <div className={s.responseContainer}>
          {loading ? (
            <Loader/>
          ) : (
            <>
              <div className={s.imageContainer}>
                {image &&
                  <img
                    src={image}
                    className={s.image}
                    alt="status"
                    width={loading ? 420 : ''}
                    height={loading ? 300 : ''}
                  />
                }
              </div>

              <div className={s.textContainer}>
                <div id={'hw13-code'} className={s.code}>
                  {code}
                </div>
                <div id={'hw13-text'} className={s.text}>
                  {text}
                </div>
                <div id={'hw13-info'} className={s.info}>
                  {info}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default HW13;