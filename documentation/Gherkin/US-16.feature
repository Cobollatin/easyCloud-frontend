Feature: Escalabilidad de bases de datos
  Scenario: Usuario de la aplicación quiere visualizar la escalabilidad de sus bases de datos en un tiempo determinado
    Given que el usuario de la aplicación se encuentre en la sección de “Escalabilidad”
    And elija una base de datos de las que ha cotizado
    When complete el formulario de escalabilidad
    Then le aparece el precio de dicha escalabilidad.

  