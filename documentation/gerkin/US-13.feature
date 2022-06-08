Feature: Visualización de cotizaciones de servicios serverless
  Scenario: Usuario de la aplicación quiere visualizar las cotizaciones de los distintos proveedores de sus servicios serverless de otros proveedores 
    Given que el usuario de la aplicación haya seleccionado diferentes cotizaciones de proveedores distintos 
    And se encuentre en la pantalla de inicio
    And se dirija al recuadro de “Mis Cotizaciones” 
    And seleccione “Ver todas” 
    And despliegue las opciones de servicios 
    When haga en “Serverless”
    Then le aparece las cotizaciones de sus servicios serverless de los distintos proveedores

