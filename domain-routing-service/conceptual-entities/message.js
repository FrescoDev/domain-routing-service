import Domain from './domain'

class Message {

  constructor (content = '') {
    this.content = content
    this.domain = new Domain()
  }

  contains(keyword) {
      return this.content.includes(keyword)
  }
}

export default Message