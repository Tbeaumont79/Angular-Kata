# Http Ressource : C'est quoi ?

# Introduction

Un `HttpRessource` est une ressource HTTP qui permet de `fetch` des datas du serveur en GET à partir de l'URL donnée en argument.
Concrètement c'est un wrapper de l'HttpClient que j'évoque un peu plus bas.

## Architecture :

```bash
├── src
│   └── app
│       ├── components
│       │   └── user
│       │       ├── user.html // -> template html de mon component
│       │       └── user.ts
│       ├── services
│       │   ├── user-service.ts // -> contient l'HttpRessource
│       │
│       ├── types
│       │   └── Users.ts // contient mes interfaces pour les types
│       ├── app.config.ts
│       ├── app.css
│       ├── app.html
│       ├── app.routes.ts
│       ├── app.spec.ts
│       ├── app.ts
│       ├── index.html
│       ├── main.ts
│       └── styles.css
├── .editorconfig
├── .gitignore
├── angular.json
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json

```

## HttpClient: C'est quoi ?

C'est un service founi par Angular qui permet de communiquer avec un serveur via le protocol HTTP.
Comme HttpRessource s'en sert il faut le provide dans l'app config.

Dans le app.config.ts:

```typescript
import { provideHttpClient } from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(), // ⬅️
  ],
};
```

Le fait de provideHttpClient dans l'app config signifie que l'utilisation de HttpClient est accessible dans tout le projet.

## La mise en place :

### Service : UserService :

Dans le service UserService :

Je commence par import HttpRessource :

```typescript
import { httpResource } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UsersResponse } from "../types/Users"; // ⬅️ Mon fichier qui contient l'interface avec le type User

@Injectable({
  providedIn: "root",
})
export class UserService {
  data = httpResource<UsersResponse>(() => "https://dummyjson.com/users");
}
```

ensuite je cree une nouvelle variable qui stock le resultat le l'HttpRessource.

### Le component User :

Dans le User.ts j'inject mon UserService :

```typescript
import { Component, inject } from "@angular/core";
import { UserService } from "../../services/user-service";
@Component({
  selector: "app-user",
  imports: [],
  templateUrl: "./user.html",
})
export class User {
  userService = inject(UserService);
  users = this.userService.data;
}
```

et finalement dans le User.html je boucle sur mes datas.

```html
@for (user of users.value()?.users; track $index) {
  <div>
    <p>Email: {{ user.email }}</p>
    <p>Phone: {{ user.phone }}</p>
    <hr />
  </div>
} @empty {
  <p>No users found.</p>
}
```

## Development server

Pour Démarrer l'app : 

```bash
ng serve
```

Dès que le serveur tourne, vous pouvez ouvrir votre navigateur et naviguer vers `http://localhost:4200/` pour voir votre application en action.
