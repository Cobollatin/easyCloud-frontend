Feature: Visualización de cotizaciones agrupadas por proveedor
  Scenario: Usuario de la aplicación quiere visualizar las cotizaciones de los distintos proveedores agrupados
    Given que el usuario de la aplicación haya seleccionado diferentes cotizaciones de proveedores distintos 
    And se encuentre en la pantalla de inicio
    And se dirija al recuadro de “Mis Cotizaciones” 
    And seleccione “Ver todas” 
    And despliegue las opciones de proveedores
    When haga en el proveedor que requiere
    Then le aparece todas las cotizaciones del proveedor elegido.
  