# Hasta ahora {30/08/2023}

## Instalar nodeJS @WSL2: "Github NVM Project"

```bash
# Es necesario instalar estas utilidades
sudo apt install curl git wget

# verificamos contenido del ejecutable 
nano curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh

# ejecutamos el instalador
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```

Tras reiniciar la consola de Linux...

```bash
# agregar .bashrc
source ~/.bashrc

# verificar versiones de node disponibles
nvm list-remote

# instalar la mas reciente 
nvm install [Latest LTS]

# verificar configuracion actual
nvm list

# seleccionar la version activa
nvm use [version elegida]
```

Todo listo 😌

## Instalar PHP desde bash @WSL2

Para instalar PHP y composer:

```bash
    # instalación de dependencias
    sudo apt install php-cli unzip
    
    # descarga de composer
    php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
    
    # verificación de integridad 
    php -r "if (hash_file('sha384', 'composer-setup.php') === file_get_contents('https://composer.github.io/installer.sig')) { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
    
    # instalación
    sudo php composer-setup.php --install-dir=/usr/local/bin --filename=composer
    
    # resultado de la instalación
    composer --version
```

Todo bien👍

## Desplegar arbol de proyecto Laravel

Utilizando php-composer:

```bash
    # descarga de archivos Laravel
    composer create-project --prefer-dist laravel/laravel [nombreDeProyectoLaravel]

    # ejecución 
    php artisan serve

    # verificación (ABRIR LA URL)...
    http://localhost:8000
```

## Configurar GIT/GitHub (sistema para control de versiones)

1. Inicializar git desde la carpeta del proyecto

2. Establecer puente SSH entre Github y mi carpeta ~ (home de linux WSL2)

3. Cambiar el nombre del header de "Master" a "main" para compatibilidad con github naming policies

4. Añadir el projecto local a la direccion github con el comando

    ```bash
    git remote add origin git@github.com:[userName]/[remoteRepoName].git
    ```

5. Se hizo un merge de los headers "main" local y remoto

    ```bash
    git merge origin/main --allow-unrelated-histories 
    ```

6. Se hizo un push de la carpeta local

    ```bash
    git push origin main

    ```

## Crear dB para projecto Laravel

