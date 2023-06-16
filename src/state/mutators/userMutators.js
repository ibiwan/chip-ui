import { mutator } from 'satcheljs';

import { setCurrentUser } from 'state/actions/userActions';
import { getUserStore } from 'state/stores/userStore';

mutator(setCurrentUser, (actionMessage) => {
  getUserStore().currentUser = actionMessage.user
})
