const hubspot = require('@hubspot/api-client');

exports.main = (event, callback) => {
  const hubspotClient = new hubspot.Client({ accessToken: 'YOUR_ACCESS_TOKEN' });
  const dealId = event.object.objectId;

  const properties = {
    amount: '20',
    pipeline: 'default'
  };

  const simplePublicObjectInput = { properties };

  hubspotClient.crm.deals.basicApi.update(dealId, simplePublicObjectInput)
    .then(apiResponse => {
      console.log(JSON.stringify(apiResponse, null, 2));
      callback(null, 'Deal updated successfully');
    })
    .catch(error => {
      console.error(error);
      callback('Failed to update deal');
    });
};
