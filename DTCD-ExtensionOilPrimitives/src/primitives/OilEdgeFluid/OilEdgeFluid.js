import icon from './icon.svg';
import getCustomEdgeArrow from './../../utils/getCustomEdgeArrow';

export default class OilEdgeFluid {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'Связь fluid',
      name: 'oil_edge_fluid',
      groups: ['Нефтедобыча'],
    };
  }

  #yFiles;
  #strokeColor = '#606060';

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
