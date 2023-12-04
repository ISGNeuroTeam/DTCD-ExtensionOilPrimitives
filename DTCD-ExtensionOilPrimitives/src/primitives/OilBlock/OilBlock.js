import icon from './icon.svg';
import createNodeProperty from './../../../../DTCD-SDK/utils/createNodeProperty';

export default class OilBlock {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'Объект',
      name: 'oil_block',
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
      object_type: createNodeProperty({ title: 'Тип объекта' }),
      Name: createNodeProperty({ title: 'Название' }),
      node_name: createNodeProperty({ title: 'Название ноды' }),
      node_id: createNodeProperty({ title: 'ИД ноды' }),
      Kind: createNodeProperty({ title: 'Тип граничного условия' }),
      Value: createNodeProperty({ title: 'Значение граничного условия' }),
      IsOutlet: createNodeProperty({ title: 'Является ли стоком' }),
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
        primitiveName: 'outPortIndication',
        type: 'OUT',
        portPosition: { x: 0.75, y: 1 },
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
