Feature: Demo Feature

   Scenario Outline: Run first demo feature

          Given The user wants to login
          When The user enters the username and password
          Then The user should be logged in the application

            Examples:
                | TestID    | Username      | Password     |
                | DEMO_TC001| standard_user | secret_sauce | 
                
