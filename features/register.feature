Feature: Login into losestudiantes
    As an user I want to register a new user and log in.

Scenario Outline: register

  Given I go to losestudiantes home screen
    When I open the login screen
    And I fill with <name> and <lastname> and <email>
    And  I try to register
    Then Register succesful

    Examples:
      | name                 | lastname       | email                                            |
      | alex                 | romero         | a.romero4@uniandes.edu.co                        |
