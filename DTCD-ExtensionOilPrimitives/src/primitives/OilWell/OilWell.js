import icon from './icon.svg';
import createProp from '../../utils/createProp';

export default class OilWell {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'Скважина',
      name: 'oil_well',
      groups: ['Нефтедобыча'],
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
      object_type: createProp(`"well"`),
      Name: createProp(),
      res_P: createProp(),
      res_T: createProp(),
      res_Q_m3_day: createProp(),
      LiquidDebit: createProp(),
      LiquidDensity: createProp(),
      VolumeWater: createProp(),
      perforation: createProp(),
      pumpDepth: createProp(),
      model: createProp(),
      productivity: createProp(),
      predict_mode: createProp(),
      shtr_debit: createProp(),
      K_pump: createProp(),
      frequency: createProp(),
      node_name: createProp(),
      node_id: createProp(),
      Kind: createProp(`"Q"`),
      Value: createProp(`this.LiquidDebit * this.LiquidDensity / 86400`),
      T: createProp(),
      P: createProp(),
      Q_m3_day: createProp(),
      IsSource: createProp(`true`),
      IsOutlet: createProp(),
      _pp_tag: createProp(),
      column_diameter_cond_mm: createProp(),
      perf_absMark: createProp(),
      nkt_diameter_mm: createProp(),
      nkt_length_m: createProp(),
      avg_freq: createProp(),
      max_freq: createProp(),
      min_freq: createProp(),
      work_time: createProp(),
      stop_time: createProp(),
      Pintk_min: createProp(),
      Pintk_max: createProp(),
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
