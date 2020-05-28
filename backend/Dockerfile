FROM ubuntu:16.04

RUN apt-get update \
    && apt-get install -yq --no-install-recommends \
    python3 \
    python3-pip
RUN pip3 install --upgrade pip==9.0.3 \
    && pip3 install setuptools

# establecemos el puerto de flask
EXPOSE 8081

# establecemos el directorio de trabajo
ADD . /app
WORKDIR /app

# Instalamos las dependencias (requirements.txt posiblemente falle)
RUN pip3 install -r requirementsBueno.txt

# Iniciamos el servidor web de flask que aloja la API
CMD python3 app.py
