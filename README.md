# Angular Tutorial

## Introduction to l18n (Internationalization)


1. Download and unzip the [starter project]()

2. Open it in VS Code

3. Open the **Terminal** and Move Into the Project Directory

````

cd <your-project-name>

````

4. Install **Transloco** into your angular project


````

ng add @jsverse/transloco

````


### Configuration options

> Which languages do you need? en, es, fr
>
> Are you working with server side rendering? N


#### Changed Files

> transloco.config.js
>
> transloco-root.ts
>
> new provider in app.config.ts
> 
> public/i18n folder


5. Download and add Translation files

> assets/i18n/en.json
>
> assets/i18n/fr.json
> 
> assets/i18n/es.json



6. Add the Language Switching Logic

    In **nav.ts** add the folllowing code:


````
// tells transloco what file to load
switchLang(lang: string) {
    his.translocoService.setActiveLang(lang);
}
````

Replace Text with Translation Keys

nav.html



Add TranslocoModule

about.ts and contact.ts



Walk Through First Example Together

about.html

````
	<div *transloco="let t">
	 <h2>{{ t('about.title') }}</h2>
	 <p>{{ t('about.body') }}</p>
	</div>
````

Students try on their own in contact.ts

