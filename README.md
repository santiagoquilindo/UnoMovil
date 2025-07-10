# Uno Móvil - Tu App de Servicios en Popayán

Esta es una aplicación de Next.js creada en Firebase Studio para "Uno Móvil", una solución integral de transporte, domicilios y compras.

## Cómo empezar

Para ejecutar la aplicación en tu entorno de desarrollo local, simplemente inicia el servidor de desarrollo:

```bash
npm run dev
```

Luego, abre tu navegador en [http://localhost:9002](http://localhost:9002) para ver la aplicación en acción.

---

## Cómo subir la aplicación a la nube (Despliegue)

¡Desplegar tu aplicación en la nube es muy fácil con Firebase App Hosting! El proyecto ya está configurado. Solo necesitas seguir estos pasos:

### 1. Conecta tu proyecto de Firebase
Si aún no lo has hecho, asegúrate de tener un proyecto de Firebase creado y de haber conectado tu repositorio o entorno local a él.

### 2. Despliega con un comando
Una vez que tu proyecto esté conectado, puedes desplegar tu aplicación usando la Firebase CLI (Command Line Interface). Si no la tienes instalada, puedes hacerlo con:
```bash
npm install -g firebase-tools
```

Luego, desde la carpeta de tu proyecto, ejecuta el siguiente comando para desplegar:

```bash
firebase deploy --only apphosting
```

Este comando tomará tu código, lo construirá en la nube y lo publicará en una URL pública para que todo el mundo pueda verlo.

¡Y eso es todo! Con estos sencillos pasos, tu aplicación estará en línea.
