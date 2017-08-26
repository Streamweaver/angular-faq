# AngularFAQ

This project is an angular app that uses a simple local file as a dataservice.  This app is created as part of Lesson 7 of the Udemy Course [Angular 4 Front to Back](https://www.udemy.com/angular-4-front-to-back) which I highly recommend.

This code is being kept around mostly for my own reference.

## Notable Changes from Course Material

A few things I tried out on my own that are different here if they are helpful to anyone using this as a reference too.

### Bootstrap 4 setup for SCSS instead of static.

* Setup the cli project with the `--style=scss` option.
* From porject folder npm install bootstrap 4.  Command below reflects version at time of writing but check the bootstrap 4 site for current command. 
  ```
  npm install bootstrap@4.0.0-alpha.6 jquery@latest tether --save
  ```
* Create a new file in the project root for your own variables `scss/_variables.scss`
* Import your variables file and the bootstrap scss file into `src/styles.scss` like so:
```
// My own variables file.
@import 'scss/variables';

// Load the main bootstrap file
@import '../node_modules/bootstrap/scss/bootstrap';
```

**note**: Also add the javascript files a per the static instructions in the regular course.

That's it, bootstrap 4 should basically work.  More to come on javascript requirements as I discover them.

### Bootstrap Theme

Later on in the project I decided to import one of the free bootswatch themes for bootstrap 4.  As of this writing they are on a sub-page at [https://bootswatch.com/4-alpha/](https://bootswatch.com/4-alpha/), but I expect that will migrate to the top site or to other subfolders as BS4 attains new minor release verions.

This applies to any of those themes:

* Download the `_bootswatch.scss` file into `scss/`
* Download the `_variables.scss` file for the theme and put in same folder.  I already had a file of that name there for my own setting so I downloaded that as `_variablesbootswatch.scss`
* In `styles.scc` import the bootswatch variables **BEFORE** your local variables file if you want to be able to override them.  Then import bootswatch.scss **AFTER** the bootstrap import so it overwrites those where needed.

### DataService methods

Generally I found some of the code in teh dataservices repetative and I can't stand that so I moved the loading and saving of data for the localStore to private methods.  

## Deploying example site.

I removed the `dist/` subdirectory from `.gitignore` to upload he final build.  I then setup that directory as a deployment branch as per the instructions provided by @cobyism [here](https://gist.github.com/cobyism/4730490).

Using github pages this worked pretty well and is viewable at [https://streamweaver.github.io/angular-faq/](https://streamweaver.github.io/angular-faq/);

## Credits
* This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.0.
* Code based on course matieral from [Brad Travesy](http://www.traversymedia.com/) with whatever other direction I take it here and there. 
