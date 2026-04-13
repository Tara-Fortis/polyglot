# Angular Polyglot Tutorial: i18n with **Transloco**

This tutorial guides you through creating a multi-language Angular application using Bootstrap for styling and Transloco for internationalization.

Please download the [starter project](https://github.com/Tara-Fortis/polyglot_2) before completing the following steps:

## Internationalization with Transloco

1. Install Transloco:
````
    ng add @jsverse/transloco
````
- Proceed? **Yes**
- Languages: **en, es, fr**
- SSR? **No**

#### JSON refresher
JSON stores data in **key-value pairs**. Transloco looks for a "key" and replaces it with the "value" based on the selected language

2. **Update Language Files:** Navigate to public/i18n/ and replace the content of each file with the following:

<details><summary>Click to see <b>en.json</b></summary>

````json
{
  "app": {
    "title": "Polyglot App",
    "description": "This is a simple multilingual Angular application"
  },
  "navBar": {
    "home": "Home",
    "about": "About",
    "contact": "Contact"
  },
  "messages": {
    "welcome": "Welcome {{name}} to the Polyglot App!"
  },
  "locale": {
    "label": "Language"
  },
  "about": {
    "title": "About This App",
    "body": "This project is a simple demonstration of how to add multilingual support to an Angular application using Transloco. It shows how text can be organized, translated, and switched at runtime to create a more inclusive user experience."
  },
  "contact": {
    "title": "Contact Us",
    "body": "If you have questions about this project or want to learn more about internationalization in Angular, feel free to reach out. This page is here to show how static content can also be translated across multiple languages."
  }
}

````
</details>


<details><summary>Click to see <b>es.json</b></summary>

````json
{
  "app": {
    "title": "Aplicación Políglota",
    "description": "Una aplicación Angular multilingüe simple"
  },
  "navBar": {
    "home": "Inicio",
    "about": "Acerca de",
    "contact": "Contacto"
  },
  "messages": {
    "welcome": "¡Bienvenido {{name}} a la Aplicación Políglota!"
  },
  "locale": {
    "label": "Idioma"
  },
  "about": {
    "title": "Acerca de esta aplicación",
    "body": "Este proyecto es una demostración sencilla de cómo agregar soporte multilingüe a una aplicación Angular utilizando Transloco. Muestra cómo organizar, traducir y cambiar texto en tiempo real para crear una experiencia más inclusiva."
  },
  "contact": {
    "title": "Contáctanos",
    "body": "Si tienes preguntas sobre este proyecto o deseas aprender más sobre la internacionalización en Angular, no dudes en comunicarte. Esta página también demuestra cómo traducir contenido estático en varios idiomas."
  }
}
````
</details>

<details><summary>Click to see <b>fr.json</b></summary>

````json
{
  "app": {
    "title": "Application Polyglotte",
    "description": "Une application Angular multilingue simple"
  },
  "navBar": {
    "home": "Accueil",
    "about": "À propos",
    "contact": "Contact"
  },
  "messages": {
    "welcome": "Bienvenue {{name}} dans l'application Polyglotte !"
  },
  "locale": {
    "label": "Langue"
  },
  "about": {
    "title": "À propos de cette application",
    "body": "Ce projet est une démonstration simple montrant comment ajouter la prise en charge multilingue à une application Angular avec Transloco. Il illustre comment organiser, traduire et changer le texte en temps réel pour offrir une expérience plus inclusive."
  },
  "contact": {
    "title": "Nous contacter",
    "body": "Si vous avez des questions concernant ce projet ou si vous souhaitez en savoir plus sur l’internationalisation dans Angular, n’hésitez pas à nous contacter. Cette page montre également comment traduire du contenu statique dans plusieurs langues."
  }
}
````
</details>

### Implementation Steps

3. Import TranslocoModudle into the `.ts` files of **Home,** **About**, and **Contact** components

````ts
    import { TranslocoService, TranslocoModule } from '@jsverse/transloco';
    // ...
    imports: [TranslocoModule],
    // ...
````

4. **Wrap content in HTML:** In your component HTML files, wrap the content using the `*transloco` structural directive

```bash
    <ng-container *transloco="let t">
        <h1>{{ t('app.title') }}</h1>
        <p>{{ t('messages.welcome', { name: 'Student' }) }}</p>
    </ng-container>
```

5. **Nav Bar Switcher:** Update `nav.component.ts` with logic to change the active language using the `TranslocoService` and a function to change the language:

````typescript
import { Component } from '@angular/core';
import { TranslocoService, TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './nav.component.html'
})
export class NavComponent {
  constructor(private service: TranslocoService) {}

  changeLanguage(lang: string) {
    this.service.setActiveLang(lang);
  }
}
````

6. Then, in `nav.component.html`, add click events to your language icons:

````html
     <select class="form-select-sm bg-dark text-light border-light" style="width: auto;"
      (change)="switchLang($any($event.target).value)">
        <option value="en">🇬🇧 English</option>
        <option value="fr">🇫🇷 Français</option>
        <option value="es">🇪🇸 Español</option>
    </select>
````

<details><summary><b>Key Concepts</b></summary>

<hr />

**1. How Structural Directives Work**
1. The `*` indicates it changes the DOM structure
2. It provides a "template variable" `(let t)` which acts like a function
3. When you call `{{ t('key') }}`, Transloco looks up that key in the current active JSON file and returns the string value.

**2. The Language Switcher Logic**

When you call `this.service.setActiveLang(lang)` in the Nav Bar, the following happens:

1. The global Transloco service updates its "current language" state.

2. All components using the `*transloco` directive are subscribed to a stream. When the language changes, the service "pushes" the new translation data to every active component.

3. Because Angular is reactive, the text on the screen updates immediatelyh without a page refresh

**3. JSON refresher**

</details>


<details><summary><b>Troubleshooting</b></summary>

<hr />

| Issue                     | Solution                                                                                   |
|---------------------------|---------------------------------------------------------------------------------------------|
| Blank Text/Key showing    | Check if the key in your HTML matches the JSON exactly (`app.title` vs `app.Title`)        |
| Translation not loading   | Ensure your JSON files are in `public/i18n` and not in another folder                      |
| Directives not working    | Make sure you added `TranslocoModule` to the `imports` array in your `.ts` file            |

</details>