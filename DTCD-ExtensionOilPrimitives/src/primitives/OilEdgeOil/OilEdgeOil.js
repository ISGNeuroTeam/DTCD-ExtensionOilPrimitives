import icon from './icon.svg';
import getCustomEdgeArrow from '../../utils/getCustomEdgeArrow';

export default class OilEdgeOil {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'Связь oil',
      name: 'oil_edge_oil',
      groups: ['Нефтедобыча'],
    };
  }

  #yFiles;
  #strokeColor = '#58472E';

  constructor(yFiles) {
    this.#yFiles = yFiles;
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
