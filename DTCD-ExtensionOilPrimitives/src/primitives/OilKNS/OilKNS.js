import icon from './icon.svg';
import createProp from '../../utils/createProp';

export default class OilKNS {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'КНС',
      name: 'oil_kns',
      groups: ['ППД'],
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
      object_type: createProp(`"kns"`),
      Name: createProp(),
      res_P: createProp(),
      res_T: createProp(),
      res_Q_m3_day: createProp(),
      VolumeWater: createProp(),
      node_name: createProp(),
      node_id: createProp(),
      Kind: createProp(`"P"`),
      Value: createProp("117"),
      P: createProp("100"),
      T: createProp(),
      Q_m3_day: createProp(),
      income_separated_water_flow_m3_day: createProp(),
      additional_income_water_flow_m3_day: createProp("0"),
      total_value_kg_sec: createProp(),
      _check: createProp(),
      Pumps_Outlet_Pressure_atm: createProp("117"),
      IsSource: createProp(),
      IsOutlet: createProp("true"),
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
