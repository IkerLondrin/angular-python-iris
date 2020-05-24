# angular-python-iris

Repositorio creado para demostrar la utilización de un backend creado con flask y un frontend creado con Angular. 

Con ello se trata de crear una API que ofrece servicios de Machine Learning (simples, con el único objetivo de mostrar la conexión de Flask con Angular) y un frontend que muestra dichos resultados.

### Backend 

Navigate inside the backend directory: `cd backend`

Instalar las dependencias: `pip install -r requirements.txt` (es posible que tengamos que instalar manualmente alguna versión que de errores)

Ejecutar `python app.py` en el directorio del backend.

### Frontend 

Instalar las dependencias: `npm install` (cogerá las librerías y dependencias del fichero packages.json) 

Ejecutamos  `npm start` en el directorio del frontend.
Todas las llamadas realizadas al endpoint `/api` serán reenviadas al backend (que escucha en el puerto `8081` con la configuración inicial), esto puede cambiarse en `proxy.conf.json`.

