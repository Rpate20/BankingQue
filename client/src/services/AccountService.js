
import Api from '@/services/Api'

export default {
  index () {
    return Api().get('accountreport')
  },
  // takes userID
  useracc (param) {
    return Api().get('useracc', {
      params: param,
    })
  },
  // takes account number
  show (param) {
    console.log('passsedc ', param)
    return Api().get('showaccount', {
      params: param,
    })
  },
  // takes accountId
  showacc (accountId) {
    return Api().get(`useracc/${accountId}`)
  },
  post (newaccount) {
    return Api().post('newaccount', newaccount)
  },
   // takes accountId
   put (account) {
    return Api().put(`useracc/${account.id}`, account)
  },
}
