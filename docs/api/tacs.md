4444 - campaign_ref_id  
12345678 - order_id  

## PUT /api/v1/tacs/campaigns/4444/applications/by/syncId/remove.do

### request
```json
{
  "clientIdentifiers": [
    {
      "guid": "12345678"
    }
  ],
  "cancelCallbacks": true
}
```

## POST /tacs/campaigns/4444/exec.do

### request
```json
{
  "disableDuplicatePhonesValidation": true,
  "maxCallCount": "15",
  "clients": [
    {
      "clientIdentifiers": {
        "guid": "12345678"
      }
    }
  ]
}
```

### response
```json
{}
```
