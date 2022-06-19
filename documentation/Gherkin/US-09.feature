Feature: Características de servicios serverless
  Scenario: Usuario de la aplicación quiere definir su Servicio Serverless
    Given que el usuario de la aplicación ha iniciado sesión
    And se encuentre en la página de inicio
    And haga click en “Nueva Cotización”
    When seleccione la opción “Serverless”
    Then le aparece un formulario, donde podrá definir las características de su serverless
