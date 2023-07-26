// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Cypress.on('fail', (err, runnable) => {
//     console.log('Test case got fail because of', err.message)
//     console.log('runnable', runnable)
//     if(err.message.includes('Things went bad')){
//         return false
//     }
// })
// Cypress.on('fail', (e, runnable) => {
//     console.log('Test case got fail because of', e.message)
//     if(e.name === 'AssertionError' && !e.message.includes("Timed out retrying after 4000ms: Expected to find element but never found it.")){
//         throw e;
//     }
// })

// Alternatively you can use CommonJS syntax:
// require('./commands')