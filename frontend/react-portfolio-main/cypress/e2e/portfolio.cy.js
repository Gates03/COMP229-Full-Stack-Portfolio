describe('Portfolio App E2E Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load the home page successfully', () => {
    cy.url().should('include', '/');
    cy.get('body').should('be.visible');
  });

  it('should have navigation menu', () => {
    cy.contains('Home').should('be.visible');
    cy.contains('About').should('be.visible'); 
    cy.contains('Projects').should('be.visible');
    cy.contains('Services').should('be.visible');
    cy.contains('Contact').should('be.visible');
  });

  it('should navigate to different pages', () => {
    // Test navigation to About page (try both "About" and "About Me")
    cy.get('body').then(($body) => {
      if ($body.text().includes('About Me')) {
        cy.contains('About Me').click();
      } else {
        cy.contains('About').click();
      }
    });
    cy.url().should('include', '/about');
    
    // Test navigation to Projects page
    cy.contains('Projects').click();
    cy.url().should('include', '/projects');
    
    // Test navigation to Services page
    cy.contains('Services').click();
    cy.url().should('include', '/services');
    
    // Test navigation to Contact page
    cy.contains('Contact').click();
    cy.url().should('include', '/contact');
  });

  it('should show authentication links', () => {
    cy.visit('/');
    cy.contains('Sign In').should('be.visible');
    cy.contains('Sign Up').should('be.visible');
  });

  it('should navigate to sign in page', () => {
    cy.contains('Sign In').click();
    cy.url().should('include', '/signin');
    cy.get('input[name="email"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
  });

  it('should navigate to sign up page', () => {
    cy.visit('/');
    cy.contains('Sign Up').click();
    cy.url().should('include', '/signup');
    cy.get('input[name="email"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
  });

  it('should test contact form elements', () => {
    cy.contains('Contact').click();
    
    // Check if form elements exist
    cy.get('input[name="firstName"]').should('be.visible');
    cy.get('input[name="lastName"]').should('be.visible');
    cy.get('input[name="email"]').should('be.visible');
    cy.get('input[name="phone"]').should('be.visible');
    cy.get('textarea[name="message"]').should('be.visible');
    cy.contains('Send Message').should('be.visible');
  });

  it('should fill out contact form', () => {
    cy.contains('Contact').click();
    
    // Fill out form
    cy.get('input[name="firstName"]').type('John');
    cy.get('input[name="lastName"]').type('Doe');
    cy.get('input[name="email"]').type('john.doe@example.com');
    cy.get('input[name="phone"]').type('1234567890');
    cy.get('textarea[name="message"]').type('This is a test message from Cypress E2E testing.');
    
    // Verify values were entered
    cy.get('input[name="firstName"]').should('have.value', 'John');
    cy.get('input[name="email"]').should('have.value', 'john.doe@example.com');
  });
});
