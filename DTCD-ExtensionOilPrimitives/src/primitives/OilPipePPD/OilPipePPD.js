import icon from './icon.svg';
import createNodeProperty from './../../../../DTCD-SDK/utils/createNodeProperty';

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
      object_type: createNodeProperty({ expression: `"pipe"`, title: 'Тип объекта' }),
      Name: createNodeProperty({ title: 'Название' }),
      res_mass_flow_kg_sec: createNodeProperty({ title: 'Расчетный массовый поток, кг/сек' }),
      res_velocity_m_sec: createNodeProperty({ title: 'Расчетная скорость потока, м/сек' }),
      L: createNodeProperty({ title: 'Длина трубы, м' }),
      d: createNodeProperty({ title: 'Внешний диаметр трубы, мм' }),
      s: createNodeProperty({ title: 'Толщина стенки трубы, мм' }),
      effectiveD: createNodeProperty({ title: 'Эффективный диаметр, мм' }),
      intD: createNodeProperty({ title: 'Внутренний диаметр трубы, м' }),
      node_id_start: createNodeProperty({ title: 'ИД ноды старта (для ребра-трубы)' }),
      node_id_end: createNodeProperty({ title: 'ИД ноды конца (для ребра-трубы)' }),
      _pp_tag: createNodeProperty({}),
    };

    const initPorts = [
      {
        primitiveName: 'outPort1',
        type: 'OUT',
        portPosition: { x: 0.5, y: 1 },
        properties: {
          status: createNodeProperty({}),
        },
      },
      {
        primitiveName: 'inPort1',
        type: 'IN',
        portPosition: { x: 0.5, y: 0 },
        properties: {
          status: createNodeProperty({}),
        },
      },
    ];

    instance.tag = { properties, initPorts }

    return instance;
  }
}
