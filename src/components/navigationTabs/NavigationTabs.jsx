import { useTabSelector } from '../../hooks/tabSelector'
import * as S from './style'

export const NavigationTabs = () => {
  const { selected, setSelected } = useTabSelector()
  return (
    <S.NavigationTabs>
      <S.Tab onClick={() => setSelected(0)}>
        <p>All</p>
        {
          selected === 0
            ? (
              <S.TabUnderline />
              )
            : null
        }
      </S.Tab>
      <S.Tab onClick={() => setSelected(1)}>
        <p>Active</p>
        {
          selected === 1
            ? (
              <S.TabUnderline />
              )
            : null
        }
      </S.Tab>
      <S.Tab onClick={() => setSelected(2)}>
        <p>Completed</p>
        {
          selected === 2
            ? (
              <S.TabUnderline />
              )
            : null
        }
      </S.Tab>
    </S.NavigationTabs>
  )
}
