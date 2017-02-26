import Domain from '../conceptual-entities/domain'

const deterministicDomainDisambiguator = (message) => {

    let domain = new Domain();

    if (message.contains('weather')) {

        domain.exists = true
        domain.name = 'WEATHER_QUERY'

        return domain
    }

    return domain
}

export default deterministicDomainDisambiguator