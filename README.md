# Uno Móvil - Tu App de Servicios en Popayán

Esta es una aplicación de Next.js creada en Firebase Studio para "Uno Móvil", una solución integral de transporte, domicilios y compras.

## Cómo empezar

Para ejecutar la aplicación en tu entorno de desarrollo local, simplemente inicia el servidor de desarrollo:

```bash
npm run dev
```

Luego, abre tu navegador en [http://localhost:9002](http://localhost:9002) para ver la aplicación en acción.

---

## Cómo subir la aplicación a la nube (Paso a Paso)

¡Desplegar tu aplicación en la nube es muy fácil con Firebase App Hosting! El proyecto ya está configurado. Solo necesitas seguir estos pasos detallados:

### Prerrequisitos
- **Tener una cuenta de Google:** Necesitarás una para crear un proyecto en Firebase.
- **Tener Node.js y npm instalados:** Si pudiste ejecutar el proyecto localmente, ya cumples con esto.

### Paso 1: Instala la Firebase CLI

Si aún no tienes la Command Line Interface (CLI) de Firebase, ábrela en tu terminal y ejecuta este comando para instalarla de forma global en tu sistema:

```bash
npm install -g firebase-tools
```

### Paso 2: Inicia sesión en Firebase

Ahora, inicia sesión con tu cuenta de Google en la terminal. Esto abrirá una ventana en tu navegador para que te autentiques:

```bash
firebase login
```

### Paso 3: Conecta tu proyecto de Firebase

Si es la primera vez que despliegas este repositorio, necesitarás conectarlo con un proyecto de Firebase. Desde la raíz de tu proyecto, ejecuta:

```bash
firebase init
```

Sigue las instrucciones en la pantalla:
1. Selecciona **"Usar un proyecto existente"** y elige el proyecto que creaste en la [consola de Firebase](https://console.firebase.google.com/).
2. Cuando te pregunte qué servicios quieres configurar, asegúrate de seleccionar **"App Hosting"**.
3. Sigue el resto de las instrucciones que te indique la CLI.

### Paso 4: ¡Despliega la aplicación!

Este es el último paso. Con todo configurado, solo tienes que ejecutar el siguiente comando en tu terminal:

```bash
firebase deploy --only apphosting
```

Este comando tomará tu código, lo construirá en la nube (instalando dependencias, compilando tu Next.js, etc.) y lo publicará en una URL pública.

¡Y eso es todo! Al finalizar, la terminal te mostrará la URL donde tu aplicación está en línea para que todo el mundo pueda verla.
