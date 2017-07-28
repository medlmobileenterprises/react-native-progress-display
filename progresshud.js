import {
  NativeModules
} from 'react-native';

const ProgressHUDMaskType = {
  None: 1,
  Clear: 2,
  Black: 3
};

let RNProgressHUD = NativeModules.RNProgressHUD;
module.exports = {
  ProgressHUDMaskType: ProgressHUDMaskType,
  show: function (progressHUDMaskType) {
    if (!progressHUDMaskType) {
      return RNProgressHUD.show();
    }
    return RNProgressHUD.showWithMaskType(progressHUDMaskType);
  },
  showWithStatus: function (status, progressHUDMaskType) {
    if (!progressHUDMaskType) {
      return RNProgressHUD.showWithStatus(status);
    }
    return RNProgressHUD.showWithStatusAndMaskType(status, progressHUDMaskType);
  },
  showInfoWithStatus: function (status, progressHUDMaskType) {
    if (!progressHUDMaskType) {
      return RNProgressHUD.showInfoWithStatus(status);
    }
    return RNProgressHUD.showInfoWithStatusAndMaskType(status, progressHUDMaskType)
  },
  showSuccessWithStatus: function (status, progressHUDMaskType) {
    if (!progressHUDMaskType) {
      return RNProgressHUD.showSuccessWithStatus(status);
    }
    return RNProgressHUD.showSuccessWithStatusAndMaskType(status, progressHUDMaskType);
  },
  showErrorWithStatus: function (status, progressHUDMaskType) {
    if (!progressHUDMaskType) {
      return RNProgressHUD.showErrorWithStatus(status);
    }
    return RNProgressHUD.showErrorWithStatusAndMaskType(status, progressHUDMaskType);
  },
  showProgressWithStatus: function (progress, status, progressHUDMaskType) {
    if (!progressHUDMaskType) {
      return RNProgressHUD.showProgressWithStatus(progress, status);
    }
    return RNProgressHUD.showProgressWithStatusAndMaskType(progress, status, progressHUDMaskType);
  },
  dismiss: function () {
    RNProgressHUD.dismiss();
  },
  dismissWithDelay: function (delayInSeconds) {
    RNProgressHUD.dismissWithDelay(delayInSeconds);
  }
};
