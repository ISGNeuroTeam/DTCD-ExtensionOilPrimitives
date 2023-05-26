import icon from './icon.svg';
import createProp from '../../utils/createProp';

export default class OilDNS {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'ДНС',
      name: 'oil_dns',
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
      object_type: createProp(`"dns"`),
      Name: createProp(),
      res_P: createProp(),
      res_T: createProp(),
      res_Q_m3_day: createProp(),
      VolumeWater: createProp(),
      node_name: createProp(),
      node_id: createProp(),
      X: createProp(),
      Y: createProp(),
      Kind: createProp(`"P"`),
      Value: createProp("7"),
      P: createProp("100"),
      T: createProp(),
      Q_m3_day: createProp(),
      gas_factor_m3_m3: createProp("39"),
      separated_water_flow_m3_day: createProp("this.res_Q_m3_day * this.res_watercut_percent / 100"),
      production_oil_flow_m3_day: createProp("this.res_Q_m3_day - this.separated_water_flow_m3_day"),
      separated_gas_flow_m3_day: createProp("this.production_oil_flow_m3_day * this.gas_factor_m3_m3"),
      res_watercut_percent: createProp(),
      Inlet_Pressure_atm: createProp(),
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
