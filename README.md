# Layout System

#### Requirements

- **node** >=10
- **yarn**
- **firebase-tools**: `yarn global add firebase-tools`
- A Google account

## Getting Started

The process to get the project up and running is quite tedious, as it requires to create a Firebase project, use Firebase CLI, create a `.env` file and edit a bash script. Any help or advice to simplify/automate this would be very appreciated.

#### Create your Firebase project

- Go to [Firebase Console](https://console.firebase.google.com)
- Create a new project
- Initialise a web application

#### In your terminal

- `git clone https://github.com/generous-folks/layout.git`
- `cd layout && yarn`
- `firebase login`
- `firebase init` - Pick `Database` and `Hosting` using the _space_ key and press _enter_ - Choose `use an existing project` an pick the project you just created - What file should be used for Database Rules? Leave blank and press _enter_ - What do you want to use as your public directory? `build` - Configure as a single-page app (rewrite all urls to /index.html)? `yes`

- Create a `.env`file as below:

```env
REACT_APP_FIREBASE_APIKEY="your-api-key"
REACT_APP_FIREBASE_DOMAIN="your-project-name.firebaseapp.com"
REACT_APP_FIREBASE_DB="https://your-project-name.firebaseio.com"
REACT_APP_FIREBASE_ID="your-project-name"
REACT_APP_FIREBASE_BUCKET="your-project-name.appspot.com"
REACT_APP_FIREBASE_MESSAGING="your messaging key"
REACT_APP_FIREBASE_APP_ID="your-api-id"

REACT_APP_MESSAGE_SALT="some salt"
REACT_APP_MESSAGE_KEY="some hash"
```

> You can find those values in your project settings at this url : `https://console.firebase.google.com/project/YOUR-PROJECT-NAME/settings/general/`

- Switch your database rules to `.write: true, .read: true`
- Update the upload url in `scripts/seed.sh` -> `https://YOUR-PROJECT-NAME.firebaseio.com/development.json`
- `yarn seed`
- `yarn start`
- Browse to [localhost:3000](http://localhost:3000) :rocket:

## ;TLDR

The idea behind this project is to allow non-developers to develop their own UI and deploy it for free (like wix.com).
Alternatively, developers will still be able to develop new pages and features (e.g. in the back office) while using the template engine for simple UI needs (unlike wix.com).

# Roadmap

- [ x ] Render pages from JSON
- [ ] Contribute pages from Back Office
- [ ] Integrate CI/CD
- [ ] Port to Docker
- [ ] Some thing to achieve
