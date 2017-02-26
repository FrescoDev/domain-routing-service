import BaseHandler from 'fresco-http-service-utilities'
import DomainRouter from '../../domain-routing-service'

class InboxHandler extends BaseHandler {
  index (req, res) {
    let domainRouter = new DomainRouter()
    let domain = domainRouter.execute(req)
    res.json({
      'domain': domain
    })
  }
}

export default new InboxHandler()
