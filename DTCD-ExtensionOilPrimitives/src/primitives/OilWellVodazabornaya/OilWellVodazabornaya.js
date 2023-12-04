import icon from './icon.svg';
import createNodeProperty from './../../../../DTCD-SDK/utils/createNodeProperty';

export default class OilWellVodazabornaya {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'Скважина водозаборная',
      name: 'oil_well_vodazabornaya',
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
      object_type: createNodeProperty({ title: 'Тип объекта' }),
      T: createNodeProperty({ title: 'Температура, ℃' }),
      P: createNodeProperty({ title: 'Давление, атм' }),
      Q_m3_day: createNodeProperty({ title: 'Дебит, м3/сут' }),
      // query_res: createNodeProperty({}),
      Name: createNodeProperty({ title: 'Название' }),
      node_name: createNodeProperty({ title: 'Название ноды' }),
      node_id: createNodeProperty({ title: 'ИД ноды' }),
      Kind: createNodeProperty({ title: 'Тип граничного условия' }),
      Value: createNodeProperty({ title: 'Значение граничного условия' }),
      IsSource: createNodeProperty({ title: 'Является ли источником' }),
      VolumeWater: createNodeProperty({ title: 'Обводненность, %' }),
      perforation: createNodeProperty({ title: 'Глубина перфорации, м' }),
      pumpDepth: createNodeProperty({ title: 'Глубина насоса, м' }),
      model: createNodeProperty({ title: 'Модель насоса' }),
      frequency: createNodeProperty({ title: 'Частота, Гц' }),
      productivity: createNodeProperty({ title: 'Продуктивность, м3/сут/атм' }),
      predict_mode: createNodeProperty({ title: 'Режим работы' }),
      shtr_debit: createNodeProperty({ title: 'Дебит ШТР, м3/сут' }),
      K_pump: createNodeProperty({ title: 'Коэфф. подачи насоса' }),
      column_diameter_cond_mm: createNodeProperty({}),
      perf_absMark: createNodeProperty({}),
      nkt_diameter_mm: createNodeProperty({}),
      nkt_length_m: createNodeProperty({}),
      Plastovoe_davlenie_atm: createNodeProperty({ title: 'Пластовое давление, атм' }),
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
