# 1 Weminnovacion

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.1.

## 1.1 Proyecto
Se trata de un sitio web responsive que muestra los datos de un usuario de github que es digitado.

## 1.2 Tecnologías
El sitio está construido usando el framweork angular, además se usó bootstrap y fontaweasome para los iconos.

## 1.3 Diseño Responsive
El sitio cuenta con tres modos: teléfono celular (<600px) , tablet (601px -999px) y computador(>1001px) para una mejor experiencia del usuario.

# 2 Clases, Componentes y servicios

## 2.1 Clases
Se usó una clase que contiene los atributos del usuario de github: id, login, avatar_url, created_at, name, location, twitter_username, blog, public_repos, followers y following

## 2.2 Componentes
La aplicación cuenta con dos componentes: Un componente padre que cuenta con la etiqueta input y un componente hijo donde se muestra la información del usuario buscado

## 2.3 Servicios
Un servicio fue usado con el fin de obtener los datos de la url: https://api.github.com/users/{username} mediante un método get, para luego inyectar el servicio y usarlo en un componente mediante un subscribe.

## 2.4 Alerts 
Se usaron alertas para informar cuando el usuario ingresado no exista o no se ingrese ningún usuario.
