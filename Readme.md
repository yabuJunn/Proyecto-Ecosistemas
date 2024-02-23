# Proyecto de Ecosistemas
Bienvenidos a nuestro proyecto de ecosistemas.
## Integrantes
1. Lina Isabella Manjarrez Pantoja
2. Gabriel David Ospina
3. Juan David Reyes Barrios
4. Carolina Velásquez Velasco
## Codigo de Conducta para los Desarrolladores
El proyecto usa TypeScript como lenguaje principal. Para gestionar los archivos CSS con css-loader usando la función `loadCss(this, styles)`. Tambien usamos componentes que estan alojados en la carpeta de componentes.
### Estructura del Proyecto

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

### Manejo de Variables

Los nombres de las variables seran lo mas descriptivas posibles, y si unas variables deoenden de otras, buscar concatenar los nombres de todas las variables, por ejemplo: `const cardContainerTitle`. Se usara cammelCase para los nombres de los varibales, es decir que la primera letra es minuscula y luego cada letra de cada palabra empieza con mayuscula y luego todo minuscula asi: `exampleNameOfaVariable`.

La prioridad es usar constantes `const` cuando se pueda, en los casos que haya que crear una variable modificable, se usará `let`.

### Creación de Elementos

La creacion de elementos HTML se hara directamente desde el JavaScript con el metodo `document.createElement()`, esto con el objettivo de facilitar la colocacion de `addEventListener()`. Cuandos se cree un elemento, primero se guarda en una constante, luego se le añadiran todas las propiedades necesarias y al final se añadira al padre con el metodo `appendChild()`. Ejemplo:

``` 
const element = owner.document.createElement("h1")
element.innerText = "Titulo"
parentElement.appendChild(element)
```

### Manejo de Git

#### Traer el Proyecto a su repositorio local

Los pasos para traer el proyecto a su carpeta local en su computador son los siguientes:

1. git init
2. git remote add origin https://github.com/yabuJunn/ownScaffolding.git
3. git pull 
4. git checkout -b <nombre de la rama donde se va a trabajar>

### Nombramiento de Commits

Los commits se deben nombrar empezando por alguna de estas palabras:
1. Creación
2. Actualización
3. Borrar

Luego expecificar que se creo, actualizo o se borro.