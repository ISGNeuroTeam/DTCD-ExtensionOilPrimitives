import icon from './icon.svg';
import createNodeProperty from './../../../../DTCD-SDK/utils/createNodeProperty';

export default class OilWell {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'Скважина',
      name: 'oil_well',
      groups: ['Нефтедобыча'],
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
      object_type: createNodeProperty({ expression: `"well"`, title: 'Тип объекта' }),
      Name: createNodeProperty({ title: 'Название' }),
      res_P: createNodeProperty({ title: 'Расчетное давление, атм' }),
      res_T: createNodeProperty({ title: 'Расчетная температура, ℃' }),
      res_Q_m3_day: createNodeProperty({ title: 'Расчетный дебит, м3/сут' }),
      LiquidDebit: createNodeProperty({ title: 'Дебит жидкости, м3/сут' }),
      LiquidDensity: createNodeProperty({ title: 'Плотность жидкости, кг/м3' }),
      VolumeWater: createNodeProperty({ title: 'Обводненность, %' }),
      perforation: createNodeProperty({ title: 'Глубина перфорации, м' }),
      pumpDepth: createNodeProperty({ title: 'Глубина насоса, м' }),
      model: createNodeProperty({ title: 'Модель насоса' }),
      productivity: createNodeProperty({ title: 'Продуктивность, м3/сут/атм' }),
      predict_mode: createNodeProperty({ title: 'Режим работы' }),
      shtr_debit: createNodeProperty({ title: 'Дебит ШТР, м3/сут' }),
      K_pump: createNodeProperty({ title: 'Коэфф. подачи насоса' }),
      frequency: createNodeProperty({ title: 'Частота, Гц' }),
      node_name: createNodeProperty({ title: 'Название ноды' }),
      node_id: createNodeProperty({ title: 'ИД ноды' }),
      Kind: createNodeProperty({ expression: `"Q"`, title: 'Тип граничного условия' }),
      Value: createNodeProperty({
        expression: `this.LiquidDebit * this.LiquidDensity / 86400`,
        title: 'Значение граничного условия',
      }),
      T: createNodeProperty({ title: 'Температура, ℃' }),
      P: createNodeProperty({ title: 'Давление, атм' }),
      Q_m3_day: createNodeProperty({ title: 'Дебит, м3/сут' }),
      IsSource: createNodeProperty({ expression: `true`, title: 'Является ли источником' }),
      IsOutlet: createNodeProperty({ title: 'Является ли стоком' }),
      _pp_tag: createNodeProperty({}),
      column_diameter_cond_mm: createNodeProperty({}),
      perf_absMark: createNodeProperty({}),
      nkt_diameter_mm: createNodeProperty({}),
      nkt_length_m: createNodeProperty({}),
      avg_freq: createNodeProperty({}),
      max_freq: createNodeProperty({}),
      min_freq: createNodeProperty({}),
      work_time: createNodeProperty({}),
      stop_time: createNodeProperty({}),
      Pintk_min: createNodeProperty({}),
      Pintk_max: createNodeProperty({}),
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
