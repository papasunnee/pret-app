module.exports = {
    client: {
        name: 'PRET APP [web]',
        service: {
            // name: 'PRET-backend'`
            url: 'http://localhost:9100/graphql',
            // optional headers
            // headers: {
            //     authorization: 'Bearer ',
            // },
            // optional disable SSL validation check
            skipSSLValidation: true,
        },
    },
};