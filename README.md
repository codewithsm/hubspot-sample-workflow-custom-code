# sample-workflow-custom-code
## 1. [Update a Deal](update-deal.js)
<i> To update a deal using custom code within a HubSpot workflow, you can use the "Code" action in the workflow to execute JavaScript code. Here's an example of how you can update a deal using custom code in a HubSpot workflow:</i>
In this example:
* You need to replace 'YOUR_ACCESS_TOKEN' with your actual HubSpot API access token.
* The event.object.objectId is used to retrieve the ID of the deal being processed by the workflow.
* The properties object defines the properties to be updated for the deal.
* The simplePublicObjectInput object is created with the properties object as its value.
* The hubspotClient.crm.deals.basicApi.update() method is called to update the deal with the specified dealId and simplePublicObjectInput.
* If the update is successful, the API response is logged to the console, and the callback is invoked with null and a success message.
* If an error occurs, the error is logged to the console, and the callback is invoked with an error message.
* Remember to replace 'YOUR_ACCESS_TOKEN' with your actual HubSpot API access token, and ensure that you have the @hubspot/api-client package installed before executing the code.







