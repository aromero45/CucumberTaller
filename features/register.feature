Feature: Login into losestudiantes
    As an user I want to register a new user and log in.

Scenario Outline: register

  Given I go to losestudiantes home screen
    When I open the login screen
    And I fill it with <name> and <lastname> and <email> and <password>
    And I check all
    And I check all again
    And  I try to register
    Then Register succesful

    Examples:
      | name                 | lastname       | email                                            | password        |
      | Alex                 | romero         | a.romero4@uniandes.edu.co                        | 12345678        |
