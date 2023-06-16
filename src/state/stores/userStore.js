import { createStore } from 'satcheljs';

// need to import to activate/execute file contents
import '../orchestrators/userOrchestrators'
import '../mutators/userMutators'

export const getUserStore = createStore(
  'userStore',
  {
    token: null,
    currentUser: null,
  }
)
