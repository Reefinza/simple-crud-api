# This is a Simple API for Database

Mainly written using Javascript with express, pg, jsonwebtoken, uuid, and bcryptjs modules.

Database's type is SQL and using PostgreSQL RDBMS.


The Database is named Employee and contains 2 tables, biodata and users.

## Main Feature:
### For Biodata:
* Insert new biodata (method: POST, path: /employee/)
* Update existing biodata (method: PUT, path: /employee/)
* Delete biodata using ID (method: DELETE, path: /employee/:id)
* List all biodata (method: GET, path: /employee/)
* Search biodata using ID (method: GET, path: /employee/:id)
* Search biodata using keyword (method: GET, path: /employee?q=keyword)

### For Users:
* Insert new user (method: POST, path: /users/)
* List all user (method: GET, path: /users/)
* Search user using ID (method: GET, path: /users/:id)

## Code Structure
request → auth → route → controller → service → repository → database

## Notes
The queries are stored in config/db.query and will be called in repository.

The models or the structures of data that will be displayed are saved in folder model and will also be called in repository.

The auth have a login function, so if user isn't logged in, he can't use the features.

Server configuration files are stored in separate .env file.

Outputs are using json format.