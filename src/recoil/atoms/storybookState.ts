import { atom } from 'recoil'

export enum StorybookStates {
  INIT = 'init',
  STORYBOOK = 'storybook',
  NO_STORYBOOK = 'no_storybook',
}

export const storybookState = atom<StorybookStates>({
  key: 'storybookAtom',
  default: StorybookStates.INIT,
})
