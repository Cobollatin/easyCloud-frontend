Feature: Características de máquinas virtuales
  Scenario: Usuario de la aplicación quiere definir sus máquinas virtuales
    Given que el usuario de la aplicación ha iniciado sesión
    And se encuentre en la página de inicio
    And haga click en “Nueva Cotización”
    When seleccione la opción “Máquinas Virtuales”
    Then le aparece un formulario, donde podrá definir las características de sus máquinas virtuales

