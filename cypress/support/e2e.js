/* eslint-disable indent */
/* eslint-disable no-undef */

import './commands'
// eslint-disable-next-line no-unused-vars
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    })

import 'cypress-mailosaur'

import 'cypress-iframe'
