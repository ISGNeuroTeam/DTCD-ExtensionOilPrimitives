import primitives from './primitives';
import pluginMeta from './Plugin.Meta';

import { ExtensionPlugin } from './../../DTCD-SDK';

export class ExtensionOilPrimitives extends ExtensionPlugin {
  static getRegistrationMeta() {
    return pluginMeta;
  }

  static getExtensionInfo() {
    return primitives.map(PrimitiveClass => {
      const primitiveInfo = PrimitiveClass.getPrimitiveInfo();
      primitiveInfo.extensionName = this.getRegistrationMeta().name;
      primitiveInfo.primitiveName = primitiveInfo.name;
      return primitiveInfo;
    });
  }

  primitives = {};

  constructor() {
    super();

    const yFiles = this.getDependence('yFiles');

    primitives.forEach(PrimitiveClass => {
      const { name } = PrimitiveClass.getPrimitiveInfo();
      this.primitives[name] = PrimitiveClass.bind(null, yFiles);
    });
  }
}
