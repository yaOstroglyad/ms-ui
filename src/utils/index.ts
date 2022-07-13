import {serviceLogout} from '../app/modules/login/login.service';
import {LOCAL_STORAGE} from '../constants';
export * from './date'

export function logout() {
  serviceLogout().then(r => {});

  setTimeout(() => {
    const localStorageWhiteList = [LOCAL_STORAGE.LOGIN_NAME]
    const localStorageLen = localStorage.length
    const allLocalStorageKey: string[] = []

    for (let i = 0; i < localStorageLen; i++) {
      const key = localStorage.key(i) as string
      allLocalStorageKey.push(key)
    }

    allLocalStorageKey.forEach(keyName => {
      if (localStorageWhiteList.indexOf(keyName) === -1) {
        localStorage.removeItem(keyName)
      }
    })
    sessionStorage.clear()
    // eslint-disable-next-line no-restricted-globals
    location.reload()
  })
}
