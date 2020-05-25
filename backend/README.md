# Flask backend API

## Instalar dependencias

Intentar instalar las dependencias de `requirements.txt`, este es el primer export que hice pero está hecho de una manera un poco rara. Si este falla, he creado otro `requirementsBueno.txt` con las versiones exactas que tengo instaladas en el momento de crear la API.

## Servidor de desarrollo (API)

Ejecutar `python app.py` para crear el servidor web en localhost en el puerto `8081` (se puede modificar libremente siempre y cuando luego se actualice el fichero `proxy.conf.json` del proyecto del frontend que redigirá el tráfico de '/api' a nuestro servidor web donde estará nuestra API).
