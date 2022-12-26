//Automation for Test CaseID 13
//Author: Ciji Bostic
//Date: 12/25/22

describe('empty spec', () => {
  it('passes', () => {

  // Go to specified URL
    cy.visit('https://info.guildeducation.com/interested-partner/p/1')

  // Type an entry into the First Name field
   cy.get('[id=FirstName]').type('Test').should('have.value', 'Test').should('be.visible')

  // Type an entry into the Last Name field
   cy.get('[id=LastName]').type('Applicant').should('have.value', 'Applicant').should('be.visible')

  // Type an entry into the Business Email field
   cy.get('[id=Email]').type('hopeididwell@hireme.com').should('have.value', 'hopeididwell@hireme.com').should('be.visible')

  // Type an entry into the Company field
   cy.get('[id=Company]').type('Just Do Your Best Enterprises').should('have.value', 'Just Do Your Best Enterprises').should('be.visible')

  // Type an entry into the Job Title field
   cy.get('[id=Title]').type('Senior Engineer I, Quality Engineering').should('have.value', 'Senior Engineer I, Quality Engineering').should('be.visible')

  // Select an option
  cy.get('[id=of_US_Employees__c]').select('0 - 5,000')

  // Type an entry into the How Did You Hear About Us field
   cy.get('[id=How_did_you_hear_about_us__c]').type('This is test data in production. Sorry!').should('have.value', 'This is test data in production. Sorry!').should('be.visible')

   //Submit the form
   cy.get('[id=mktoForm_1076]').submit()

  // Confirm the page redirects to the "Thank You" page
   cy.location().should((loc) => {
    expect(loc.href).to.eq('https://info.guildeducation.com/thank-you-interested-partner/')

   })

  
  })
    

 
})