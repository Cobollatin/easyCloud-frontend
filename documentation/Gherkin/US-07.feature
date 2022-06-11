Feature: Características de base de datos
  Scenario: Usuario de la aplicación quiere definir su base de datos
    Given que el usuario de la aplicación ha iniciado sesión
    And se encuentre en la página de inicio
    And haga click en “Nueva Cotización”
    When seleccione la opción “Base de datos”
    Then le aparece un formulario, donde podrá definir las características de su base de datos

