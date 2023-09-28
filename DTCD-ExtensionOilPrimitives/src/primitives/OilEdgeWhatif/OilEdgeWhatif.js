import icon from './icon.svg';
import getCustomEdgeArrow from '../../utils/getCustomEdgeArrow';

export default class OilEdgeWhatif {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'Связь whatif',
      name: 'oil_edge_whatif',
      groups: ['Нефтедобыча'],
    };
  }

  #yFiles;
  #strokeColor = '#11E00D';

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
