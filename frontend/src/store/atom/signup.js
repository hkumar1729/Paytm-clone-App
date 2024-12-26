import{ atom } from 'recoil'

const FirstNameAtom = atom({
        key: 'FirstNameAtom',
        default:''
    })
const LastNameAtom = atom({
        key: 'LastNameAtom',
        default:''
    })
const UsernameAtom = atom({
        key: 'UsernameAtom',
        default:''
    })
const PasswordAtom = atom({
        key: 'PasswordAtom',
        default:''
    })

export {FirstNameAtom, LastNameAtom, UsernameAtom, PasswordAtom}