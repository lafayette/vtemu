Change VoipTime URL
```sql
update vt.servers set config = jsonb_set(config, '{api,baseUrl}', '"http://localhost:33000/api/v1"');
update call_servers set params = jsonb_set(params, '{api,baseUrl}', '"http://localhost:33000/api/v1"');
```
