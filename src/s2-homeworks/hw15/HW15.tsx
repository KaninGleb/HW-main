import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useSearchParams} from 'react-router-dom'
import {CircularProgress} from '@mui/material';
import SuperPagination from './common/c9-SuperPagination/SuperPagination'
import SuperSort from './common/c10-SuperSort/SuperSort'
import {useSelector} from 'react-redux';
import {selectAppTheme} from '../hw12/themeSelector';
import s2 from '../../s1-main/App.module.css'
import s from './HW15.module.css'


// * 1 - дописать SuperPagination
// * 2 - дописать SuperSort
// * 3 - проверить pureChange тестами
// * 3 - дописать sendQuery, onChangePagination, onChangeSort в HW15
// * 4 - сделать стили в соответствии с дизайном
// * 5 - добавить HW15 в HW5/pages/JuniorPlus

type TechType = {
  id: number
  tech: string
  developer: string
}

type ParamsType = {
  sort: string
  page: number
  count: number
}

const getTechs = (params: ParamsType) => {
  return axios
    .get<{ techs: TechType[], totalCount: number }>('https://samurai.it-incubator.io/api/3.0/homework/test3', { params })
    .catch((e) => {
      alert(e.response?.data?.errorText || e.message)
    })
}

const HW15 = () => {
  const theme = useSelector(selectAppTheme)

  const [sort, setSort] = useState('')
  const [page, setPage] = useState(1)
  const [count, setCount] = useState(4)
  const [isLoading, setLoading] = useState(false)
  const [totalCount, setTotalCount] = useState(100)
  const [searchParams, setSearchParams] = useSearchParams()
  const [techs, setTechs] = useState<TechType[]>([])

  const sendQuery = (params: any) => {
    setLoading(true)
    getTechs(params)
      .then((res) => {
        if (res) {
          setTechs(res.data.techs)
          setTotalCount(res.data.totalCount)
          setLoading(false)
          setSearchParams({
            sort: params.sort || sort,
            page: String(params.page || page),
            count: String(params.count || count),
          })
        }
      })
  }

  const onChangePagination = (newPage: number, newCount: number) => {
    setPage(newPage)
    setCount(newCount)

    sendQuery({
      sort,
      page: newPage,
      count: newCount,
    })

    setSearchParams({
      sort,
      page: String(newPage),
      count: String(newCount),
    })
  }

  const onChangeSort = (newSort: string) => {
    setSort(newSort)
    setPage(1)

    sendQuery({
      sort: newSort,
      page: 1,
      count,
    })

    setSearchParams({
      sort: newSort,
      page: '1',
      count: String(count),
    })
  }

  useEffect(() => {
    const params = Object.fromEntries(searchParams)
    sendQuery({ page: params.page, count: params.count })
    setPage(+params.page || 1)
    setCount(+params.count || 4)
  }, [])

  const mappedTechs = techs.map(t => (
    <div key={t.id} className={s.row}>
      <div id={'hw15-tech-' + t.id} className={s.tech}>
        {t.tech}
      </div>

      <div id={'hw15-developer-' + t.id} className={s.developer}>
        {t.developer}
      </div>
    </div>
  ))

  return (
    <div id={'hw15'}>
      <div className={s2.hwTitle}>Homework #15</div>

      <div className={`${s.hw} ${s2.hw}`}>
        <div className={s.wrapper}>
          {isLoading && <div id={'hw15-loading'} className={s.loading}>
            <CircularProgress thickness={4} size={90}/>
          </div>}

          <div style={{
            opacity: isLoading ? 0.1 : 1,
            pointerEvents: isLoading ? 'none' : 'auto'
          }}>
            <SuperPagination
              page={page}
              itemsCountForPage={count}
              totalCount={totalCount}
              onChange={onChangePagination}
            />

            <div
              className={s.rowHeader}
              style={{
                backgroundColor:
                  theme === 2 ? '#b7dbff'
                    : theme === 3 ? '#3f4953' : ''
              }}
            >
              <div className={s.techHeader}>
                <SuperSort
                  sort={sort}
                  value={'tech'}
                  onChange={onChangeSort}
                />
              </div>

              <div className={s.developerHeader}>
                <SuperSort
                  sort={sort}
                  value={'developer'}
                  onChange={onChangeSort}
                />
              </div>
            </div>

            {mappedTechs}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HW15;