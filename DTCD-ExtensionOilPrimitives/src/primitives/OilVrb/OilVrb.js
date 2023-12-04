import icon from './icon.svg';
import createNodeProperty from './../../../../DTCD-SDK/utils/createNodeProperty';

export default class OilVrb {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'Водораспределительный блок',
      name: 'oil_vrb',
      groups: ['ППД'],
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
      object_type: createNodeProperty({ expression: `"pad"`, title: 'Тип объекта' }),
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
        primitiveName: 'outPort1',
        type: 'OUT',
        portPosition: { x: 0.5, y: 1 },
        properties: {
          status: createNodeProperty({}),
        },
      },
      // {
      //   primitiveName: 'outPortIndication',
      //   type: 'OUT',
      //   portPosition: { x: 0.75, y: 1 },
      //   properties: {
      //     status: createNodeProperty({}),
      //   },
      // },
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
