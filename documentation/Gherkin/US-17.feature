Feature: Escalabilidad de servicios serverless
  Scenario: Usuario de la aplicación quiere visualizar la escalabilidad de sus servicios serverless en un tiempo determinado
    Given que el usuario de la aplicación se encuentre en la sección de “Escalabilidad”
    And elija una serverless de las que ha cotizado
    When complete el formulario de escalabilidad
    Then le aparece el precio de dicha escalabilidad.
