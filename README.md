# Front-end challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Configuración y ejecucion
1) Clonar el repositoria y navegar a la carpeta que se crea.
2) Dentro de la carpeta del proyecto ejecutar el comando:

            npm install // Este comando instalara las dependencias necesarias
3) Ejecutar el comando para iniciar la aplicacion
            
            npm start       
    Abre el navegador en http://localhost:3000 para visualizar la aplicacion en el browser.

## Notas
* Tanto en la pagina de Series y de Movies se tiene agregado un timeout the 1s para que se logre visualizar la pantalla de carga.
* La mayoria de las URLs de los posters de las series/movies que se proporcionaron en sample.json ya no funcionan.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


## ¿Cómo decidió las opciones técnicas y arquitectónicas utilizadas como parte de su solución?
Para ser honesto no tengo mucha experiancia desarrollando aplicaciones con react pero mi approach fue investigar todo lo que necesitaba para llevar acabo este challenge desde leer la documentacion de react y react-redux directamente de sus paginas hasta leer ciertos blogs para saber como organizar las carpetas y los archivos terminando con esta estructura:

* assets: Los recursos que se utilizan en la aplicacion.
* components: Esta carpeta contiene todos los componentes que practicamente solo se utilizan para mostrar contenido y que no acceden directamente al estado (store redux)
* containers: Esta carpeta contiene todos los componentes que tienen acceso directamente al estado de la aplicacion. y que no pueden lanzar eventos que hagan cambios en el estado.
* store: Esta carpeta contiene todos los archivos relacionados al estado de la aplicacion. 

¿Hay alguna mejora que pueda hacer en su envío?
* Desafortunadamente no me alcanzo el tiempo para realizar las pruebas unitarias pues como ya habia comentado no tengo mucha experiencia con estas.
* En cuanto a mis componentes MoviesPage y SeriesPage, despues de investigar un poco es posible que estos dos se pueden crear atraves de un HOC (High order component) y de estas forma reducir el codigo repetido.

¿Qué haría de manera diferente si se le asignara más tiempo?
* Leer mas acerca de las pruebas unitarias y llevarlas acabo.
* Igual agregar pruebas e2e.
