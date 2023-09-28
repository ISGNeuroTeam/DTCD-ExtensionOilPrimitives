import icon from './icon.svg';
import createProp from '../../utils/createProp';

export default class OilPipe {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'Труба oil',
      name: 'oil_pipe',
      groups: ['Нефтедобыча'],
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
      uphillM: createProp(),
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
