import icon from './icon.svg';
import createNodeProperty from './../../../../DTCD-SDK/utils/createNodeProperty';

export default class OilJunctionPPD {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'Соединение ppd',
      name: 'oil_junction_ppd',
      groups: ['ППД'],
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
      object_type: createNodeProperty({ expression: `"junctionpoint"`, title: 'Тип объекта' }),
      Name: createNodeProperty({ title: 'Название' }),
      res_P: createNodeProperty({ title: 'Расчетное давление, атм' }),
      res_T: createNodeProperty({ title: 'Расчетная температура, ℃' }),
      node_name: createNodeProperty({ title: 'Название ноды' }),
      node_id: createNodeProperty({ title: 'ИД ноды' }),
      Kind: createNodeProperty({ title: 'Тип граничного условия' }),
      Value: createNodeProperty({ title: 'Значение граничного условия' }),
      altitude: createNodeProperty({ title: 'Альтитуда, м' }),
      P: createNodeProperty({ title: 'Давление, атм' }),
      T: createNodeProperty({ title: 'Температура, ℃' }),
      IsSource: createNodeProperty({ title: 'Является ли источником' }),

      IsOutlet: createNodeProperty({ title: 'Является ли стоком' }),
      _pp_tag: createNodeProperty({}),
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
