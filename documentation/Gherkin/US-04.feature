Feature: Almacenamiento de cotizaciones

  Scenario: Usuario de la aplicación almacena sus cotizaciones 
    Given que el usuario de la aplicación ha iniciado sesión
    And ha realizado una cotización de sus servicios requerido
    When haga click en “Guardar Cotización”
    Then le aparece un mensaje de “Cotización guardad satisfactoriamente”


  Scenario: Usuario de la aplicación quiere visualizar sus cotizaciones guardadas
    Given que el usuario de la aplicación ha iniciado sesión
    And se encuentra en la página de inicio
    When haga click en “Ver todas mis cotizaciones”
    Then le aparece las cotizaciones guardadas y le dirigirá a la página de inicio
