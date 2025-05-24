import React, {useEffect} from 'react'
import HW1 from '../../hw01/HW1'
import HW2 from '../../hw02/HW2'
import HW3 from '../../hw03/HW3'
import HW4 from '../../hw04/HW4'
import {useSelector} from 'react-redux';
import {selectAppTheme} from '../../hw12/themeSelector';


function PreJunior() {
  const themeId = useSelector(selectAppTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = themeId + ''
  }, [themeId])

  return (
    <div id={'hw5-page-pre-junior'}>
      {/*pre junior page*/}
      <HW1/>
      <HW2/>
      <HW3/>
      <HW4/>
    </div>
  )
}

export default PreJunior;