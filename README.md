
# react-native-loading-progress

## Getting started
`$ npm install react-native-loading-progress --save`

### Mostly automatic installation
`$ react-native link react-native-loading-progress`

### Manual installation
#### iOS
1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-loading-progress` and add `RNProgressHud.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNProgressHud.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android
1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.rnprogresshud.RNProgressHudPackage;` to the imports at the top of the file
  - Add `new RNProgressHudPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-loading-progress'
  	project(':react-native-loading-progress').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-loading-progress/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-loading-progress')
  	```

#### iOS Dependency Installation:
***Important: This package depends on SVProgressHUD library. Please make sure you also install SVProgressHUD***
1. Go to <https://github.com/SVProgressHUD/SVProgressHUD>
2. Follow the installation instructions and install before trying to run your project with the react-native-loading-progress package installed.

## Usage
```javascript
import RNProgressHud from 'react-native-loading-progress';
```

```javascript
// Where you want to display the spinner
RNProgressHud.showWithStatus("Loading...");
```

```javascript
// To use one of the pre-defined styles for background color:
const ProgressHUDMaskType = RNProgressHud.ProgressHUDMaskType;
RNProgressHud.showWithStatus("Loading...", ProgressHUDMaskType.Clear);
```  