Feature: Login
  Scenario: Usuario de la aplicación quiere conectarse con su cuenta de Microsoft
    Given que el usuario de la aplicación se encuentre en la página de inicio
    And haga click en “Ingresas a mi cuenta”
    When haga click en el botón “Iniciar Sesión con Microsoft”
    Then se cargará la cuenta del usuario

  Scenario: Usuario de la aplicación quiere conectarse con su cuenta de Google
    Given que el usuario de la aplicación se encuentre en la página de inicio
    And haga click en “Ingresas a mi cuenta”
    When haga click en el botón “Iniciar Sesión con Google”
    Then se cargará la cuenta del usuario.

  Scenario: Usuario de la aplicación quiere conectarse con su cuenta de LinkedIn
    Given que el usuario de la aplicación se encuentre en la página de inicio
    And haga click en “Ingresas a mi cuenta”
    When haga click en el botón “Iniciar Sesión con LinkedIn”
    Then se cargará la cuenta del usuario.
