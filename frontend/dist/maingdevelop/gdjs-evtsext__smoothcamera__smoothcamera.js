
gdjs.evtsExt__SmoothCamera__SmoothCamera = gdjs.evtsExt__SmoothCamera__SmoothCamera || {};

/**
 * Behavior generated from Smooth Camera
 */
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera = class SmoothCamera extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.LeftwardSpeed = behaviorData.LeftwardSpeed !== undefined ? behaviorData.LeftwardSpeed : Number("0.9") || 0;
    this._behaviorData.RightwardSpeed = behaviorData.RightwardSpeed !== undefined ? behaviorData.RightwardSpeed : Number("0.9") || 0;
    this._behaviorData.UpwardSpeed = behaviorData.UpwardSpeed !== undefined ? behaviorData.UpwardSpeed : Number("0.9") || 0;
    this._behaviorData.DownwardSpeed = behaviorData.DownwardSpeed !== undefined ? behaviorData.DownwardSpeed : Number("0.9") || 0;
    this._behaviorData.FollowOnX = behaviorData.FollowOnX !== undefined ? behaviorData.FollowOnX : true;
    this._behaviorData.FollowOnY = behaviorData.FollowOnY !== undefined ? behaviorData.FollowOnY : true;
    this._behaviorData.FollowFreeAreaLeft = behaviorData.FollowFreeAreaLeft !== undefined ? behaviorData.FollowFreeAreaLeft : Number("0") || 0;
    this._behaviorData.FollowFreeAreaRight = behaviorData.FollowFreeAreaRight !== undefined ? behaviorData.FollowFreeAreaRight : Number("0") || 0;
    this._behaviorData.FollowFreeAreaTop = behaviorData.FollowFreeAreaTop !== undefined ? behaviorData.FollowFreeAreaTop : Number("0") || 0;
    this._behaviorData.FollowFreeAreaBottom = behaviorData.FollowFreeAreaBottom !== undefined ? behaviorData.FollowFreeAreaBottom : Number("0") || 0;
    this._behaviorData.CameraOffsetX = behaviorData.CameraOffsetX !== undefined ? behaviorData.CameraOffsetX : Number("0") || 0;
    this._behaviorData.CameraOffsetY = behaviorData.CameraOffsetY !== undefined ? behaviorData.CameraOffsetY : Number("0") || 0;
    this._behaviorData.CameraDelay = behaviorData.CameraDelay !== undefined ? behaviorData.CameraDelay : Number("0") || 0;
    this._behaviorData.ForecastTime = behaviorData.ForecastTime !== undefined ? behaviorData.ForecastTime : Number("0") || 0;
    this._behaviorData.ForecastHistoryDuration = behaviorData.ForecastHistoryDuration !== undefined ? behaviorData.ForecastHistoryDuration : Number("0") || 0;
    this._behaviorData.LogLeftwardSpeed = Number("") || 0;
    this._behaviorData.LogRightwardSpeed = Number("") || 0;
    this._behaviorData.LogDownwardSpeed = Number("") || 0;
    this._behaviorData.LogUpwardSpeed = Number("") || 0;
    this._behaviorData.DelayedCenterX = Number("") || 0;
    this._behaviorData.DelayedCenterY = Number("") || 0;
    this._behaviorData.ForecastHistoryMeanX = Number("") || 0;
    this._behaviorData.ForecastHistoryMeanY = Number("") || 0;
    this._behaviorData.ForecastHistoryVarianceX = Number("") || 0;
    this._behaviorData.ForecastHistoryCovariance = Number("") || 0;
    this._behaviorData.ForecastHistoryLinearA = Number("") || 0;
    this._behaviorData.ForecastHistoryLinearB = Number("") || 0;
    this._behaviorData.ForecastedX = Number("") || 0;
    this._behaviorData.ForecastedY = Number("") || 0;
    this._behaviorData.ProjectedNewestX = Number("") || 0;
    this._behaviorData.ProjectedNewestY = Number("") || 0;
    this._behaviorData.ProjectedOldestX = Number("") || 0;
    this._behaviorData.ProjectedOldestY = Number("") || 0;
    this._behaviorData.ForecastHistoryVarianceY = Number("") || 0;
    this._behaviorData.Index = Number("") || 0;
    this._behaviorData.CameraDelayCatchUpSpeed = Number("0") || 0;
    this._behaviorData.CameraExtraDelay = Number("") || 0;
    this._behaviorData.WaitingSpeedXMax = Number("") || 0;
    this._behaviorData.WaitingSpeedYMax = Number("") || 0;
    this._behaviorData.WaitingEnd = Number("") || 0;
    this._behaviorData.CameraDelayCatchUpDuration = Number("") || 0;
    this._behaviorData.LeftwardSpeedMax = behaviorData.LeftwardSpeedMax !== undefined ? behaviorData.LeftwardSpeedMax : Number("9000") || 0;
    this._behaviorData.RightwardSpeedMax = behaviorData.RightwardSpeedMax !== undefined ? behaviorData.RightwardSpeedMax : Number("9000") || 0;
    this._behaviorData.UpwardSpeedMax = behaviorData.UpwardSpeedMax !== undefined ? behaviorData.UpwardSpeedMax : Number("9000") || 0;
    this._behaviorData.DownwardSpeedMax = behaviorData.DownwardSpeedMax !== undefined ? behaviorData.DownwardSpeedMax : Number("9000") || 0;
    this._behaviorData.OldX = Number("") || 0;
    this._behaviorData.OldY = Number("") || 0;
    this._behaviorData.IsCalledManually = false;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.LeftwardSpeed !== newBehaviorData.LeftwardSpeed)
      this._behaviorData.LeftwardSpeed = newBehaviorData.LeftwardSpeed;
    if (oldBehaviorData.RightwardSpeed !== newBehaviorData.RightwardSpeed)
      this._behaviorData.RightwardSpeed = newBehaviorData.RightwardSpeed;
    if (oldBehaviorData.UpwardSpeed !== newBehaviorData.UpwardSpeed)
      this._behaviorData.UpwardSpeed = newBehaviorData.UpwardSpeed;
    if (oldBehaviorData.DownwardSpeed !== newBehaviorData.DownwardSpeed)
      this._behaviorData.DownwardSpeed = newBehaviorData.DownwardSpeed;
    if (oldBehaviorData.FollowOnX !== newBehaviorData.FollowOnX)
      this._behaviorData.FollowOnX = newBehaviorData.FollowOnX;
    if (oldBehaviorData.FollowOnY !== newBehaviorData.FollowOnY)
      this._behaviorData.FollowOnY = newBehaviorData.FollowOnY;
    if (oldBehaviorData.FollowFreeAreaLeft !== newBehaviorData.FollowFreeAreaLeft)
      this._behaviorData.FollowFreeAreaLeft = newBehaviorData.FollowFreeAreaLeft;
    if (oldBehaviorData.FollowFreeAreaRight !== newBehaviorData.FollowFreeAreaRight)
      this._behaviorData.FollowFreeAreaRight = newBehaviorData.FollowFreeAreaRight;
    if (oldBehaviorData.FollowFreeAreaTop !== newBehaviorData.FollowFreeAreaTop)
      this._behaviorData.FollowFreeAreaTop = newBehaviorData.FollowFreeAreaTop;
    if (oldBehaviorData.FollowFreeAreaBottom !== newBehaviorData.FollowFreeAreaBottom)
      this._behaviorData.FollowFreeAreaBottom = newBehaviorData.FollowFreeAreaBottom;
    if (oldBehaviorData.CameraOffsetX !== newBehaviorData.CameraOffsetX)
      this._behaviorData.CameraOffsetX = newBehaviorData.CameraOffsetX;
    if (oldBehaviorData.CameraOffsetY !== newBehaviorData.CameraOffsetY)
      this._behaviorData.CameraOffsetY = newBehaviorData.CameraOffsetY;
    if (oldBehaviorData.CameraDelay !== newBehaviorData.CameraDelay)
      this._behaviorData.CameraDelay = newBehaviorData.CameraDelay;
    if (oldBehaviorData.ForecastTime !== newBehaviorData.ForecastTime)
      this._behaviorData.ForecastTime = newBehaviorData.ForecastTime;
    if (oldBehaviorData.ForecastHistoryDuration !== newBehaviorData.ForecastHistoryDuration)
      this._behaviorData.ForecastHistoryDuration = newBehaviorData.ForecastHistoryDuration;
    if (oldBehaviorData.LogLeftwardSpeed !== newBehaviorData.LogLeftwardSpeed)
      this._behaviorData.LogLeftwardSpeed = newBehaviorData.LogLeftwardSpeed;
    if (oldBehaviorData.LogRightwardSpeed !== newBehaviorData.LogRightwardSpeed)
      this._behaviorData.LogRightwardSpeed = newBehaviorData.LogRightwardSpeed;
    if (oldBehaviorData.LogDownwardSpeed !== newBehaviorData.LogDownwardSpeed)
      this._behaviorData.LogDownwardSpeed = newBehaviorData.LogDownwardSpeed;
    if (oldBehaviorData.LogUpwardSpeed !== newBehaviorData.LogUpwardSpeed)
      this._behaviorData.LogUpwardSpeed = newBehaviorData.LogUpwardSpeed;
    if (oldBehaviorData.DelayedCenterX !== newBehaviorData.DelayedCenterX)
      this._behaviorData.DelayedCenterX = newBehaviorData.DelayedCenterX;
    if (oldBehaviorData.DelayedCenterY !== newBehaviorData.DelayedCenterY)
      this._behaviorData.DelayedCenterY = newBehaviorData.DelayedCenterY;
    if (oldBehaviorData.ForecastHistoryMeanX !== newBehaviorData.ForecastHistoryMeanX)
      this._behaviorData.ForecastHistoryMeanX = newBehaviorData.ForecastHistoryMeanX;
    if (oldBehaviorData.ForecastHistoryMeanY !== newBehaviorData.ForecastHistoryMeanY)
      this._behaviorData.ForecastHistoryMeanY = newBehaviorData.ForecastHistoryMeanY;
    if (oldBehaviorData.ForecastHistoryVarianceX !== newBehaviorData.ForecastHistoryVarianceX)
      this._behaviorData.ForecastHistoryVarianceX = newBehaviorData.ForecastHistoryVarianceX;
    if (oldBehaviorData.ForecastHistoryCovariance !== newBehaviorData.ForecastHistoryCovariance)
      this._behaviorData.ForecastHistoryCovariance = newBehaviorData.ForecastHistoryCovariance;
    if (oldBehaviorData.ForecastHistoryLinearA !== newBehaviorData.ForecastHistoryLinearA)
      this._behaviorData.ForecastHistoryLinearA = newBehaviorData.ForecastHistoryLinearA;
    if (oldBehaviorData.ForecastHistoryLinearB !== newBehaviorData.ForecastHistoryLinearB)
      this._behaviorData.ForecastHistoryLinearB = newBehaviorData.ForecastHistoryLinearB;
    if (oldBehaviorData.ForecastedX !== newBehaviorData.ForecastedX)
      this._behaviorData.ForecastedX = newBehaviorData.ForecastedX;
    if (oldBehaviorData.ForecastedY !== newBehaviorData.ForecastedY)
      this._behaviorData.ForecastedY = newBehaviorData.ForecastedY;
    if (oldBehaviorData.ProjectedNewestX !== newBehaviorData.ProjectedNewestX)
      this._behaviorData.ProjectedNewestX = newBehaviorData.ProjectedNewestX;
    if (oldBehaviorData.ProjectedNewestY !== newBehaviorData.ProjectedNewestY)
      this._behaviorData.ProjectedNewestY = newBehaviorData.ProjectedNewestY;
    if (oldBehaviorData.ProjectedOldestX !== newBehaviorData.ProjectedOldestX)
      this._behaviorData.ProjectedOldestX = newBehaviorData.ProjectedOldestX;
    if (oldBehaviorData.ProjectedOldestY !== newBehaviorData.ProjectedOldestY)
      this._behaviorData.ProjectedOldestY = newBehaviorData.ProjectedOldestY;
    if (oldBehaviorData.ForecastHistoryVarianceY !== newBehaviorData.ForecastHistoryVarianceY)
      this._behaviorData.ForecastHistoryVarianceY = newBehaviorData.ForecastHistoryVarianceY;
    if (oldBehaviorData.Index !== newBehaviorData.Index)
      this._behaviorData.Index = newBehaviorData.Index;
    if (oldBehaviorData.CameraDelayCatchUpSpeed !== newBehaviorData.CameraDelayCatchUpSpeed)
      this._behaviorData.CameraDelayCatchUpSpeed = newBehaviorData.CameraDelayCatchUpSpeed;
    if (oldBehaviorData.CameraExtraDelay !== newBehaviorData.CameraExtraDelay)
      this._behaviorData.CameraExtraDelay = newBehaviorData.CameraExtraDelay;
    if (oldBehaviorData.WaitingSpeedXMax !== newBehaviorData.WaitingSpeedXMax)
      this._behaviorData.WaitingSpeedXMax = newBehaviorData.WaitingSpeedXMax;
    if (oldBehaviorData.WaitingSpeedYMax !== newBehaviorData.WaitingSpeedYMax)
      this._behaviorData.WaitingSpeedYMax = newBehaviorData.WaitingSpeedYMax;
    if (oldBehaviorData.WaitingEnd !== newBehaviorData.WaitingEnd)
      this._behaviorData.WaitingEnd = newBehaviorData.WaitingEnd;
    if (oldBehaviorData.CameraDelayCatchUpDuration !== newBehaviorData.CameraDelayCatchUpDuration)
      this._behaviorData.CameraDelayCatchUpDuration = newBehaviorData.CameraDelayCatchUpDuration;
    if (oldBehaviorData.LeftwardSpeedMax !== newBehaviorData.LeftwardSpeedMax)
      this._behaviorData.LeftwardSpeedMax = newBehaviorData.LeftwardSpeedMax;
    if (oldBehaviorData.RightwardSpeedMax !== newBehaviorData.RightwardSpeedMax)
      this._behaviorData.RightwardSpeedMax = newBehaviorData.RightwardSpeedMax;
    if (oldBehaviorData.UpwardSpeedMax !== newBehaviorData.UpwardSpeedMax)
      this._behaviorData.UpwardSpeedMax = newBehaviorData.UpwardSpeedMax;
    if (oldBehaviorData.DownwardSpeedMax !== newBehaviorData.DownwardSpeedMax)
      this._behaviorData.DownwardSpeedMax = newBehaviorData.DownwardSpeedMax;
    if (oldBehaviorData.OldX !== newBehaviorData.OldX)
      this._behaviorData.OldX = newBehaviorData.OldX;
    if (oldBehaviorData.OldY !== newBehaviorData.OldY)
      this._behaviorData.OldY = newBehaviorData.OldY;
    if (oldBehaviorData.IsCalledManually !== newBehaviorData.IsCalledManually)
      this._behaviorData.IsCalledManually = newBehaviorData.IsCalledManually;

    return true;
  }

  // Properties:
  
  _getLeftwardSpeed() {
    return this._behaviorData.LeftwardSpeed !== undefined ? this._behaviorData.LeftwardSpeed : Number("0.9") || 0;
  }
  _setLeftwardSpeed(newValue) {
    this._behaviorData.LeftwardSpeed = newValue;
  }
  _getRightwardSpeed() {
    return this._behaviorData.RightwardSpeed !== undefined ? this._behaviorData.RightwardSpeed : Number("0.9") || 0;
  }
  _setRightwardSpeed(newValue) {
    this._behaviorData.RightwardSpeed = newValue;
  }
  _getUpwardSpeed() {
    return this._behaviorData.UpwardSpeed !== undefined ? this._behaviorData.UpwardSpeed : Number("0.9") || 0;
  }
  _setUpwardSpeed(newValue) {
    this._behaviorData.UpwardSpeed = newValue;
  }
  _getDownwardSpeed() {
    return this._behaviorData.DownwardSpeed !== undefined ? this._behaviorData.DownwardSpeed : Number("0.9") || 0;
  }
  _setDownwardSpeed(newValue) {
    this._behaviorData.DownwardSpeed = newValue;
  }
  _getFollowOnX() {
    return this._behaviorData.FollowOnX !== undefined ? this._behaviorData.FollowOnX : true;
  }
  _setFollowOnX(newValue) {
    this._behaviorData.FollowOnX = newValue;
  }
  _toggleFollowOnX() {
    this._setFollowOnX(!this._getFollowOnX());
  }
  _getFollowOnY() {
    return this._behaviorData.FollowOnY !== undefined ? this._behaviorData.FollowOnY : true;
  }
  _setFollowOnY(newValue) {
    this._behaviorData.FollowOnY = newValue;
  }
  _toggleFollowOnY() {
    this._setFollowOnY(!this._getFollowOnY());
  }
  _getFollowFreeAreaLeft() {
    return this._behaviorData.FollowFreeAreaLeft !== undefined ? this._behaviorData.FollowFreeAreaLeft : Number("0") || 0;
  }
  _setFollowFreeAreaLeft(newValue) {
    this._behaviorData.FollowFreeAreaLeft = newValue;
  }
  _getFollowFreeAreaRight() {
    return this._behaviorData.FollowFreeAreaRight !== undefined ? this._behaviorData.FollowFreeAreaRight : Number("0") || 0;
  }
  _setFollowFreeAreaRight(newValue) {
    this._behaviorData.FollowFreeAreaRight = newValue;
  }
  _getFollowFreeAreaTop() {
    return this._behaviorData.FollowFreeAreaTop !== undefined ? this._behaviorData.FollowFreeAreaTop : Number("0") || 0;
  }
  _setFollowFreeAreaTop(newValue) {
    this._behaviorData.FollowFreeAreaTop = newValue;
  }
  _getFollowFreeAreaBottom() {
    return this._behaviorData.FollowFreeAreaBottom !== undefined ? this._behaviorData.FollowFreeAreaBottom : Number("0") || 0;
  }
  _setFollowFreeAreaBottom(newValue) {
    this._behaviorData.FollowFreeAreaBottom = newValue;
  }
  _getCameraOffsetX() {
    return this._behaviorData.CameraOffsetX !== undefined ? this._behaviorData.CameraOffsetX : Number("0") || 0;
  }
  _setCameraOffsetX(newValue) {
    this._behaviorData.CameraOffsetX = newValue;
  }
  _getCameraOffsetY() {
    return this._behaviorData.CameraOffsetY !== undefined ? this._behaviorData.CameraOffsetY : Number("0") || 0;
  }
  _setCameraOffsetY(newValue) {
    this._behaviorData.CameraOffsetY = newValue;
  }
  _getCameraDelay() {
    return this._behaviorData.CameraDelay !== undefined ? this._behaviorData.CameraDelay : Number("0") || 0;
  }
  _setCameraDelay(newValue) {
    this._behaviorData.CameraDelay = newValue;
  }
  _getForecastTime() {
    return this._behaviorData.ForecastTime !== undefined ? this._behaviorData.ForecastTime : Number("0") || 0;
  }
  _setForecastTime(newValue) {
    this._behaviorData.ForecastTime = newValue;
  }
  _getForecastHistoryDuration() {
    return this._behaviorData.ForecastHistoryDuration !== undefined ? this._behaviorData.ForecastHistoryDuration : Number("0") || 0;
  }
  _setForecastHistoryDuration(newValue) {
    this._behaviorData.ForecastHistoryDuration = newValue;
  }
  _getLogLeftwardSpeed() {
    return this._behaviorData.LogLeftwardSpeed !== undefined ? this._behaviorData.LogLeftwardSpeed : Number("") || 0;
  }
  _setLogLeftwardSpeed(newValue) {
    this._behaviorData.LogLeftwardSpeed = newValue;
  }
  _getLogRightwardSpeed() {
    return this._behaviorData.LogRightwardSpeed !== undefined ? this._behaviorData.LogRightwardSpeed : Number("") || 0;
  }
  _setLogRightwardSpeed(newValue) {
    this._behaviorData.LogRightwardSpeed = newValue;
  }
  _getLogDownwardSpeed() {
    return this._behaviorData.LogDownwardSpeed !== undefined ? this._behaviorData.LogDownwardSpeed : Number("") || 0;
  }
  _setLogDownwardSpeed(newValue) {
    this._behaviorData.LogDownwardSpeed = newValue;
  }
  _getLogUpwardSpeed() {
    return this._behaviorData.LogUpwardSpeed !== undefined ? this._behaviorData.LogUpwardSpeed : Number("") || 0;
  }
  _setLogUpwardSpeed(newValue) {
    this._behaviorData.LogUpwardSpeed = newValue;
  }
  _getDelayedCenterX() {
    return this._behaviorData.DelayedCenterX !== undefined ? this._behaviorData.DelayedCenterX : Number("") || 0;
  }
  _setDelayedCenterX(newValue) {
    this._behaviorData.DelayedCenterX = newValue;
  }
  _getDelayedCenterY() {
    return this._behaviorData.DelayedCenterY !== undefined ? this._behaviorData.DelayedCenterY : Number("") || 0;
  }
  _setDelayedCenterY(newValue) {
    this._behaviorData.DelayedCenterY = newValue;
  }
  _getForecastHistoryMeanX() {
    return this._behaviorData.ForecastHistoryMeanX !== undefined ? this._behaviorData.ForecastHistoryMeanX : Number("") || 0;
  }
  _setForecastHistoryMeanX(newValue) {
    this._behaviorData.ForecastHistoryMeanX = newValue;
  }
  _getForecastHistoryMeanY() {
    return this._behaviorData.ForecastHistoryMeanY !== undefined ? this._behaviorData.ForecastHistoryMeanY : Number("") || 0;
  }
  _setForecastHistoryMeanY(newValue) {
    this._behaviorData.ForecastHistoryMeanY = newValue;
  }
  _getForecastHistoryVarianceX() {
    return this._behaviorData.ForecastHistoryVarianceX !== undefined ? this._behaviorData.ForecastHistoryVarianceX : Number("") || 0;
  }
  _setForecastHistoryVarianceX(newValue) {
    this._behaviorData.ForecastHistoryVarianceX = newValue;
  }
  _getForecastHistoryCovariance() {
    return this._behaviorData.ForecastHistoryCovariance !== undefined ? this._behaviorData.ForecastHistoryCovariance : Number("") || 0;
  }
  _setForecastHistoryCovariance(newValue) {
    this._behaviorData.ForecastHistoryCovariance = newValue;
  }
  _getForecastHistoryLinearA() {
    return this._behaviorData.ForecastHistoryLinearA !== undefined ? this._behaviorData.ForecastHistoryLinearA : Number("") || 0;
  }
  _setForecastHistoryLinearA(newValue) {
    this._behaviorData.ForecastHistoryLinearA = newValue;
  }
  _getForecastHistoryLinearB() {
    return this._behaviorData.ForecastHistoryLinearB !== undefined ? this._behaviorData.ForecastHistoryLinearB : Number("") || 0;
  }
  _setForecastHistoryLinearB(newValue) {
    this._behaviorData.ForecastHistoryLinearB = newValue;
  }
  _getForecastedX() {
    return this._behaviorData.ForecastedX !== undefined ? this._behaviorData.ForecastedX : Number("") || 0;
  }
  _setForecastedX(newValue) {
    this._behaviorData.ForecastedX = newValue;
  }
  _getForecastedY() {
    return this._behaviorData.ForecastedY !== undefined ? this._behaviorData.ForecastedY : Number("") || 0;
  }
  _setForecastedY(newValue) {
    this._behaviorData.ForecastedY = newValue;
  }
  _getProjectedNewestX() {
    return this._behaviorData.ProjectedNewestX !== undefined ? this._behaviorData.ProjectedNewestX : Number("") || 0;
  }
  _setProjectedNewestX(newValue) {
    this._behaviorData.ProjectedNewestX = newValue;
  }
  _getProjectedNewestY() {
    return this._behaviorData.ProjectedNewestY !== undefined ? this._behaviorData.ProjectedNewestY : Number("") || 0;
  }
  _setProjectedNewestY(newValue) {
    this._behaviorData.ProjectedNewestY = newValue;
  }
  _getProjectedOldestX() {
    return this._behaviorData.ProjectedOldestX !== undefined ? this._behaviorData.ProjectedOldestX : Number("") || 0;
  }
  _setProjectedOldestX(newValue) {
    this._behaviorData.ProjectedOldestX = newValue;
  }
  _getProjectedOldestY() {
    return this._behaviorData.ProjectedOldestY !== undefined ? this._behaviorData.ProjectedOldestY : Number("") || 0;
  }
  _setProjectedOldestY(newValue) {
    this._behaviorData.ProjectedOldestY = newValue;
  }
  _getForecastHistoryVarianceY() {
    return this._behaviorData.ForecastHistoryVarianceY !== undefined ? this._behaviorData.ForecastHistoryVarianceY : Number("") || 0;
  }
  _setForecastHistoryVarianceY(newValue) {
    this._behaviorData.ForecastHistoryVarianceY = newValue;
  }
  _getIndex() {
    return this._behaviorData.Index !== undefined ? this._behaviorData.Index : Number("") || 0;
  }
  _setIndex(newValue) {
    this._behaviorData.Index = newValue;
  }
  _getCameraDelayCatchUpSpeed() {
    return this._behaviorData.CameraDelayCatchUpSpeed !== undefined ? this._behaviorData.CameraDelayCatchUpSpeed : Number("0") || 0;
  }
  _setCameraDelayCatchUpSpeed(newValue) {
    this._behaviorData.CameraDelayCatchUpSpeed = newValue;
  }
  _getCameraExtraDelay() {
    return this._behaviorData.CameraExtraDelay !== undefined ? this._behaviorData.CameraExtraDelay : Number("") || 0;
  }
  _setCameraExtraDelay(newValue) {
    this._behaviorData.CameraExtraDelay = newValue;
  }
  _getWaitingSpeedXMax() {
    return this._behaviorData.WaitingSpeedXMax !== undefined ? this._behaviorData.WaitingSpeedXMax : Number("") || 0;
  }
  _setWaitingSpeedXMax(newValue) {
    this._behaviorData.WaitingSpeedXMax = newValue;
  }
  _getWaitingSpeedYMax() {
    return this._behaviorData.WaitingSpeedYMax !== undefined ? this._behaviorData.WaitingSpeedYMax : Number("") || 0;
  }
  _setWaitingSpeedYMax(newValue) {
    this._behaviorData.WaitingSpeedYMax = newValue;
  }
  _getWaitingEnd() {
    return this._behaviorData.WaitingEnd !== undefined ? this._behaviorData.WaitingEnd : Number("") || 0;
  }
  _setWaitingEnd(newValue) {
    this._behaviorData.WaitingEnd = newValue;
  }
  _getCameraDelayCatchUpDuration() {
    return this._behaviorData.CameraDelayCatchUpDuration !== undefined ? this._behaviorData.CameraDelayCatchUpDuration : Number("") || 0;
  }
  _setCameraDelayCatchUpDuration(newValue) {
    this._behaviorData.CameraDelayCatchUpDuration = newValue;
  }
  _getLeftwardSpeedMax() {
    return this._behaviorData.LeftwardSpeedMax !== undefined ? this._behaviorData.LeftwardSpeedMax : Number("9000") || 0;
  }
  _setLeftwardSpeedMax(newValue) {
    this._behaviorData.LeftwardSpeedMax = newValue;
  }
  _getRightwardSpeedMax() {
    return this._behaviorData.RightwardSpeedMax !== undefined ? this._behaviorData.RightwardSpeedMax : Number("9000") || 0;
  }
  _setRightwardSpeedMax(newValue) {
    this._behaviorData.RightwardSpeedMax = newValue;
  }
  _getUpwardSpeedMax() {
    return this._behaviorData.UpwardSpeedMax !== undefined ? this._behaviorData.UpwardSpeedMax : Number("9000") || 0;
  }
  _setUpwardSpeedMax(newValue) {
    this._behaviorData.UpwardSpeedMax = newValue;
  }
  _getDownwardSpeedMax() {
    return this._behaviorData.DownwardSpeedMax !== undefined ? this._behaviorData.DownwardSpeedMax : Number("9000") || 0;
  }
  _setDownwardSpeedMax(newValue) {
    this._behaviorData.DownwardSpeedMax = newValue;
  }
  _getOldX() {
    return this._behaviorData.OldX !== undefined ? this._behaviorData.OldX : Number("") || 0;
  }
  _setOldX(newValue) {
    this._behaviorData.OldX = newValue;
  }
  _getOldY() {
    return this._behaviorData.OldY !== undefined ? this._behaviorData.OldY : Number("") || 0;
  }
  _setOldY(newValue) {
    this._behaviorData.OldY = newValue;
  }
  _getIsCalledManually() {
    return this._behaviorData.IsCalledManually !== undefined ? this._behaviorData.IsCalledManually : false;
  }
  _setIsCalledManually(newValue) {
    this._behaviorData.IsCalledManually = newValue;
  }
  _toggleIsCalledManually() {
    this._setIsCalledManually(!this._getIsCalledManually());
  }
}

/**
 * Shared data generated from Smooth Camera
 */
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.SharedData = class SmoothCameraSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._SmoothCamera_SmoothCameraSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._SmoothCamera_SmoothCameraSharedData = new gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.SharedData(
      initialData
    );
  }
  return instanceContainer._SmoothCamera_SmoothCameraSharedData;
}

// Methods:
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext = {};
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetLeftwardSpeed((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLeftwardSpeed()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetRightwardSpeed((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRightwardSpeed()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetUpwardSpeed((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getUpwardSpeed()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetDownwardSpeed((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDownwardSpeed()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetLeftwardSpeedMax((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLeftwardSpeedMax()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetRightwardSpeedMax((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRightwardSpeedMax()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetUpwardSpeedMax((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getUpwardSpeedMax()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetDownwardSpeedMax((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDownwardSpeedMax()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetFollowFreeAreaLeft((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFollowFreeAreaLeft()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetFollowFreeAreaRight((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFollowFreeAreaRight()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetFollowFreeAreaTop((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFollowFreeAreaTop()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetFollowFreeAreaBottom((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFollowFreeAreaBottom()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCameraDelay((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCameraDelay()));
}
}}

}


};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsCalledManually()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).DoMoveCameraCloser((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.MoveCameraCloserContext = {};
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.MoveCameraCloserContext.GDObjectObjects1= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.MoveCameraCloserContext.GDObjectObjects2= [];


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.MoveCameraCloserContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.MoveCameraCloserContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.MoveCameraCloserContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.MoveCameraCloserContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsCalledManually(true);
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.MoveCameraCloserContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.MoveCameraCloserContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).DoMoveCameraCloser((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.MoveCameraCloser = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.MoveCameraCloserContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.MoveCameraCloserContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.MoveCameraCloserContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext = {};
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects3= [];


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getCameraX(runtimeScene, (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2[0].getLayer()), 0) < (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOldX()) - (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLeftwardSpeedMax()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene);
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2 */
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOldX()) - (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLeftwardSpeedMax()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2[0].getLayer()), 0);
}}

}


};gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getCameraX(runtimeScene, (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1[0].getLayer()), 0) > (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOldX()) + (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRightwardSpeedMax()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene);
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1 */
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOldX()) + (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRightwardSpeedMax()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1[0].getLayer()), 0);
}}

}


};gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1, gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getCameraX(runtimeScene, (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2[0].getLayer()), 0) > (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).FreeAreaRight((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2 */
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).FreeAreaRight((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) + (gdjs.evtTools.camera.getCameraX(runtimeScene, (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2[0].getLayer()), 0) - (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).FreeAreaRight((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) * Math.exp(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLogLeftwardSpeed())), (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2[0].getLayer()), 0);
}
{ //Subevents
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

/* Reuse gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getCameraX(runtimeScene, (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1[0].getLayer()), 0) < (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).FreeAreaLeft((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1 */
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).FreeAreaLeft((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) + (gdjs.evtTools.camera.getCameraX(runtimeScene, (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1[0].getLayer()), 0) - (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).FreeAreaLeft((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) * Math.exp(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLogRightwardSpeed())), (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1[0].getLayer()), 0);
}
{ //Subevents
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getCameraY(runtimeScene, (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2[0].getLayer()), 0) < (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOldY()) - (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getUpwardSpeedMax()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene);
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2 */
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOldY()) - (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getUpwardSpeedMax()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2[0].getLayer()), 0);
}}

}


};gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getCameraY(runtimeScene, (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1[0].getLayer()), 0) > (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOldY()) + (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDownwardSpeedMax()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene);
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1 */
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOldY()) + (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDownwardSpeedMax()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1[0].getLayer()), 0);
}}

}


};gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1, gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getCameraY(runtimeScene, (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2[0].getLayer()), 0) > (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).FreeAreaBottom((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2 */
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).FreeAreaBottom((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) + (gdjs.evtTools.camera.getCameraY(runtimeScene, (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2[0].getLayer()), 0) - (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).FreeAreaBottom((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) * Math.exp(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLogUpwardSpeed())), (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2[0].getLayer()), 0);
}
{ //Subevents
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

/* Reuse gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getCameraY(runtimeScene, (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1[0].getLayer()), 0) < (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).FreeAreaTop((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1 */
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).FreeAreaTop((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) + (gdjs.evtTools.camera.getCameraY(runtimeScene, (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1[0].getLayer()), 0) - (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).FreeAreaTop((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) * Math.exp(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLogDownwardSpeed())), (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1[0].getLayer()), 0);
}
{ //Subevents
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).UpdateDelayedPosition((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).UpdateForecastedPosition((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFollowOnX() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1[k] = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOldX(gdjs.evtTools.camera.getCameraX(runtimeScene, (gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1[i].getLayer()), 0));
}
}
{ //Subevents
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFollowOnY() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1[k] = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOldY(gdjs.evtTools.camera.getCameraY(runtimeScene, (gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1[i].getLayer()), 0));
}
}
{ //Subevents
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloser = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DoMoveCameraCloserContext.eventsList6(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.WaitAndCatchUpContext = {};
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.WaitAndCatchUpContext.GDObjectObjects1= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.WaitAndCatchUpContext.GDObjectObjects2= [];


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.WaitAndCatchUpContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.WaitAndCatchUpContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.WaitAndCatchUpContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.WaitAndCatchUpContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWaitingEnd(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("WaitingDuration")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.WaitAndCatchUpContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.WaitAndCatchUpContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWaitingSpeedXMax((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("WaitingSpeedXMax")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.WaitAndCatchUpContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.WaitAndCatchUpContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWaitingSpeedYMax((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("WaitingSpeedYMax")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.WaitAndCatchUpContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.WaitAndCatchUpContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCameraDelayCatchUpDuration((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CatchUpDuration")) || 0 : 0));
}
}}

}


{



}


};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.WaitAndCatchUp = function(WaitingDuration, WaitingSpeedXMax, WaitingSpeedYMax, CatchUpDuration, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "WaitingDuration") return WaitingDuration;
if (argName === "WaitingSpeedXMax") return WaitingSpeedXMax;
if (argName === "WaitingSpeedYMax") return WaitingSpeedYMax;
if (argName === "CatchUpDuration") return CatchUpDuration;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.WaitAndCatchUpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.WaitAndCatchUpContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.WaitAndCatchUpContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext = {};
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects2= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects3= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDShapePainterObjects1= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDShapePainterObjects2= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDShapePainterObjects3= [];


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1, gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects2);


const repeatCount3 = (gdjs.RuntimeObject.getVariableChildCount(((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects2[0].getVariables()).get("__SmoothCamera").getChild("ForecastHistoryX")));
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {
gdjs.copyArray(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects2, gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects3);

gdjs.copyArray(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDShapePainterObjects1, gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDShapePainterObjects3);


let isConditionTrue_0 = false;
if (true)
{
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDShapePainterObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDShapePainterObjects3[i].drawPathLineTo((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects3[0].getVariables()).get("__SmoothCamera").getChild("ForecastHistoryX").getChild((( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIndex())))), (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects3[0].getVariables()).get("__SmoothCamera").getChild("ForecastHistoryY").getChild((( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIndex())))));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIndex(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIndex() + (1));
}
}}
}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDShapePainterObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDShapePainterObjects1[i].endFillPath();
}
}}

}


};gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((gdjs.RuntimeObject.getVariableChildCount(((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1[0].getVariables()).get("__SmoothCamera").getChild("ForecastHistoryTime"))) > 0);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1 */
gdjs.copyArray(eventsFunctionContext.getObjects("ShapePainter"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDShapePainterObjects1);
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIndex(0);
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDShapePainterObjects1[i].setOutlineColor("245;166;35");
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDShapePainterObjects1[i].beginFillPath((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1[0].getVariables()).get("__SmoothCamera").getChild("ForecastHistoryX").getChild(0))), (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1[0].getVariables()).get("__SmoothCamera").getChild("ForecastHistoryY").getChild(0))));
}
}
{ //Subevents
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFollowFreeAreaLeft() != 0 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects2[k] = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1_1final.push(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFollowFreeAreaRight() != 0 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects2[k] = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1_1final.push(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFollowFreeAreaTop() != 0 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects2[k] = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1_1final.push(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFollowFreeAreaBottom() != 0 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects2[k] = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1_1final.push(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1_1final, gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1 */
gdjs.copyArray(eventsFunctionContext.getObjects("ShapePainter"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDShapePainterObjects1);
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDShapePainterObjects1[i].setOutlineColor("126;211;33");
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDShapePainterObjects1[i].drawRectangle((( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).FreeAreaLeft((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) - 1, (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).FreeAreaTop((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) - 1, (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).FreeAreaRight((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) + 1, (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).FreeAreaBottom((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) + 1);
}
}}

}


};gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("ShapePainter"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDShapePainterObjects1);
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDShapePainterObjects1[i].setOutlineColor("208;2;27");
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDShapePainterObjects1[i].drawLineV2((( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProjectedOldestX()), (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProjectedOldestY()), (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProjectedNewestX()), (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProjectedNewestY()), 1);
}
}}

}


};gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("ShapePainter"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDShapePainterObjects1);
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDShapePainterObjects1[i].drawCircle((( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastedX()), (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastedY()), 3);
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDShapePainterObjects1[i].drawLineV2(gdjs.evtTools.camera.getCameraX(runtimeScene, (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1[0].getLayer()), 0), gdjs.evtTools.camera.getCameraY(runtimeScene, (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1[0].getLayer()), 0) - 4, gdjs.evtTools.camera.getCameraX(runtimeScene, (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1[0].getLayer()), 0), gdjs.evtTools.camera.getCameraY(runtimeScene, (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1[0].getLayer()), 0) + 4, 1);
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDShapePainterObjects1[i].drawLineV2(gdjs.evtTools.camera.getCameraX(runtimeScene, (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1[0].getLayer()), 0) - 4, gdjs.evtTools.camera.getCameraY(runtimeScene, (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1[0].getLayer()), 0), gdjs.evtTools.camera.getCameraX(runtimeScene, (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1[0].getLayer()), 0) + 4, gdjs.evtTools.camera.getCameraY(runtimeScene, (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1[0].getLayer()), 0), 1);
}
}}

}


};gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("ShapePainter"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDShapePainterObjects1);
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDShapePainterObjects1[i].setFillOpacity(0);
}
}}

}


{


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.eventsList2(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.eventsList3(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.eventsList4(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.eventsList5(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebug = function(ShapePainter, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "ShapePainter": ShapePainter
},
  _objectArraysMap: {
"Object": thisObjectList
, "ShapePainter": gdjs.objectsListsToArray(ShapePainter)
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDShapePainterObjects1.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDShapePainterObjects2.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.GDShapePainterObjects3.length = 0;

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.DrawDebugContext.eventsList6(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowOnXContext = {};
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowOnXContext.GDObjectObjects1= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowOnXContext.GDObjectObjects2= [];


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowOnXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowOnXContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowOnXContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowOnXContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFollowOnX(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("FollowOnX") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowOnXContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowOnXContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowOnXContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFollowOnX(true);
}
}}

}


};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowOnX = function(FollowOnX, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "FollowOnX") return FollowOnX;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowOnXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowOnXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowOnXContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowOnYContext = {};
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowOnYContext.GDObjectObjects1= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowOnYContext.GDObjectObjects2= [];


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowOnYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowOnYContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowOnYContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowOnYContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFollowOnY(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("FollowOnY") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowOnYContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowOnYContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowOnYContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFollowOnY(true);
}
}}

}


};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowOnY = function(FollowOnY, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "FollowOnY") return FollowOnY;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowOnYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowOnYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowOnYContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowFreeAreaRightContext = {};
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowFreeAreaRightContext.GDObjectObjects1= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowFreeAreaRightContext.GDObjectObjects2= [];


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowFreeAreaRightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowFreeAreaRightContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowFreeAreaRightContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowFreeAreaRightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFollowFreeAreaTop(Math.max(0, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("SetFollowFreeAreaRight")) || 0 : 0)));
}
}}

}


};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowFreeAreaRight = function(SetFollowFreeAreaRight, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "SetFollowFreeAreaRight") return SetFollowFreeAreaRight;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowFreeAreaRightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowFreeAreaRightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowFreeAreaRightContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowFreeAreaLeftContext = {};
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowFreeAreaLeftContext.GDObjectObjects1= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowFreeAreaLeftContext.GDObjectObjects2= [];


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowFreeAreaLeftContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowFreeAreaLeftContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowFreeAreaLeftContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowFreeAreaLeftContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFollowFreeAreaTop(Math.max(0, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("SetFollowFreeAreaLeft")) || 0 : 0)));
}
}}

}


};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowFreeAreaLeft = function(SetFollowFreeAreaLeft, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "SetFollowFreeAreaLeft") return SetFollowFreeAreaLeft;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowFreeAreaLeftContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowFreeAreaLeftContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowFreeAreaLeftContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowFreeAreaTopContext = {};
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowFreeAreaTopContext.GDObjectObjects1= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowFreeAreaTopContext.GDObjectObjects2= [];


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowFreeAreaTopContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowFreeAreaTopContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowFreeAreaTopContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowFreeAreaTopContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFollowFreeAreaTop(Math.max(0, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("FollowFreeAreaTop")) || 0 : 0)));
}
}}

}


};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowFreeAreaTop = function(FollowFreeAreaTop, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "FollowFreeAreaTop") return FollowFreeAreaTop;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowFreeAreaTopContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowFreeAreaTopContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowFreeAreaTopContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowFreeAreaBottomContext = {};
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowFreeAreaBottomContext.GDObjectObjects1= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowFreeAreaBottomContext.GDObjectObjects2= [];


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowFreeAreaBottomContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowFreeAreaBottomContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowFreeAreaBottomContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowFreeAreaBottomContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFollowFreeAreaBottom(Math.max(0, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("SetFollowFreeAreaBottom")) || 0 : 0)));
}
}}

}


};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowFreeAreaBottom = function(SetFollowFreeAreaBottom, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "SetFollowFreeAreaBottom") return SetFollowFreeAreaBottom;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowFreeAreaBottomContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowFreeAreaBottomContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetFollowFreeAreaBottomContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetLeftwardSpeedMaxContext = {};
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetLeftwardSpeedMaxContext.GDObjectObjects1= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetLeftwardSpeedMaxContext.GDObjectObjects2= [];


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetLeftwardSpeedMaxContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetLeftwardSpeedMaxContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetLeftwardSpeedMaxContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetLeftwardSpeedMaxContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLeftwardSpeedMax(Math.max(0, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Speed")) || 0 : 0)));
}
}}

}


};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetLeftwardSpeedMax = function(Speed, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Speed") return Speed;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetLeftwardSpeedMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetLeftwardSpeedMaxContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetLeftwardSpeedMaxContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetRightwardSpeedMaxContext = {};
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetRightwardSpeedMaxContext.GDObjectObjects1= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetRightwardSpeedMaxContext.GDObjectObjects2= [];


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetRightwardSpeedMaxContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetRightwardSpeedMaxContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetRightwardSpeedMaxContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetRightwardSpeedMaxContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLeftwardSpeedMax(Math.max(0, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Speed")) || 0 : 0)));
}
}}

}


};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetRightwardSpeedMax = function(Speed, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Speed") return Speed;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetRightwardSpeedMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetRightwardSpeedMaxContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetRightwardSpeedMaxContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetUpwardSpeedMaxContext = {};
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetUpwardSpeedMaxContext.GDObjectObjects1= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetUpwardSpeedMaxContext.GDObjectObjects2= [];


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetUpwardSpeedMaxContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetUpwardSpeedMaxContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetUpwardSpeedMaxContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetUpwardSpeedMaxContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setUpwardSpeedMax(Math.max(0, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Speed")) || 0 : 0)));
}
}}

}


};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetUpwardSpeedMax = function(Speed, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Speed") return Speed;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetUpwardSpeedMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetUpwardSpeedMaxContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetUpwardSpeedMaxContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetDownwardSpeedMaxContext = {};
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetDownwardSpeedMaxContext.GDObjectObjects1= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetDownwardSpeedMaxContext.GDObjectObjects2= [];


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetDownwardSpeedMaxContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetDownwardSpeedMaxContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetDownwardSpeedMaxContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetDownwardSpeedMaxContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDownwardSpeedMax(Math.max(0, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Speed")) || 0 : 0)));
}
}}

}


};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetDownwardSpeedMax = function(Speed, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Speed") return Speed;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetDownwardSpeedMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetDownwardSpeedMaxContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetDownwardSpeedMaxContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetLeftwardSpeedContext = {};
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetLeftwardSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetLeftwardSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetLeftwardSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetLeftwardSpeedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetLeftwardSpeedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetLeftwardSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLeftwardSpeed(gdjs.evtTools.common.clamp(0, 1, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("LeftwardSpeed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetLeftwardSpeedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetLeftwardSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLogLeftwardSpeed(Math.log(1 - (gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetLeftwardSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLeftwardSpeed())));
}
}}

}


};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetLeftwardSpeed = function(LeftwardSpeed, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "LeftwardSpeed") return LeftwardSpeed;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetLeftwardSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetLeftwardSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetLeftwardSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetRightwardSpeedContext = {};
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetRightwardSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetRightwardSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetRightwardSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetRightwardSpeedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetRightwardSpeedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetRightwardSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRightwardSpeed(gdjs.evtTools.common.clamp(0, 1, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("RightwardSpeed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetRightwardSpeedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetRightwardSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLogRightwardSpeed(Math.log(1 - (gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetRightwardSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRightwardSpeed())));
}
}}

}


};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetRightwardSpeed = function(RightwardSpeed, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "RightwardSpeed") return RightwardSpeed;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetRightwardSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetRightwardSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetRightwardSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetDownwardSpeedContext = {};
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetDownwardSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetDownwardSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetDownwardSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetDownwardSpeedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetDownwardSpeedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetDownwardSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDownwardSpeed(gdjs.evtTools.common.clamp(0, 1, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("DownwardSpeed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetDownwardSpeedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetDownwardSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLogDownwardSpeed(Math.log(1 - (gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetDownwardSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDownwardSpeed())));
}
}}

}


};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetDownwardSpeed = function(DownwardSpeed, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "DownwardSpeed") return DownwardSpeed;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetDownwardSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetDownwardSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetDownwardSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetUpwardSpeedContext = {};
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetUpwardSpeedContext.GDObjectObjects1= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetUpwardSpeedContext.GDObjectObjects2= [];


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetUpwardSpeedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetUpwardSpeedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetUpwardSpeedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetUpwardSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setUpwardSpeed(gdjs.evtTools.common.clamp(0, 1, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("UpwardSpeed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetUpwardSpeedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetUpwardSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLogUpwardSpeed(Math.log(1 - (gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetUpwardSpeedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getUpwardSpeed())));
}
}}

}


};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetUpwardSpeed = function(UpwardSpeed, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "UpwardSpeed") return UpwardSpeed;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetUpwardSpeedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetUpwardSpeedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetUpwardSpeedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.OffsetXContext = {};
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.OffsetXContext.GDObjectObjects1= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.OffsetXContext.GDObjectObjects2= [];


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.OffsetXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.OffsetXContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.OffsetXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.OffsetXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCameraOffsetX()); }}}

}


};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.OffsetX = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.OffsetXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.OffsetXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.OffsetXContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetOffsetXOpContext = {};
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetOffsetXOpContext.GDObjectObjects1= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetOffsetXOpContext.GDObjectObjects2= [];


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetOffsetXOpContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetOffsetXOpContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetOffsetXOpContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetOffsetXOpContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCameraOffsetX((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetOffsetXOp = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetOffsetXOpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetOffsetXOpContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetOffsetXOpContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetOffsetXContext = {};
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetOffsetXContext.GDObjectObjects1= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetOffsetXContext.GDObjectObjects2= [];


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetOffsetXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetOffsetXContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetOffsetXContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetOffsetXContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetOffsetXOp((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CameraOffsetX")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetOffsetX = function(CameraOffsetX, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "CameraOffsetX") return CameraOffsetX;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetOffsetXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetOffsetXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetOffsetXContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.OffsetYContext = {};
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.OffsetYContext.GDObjectObjects1= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.OffsetYContext.GDObjectObjects2= [];


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.OffsetYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.OffsetYContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.OffsetYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.OffsetYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCameraOffsetY()); }}}

}


};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.OffsetY = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.OffsetYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.OffsetYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.OffsetYContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetOffsetYOpContext = {};
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetOffsetYOpContext.GDObjectObjects1= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetOffsetYOpContext.GDObjectObjects2= [];


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetOffsetYOpContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetOffsetYOpContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetOffsetYOpContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetOffsetYOpContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCameraOffsetY((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetOffsetYOp = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetOffsetYOpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetOffsetYOpContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetOffsetYOpContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetOffsetYContext = {};
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetOffsetYContext.GDObjectObjects1= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetOffsetYContext.GDObjectObjects2= [];


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetOffsetYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetOffsetYContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetOffsetYContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetOffsetYContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetOffsetYOp((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CameraOffsetY")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetOffsetY = function(CameraOffsetY, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "CameraOffsetY") return CameraOffsetY;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetOffsetYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetOffsetYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetOffsetYContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetForecastTimeContext = {};
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetForecastTimeContext.GDObjectObjects1= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetForecastTimeContext.GDObjectObjects2= [];


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetForecastTimeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetForecastTimeContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetForecastTimeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetForecastTimeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setForecastTime(Math.min(0, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ForecastTime")) || 0 : 0)));
}
}}

}


};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetForecastTime = function(ForecastTime, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "ForecastTime") return ForecastTime;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetForecastTimeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetForecastTimeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetForecastTimeContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetCameraDelayContext = {};
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetCameraDelayContext.GDObjectObjects1= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetCameraDelayContext.GDObjectObjects2= [];


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetCameraDelayContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetCameraDelayContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetCameraDelayContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetCameraDelayContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCameraDelay(Math.min(0, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CameraDelay")) || 0 : 0)));
}
}}

}


};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetCameraDelay = function(CameraDelay, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "CameraDelay") return CameraDelay;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetCameraDelayContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetCameraDelayContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.SetCameraDelayContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaLeftContext = {};
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaLeftContext.GDObjectObjects1= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaLeftContext.GDObjectObjects2= [];


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaLeftContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaLeftContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaLeftContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaLeftContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastedX()) + (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaLeftContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaLeftContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCameraOffsetX()) - (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaLeftContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaLeftContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFollowFreeAreaLeft()); }}}

}


};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaLeft = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaLeftContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaLeftContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaLeftContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaRightContext = {};
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaRightContext.GDObjectObjects1= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaRightContext.GDObjectObjects2= [];


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaRightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaRightContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaRightContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaRightContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastedX()) + (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaRightContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaRightContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCameraOffsetX()) + (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaRightContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaRightContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFollowFreeAreaRight()); }}}

}


};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaRight = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaRightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaRightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaRightContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaBottomContext = {};
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaBottomContext.GDObjectObjects1= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaBottomContext.GDObjectObjects2= [];


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaBottomContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaBottomContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaBottomContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaBottomContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastedY()) + (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaBottomContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaBottomContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCameraOffsetY()) + (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaBottomContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaBottomContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFollowFreeAreaBottom()); }}}

}


};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaBottom = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaBottomContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaBottomContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaBottomContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaTopContext = {};
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaTopContext.GDObjectObjects1= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaTopContext.GDObjectObjects2= [];


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaTopContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaTopContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaTopContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaTopContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastedY()) + (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaTopContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaTopContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCameraOffsetY()) - (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaTopContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaTopContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFollowFreeAreaTop()); }}}

}


};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaTop = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaTopContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaTopContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.FreeAreaTopContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext = {};
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects2= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects3= [];


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1, gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsWaiting((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects2[k] = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCameraExtraDelay(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCameraExtraDelay() + (Math.max(0, gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * (1 - Math.min((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWaitingSpeedXMax()) * Math.abs((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects2[i].getVariables().get("__SmoothCamera").getChild("ObjectX").getChild(1))) - (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects2[i].getVariables().get("__SmoothCamera").getChild("ObjectX").getChild(0)))), (gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWaitingSpeedYMax()) * Math.abs((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects2[i].getVariables().get("__SmoothCamera").getChild("ObjectY").getChild(1))) - (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects2[i].getVariables().get("__SmoothCamera").getChild("ObjectY").getChild(0))))) / ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects2[i].getVariables().get("__SmoothCamera").getChild("ObjectTime").getChild(1))) - (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects2[i].getVariables().get("__SmoothCamera").getChild("ObjectTime").getChild(0))))))));
}
}
{ //Subevents
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDelayedCenterX(gdjs.evtTools.common.lerp((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getVariables().get("__SmoothCamera").getChild("ObjectX").getChild(1))), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getVariables().get("__SmoothCamera").getChild("ObjectX").getChild(0))), ((gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) - (gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CurrentDelay((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) - (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getVariables().get("__SmoothCamera").getChild("ObjectTime").getChild(1)))) / ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getVariables().get("__SmoothCamera").getChild("ObjectTime").getChild(0))) - (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getVariables().get("__SmoothCamera").getChild("ObjectTime").getChild(1))))));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDelayedCenterY(gdjs.evtTools.common.lerp((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getVariables().get("__SmoothCamera").getChild("ObjectY").getChild(1))), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getVariables().get("__SmoothCamera").getChild("ObjectY").getChild(0))), ((gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) - (gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CurrentDelay((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) - (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getVariables().get("__SmoothCamera").getChild("ObjectTime").getChild(1)))) / ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getVariables().get("__SmoothCamera").getChild("ObjectTime").getChild(0))) - (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getVariables().get("__SmoothCamera").getChild("ObjectTime").getChild(1))))));
}
}}

}


};gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let stopDoWhile_0 = false;
do {
gdjs.copyArray(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1, gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((gdjs.RuntimeObject.getVariableChildCount(((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects3[0].getVariables()).get("__SmoothCamera").getChild("ObjectTime"))) >= 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects3[i].getVariables().get("__SmoothCamera").getChild("ObjectTime").getChild(1)) < gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) - (gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CurrentDelay((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects3[k] = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).AddForecastHistoryPosition((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects3[i].getVariables().get("__SmoothCamera").getChild("ObjectTime").getChild(0))), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects3[i].getVariables().get("__SmoothCamera").getChild("ObjectX").getChild(0))), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects3[i].getVariables().get("__SmoothCamera").getChild("ObjectY").getChild(0))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects3[i].variableRemoveAt(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects3[i].getVariables().get("__SmoothCamera").getChild("ObjectTime"), 0);
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects3[i].variableRemoveAt(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects3[i].getVariables().get("__SmoothCamera").getChild("ObjectX"), 0);
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects3[i].variableRemoveAt(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects3[i].getVariables().get("__SmoothCamera").getChild("ObjectY"), 0);
}
}
{ //Subevents: 
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1, gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDelayedCenterX((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects2[i].getVariables().get("__SmoothCamera").getChild("ObjectX").getChild(0))));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDelayedCenterY((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects2[i].getVariables().get("__SmoothCamera").getChild("ObjectY").getChild(0))));
}
}}

}


{

/* Reuse gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((gdjs.RuntimeObject.getVariableChildCount(((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[0].getVariables()).get("__SmoothCamera").getChild("ObjectTime"))) >= 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getVariables().get("__SmoothCamera").getChild("ObjectTime").getChild(0)) < gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) - (gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CurrentDelay((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[k] = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{



}


};gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsWaiting((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[k] = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((gdjs.RuntimeObject.getVariableChildCount(((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[0].getVariables()).get("__SmoothCamera").getChild("ObjectTime"))) == 0);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].valuePush(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getVariables().get("__SmoothCamera").getChild("ObjectTime"), gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].valuePush(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getVariables().get("__SmoothCamera").getChild("ObjectX"), (gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDelayedCenterX()));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].valuePush(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getVariables().get("__SmoothCamera").getChild("ObjectY"), (gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDelayedCenterY()));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDelayedCenterX((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getCenterXInScene()));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDelayedCenterY((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getCenterYInScene()));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsDelayed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[k] = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).AddForecastHistoryPosition(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene), (gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getCenterXInScene()), (gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getCenterYInScene()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsDelayed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects2[k] = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1_1final.push(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsWaiting((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects2[k] = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1_1final.push(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1_1final, gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].valuePush(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getVariables().get("__SmoothCamera").getChild("ObjectTime"), gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].valuePush(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getVariables().get("__SmoothCamera").getChild("ObjectX"), (gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getCenterXInScene()));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].valuePush(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getVariables().get("__SmoothCamera").getChild("ObjectY"), (gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getCenterYInScene()));
}
}
{ //Subevents
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsDelayed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[k] = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsWaiting((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[k] = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].variableClearChildren(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getVariables().get("__SmoothCamera").getChild("ObjectTime"));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].variableClearChildren(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getVariables().get("__SmoothCamera").getChild("ObjectX"));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].variableClearChildren(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getVariables().get("__SmoothCamera").getChild("ObjectY"));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsWaiting((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[k] = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(9330244);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCameraDelayCatchUpSpeed((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCameraExtraDelay()) / (gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCameraDelayCatchUpDuration()));
}
}
{ //Subevents
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsWaiting((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[k] = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCameraExtraDelay() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[k] = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCameraExtraDelay(Math.max(0, (gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCameraExtraDelay()) - (gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCameraDelayCatchUpSpeed()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{ //Subevents
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPosition = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateDelayedPositionContext.eventsList6(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.IsDelayedContext = {};
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.IsDelayedContext.GDObjectObjects1= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.IsDelayedContext.GDObjectObjects2= [];


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.IsDelayedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.IsDelayedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.IsDelayedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.IsDelayedContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CurrentDelay((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) > 0);
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.IsDelayed = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.IsDelayedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.IsDelayedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.IsDelayedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.CurrentDelayContext = {};
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.CurrentDelayContext.GDObjectObjects1= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.CurrentDelayContext.GDObjectObjects2= [];


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.CurrentDelayContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.CurrentDelayContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.CurrentDelayContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.CurrentDelayContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCameraDelay()) + (( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.CurrentDelayContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.CurrentDelayContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCameraExtraDelay()); }}}

}


};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.CurrentDelay = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.CurrentDelayContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.CurrentDelayContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.CurrentDelayContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.IsWaitingContext = {};
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.IsWaitingContext.GDObjectObjects1= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.IsWaitingContext.GDObjectObjects2= [];


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.IsWaitingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.IsWaitingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.IsWaitingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.IsWaitingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWaitingEnd() > gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.IsWaitingContext.GDObjectObjects1[k] = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.IsWaitingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.IsWaitingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.IsWaiting = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.IsWaitingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.IsWaitingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.IsWaitingContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext = {};
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects1= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects2= [];


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let stopDoWhile_0 = false;
do {
gdjs.copyArray(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects1, gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((gdjs.RuntimeObject.getVariableChildCount(((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects2[0].getVariables()).get("__SmoothCamera").getChild("ForecastHistoryTime"))) >= 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects2[i].getVariables().get("__SmoothCamera").getChild("ForecastHistoryTime").getChild(0)) < gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) - (gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCameraDelay()) - (gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCameraExtraDelay()) - (gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastHistoryDuration()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects2[k] = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects2[i].variableRemoveAt(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects2[i].getVariables().get("__SmoothCamera").getChild("ForecastHistoryTime"), 0);
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects2[i].variableRemoveAt(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects2[i].getVariables().get("__SmoothCamera").getChild("ForecastHistoryX"), 0);
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects2[i].variableRemoveAt(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects2[i].getVariables().get("__SmoothCamera").getChild("ForecastHistoryY"), 0);
}
}
{ //Subevents: 
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


};gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastHistoryDuration() > 0 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects2[k] = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects1_1final.push(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastTime() > 0 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects2[k] = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects1_1final.push(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects1_1final, gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects1[i].valuePush(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects1[i].getVariables().get("__SmoothCamera").getChild("ForecastHistoryTime"), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Time")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects1[i].valuePush(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects1[i].getVariables().get("__SmoothCamera").getChild("ForecastHistoryX"), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ObjectX")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects1[i].valuePush(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects1[i].getVariables().get("__SmoothCamera").getChild("ForecastHistoryY"), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ObjectY")) || 0 : 0));
}
}
{ //Subevents
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPosition = function(Time, ObjectX, ObjectY, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Time") return Time;
if (argName === "ObjectX") return ObjectX;
if (argName === "ObjectY") return ObjectY;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.AddForecastHistoryPositionContext.eventsList2(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext = {};
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects1= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects4= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects5= [];


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects1, gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setForecastHistoryMeanX(0);
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIndex(0);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects1, gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3);


const repeatCount4 = (gdjs.RuntimeObject.getVariableChildCount(((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3[0].getVariables()).get("__SmoothCamera").getChild("ForecastHistoryX")));
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {
gdjs.copyArray(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3, gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects4);


let isConditionTrue_0 = false;
if (true)
{
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setForecastHistoryMeanX(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastHistoryMeanX() + ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects4[i].getVariables().get("__SmoothCamera").getChild("ForecastHistoryX").getChild((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIndex()))))));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIndex(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIndex() + (1));
}
}}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects1, gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setForecastHistoryMeanX(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastHistoryMeanX() / ((gdjs.RuntimeObject.getVariableChildCount(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i].getVariables().get("__SmoothCamera").getChild("ForecastHistoryX")))));
}
}}

}


};gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects1, gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setForecastHistoryMeanY(0);
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIndex(0);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects1, gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3);


const repeatCount4 = (gdjs.RuntimeObject.getVariableChildCount(((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3[0].getVariables()).get("__SmoothCamera").getChild("ForecastHistoryY")));
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {
gdjs.copyArray(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3, gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects4);


let isConditionTrue_0 = false;
if (true)
{
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setForecastHistoryMeanY(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastHistoryMeanY() + ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects4[i].getVariables().get("__SmoothCamera").getChild("ForecastHistoryY").getChild((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIndex()))))));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIndex(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIndex() + (1));
}
}}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects1, gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setForecastHistoryMeanY(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastHistoryMeanY() / ((gdjs.RuntimeObject.getVariableChildCount(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3[i].getVariables().get("__SmoothCamera").getChild("ForecastHistoryY")))));
}
}}

}


{



}


};gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ProjectHistoryEnds((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i].getVariables().get("__SmoothCamera").getChild("ForecastHistoryX").getChild(0))), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i].getVariables().get("__SmoothCamera").getChild("ForecastHistoryY").getChild(0))), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i].getVariables().get("__SmoothCamera").getChild("ForecastHistoryX").getChild((gdjs.RuntimeObject.getVariableChildCount(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i].getVariables().get("__SmoothCamera").getChild("ForecastHistoryX"))) - 1))), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i].getVariables().get("__SmoothCamera").getChild("ForecastHistoryY").getChild((gdjs.RuntimeObject.getVariableChildCount(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i].getVariables().get("__SmoothCamera").getChild("ForecastHistoryY"))) - 1))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.eventsList5(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2, gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects4);

{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ProjectHistoryEnds((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects4[i].getVariables().get("__SmoothCamera").getChild("ForecastHistoryY").getChild(0))), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects4[i].getVariables().get("__SmoothCamera").getChild("ForecastHistoryX").getChild(0))), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects4[i].getVariables().get("__SmoothCamera").getChild("ForecastHistoryY").getChild((gdjs.RuntimeObject.getVariableChildCount(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects4[i].getVariables().get("__SmoothCamera").getChild("ForecastHistoryY"))) - 1))), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects4[i].getVariables().get("__SmoothCamera").getChild("ForecastHistoryX").getChild((gdjs.RuntimeObject.getVariableChildCount(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects4[i].getVariables().get("__SmoothCamera").getChild("ForecastHistoryX"))) - 1))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2, gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects4);

{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIndex((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProjectedOldestX()));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setProjectedOldestX((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProjectedOldestY()));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setProjectedOldestY((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIndex()));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2, gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIndex((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProjectedNewestX()));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setProjectedNewestX((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProjectedNewestY()));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setProjectedNewestY((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIndex()));
}
}}

}


};gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.eventsList7(runtimeScene, eventsFunctionContext);
}


{



}


{



}


};gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects1, gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setForecastedX((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProjectedNewestX()) + ((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProjectedNewestX()) - (gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProjectedOldestX())) * (gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ForecastTimeRatio((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setForecastedY((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProjectedNewestY()) + ((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProjectedNewestY()) - (gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProjectedOldestY())) * (gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ForecastTimeRatio((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


{



}


};gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects1, gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs((( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastHistoryVarianceX())) >= Math.abs((( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastHistoryVarianceY())));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setForecastHistoryLinearA((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastHistoryCovariance()) / (gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastHistoryVarianceX()));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setForecastHistoryLinearB((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastHistoryMeanY()) - (gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastHistoryLinearA()) * (gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastHistoryMeanX()));
}
}
{ //Subevents
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects1, gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs((( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastHistoryVarianceX())) < Math.abs((( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastHistoryVarianceY())));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setForecastHistoryLinearA((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastHistoryCovariance()) / (gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastHistoryVarianceY()));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setForecastHistoryLinearB((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastHistoryMeanX()) - (gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastHistoryLinearA()) * (gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastHistoryMeanY()));
}
}
{ //Subevents
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.eventsList8(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.eventsList9(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.eventsList10(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.eventsList12 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects1, gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setForecastHistoryVarianceX(0);
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setForecastHistoryVarianceY(0);
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setForecastHistoryCovariance(0);
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIndex(0);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects1, gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2);


const repeatCount3 = (gdjs.RuntimeObject.getVariableChildCount(((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[0].getVariables()).get("__SmoothCamera").getChild("ForecastHistoryX")));
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {
gdjs.copyArray(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2, gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3);


let isConditionTrue_0 = false;
if (true)
{
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setForecastHistoryVarianceX(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastHistoryVarianceX() + (Math.pow((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3[i].getVariables().get("__SmoothCamera").getChild("ForecastHistoryX").getChild((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIndex())))) - (gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastHistoryMeanX()), 2)));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setForecastHistoryVarianceY(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastHistoryVarianceY() + (Math.pow((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3[i].getVariables().get("__SmoothCamera").getChild("ForecastHistoryY").getChild((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIndex())))) - (gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastHistoryMeanY()), 2)));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setForecastHistoryCovariance(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastHistoryCovariance() + (((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3[i].getVariables().get("__SmoothCamera").getChild("ForecastHistoryX").getChild((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIndex())))) - (gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastHistoryMeanX())) * ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3[i].getVariables().get("__SmoothCamera").getChild("ForecastHistoryY").getChild((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIndex())))) - (gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastHistoryMeanY()))));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIndex(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIndex() + (1));
}
}}
}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects1, gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs((( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastHistoryVarianceX())) < 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs((( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastHistoryVarianceY())) < 1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setForecastedX((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDelayedCenterX()));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setForecastedY((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDelayedCenterY()));
}
}}

}


{

/* Reuse gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects1, gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2);

{isConditionTrue_1 = (Math.abs((( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastHistoryVarianceX())) >= 1);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects1_1final.push(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects1, gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2);

{isConditionTrue_1 = (Math.abs((( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastHistoryVarianceY())) >= 1);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects1_1final.push(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects1_1final, gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects1);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.eventsList11(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.eventsList13 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.eventsList1(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.eventsList3(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.eventsList12(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.eventsList14 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setForecastedX((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDelayedCenterX()));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setForecastedY((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDelayedCenterY()));
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((gdjs.RuntimeObject.getVariableChildCount(((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects1[0].getVariables()).get("__SmoothCamera").getChild("ForecastHistoryTime"))) >= 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects1, gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2);

for (var i = 0, k = 0, l = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastHistoryDuration() > 0 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[k] = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects1_1final.push(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects1, gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2);

for (var i = 0, k = 0, l = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastTime() > 0 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[k] = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects1_1final.push(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects1_1final, gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects1);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.eventsList13(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPosition = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.GDObjectObjects5.length = 0;

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.UpdateForecastedPositionContext.eventsList14(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ProjectHistoryEndsContext = {};
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ProjectHistoryEndsContext.GDObjectObjects1= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ProjectHistoryEndsContext.GDObjectObjects2= [];


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ProjectHistoryEndsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ProjectHistoryEndsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ProjectHistoryEndsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ProjectHistoryEndsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setProjectedNewestX(((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("NewestX")) || 0 : 0) + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("NewestY")) || 0 : 0) - (gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ProjectHistoryEndsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastHistoryLinearB())) * (gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ProjectHistoryEndsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastHistoryLinearA())) / (1 + Math.pow((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ProjectHistoryEndsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastHistoryLinearA()), 2)));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ProjectHistoryEndsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ProjectHistoryEndsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setProjectedNewestY((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("NewestY")) || 0 : 0) + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("NewestX")) || 0 : 0) * (gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ProjectHistoryEndsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastHistoryLinearA()) - (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("NewestY")) || 0 : 0) + (gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ProjectHistoryEndsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastHistoryLinearB())) / (1 + Math.pow((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ProjectHistoryEndsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastHistoryLinearA()), 2)));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ProjectHistoryEndsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ProjectHistoryEndsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ProjectHistoryEndsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setProjectedOldestX(((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("OldestX")) || 0 : 0) + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("OldestY")) || 0 : 0) - (gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ProjectHistoryEndsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastHistoryLinearB())) * (gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ProjectHistoryEndsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastHistoryLinearA())) / (1 + Math.pow((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ProjectHistoryEndsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastHistoryLinearA()), 2)));
}
}{for(var i = 0, len = gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ProjectHistoryEndsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ProjectHistoryEndsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setProjectedOldestY((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("OldestY")) || 0 : 0) + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("OldestX")) || 0 : 0) * (gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ProjectHistoryEndsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastHistoryLinearA()) - (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("OldestY")) || 0 : 0) + (gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ProjectHistoryEndsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastHistoryLinearB())) / (1 + Math.pow((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ProjectHistoryEndsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastHistoryLinearA()), 2)));
}
}}

}


};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ProjectHistoryEnds = function(OldestX, OldestY, NewestX, NewestY, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "OldestX") return OldestX;
if (argName === "OldestY") return OldestY;
if (argName === "NewestX") return NewestX;
if (argName === "NewestY") return NewestY;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ProjectHistoryEndsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ProjectHistoryEndsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ProjectHistoryEndsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ForecastTimeRatioContext = {};
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ForecastTimeRatioContext.GDObjectObjects1= [];
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ForecastTimeRatioContext.GDObjectObjects2= [];


gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ForecastTimeRatioContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ForecastTimeRatioContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = -((( gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ForecastTimeRatioContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ForecastTimeRatioContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForecastTime())) / ((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ForecastTimeRatioContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ForecastTimeRatioContext.GDObjectObjects1[0].getVariables()).get("__SmoothCamera").getChild("ForecastHistoryTime").getChild(0))) - (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ForecastTimeRatioContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ForecastTimeRatioContext.GDObjectObjects1[0].getVariables()).get("__SmoothCamera").getChild("ForecastHistoryTime").getChild((gdjs.RuntimeObject.getVariableChildCount(((gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ForecastTimeRatioContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ForecastTimeRatioContext.GDObjectObjects1[0].getVariables()).get("__SmoothCamera").getChild("ForecastHistoryTime"))) - 1)))); }}}

}


};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ForecastTimeRatio = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ForecastTimeRatioContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ForecastTimeRatioContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera.prototype.ForecastTimeRatioContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}


gdjs.registerBehavior("SmoothCamera::SmoothCamera", gdjs.evtsExt__SmoothCamera__SmoothCamera.SmoothCamera);
