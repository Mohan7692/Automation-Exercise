Feature: Register User
 
Scenario: Register User Successfully
 
Given User launches browser
And User navigates to application
 
When User clicks Signup Login
And User enters registration details
And User clicks Signup button
 
Then Account information page should display
 
When User fills account details
And User fills address details
And User clicks Create Account
 
Then Account should be created
