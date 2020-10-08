## POST /api/v1/clients/exec.do

### request
```json
{
  "recovery": true,
  "clients": [
    {
      "addresses": [],
      "emails": [],
      "clientRoleId": 1,
      "type": "SIMPLE",
      "fields": {
        "id": 0,
        "guid": "12345678",
        "external_id": 12345678,
        "full_name": "L"
      },
      "uuid": "12345678",
      "phones": [
        {
          "active": true,
          "phoneNumber": "+393000000000",
          "type": "MOB"
        }
      ],
      "timeZone": "Europe/Rome"
    }
  ]
}
```

## response
```json
{
  "createResult": [
    {
      "uuid": "12345678",
      "result": "Success",
      "createdClientId": 7654321
    }
  ]
}
```
