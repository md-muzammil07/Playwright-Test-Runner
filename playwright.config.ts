import type { PlaywrightTestConfig } from '@playwright/test';


const config: PlaywrightTestConfig = {

    use: {
        headless: false,
        channel: "chrome",
        screenshot:"only-on-failure",
        video: "retry-with-video",
        launchOptions: {
            slowMo: 500,
        }

    },
    testMatch:["playLogger.test.ts"],
    retries: 0,
    reporter: [['html', { open: 'never' }]],
    
}

export default config;