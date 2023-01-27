import icon from './icon.svg';
import getCustomEdgeArrow from '../../utils/getCustomEdgeArrow';

export default class OilEdgeWater {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'Связь water',
      name: 'oil_edge_water',
      groups: ['Нефтедобыча'],
    };
  }

  #yFiles;
  #strokeColor = '#0099FF';

  constructor(yFiles) {
    this.#yFiles = yFiles.default;
  }

  create() {
    const { SimpleEdge, PolylineEdgeStyle } = this.#yFiles;

    const CustomEdgeArrow = getCustomEdgeArrow(this.#yFiles);

    const instance = new SimpleEdge();
    const arrow = new CustomEdgeArrow(this.#strokeColor);

    instance.style = new PolylineEdgeStyle({
      sourceArrow: arrow,
      stroke: `3px ${this.#strokeColor}`,
    });

    return instance;
  }
}
