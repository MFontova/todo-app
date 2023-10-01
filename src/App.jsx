import { NavigationTabs } from './components/navigationTabs/NavigationTabs'
import { AllSection } from './components/sections/AllSection'
import * as S from './style'

export const App = () => {
  return (
    <S.App>
      <h1>#todo</h1>
      <NavigationTabs />
      <AllSection />
    </S.App>
  )
}
