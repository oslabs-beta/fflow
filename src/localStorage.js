import localforage from 'localforage';


export const saveState = (state) => {
  console.log('save in localStorage')
  console.log(state)
  localforage.setItem('state', state);
  localforage.getItem('state').then(data => console.log(data))
}

export const loadState = () => {
  console.log('load in local storage')
  let str
  return str = "HELLO"
  localforage.getItem('state')
}
