import { useState } from 'react'
import { observer } from 'mobx-react'
import MFAList from './components/mfaList'
import MFAStore from '../../stores/mfaStore'
import NavigationBar from './components/navigationBar'

type Props = {
  store: MFAStore
  onCreate: () => void
}

const Home = ({ store, onCreate }: Props) => {
  const [isEditting, setIsEditting] = useState(false)

  const switchMFAs = (p1: number, p2: number) => {
    store.switchMFAs(p1, p2)
  }

  return (
    <div>
      <NavigationBar onEdit={() => setIsEditting(!isEditting)} onCreate={onCreate} />
      <MFAList mfas={store.mfas} isEditting={isEditting} switchMFAs={switchMFAs} />
    </div>
  )
}

export default observer(Home)
