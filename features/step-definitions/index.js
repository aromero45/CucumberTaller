//Complete siguiendo las instrucciones del taller

var {defineSupportCode} = require('cucumber');
var {expect} = require('chai');

defineSupportCode(({Given, When, Then}) => {
  Given('I go to losestudiantes home screen', () => {
    browser.url('/');
    if(browser.isVisible('button=Cerrar')) {
      browser.click('button=Cerrar');
    }
  });
  When('I open the login screen', () => {
    browser.waitForVisible('button=Ingresar', 5000);
    setTimeout(function(){
       browser.click('button=Ingresar');
    },3000);
    browser.waitForVisible('.cajaSignUp', 5000);
  });

  When(/^I fill it with (.*) and (.*) and (.*) and (.*)$/ , (name, lastname, email, password) => {
    browser.waitForVisible('.cajaSignUp', 5000);
     var cajaSignUp = browser.element('.cajaSignUp');

     var nameInput = cajaSignUp.element('input[name="nombre"]');
     nameInput.click();
     nameInput.keys(name);

    var lastnameInput = cajaSignUp.element('input[name="apellido"]');
    lastnameInput.click();
    lastnameInput.keys(lastname);

    var mailInput = cajaSignUp.element('input[name="correo"]');
    mailInput.click();
    mailInput.keys(email);

    var passwordInput = cajaSignUp.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys(password)
  });
  /* it('Visits los estudiantes register', function() {
         cy.visit('https://losestudiantes.co')
         cy.contains('Cerrar').click()
         cy.contains('Ingresar').click()
         cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Alex")
         cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Romero")
         cy.get('.cajaSignUp').find('input[name="correo"]').click().type("a.romero4@uniandes.edu.co")
         cy.get('.cajaSignUp').find('select[name="idUniversidad"]').select("Universidad de los Andes")
         cy.get('.cajaSignUp').find('input[type="checkbox"]').check()
         cy.get('.cajaSignUp').find('select[name="idPrograma"]').select("Maestría en Ingeniería de Software")
         cy.get('.cajaSignUp').find('input[name="password"]').click().type("12345678")
         cy.get('.cajaSignUp').contains('Registrarse').click()
   */
  When('I check all', () => {
    browser.waitForVisible('.cajaSignUp', 5000);
    var cajaSignUp = browser.element('.cajaSignUp');
    var universityInput = cajaSignUp.element('select[name="idUniversidad"]');
    var programCheckbox=cajaSignUp.element('input[type=checkbox]');
    programCheckbox.click()
  });
  When('I check all again', () => {
    browser.waitForVisible('.cajaSignUp', 5000);
    var cajaSignUp = browser.element('.cajaSignUp');
    var programaInput = cajaSignUp.element('select[name="idPrograma"]');
    programaInput.element('Arte').click();
    cajaSignUp.element('button=Registrarse').click()
  });

  When('I try to register', () => {
    cajaSignUp = browser.element('.cajaSignUp');
    cajaSignUp.element('button=Registrarse').click()
  });

  Then('Register succesful', () => {  // registro exitoso

  });

  When(/^I fill with (.*) and (.*)$/ , (email, password) => {
    browser.waitForVisible('.cajaLogIn', 5000);
     var cajaLogIn = browser.element('.cajaLogIn');

    var mailInput = cajaLogIn.element('input[name="correo"]');
    mailInput.click();
    mailInput.keys(email);

    var passwordInput = cajaLogIn.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys(password)
 });

 When('I try to login', () => {
   var cajaLogIn = browser.element('.cajaLogIn');
   cajaLogIn.element('button=Ingresar').click()
 });


  Then('I expect to see {string}', error => {
    browser.waitForVisible('.aviso.alert.alert-danger', 5000);
    var alertText = browser.element('.aviso.alert.alert-danger').getText();
    expect(alertText).to.include(error);
  });
  Then('Login succesful', () => {  // registro exitoso

  });


});
