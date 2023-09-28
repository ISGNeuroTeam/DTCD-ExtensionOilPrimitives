import icon from './icon.svg';
import getCustomEdgeArrow from '../../utils/getCustomEdgeArrow';

export default class OilEdgeGas {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'Связь gas',
      name: 'oil_edge_gas',
      groups: ['Нефтедобыча'],
    };
  }

  #yFiles;
  #strokeColor = '#FFD200';

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
