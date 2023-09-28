import icon from './icon.svg';
import createProp from '../../utils/createProp';

export default class OilPad {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'Куст',
      name: 'oil_pad',
      groups: ['Нефтедобыча'],
    };
  }

  #yFiles;
  #size = [148, 148];

  constructor(yFiles) {
    this.#yFiles = yFiles;
  }

  create() {
    const { SimpleNode, Rect, ImageNodeStyle } = this.#yFiles;

    const instance = new SimpleNode();
    instance.layout = new Rect(0, 0, ...this.#size);
    instance.style = new ImageNodeStyle(icon);

    const properties = {
      object_type: createProp(`"pad"`),
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
      // Q_m3_day: createProp(),
      // otl_q_m3: createProp(),
      // query_res: createProp(),
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
