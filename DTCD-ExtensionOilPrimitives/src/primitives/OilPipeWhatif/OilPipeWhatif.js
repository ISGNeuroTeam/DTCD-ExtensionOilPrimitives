import icon from './icon.svg';
import createNodeProperty from './../../../../DTCD-SDK/utils/createNodeProperty';

export default class OilPipeWhatif {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'Труба whatif',
      name: 'oil_pipe_whatif',
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
      object_type: createNodeProperty({ title: 'Тип объекта' }),
      Name: createNodeProperty({ title: 'Название' }),
      L: createNodeProperty({ title: 'Длина трубы, м' }),
      d: createNodeProperty({ title: 'Внешний диаметр трубы, мм' }),
      s: createNodeProperty({ title: 'Толщина стенки трубы, мм' }),
      uphillM: createNodeProperty({ title: 'Уклон трубы, м (положительное, если конец выше начала)' }),
      effectiveD: createNodeProperty({ title: 'Эффективный диаметр, мм' }),
      intD: createNodeProperty({ title: 'Внутренний диаметр трубы, м' }),
      node_id_start: createNodeProperty({ title: 'ИД ноды старта (для ребра-трубы)' }),
      node_id_end: createNodeProperty({ title: 'ИД ноды конца (для ребра-трубы)' }),
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
