
import Api from '@/services/Api'

export default {
  index () {
    return Api().get('waitingqueue')
  },
  post (waiting) {
    return Api().post('waitingqueue', waiting)
  },
  removeq () {
    return Api().get('removequeue')
  },
}