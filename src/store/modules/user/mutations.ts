import { MutationTree } from 'vuex'
import { State, MutationTypes } from './types'

export interface Mutations {
  [MutationTypes.LOGIN](state: State, payload: any): void
  [MutationTypes.LOGOUT](state: State): void
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.LOGIN](state: State, payload: any) {
    state.token = payload
  },
  [MutationTypes.LOGOUT](state: State) {
    state.token = ''
    state.user = null
  },
}