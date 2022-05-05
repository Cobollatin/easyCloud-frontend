Feature: Cotización de máquinas virtuales
  Scenario: Usuario de la aplicación quiere comparar máquinas virtuales de otros proveedores en simultaneo
    Given que el usuario de la aplicación se encuentre en la sección de “Cotizar/Máquinas Virtuales”
    And haga click en el menú desplegable de los proveedores de dicho servicio
    When haga click en “Todos”
    Then le aparece los servicios de todos los proveedores disponibles en su cuenta.

  