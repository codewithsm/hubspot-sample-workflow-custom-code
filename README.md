# sample-workflow-custom-code
## 1. [Update a Deal](update-deal.js)
<i> To update a deal using custom code within a HubSpot workflow, you can use the "Code" action in the workflow to execute JavaScript code. Here's an example of how you can update a deal using custom code in a HubSpot workflow:</i>
In this example:
- You need to replace 'YOUR_ACCESS_TOKEN' with your actual HubSpot API access token.
- The event.object.objectId is used to retrieve the ID of the deal being processed by the workflow.
- The properties object defines the properties to be updated for the deal.
- The simplePublicObjectInput object is created with the properties object as its value.
- The hubspotClient.crm.deals.basicApi.update() method is called to update the deal with the specified dealId and simplePublicObjectInput.
- If the update is successful, the API response is logged to the console, and the callback is invoked with null and a success message.
- If an error occurs, the error is logged to the console, and the callback is invoked with an error message.
- Remember to replace 'YOUR_ACCESS_TOKEN' with your actual HubSpot API access token, and ensure that you have the @hubspot/api-client package installed before executing the code.

## 2. [Update Deal Property Based on Line-item ProductID](update-deal-property-based-on-line-item-productid.js)
- Imports the @hubspot/api-client package.
- Defines an exports.main function that serves as the entry point for the script.
- Creates a new instance of the HubSpot client by passing an access token obtained from the `process.env.SECRET_NAME` environment variable.
- Retrieves the dealId from the `event.object.objectId` parameter.
- Logs the dealId value to the console.
- Retrieves all line items associated with the deal using the `hubspotClient.crm.deals.associationsApi.getAll` method.
- Extracts the line item IDs from the response.
- Iterates over each line item ID and performs the following actions:
  - Retrieves line item details using the `hubspotClient.crm.lineItems.basicApi.getById` method.
  - Retrieves the hs_product_id property from the line item response.
  - Based on the productId value, accumulates a value in the increaseBy variable.
- Constructs a dealUpdateRequest object that contains the increaseBy value.
- Updates the deal with the new value using the `hubspotClient.crm.deals.basicApi.update` method.
- Executes the callback function, providing the increaseBy value in the outputFields property.
- Handles any errors that occur during the execution and logs the error.





