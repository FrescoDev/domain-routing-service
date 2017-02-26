import Message from './conceptual-entities/message'
import deterministicDomainDisambiguator from './capabilities/deterministic-domain-disambiguator'
import probabilisticDomainDisambiguator from './capabilities/probabilistic-domain-disambiguator'

class DomainRouter {
  execute(req) {
    const content = req.body.content

    let message = new Message(content)
    let domain = deterministicDomainDisambiguator(message)

    if (domain.exists) {
      return domain.name
    } else {
      domain = probabilisticDomainDisambiguator(message)
      return domain.name
    }
  }
}

export default DomainRouter
