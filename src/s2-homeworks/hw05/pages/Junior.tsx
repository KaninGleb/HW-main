import React, {useEffect} from 'react'
import HW6 from '../../hw06/HW6';
import HW7 from '../../hw07/HW7'
import HW8 from '../../hw08/HW8'
import HW9 from '../../hw09/HW9'
import {useSelector} from 'react-redux';
import {selectAppTheme} from '../../hw12/themeSelector';


function Junior() {
  const themeId = useSelector(selectAppTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = themeId + ''
  }, [themeId])

  return (
    <div id={'hw5-page-junior'}>
      <HW6/>
      <HW7/>
      <HW8/>
      <HW9/>
    </div>
  )
}

export default Junior;