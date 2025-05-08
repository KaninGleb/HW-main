import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {selectIsLoading} from './bll/selectors/loadingSelectors';
import {loadingAC} from './bll/loadingReducer'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {Loader} from './Loader'
import s from './Loader.module.css'
import s2 from '../../s1-main/App.module.css'


// * 1 - в файле loadingReducer.ts дописать типы и логику
// * 2 - получить isLoading из редакса
// * 3 - дописать функцию setLoading
// * 4 - сделать стили в соответствии с дизайном

const LOADING_TIMING = 1500;

const HW10 = () => {
  const isLoading = useSelector(selectIsLoading)
  const dispatch = useDispatch()

  const setLoading = () => {
    dispatch(loadingAC(true))
    setTimeout(() => {
      dispatch(loadingAC(false))
    }, LOADING_TIMING)
  }

  return (
    <div id={'hw10'} className={s.hw10}>
      <div className={s2.hwTitle}>Homework #10</div>

      <div className={`${s.hw}`}>
        {isLoading ? (
          <div id={'hw10-loading'}>
            <Loader timing={LOADING_TIMING}/>
          </div>
        ) : (
          <SuperButton
            id={'hw10-button-start-loading'}
            onClick={setLoading}
          >
            Set loading...
          </SuperButton>
        )}
      </div>
    </div>
  )
}

export default HW10;