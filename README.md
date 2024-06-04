# Procon Vue Training

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


Hands On (Session 1)
--------------------
1. Create two filters (continent filter, population filter). The filters should be on the same row each taking 50% width of the row
2. The first filter (continent filter) should be populated with all continents names from continents.api.js alphabetically + all continents option
3. The second filter (population filter) should be populated with 3 options: no population restriction, > 50 M , > 100 M
4. Below the filters, CitiesTable should be a table with columns name, continent and population. Applied filter should be immediately reflected on the table
5. Initially the CitiesTable should be populated with all continents and no population restriction and those should be the values of the corresponding filters
6. Pay attention on clean code, variable naming conventions and keep in mind that your code should be easy to understand and expand by others
7. If you are done you can extend your UI and make it prettier by using Vuetify: https://vuetifyjs.com/en/ 
8. The components you will need for your implementation are: https://vuetifyjs.com/en/components/selects/ and https://vuetifyjs.com/en/components/simple-tables/

Hands On (Session 2)
--------------------
1. Add frontend routing to your previous project with Vue Router
2. We should have four routes in total 1.Overview 2.Continents 3.Cities 4.Error Page
3. The first route will be '/' and it will the overview section which will contain what we build before
4. The second route continents will contain a table with all continents (name, population columns)
5. The third route will contain a table with all cities(name, name of Continent it belongs, population). 
   Upon clicking on the row of each city we ll navigate (another route) to the detail of the city (ul with name, continent name, population)
6. Upon entering every other url we want to be redirected to an error page component. Just a dummy component with error page message
7. Again give attention to best practices, code consistency and what we discussed so far.
8. If you are done try to make your application beautiful by installing Vuetify and using the corresponding UI components.

Hands On (Session 3)
--------------------
1. Switch your existing implementation to typescript. You can make an incremental transition, meaning ts and js files can co-exist. 
This article I found really nice: https://medium.com/js-dojo/adding-typescript-to-your-existing-vuejs-2-6-app-aaa896c2d40a
2. Make use of vue-class-component and vue-property-decorator in order to switch your components to the new syntax.
3. Switch also your api or other js files that you have to ts files.
4. Please make sure that you use types(built in + user defined) in your implementation and do not use any, never or ts-ignore.(comment to disable ts compiler)