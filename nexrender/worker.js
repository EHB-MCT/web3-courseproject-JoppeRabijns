const { start } = require('@nexrender/worker')

const main = async () => {
    const serverHost = 'http://localhost:3003'
    const serverSecret = 'myapisecret'

    await start(serverHost, serverSecret, {
        binary: '/Applications/AdobeAfterEffects/aerender',
        skipCleanup: true,
        addLicense: false,
        debug: true,
    })
}

main().catch(console.error);