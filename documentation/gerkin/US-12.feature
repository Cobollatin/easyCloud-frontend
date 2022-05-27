Feature: Visualización de cotizaciones de base de datos
  Scenario: Usuario de la aplicación quiere visualizar las cotizaciones de los distintos proveedores de sus bases datos de otros proveedores 
    Given que el usuario de la aplicación haya seleccionado diferentes cotizaciones de proveedores distintos 
    And se encuentre en la pantalla de inicio
    And se dirija al recuadro de “Mis Cotizaciones”   
    And seleccione “Ver todas” 
    And despliegue las opciones de servicios 
    When haga en “Base de Datos”
    Then le aparece las cotizaciones de sus bases de datos de los distintos proveedores

