<h1 align="center">
  Projeto final M4 T15
</h1>

<h2 align="center">
  API Doc
</h2>

<p align="center">
  <a href="#endpoints">Endpoints</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

## **Endpoints**

Esta API tem um total de 25 endpoints para o controle de estoque de hardwares.

A base url da API é https://estoque-t15.herokuapp.com

## Rotas que não necessitam de autenticação


<h2 align ='center'> Criando usuário </h2>

`POST /users Formato da requisição`

```json
{
  "name": "hitalo",
  "email": "hitaloMenorLucas@gmail.com",
  "password": "3636",
  "cpf": "06053245625",
  "administrationNivel": 3,
  "occupation": "senior",
  "telephone": "6133658755",
  "cell": "61994133544",
  "address": {
    "district": "Rua Heleodo Pires de camargo",
    "zipCode": "72215093",
    "number": "67",
    "city": "Piedade",
    "state": "SP"
  }
}
```
O administrationNivel definirá quais rotas o usuário terá acesso, deve ser entre 1 e 3.

`POST /users - Formato da resposta - STATUS 201 CREATED:`

```json
{
	"name": "hitalo",
	"cpf": "06053245625",
	"email": "hitaloMenorLucas@gmail.com",
	"password": "$2a$10$MFMtY8yEn/rEgO9Mdk1rnusOL/jF95C.0Qq25jGRoqJX9o9aTU.p6",
	"administrationNivel": 3,
	"occupation": "senior",
	"telephone": "6133658755",
	"cell": "61994133544",
	"address": {
		"id": "02a8faeb-c0a2-493f-814e-256bb9c88dc8",
		"district": "Rua Heleodo Pires de camargo",
		"zipCode": "72215093",
		"number": "67",
		"city": "Piedade",
		"state": "SP"
	},
	"id": "296aa1b5-8140-4de4-9cc3-36d4e61f65d9",
	"contractDate": "2022-09-09T13:09:14.874Z",
	"isActive": true
}
```

<h2 align ='center'> Logando usuário </h2>

`POST /login - Formato da requisição`
```json
{
	"cnf": "06053245625",
	"password": "3636"
}
```

`POST /login -  Formato da resposta - STATUS 200`
```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbmlzdHJhdGlvbk5pdmVsIjozLCJpYXQiOjE2NjI3MjkwODUsImV4cCI6MTY2MjczNjI4NSwic3ViIjoiMjk2YWExYjUtODE0MC00ZGU0LTljYzMtMzZkNGU2MWY2NWQ5In0.xU7QS2TznT0TSISrnHWzZ67l0Oa5dXRTmqiIYi2Pa_s"
}
```

O token gerado no login será utilizado para autenticação das demais rotas.

## Rotas que necessitam de autenticação

O token deverá ser informado no header da requisição no formato: 
```js
"Authorization": `Bearer token`
```

<h2 align ='center'> Listando usuários </h2>

`GET /users - Formato da resposta - STATUS 200`

```json
[
	{
		"id": "296aa1b5-8140-4de4-9cc3-36d4e61f65d9",
		"name": "hitalo",
		"cpf": "06053245625",
		"email": "hitaloMenorLucas@gmail.com",
		"password": "$2a$10$MFMtY8yEn/rEgO9Mdk1rnusOL/jF95C.0Qq25jGRoqJX9o9aTU.p6",
		"contractDate": "2022-09-09T13:09:14.874Z",
		"administrationNivel": 3,
		"isActive": true,
		"occupation": "senior",
		"telephone": "6133658755",
		"cell": "61994133544",
		"address": {
			"id": "02a8faeb-c0a2-493f-814e-256bb9c88dc8",
			"district": "Rua Heleodo Pires de camargo",
			"zipCode": "72215093",
			"number": "67",
			"city": "Piedade",
			"state": "SP"
		}
	}
]
```
Necessário administrationNivel 3

<h2 align ='center'> Listando um usuário </h2>

`GET /users/:id - Formato da resposta - STATUS 200`

```json
{
	"id": "296aa1b5-8140-4de4-9cc3-36d4e61f65d9",
	"name": "hitalo",
	"cpf": "06053245625",
	"email": "hitaloMenorLucas@gmail.com",
	"password": "$2a$10$MFMtY8yEn/rEgO9Mdk1rnusOL/jF95C.0Qq25jGRoqJX9o9aTU.p6",
	"contractDate": "2022-09-09T13:09:14.874Z",
	"administrationNivel": 3,
	"isActive": true,
	"occupation": "senior",
	"telephone": "6133658755",
	"cell": "61994133544",
	"address": {
		"id": "02a8faeb-c0a2-493f-814e-256bb9c88dc8",
		"district": "Rua Heleodo Pires de camargo",
		"zipCode": "72215093",
		"number": "67",
		"city": "Piedade",
		"state": "SP"
	}
}
```
Necessário administrationNivel 3

<h2 align ='center'> Deletando um usuário </h2>

`DELETE /users/:id - Formato da resposta - STATUS 204`
Está rota dá um soft delete no usuário alterando o isActive para false
Necessário administrationNivel 3

<h2 align ='center'> Editando um usuário </h2>

`PATCH /users/:id  Formato da requisição`

```json
  {
	"name": "Hitalo Kenzie"
}
```

`PATCH /users/:id - Formato da resposta - 200`

```json
{
	"id": "296aa1b5-8140-4de4-9cc3-36d4e61f65d9",
	"name": "Hitalo Kenzie",
	"cpf": "06053245625",
	"email": "hitaloMenorLucas@gmail.com",
	"password": "$2a$10$MFMtY8yEn/rEgO9Mdk1rnusOL/jF95C.0Qq25jGRoqJX9o9aTU.p6",
	"contractDate": "2022-09-09T13:09:14.874Z",
	"administrationNivel": 3,
	"isActive": true,
	"occupation": "senior",
	"telephone": "6133658755",
	"cell": "61994133544",
	"address": {
		"id": "02a8faeb-c0a2-493f-814e-256bb9c88dc8",
		"district": "Rua Heleodo Pires de camargo",
		"zipCode": "72215093",
		"number": "67",
		"city": "Piedade",
		"state": "SP"
	}
}
```
Necessário administrationNivel 3

<h2 align ='center'> listando acessos de usuários </h2>

`GET /accesslog - Formato da resposta - STATUS 200`

```json
[
	{
		"id": "61aabe15-6d84-4b4e-a379-14a7f76f142a",
		"accessDate": "2022-09-09T18:14:17.150Z",
		"user": {
			"id": "296aa1b5-8140-4de4-9cc3-36d4e61f65d9",
			"name": "Hitalo Silva",
			"cpf": "06053245625",
			"email": "hitaloMenorLucas@gmail.com",
			"password": "$2a$10$MFMtY8yEn/rEgO9Mdk1rnusOL/jF95C.0Qq25jGRoqJX9o9aTU.p6",
			"contractDate": "2022-09-09T13:09:14.874Z",
			"administrationNivel": 3,
			"isActive": true,
			"occupation": "senior",
			"telephone": "6133658755",
			"cell": "61994133544",
			"address": {
				"id": "02a8faeb-c0a2-493f-814e-256bb9c88dc8",
				"district": "Rua Heleodo Pires de camargo",
				"zipCode": "72215093",
				"number": "67",
				"city": "Piedade",
				"state": "SP"
			}
		}
	}
]
```
Necessário administrationNivel 3

<h2 align ='center'> listando um acesso de usuário </h2>

`GET /accesslog/:id Formato da resposta - STATUS 200`

```json
{
	"id": "61aabe15-6d84-4b4e-a379-14a7f76f142a",
	"accessDate": "2022-09-09T18:14:17.150Z",
	"user": {
		"id": "296aa1b5-8140-4de4-9cc3-36d4e61f65d9",
		"name": "Hitalo Silva",
		"cpf": "06053245625",
		"email": "hitaloMenorLucas@gmail.com",
		"password": "$2a$10$MFMtY8yEn/rEgO9Mdk1rnusOL/jF95C.0Qq25jGRoqJX9o9aTU.p6",
		"contractDate": "2022-09-09T13:09:14.874Z",
		"administrationNivel": 3,
		"isActive": true,
		"occupation": "senior",
		"telephone": "6133658755",
		"cell": "61994133544",
		"address": {
			"id": "02a8faeb-c0a2-493f-814e-256bb9c88dc8",
			"district": "Rua Heleodo Pires de camargo",
			"zipCode": "72215093",
			"number": "67",
			"city": "Piedade",
			"state": "SP"
		}
	}
}
```
Necessário administrationNivel 3

<h2 align ='center'> criando categoria </h2>

`POST /category - Formato da requisição`

```json
{
	"name": "placas",
  "description": "placas em geral"
}
```

`POST /category - Formato da resposta - STATUS 201 CREATED`

```json
{
	"name": "placas",
	"description": "placas em geral",
	"id": "d7263002-5730-439a-8f19-15f8a642ed10"
}
```
Necessário administrationNivel 2+

<h2 align ='center'> Listando categorias </h2>

`GET /category - Formato da resposta - STATUS 200`

```json
[
	{
		"id": "d7263002-5730-439a-8f19-15f8a642ed10",
		"name": "placas",
		"description": "placas em geral"
	}
]
```
Necessário administrationNivel 2+

<h2 align ='center'> Listando uma categoria </h2>

`GET /category/:id - Formato da resposta - STATUS 200`

```json
{
	"id": "d7263002-5730-439a-8f19-15f8a642ed10",
	"name": "placas",
	"description": "placas em geral",
	"product": [
		{
			"id": "2b0c98da-39f5-4fcc-9115-6698b15b96cf",
			"name": "placa de video",
			"description": "sdsdsdsdsd",
			"isActive": true,
			"value": 5050,
			"saleValue": 6500,
			"stock": 5,
			"criticalStock": 2,
			"provider": {
				"id": "857f7533-26a3-4175-a6aa-1188df27de63",
				"name": "Megabyte",
				"telephone": "1333240499",
				"email": "megaByte@mail.com",
				"cnpj": "63519017/0001-70",
				"address": "Rua Candido Rodrigues - 1082, Centro, São Vicente - SP",
				"employee": "Larissa Regina Sales",
				"employeeCell": "1333240499"
			},
			"category": {
				"id": "d7263002-5730-439a-8f19-15f8a642ed10",
				"name": "placas",
				"description": "placas em geral"
			}
		}
	]
}
```
Necessário administrationNivel 2+

