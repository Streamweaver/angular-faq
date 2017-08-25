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

## Credits
* This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.0.
* Code based on course matieral from [Brad Travesy](http://www.traversymedia.com/) with whatever other direction I take it here and there. 
