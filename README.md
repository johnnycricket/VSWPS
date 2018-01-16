# VSWPS
Very Simple WordPress Starter

## Contents
1. About
2. Installation
3. Usage

--- 

## About
VSWS is the result of getting tired of not having a simple WordPress theme packager. I wanted something I could use to both generate the package zip file and compile all of my Sass. To that end, I arranged a simple folder structure and some basic tasks in node. 

With that in mind: this is meant to be as bare bones as possible.

## Installation
1. Fork the repo.
2. Clone your newly forked repo `git clone https://yournewrepo`
2. Run `npm install` to pull down node-sass.

## Usage
1. Add theme specific images to the `src/images` folder
2. Add theme specific php file to `src/php` folder.
3. Add your sass files and folder structure to `src/scss`.
4. When you are ready to package and test your theme run the npm command `npm run build` from the command line. The build will generate your sass, copy files into a dist folder and then package all of these into a zip that you can easily upload from your WordPress dashboard.
