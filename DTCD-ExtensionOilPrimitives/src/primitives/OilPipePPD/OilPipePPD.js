import icon from './icon.svg';
import createProp from '../../utils/createProp';

export default class OilPipePPD {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'Труба ppd',
      name: 'oil_pipe_ppd',
      groups: ['Нефтедобыча'],
    };
  }

  #yFiles;
  #size = [80, 80];

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
      L: createProp(),
      d: createProp(),
      s: createProp(),
      uphillM: createProp(),
      effectiveD: createProp(),
      intD: createProp(),
      node_id_start: createProp(),
      node_id_end: createProp(),
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
