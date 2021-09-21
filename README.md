# requirments
Create a new Vuetify application.
Create pages and layouts accordingly structure:

-------------- public pages

| - Login

| - Privacy policy

-------------- admit by auth

| - CRM

| --- Dashboard

| --- Orders

| ----- OrderDetail (via dynamic parameter)

Each page should have its own url, like ‘/login’ or ‘/crm/orders/’
Add a datatable example to the Orders page with demo data.
Each row should contain an unique link to the order detail page, so a user could share the link with another user and the opened page should show the right order information.

# pbegin-task

to login use creds: admin / !@12345

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
