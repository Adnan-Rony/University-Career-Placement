
import { useCurrentUser } from '../../../../../../../hooks/useAuth'

import Loading from '../../../../../../loading/Loading'
import { ProfileSummary } from './ProfileSummary'
import { Progress } from './Progress'

export const OverViewTab = () => {
  const {data,isPending}=useCurrentUser()

 
  if(isPending) return <Loading/>

  return (

<div>
  <Progress/>
  <ProfileSummary/>
</div>
  )
}
