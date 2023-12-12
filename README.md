# React Native Template

To install the dependencies run the following commands:

```shell
$ yarn <or> npm install
$ yarn start <or> npm run start
```

### Development mode

To run the app in development mode. Run the following commands in `root directory`

| Android                                 | IOS                             |
|-----------------------------------------|---------------------------------|
| `$ yarn android <or> $ npm run android` | `$ npx pod-install`             |
|                                         | `$ yarn ios <or> $ npm run ios` |

### Production mode

To run the app in production mode.
`must read the docs before build the app`

| detail        | Android                                         | IOS                                                  |
|---------------|-------------------------------------------------|------------------------------------------------------|
| directory     | cd android                                      | open Xcode                                           |
| clean project | ./gradlew clean                                 | product => clean build folder                        |
| bundle        | ./gradlew bundleRelease                         | product => Archive                                   |
| docs          | https://reactnative.dev/docs/signed-apk-android | https://reactnative.dev/docs/publishing-to-app-store |
