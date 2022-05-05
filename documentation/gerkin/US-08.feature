Feature: Cotización de base de datos
  Scenario: Usuario de la aplicación quiere comparar base de datos de otros proveedores en simultaneo
    Given que el usuario de la aplicación se encuentre en la sección de “Cotizar/Base De Datos”
    And haga click en el menú desplegable de los proveedores de dicho servicio
    When haga click en “Todos”
    Then le aparece los servicios de todos los proveedores disponibles en su cuenta.
