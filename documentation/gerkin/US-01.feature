Feature: Registro
  Scenario: Usuario de la Aplicación se crea una cuenta en la aplicación
    Given que el usuario se encuentra en la pantalla de inicio
    And haga click en el botón “Crear una cuenta”
    And rellene los datos solicitados
    When realice un click en el botón “Registrarse”
    Then el sistema guardara su información y le direccionara a la página principal de su cuenta