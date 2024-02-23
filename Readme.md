# Proyecto de Ecosistemas
Bienvenidos a nuestro proyecto de ecosistemas.
## Integrantes
1. Lina Isabella Manjarrez Pantoja
2. Gabriel David Ospina
3. Juan David Reyes Barrios
4. Carolina Velásquez Velasco
## Codigo de Conducta para los Desarrolladores
El proyecto usa TypeScript como lenguaje principal. Para gestionar los archivos CSS con css-loader usando la función `loadCss(this, styles)`. Tambien usamos componentes que estan alojados en la carpeta de componentes.

La estructura de las carpetas del proyecto es la siguiente: Se tiene un archivo src donde estan todos los archivos editables de la aplicacion y dentro del dist solo esta el codigo que ejecuta el navegador, nada de la carpeta se edita por exception de su CSS porque aqui podemos editar el body, de resto nada mas.

Dentro de la carpeta src encontramos las carpetas de: Pages, components, resourcers, store, types, utilities y los archivos de appContainer.ts, appContainer.css, export.ts, firebaseConfig.ts y Global.d.ts.

1. **Pages:** Aqui se encuentran todas las paginas, las paginas cuetan de una carpeta y 2 archivos, uno .ts y otro .css. Los nombres de la carpeta y los acrhivos seran el mismo, con la estructura de `namePage`. Las paginas son en si componentes pero por su importancia estan alojadas en una carpeta aparte. 

2. **Components:** Aqui estan todos los componentes, la estructura para crear un componente es crear la carpeta con su nombre y dentro de esta crear un archivo .ts y un archivo .css con ese mismo nombre de la carpeta, es decir, la carpeta y los archivos tendran los mismos nombres, esto para facilitar la encontrabilidad. Por favor usar nombres descriptivos.
3. **Resources:** Aquí estan todos los recursos que se usan en la aplicacion, ya sea imagenes, svg's, fuentes. Cada tipo de archivo se aloja en la carpeta de su nombre, es decir, hay una carpeta llamada svg donde se guardan todos los svg's y asi sucesivamente.
4. **Store:** Aqui estan todos los archivos de el `GlobalState`. El archivo actions.ts guarda las acciones, el archivo index.ts guarda lo principal de el global store y el reducer.ts se guarda el reducer.
    * Actions: Aqui estan las acciones que pueden cambiat el global state, para crear una accion solamente copia y pega la `exampleAction` y modifica su codigo para cada caso.
    * index.ts: Aqui esta todo lo que hace funcionar al global state. Estan los `observers`, el `state`, el `dispatch` y la funcion `addObserver()`. Aqui lo que se cambia normalmente es solamente el state, añadiendo nuevos campos (recuerda que para cambiar la global state hay que cambiar tambien en sus types, alojados en types>store.ts).
    * Reducer: Este archivo gestiona todas las peticiones del dispatch, cambiando el state dependiendo del tipo de accion. Aqui lo unico que hay que cambiar es que, cada vez que se cree una accion hay que añadir un `case` al reducer, indicando que deberia cambiar en el `state`. Hay una estructura de ejemplo llamada `case: Actions.EXAMPLE_ACTION` que se puede copiar para crear un case facilmente.
5. **Types:** En esta carpeta estan todos los archivos .ts que gestionan los `types` del proyecto, incluyen `Enum`'s y `Interface`'s.
6. **appContainer.ts:** Este es el archivo principal de la aplicacion, literalmente el contenedor de la aplicacion. Es un componente, pero no hace mucho, basicamente su trabajo es gestionar que pagina mostrar dependiendo del `state`.
7. **appContainer.css:**  Es el archivo css del appContainer.ts.
8. **export.ts:** Es el archivo donde estan los export de todos los componentes que se llaman cuando se importa, asi que no hay necesidad de importar cada componente individualmente. Para importar este archivo creé un atajo, que es importar la funcion `directorioExport()` en el archivo que quiras usar los componentes, luego quitar la parte de `{ directorioExport } from` y dejar solamente `import "export";`. Cada vez que se cree un componente nuevo se debe de colocar en el archivo export.ts, se pone importanto la clase del componente, y cambiar el `import` al `export`. Yo por comodidad coloco adelante del export del componente, en forma comentada, el nombre del custom-element para poder copiar y pegarlo rapidamente. Ejemplo: `export { component } from "./components/exampleComponent/exampleComponent" //component-name`.
9. **firebaseConfig.ts:** Este es el archivo donde esta la configuracion de firebase.
10. **Global.d.ts:** Este es el archivo donde se declaran las dependencias globales, en este caso solamente la de CSS.
````echo "# ownScaffolding" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/yabuJunn/ownScaffolding.git
git push -u origin main```