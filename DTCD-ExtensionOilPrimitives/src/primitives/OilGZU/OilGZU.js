import icon from './icon.svg';
import createProp from '../../utils/createProp';

export default class OilGZU {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'ГЗУ',
      name: 'oil_gzu',
      groups: ['Нефтедобыча'],
    };
  }

  #yFiles;
  #size = [148, 148];

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
      IsOutlet: createProp(),
    };

    const initPorts = [
      {
        primitiveName: 'outPort1',
        type: 'OUT',
        portPosition: { x: 0.5, y: 1 },
        properties: {
          status: createProp(),
        },
      },
      {
        primitiveName: 'outPortIndication',
        type: 'OUT',
        portPosition: { x: 0.75, y: 1 },
        properties: {
          status: createProp(),
        },
      },
      {
        primitiveName: 'inPort1',
        type: 'IN',
        portPosition: { x: 0.5, y: 0 },
        properties: {
          status: createProp(),
        },
      },
    ];

    instance.tag = { properties, initPorts }

    return instance;
  }
}
