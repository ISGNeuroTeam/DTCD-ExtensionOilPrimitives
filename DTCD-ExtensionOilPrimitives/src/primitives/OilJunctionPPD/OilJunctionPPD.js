import icon from './icon.svg';
import createProp from '../../utils/createProp';

export default class OilJunctionPPD {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'Соединение ppd',
      name: 'oil_junction_ppd',
      groups: ['ППД'],
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
      object_type: createProp(`"junctionpoint"`),
      Name: createProp(),
      res_P: createProp(),
      res_T: createProp(),
      node_name: createProp(),
      node_id: createProp(),
      Kind: createProp(),
      Value: createProp(),
      altitude: createProp(),
      P: createProp(),
      T: createProp(),
      IsSource: createProp(),
      IsOutlet: createProp(),
      _pp_tag: createProp(),
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
