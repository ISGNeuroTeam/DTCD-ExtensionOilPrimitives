import icon from './icon.svg';
import createProp from '../../utils/createProp';

export default class OilWellVodazabornaya {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'Скважина водозаборная',
      name: 'oil_well_vodazabornaya',
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
      object_type: createProp(),
      T: createProp(),
      P: createProp(),
      Q_m3_day: createProp(),
      query_res: createProp(),
      Name: createProp(),
      node_name: createProp(),
      node_id: createProp(),
      Kind: createProp(),
      Value: createProp(),
      IsSource: createProp(),
      VolumeWater: createProp(),
      perforation: createProp(),
      pumpDepth: createProp(),
      model: createProp(),
      frequency: createProp(),
      productivity: createProp(),
      predict_mode: createProp(),
      shtr_debit: createProp(),
      K_pump: createProp(),
      column_diameter_cond_mm: createProp(),
      perf_absMark: createProp(),
      nkt_diameter_mm: createProp(),
      nkt_length_m: createProp(),
      Plastovoe_davlenie_atm: createProp(),
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
