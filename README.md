# React Photo Teamwork

React boilerplate for Manchester Codes' react photo-sharing teamwork project.

For use with the Manchester Codes [photo-api](http://mcr-codes-image-sharing-api.herokuapp.com/).

## Getting Started

### Clone down this repository:

```bash
git clone git@github.com:MCRcodes/react-photo-teamwork.git
```

### Install dependencies

```bash
npm install
```

### Start up the application:

```bash
npm start
```

### Visit `localhost:8080` in your browser.

You should see a links to sign-up and login pages.

### Teams

#### Team 1: Profile

![Profilepage](https://github.com/MCRcodes/react-photo-teamwork/blob/master/public/img/profile-example.png?raw=true)

#### Team 2: Image Upload

Unfortunately the Instagram web app does not have an image uplaod. :man_shrugging

#### Team 3: Image Browsing

![Imagespage](https://github.com/MCRcodes/react-photo-teamwork/blob/master/public/img/browse-example.png?raw=true)

#### Team 4: Image Details and Comments

![Detailspage](https://github.com/MCRcodes/react-photo-teamwork/blob/master/public/img/details-example.png?raw=true)

## Checking other teams' work

*1* - make sure you don’t have any uncommited work by doing `git status`. Commit and push if you wish to keep that work.
Alternative to CMD+Z - If don’t want to keep *any* of the uncommited work you can use `git stash` to revert all changed code back to last commit. `git stash` can be undone by doing `git stash pop`

*2* - make sure you’re on the master branch of the repo `git checkout master`

*3* - get all the new code pushed to the repository yesterday evening by running `git fetch && git pull`

*4* - notice new branches name in the list of data being fetched in your terminal, like  _feature-3_, _feature1_, _repo-list-dev_ 

*5* - `git checkout branch-name-here` to run the repo using the code in that specific branch. Note we did not use `-b` here as we’re not creating new branches

*6* - run the app as usual with `npm start`

*_PART 2 - if you’re cloning the repo afresh_*

*1* - after cloning, if you do `git branch` it’ll only show the `master` branch

*2* - however if you do `git branch -a` you’ll see all the branches are there in a kind of hidden way

*3* - do `git checkout branch-name-here` to run the repo using the code in  that specific branch

*4* - if in doubt that branch has the most up to date code that has been pushed just do `git pull && git fetch`. In this case it should say all is up to date
