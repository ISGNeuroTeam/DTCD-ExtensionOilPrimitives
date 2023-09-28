import icon from './icon.svg';
import createProp from '../../utils/createProp';

export default class OilWellPPD {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'Скважина ППД',
      name: 'oil_well_ppd',
      groups: ['ППД'],
    };
  }

  #yFiles;
  #size = [80, 148];

  constructor(yFiles) {
    this.#yFiles = yFiles;
  }

  create() {
    const { SimpleNode, Rect, ImageNodeStyle } = this.#yFiles;

    const instance = new SimpleNode();
    instance.layout = new Rect(0, 0, ...this.#size);
    instance.style = new ImageNodeStyle(icon);

    const properties = {
      object_type: createProp(`"injection_well"`),
      res_P: createProp(),
      res_T: createProp(),
      res_Q_m3_day: createProp(),
      Q: createProp(),
      choke_diam: createProp(),
      padNum: createProp(),
      wellNum: createProp(),
      altitude: createProp(),
      zakachka: createProp(),
      node_name: createProp(),
      node_id: createProp(),
      Kind: createProp(`"Q"`),
      Value: createProp("this.zakachka * 1000 / 86400"),
      P: createProp(),
      T: createProp(),
      Q_m3_day: createProp(),
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
