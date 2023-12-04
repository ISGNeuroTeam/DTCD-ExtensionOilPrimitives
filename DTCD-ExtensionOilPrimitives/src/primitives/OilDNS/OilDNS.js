import icon from './icon.svg';
import createNodeProperty from './../../../../DTCD-SDK/utils/createNodeProperty';

export default class OilDNS {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'ДНС',
      name: 'oil_dns',
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
      object_type: createNodeProperty({ expression: `"dns"`, title: 'Тип объекта' }),
      Name: createNodeProperty({ title: 'Название' }),
      res_P: createNodeProperty({ title: 'Расчетное давление, атм' }),
      res_T: createNodeProperty({ title: 'Расчетная температура, ℃' }),
      res_Q_m3_day: createNodeProperty({ title: 'Расчетный дебит, м3/сут' }),
      VolumeWater: createNodeProperty({ title: 'Обводненность, %' }),
      node_name: createNodeProperty({ title: 'Название ноды' }),
      node_id: createNodeProperty({ title: 'ИД ноды' }),
      Kind: createNodeProperty({ expression: `"P"`, title: 'Тип граничного условия' }),
      Value: createNodeProperty({ expression: "7", title: 'Значение граничного условия' }),
      P: createNodeProperty({ expression: "100", title: 'Давление, атм' }),
      T: createNodeProperty({ title: 'Температура, ℃' }),
      Q_m3_day: createNodeProperty({ title: 'Дебит, м3/сут' }),
      gas_factor_m3_m3: createNodeProperty({
        expression: "39",
        title: 'Газовый фактор, м3/м3',
      }),
      separated_water_flow_m3_day: createNodeProperty({
        expression: "this.res_Q_m3_day * this.res_watercut_percent / 100",
        title: 'Объем сепарированной воды на ДНС, м3/сут',
      }),
      production_oil_flow_m3_day: createNodeProperty({
        expression: "this.res_Q_m3_day - this.separated_water_flow_m3_day",
        title: 'Объем очищенной нефти на ДНС, м3/сут',
      }),
      separated_gas_flow_m3_day: createNodeProperty({
        expression: "this.production_oil_flow_m3_day * this.gas_factor_m3_m3",
        title: 'Объем сепарированного газа на ДНС, м3/сут',
      }),
      res_watercut_percent: createNodeProperty({ title: 'Расчетная обводненность %' }),
      Inlet_Pressure_atm: createNodeProperty({ title: 'Входное давление, атм' }),
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
