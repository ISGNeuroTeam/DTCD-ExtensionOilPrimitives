import icon from './icon.svg';
import createNodeProperty from './../../../../DTCD-SDK/utils/createNodeProperty';

export default class OilWellPPD {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'Скважина ППД',
      name: 'oil_well_ppd',
      groups: ['ППД'],
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
      object_type: createNodeProperty({ expression: `"injection_well"`, title: 'Тип объекта' }),
      res_P: createNodeProperty({ title: 'Расчетное давление, атм' }),
      res_T: createNodeProperty({ title: 'Расчетная температура, ℃' }),
      res_Q_m3_day: createNodeProperty({ title: 'Расчетный дебит, м3/сут' }),
      Q: createNodeProperty({}),
      choke_diam: createNodeProperty({ title: 'Диаметр штуцера, мм' }),
      padNum: createNodeProperty({ title: 'Номер куста' }),
      wellNum: createNodeProperty({ title: 'Номер скважины' }),
      altitude: createNodeProperty({ title: 'Альтитуда, м' }),
      zakachka: createNodeProperty({ title: 'Объем закачиваемой воды в ППД, м3/сут' }),
      node_name: createNodeProperty({ title: 'Название ноды' }),
      node_id: createNodeProperty({ title: 'ИД ноды' }),
      Kind: createNodeProperty({ expression: `"Q"`, title: 'Тип граничного условия' }),
      Value: createNodeProperty({
        expression: "this.zakachka * 1000 / 86400",
        title: 'Значение граничного условия',
      }),
      P: createNodeProperty({ title: 'Давление, атм' }),
      T: createNodeProperty({ title: 'Температура, ℃' }),
      Q_m3_day: createNodeProperty({ title: 'Дебит, м3/сут' }),
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
