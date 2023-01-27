import icon from './icon.svg';
import createProp from '../../utils/createProp';

export default class OilJunctionPoint {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'Соединение oil',
      name: 'oil_junction_point',
      groups: ['Нефтедобыча'],
    };
  }

  #yFiles;
  #size = [46, 46];

  constructor(yFiles) {
    this.#yFiles = yFiles.default;
  }

  create() {
    const { SimpleNode, Rect, ImageNodeStyle } = this.#yFiles;

    const instance = new SimpleNode();
    instance.layout = new Rect(0, 0, ...this.#size);
    instance.style = new ImageNodeStyle(icon);

    const properties = {
      object_type: createProp(),
      Name: createProp(),
      node_name: createProp(),
      node_id: createProp(),
      X: createProp(),
      Y: createProp(),
      Kind: createProp(),
      Value: createProp(),
      T: createProp(),
      IsSource: createProp(),
      VolumeWater: createProp(),
      IsOutlet: createProp(),
    };

    const initPorts = [
      {
        primitiveName: 'inoutPort',
        type: ['IN', 'OUT'],
        portPosition: { x: 0.5, y: 0.5 },
        properties: {
          status: createProp(),
        },
      },
    ];

    instance.tag = { properties, initPorts }

    return instance;
  }
}
