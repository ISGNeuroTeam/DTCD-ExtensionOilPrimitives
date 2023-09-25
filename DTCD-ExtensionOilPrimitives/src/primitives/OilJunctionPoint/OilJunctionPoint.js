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
      object_type: createProp(`"junctionpoint"`),
      Name: createProp(),
      res_P: createProp(),
      res_T: createProp(),
      VolumeWater: createProp(),
      node_name: createProp(),
      node_id: createProp(),
      Kind: createProp(),
      Value: createProp(),
      P: createProp(),
      T: createProp(),
      IsSource: createProp(),
      IsOutlet: createProp(),
      _pp_tag: createProp(),
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
      // {
      //   primitiveName: 'outPortIndication',
      //   type: 'OUT',
      //   portPosition: { x: 0.75, y: 1 },
      //   properties: {
      //     status: createProp(),
      //   },
      // },
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
