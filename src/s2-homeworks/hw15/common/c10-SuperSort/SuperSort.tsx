import React from 'react'
import {downIcon, upIcon, noneIcon} from '../../assets';

// добавить в проект иконки и импортировать
// const downIcon = '[\\/]'
// const upIcon = '[/\\]'
// const noneIcon = '[--]'

export type SuperSortPropsType = {
  id?: string
  sort: string
  value: string
  onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
  if (sort === '') return down
  if (sort === down) return up
  if (sort === up) return ''
  return down
}

const SuperSort: React.FC<SuperSortPropsType> = ({
    sort,
    value,
    onChange,
    id = 'hw15',
  }) => {
  const down = '0' + value
  const up = '1' + value

  const onChangeCallback = () => {
    onChange(pureChange(sort, down, up))
  }

  const icon = sort === down
    ? downIcon
    : sort === up
      ? upIcon
      : noneIcon

  return (
    <span
      id={id + '-sort-' + value}
      onClick={onChangeCallback}
    >
      <div>{value}</div>
      <img
        id={id + '-icon-' + sort}
        src={icon}
      />
    </span>
  )
}

export default SuperSort;