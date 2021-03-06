import o3dapi from 'o3-dapi-core';
import o3dapiNeo from 'o3-dapi-neo';

o3dapi.initPlugins([o3dapiNeo]);

const {
  utils,
  openO3,
  onReady,
  setReactNativeOverrides,
  setNodeJSOverrides,
} = o3dapi;

export default {
  ...o3dapi.NEO,
  utils,
  openO3,
  onReady,
  setReactNativeOverrides,
  setNodeJSOverrides,
};
