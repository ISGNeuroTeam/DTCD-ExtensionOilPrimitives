import icon from './icon.svg';
import createProp from '../../utils/createProp';

export default class OilPipePPD {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'Труба ppd',
      name: 'oil_pipe_ppd',
      groups: ['ППД'],
    };
  }

  #yFiles;
  #size = [80, 80];

  constructor(yFiles) {
    this.#yFiles = yFiles;
  }

  create() {
    const { SimpleNode, Rect, ImageNodeStyle } = this.#yFiles;

    const instance = new SimpleNode();
    instance.layout = new Rect(0, 0, ...this.#size);
    instance.style = new ImageNodeStyle(icon);

    const properties = {
      object_type: createProp(`"pipe"`),
      Name: createProp(),
      res_mass_flow_kg_sec: createProp(),
      res_velocity_m_sec: createProp(),
      L: createProp(),
      d: createProp(),
      s: createProp(),
      effectiveD: createProp(),
      intD: createProp(),
      node_id_start: createProp(),
      node_id_end: createProp(),
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
