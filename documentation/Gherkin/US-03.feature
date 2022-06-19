Feature: Logout
  Scenario: Usuario de la aplicación quiere desconectar su sesión de la aplicación
    Given que el usuario de la aplicación se encuentre dentro de su cuenta
    And haga click en el botón de Menú
    And haga click en “Cerrar Sesión”
    When haga click en “Aceptar”
    Then la página se direccionará al formulario de “Iniciar Sesión”
