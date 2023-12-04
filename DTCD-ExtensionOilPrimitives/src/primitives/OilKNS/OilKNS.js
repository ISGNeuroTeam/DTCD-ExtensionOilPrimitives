import icon from './icon.svg';
import createNodeProperty from './../../../../DTCD-SDK/utils/createNodeProperty';

export default class OilKNS {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'КНС',
      name: 'oil_kns',
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
      object_type: createNodeProperty({ expression: `"kns"`, title: 'Тип объекта' }),
      Name: createNodeProperty({ title: 'Название' }),
      res_P: createNodeProperty({ title: 'Расчетное давление, атм' }),
      res_T: createNodeProperty({ title: 'Расчетная температура, ℃' }),
      res_Q_m3_day: createNodeProperty({ title: 'Расчетный дебит, м3/сут' }),
      VolumeWater: createNodeProperty({ title: 'Обводненность, %' }),
      node_name: createNodeProperty({ title: 'Название ноды' }),
      node_id: createNodeProperty({ title: 'ИД ноды' }),
      Kind: createNodeProperty({ expression: `"P"`, title: 'Тип граничного условия' }),
      Value: createNodeProperty({ expression: "117", title: 'Значение граничного условия' }),
      P: createNodeProperty({ expression: "100", title: 'Давление, атм' }),
      T: createNodeProperty({ title: 'Температура, ℃' }),
      Q_m3_day: createNodeProperty({ title: 'Дебит, м3/сут' }),
      income_separated_water_flow_m3_day: createNodeProperty({
        title: 'Объем сепарированной воды с ДНС, м3/сут',
      }),
      additional_income_water_flow_m3_day: createNodeProperty({
        expression: '0',
        title: 'Дополнительный объем  воды, м3/сут',
      }),
      total_value_kg_sec: createNodeProperty({ title: 'Общий поток, кг/сек' }),
      _check: createNodeProperty({}),
      Pumps_Outlet_Pressure_atm: createNodeProperty({
        expression: "117",
        title: 'Выходное давление на КНС, атм',
      }),
      IsSource: createNodeProperty({ title: 'Является ли источником' }),
      IsOutlet: createNodeProperty({ expression: "true", title: 'Является ли стоком' }),
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
