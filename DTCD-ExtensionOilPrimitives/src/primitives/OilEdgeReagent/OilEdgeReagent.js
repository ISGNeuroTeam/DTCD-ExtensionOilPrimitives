import icon from './icon.svg';
import getCustomEdgeArrow from '../../utils/getCustomEdgeArrow';

export default class OilEdgeReagent {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'Связь reagent',
      name: 'oil_edge_reagent',
      groups: ['Нефтедобыча'],
    };
  }

  #yFiles;
  #strokeColor = '#E613DD';

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
