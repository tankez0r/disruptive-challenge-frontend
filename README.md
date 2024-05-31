# Documentación de la Aplicación disruptive challenge frontEnd

### Descripción de la Aplicación:

Esta aplicación tiene como fin desplegar todo el contenido que se gestiono en el backend. Teniendo formularios de logueo, registro y busqueda.
Todo esto sirve para poder ordenar y tener una interfaz visual del contenido que creamos y categorizamos, pudiendo ordenar por fecha de forma ascendente y descendente,
compaginar los elementos en x cantidad, y ordenarlos alfabeticamente. 

## Instalación
Por favor, sigue estos pasos para instalar y ejecutar la aplicación.

<details>
  <summary>Usando npm</summary>

  1. Clona el repositorio:
     ```bash
     git clone https://github.com/tankez0r/disruptive-challenge-frontend
     ```

  2. Navega al directorio del proyecto:
     ```bash
     cd disruptive-challenge-frontend
     ```

  3. Instala las dependencias utilizando npm:
     ```bash
     npm install
     ```

</details>

<details>
  <summary>Usando yarn</summary>

  1. Clona el repositorio:
     ```bash
     git clone https://github.com/tankez0r/disruptive-challenge-frontend
     ```

  2. Navega al directorio del proyecto:
     ```bash
     cd disruptive-challenge-frontend
     ```

  3. Instala las dependencias utilizando yarn:
     ```bash
     yarn install
     ```

</details>

## Uso

Para usar la aplicación, ejecuta el siguiente comando:

Para npm:
```bash
npm run dev
```

Para yarn:
```bash
yarn dev
```

## Funcionalidades

- **Formularios de registro y logueo:** El usuario debe registrarse con su correo y luego loguearse para poder tener acceso a la  mayor parte de las funciones de la aplicación,
El logueo devolvera un token con el que se validan las interacciónes que puede tener el usuario con la aplicación, como la creación de contenidos.
- **Barra de busqueda:** Este formulario se encarga de hacer las peticiones de busqueda por categoria o titulo a nuestro backend.
- **Formulario de creación de contenido**: Este formulario se encarga de hacer las peticiones de creación de contenido, controlando que tanto el contenido corresponda a una categoria, 
como que respete los campos necesarios para su creación, como su formato (puede ser texto, un archivo de texto plano, un video, etc), su titulo y queda implicito el nombre de autor en la 
petición.
- **Contenedor de categorias**: La misma se presenta en cajas de colores con una foto alusiva a la categoria perteneciente. Sirve para poder tener una organización mas clara del contenido
- **Contenedor de titulos**: El despliegue de todo el contenido que se divide en colores con iconos que dejan en claro que formato de archivo contiene el contenido y un color que caracteriza (Ademas de encontrarse en los detalles) a que categoria pertenece.
- **Sistema de roles y rutas protegidas**: Esta aplicación cuenta con un sistema de rutas que protege las rutas. De no loguearse, no puede entrarse a la pagina oficial, de no contar con el rol de creador, se imposibilita la creación o modificación de contenido, de no contar con el rol de administrador, no se puede crear, modificar o borrar topicos y contenido. 

## Dependencias

La aplicación cuenta con las siguientes librerías:

- Tailwind
- Zustand
- Vitest
- TypeScript
- React Hook Form