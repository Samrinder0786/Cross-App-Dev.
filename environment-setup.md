# Environmental Setup - SamrinderLaptop

## 1. Device Specifications
- **Device Name:** SamrinderLaptop  
- **Processor:** 13th Gen Intel(R) Core(TM) i7-1355U (1.70 GHz)  
- **Installed RAM:** 16.0 GB (15.6 GB usable)  
- **System Type:** 64-bit Operating System, x64-based processor  
- **Pen and Touch:** No pen or touch input is available for this display  

## 2. Operating System Details
- **Edition:** Windows 11 Home  
- **Version:** 24H2  
- **Installed On:** 2025-02-22  
- **OS Build:** 26100.6584  
- **Experience:** Windows Feature Experience Pack 1000.26100.234.0  

## 3. Software Versions Installed
- **Node.js:** v20.x (LTS)  
- **npm:** v10.x  
- **React Native CLI:** Latest via `npm install -g @react-native-community/cli`  
- **Android Studio:** Android Studio Iguana | 2023.2.1 Patch 2  
- **Android SDK Platform Tools:** 33.0.0  
- **Android SDK Platforms Installed:**  
  - API 31 (Android 12)  
  - API 33 (Android 13)  
- **AVD (Emulator):** Pixel 4 API 33  
- **Visual Studio Code:** 1.93.x  
- **VS Code Extensions Installed:**  
  - React Native Tools  
  - ES7+ React/Redux/React-Native snippets  
  - Auto Rename Tag  
  - Bracket Pair Colorizer  
  - GitLens  

## 4. Setup Steps Followed
1. **Installed Node.js and npm**  
   - Downloaded LTS version (v20.x) from [nodejs.org](https://nodejs.org/).  
   - Verified installation using `node --version` and `npm --version`.  

2. **Installed React Native CLI**  
   - Ran `npm install -g @react-native-community/cli`.  

3. **Installed Android Studio**  
   - Downloaded from [developer.android.com/studio](https://developer.android.com/studio).  
   - Completed setup wizard with default options.  

4. **Configured Android SDK**  
   - Installed required SDK platforms and tools (API 31, API 33, Build-tools 33.0.0, Emulator, SDK Platform-Tools).  
   - Set environment variables (`ANDROID_HOME` and PATH for platform-tools).  

5. **Created Android Virtual Device (AVD)**  
   - Successfully launched emulator.  

6. **Installed Visual Studio Code**  
   - Downloaded from [code.visualstudio.com](https://code.visualstudio.com/).  
   - Installed recommended extensions for React Native development.  

7. **Created First React Native App**  
   - Ran `npx react-native init NEWPROJECT`.  
   - Opened in VS Code and verified project structure.  
   - Successfully ran `npx @react-native-community/cli@latest run-android`.  

## 5. Deviations from Lab Instructions
- Installed Node.js **v22.x** instead of v18.x (still valid since ≥ v18 is supported).  
- Used Pixel 4 API 33 AVD instead of API 31.    

## 6. Time Taken for Each Major Step
- Node.js & npm installation and verification: **15 minutes**  
- React Native CLI installation: **15 minutes**  
- Android Studio installation & SDK setup: **45 minutes**  
- AVD creation & testing: **10 minutes**  
- VS Code installation & extension setup: **15 minutes**  
- First React Native project creation & test run: **60 minutes**  

**Total Time:** ~3 hours 30 minutes 