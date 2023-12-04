import icon from './icon.svg';
import createNodeProperty from './../../../../DTCD-SDK/utils/createNodeProperty';

export default class OilJunctionPointRaw {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'Соединение default',
      name: 'oil_junction_point_raw',
      groups: ['Нефтедобыча'],
    };
  }

  #yFiles;
  #size = [46, 46];

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
      T: createNodeProperty({ title: 'Температура, ℃' }),
      IsSource: createNodeProperty({ title: 'Является ли источником' }),
      VolumeWater: createNodeProperty({ title: 'Обводненность, %' }),
      IsOutlet: createNodeProperty({ title: 'Является ли стоком' }),
    };

    const initPorts = [
      {
        primitiveName: 'inoutPort',
        type: ['IN', 'OUT'],
        portPosition: { x: 0.5, y: 0.5 },
        properties: {
          status: createNodeProperty({}),
        },
      },
    ];

    instance.tag = { properties, initPorts }

    return instance;
  }
}
