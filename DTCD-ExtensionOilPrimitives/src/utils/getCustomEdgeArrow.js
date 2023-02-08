export default (yFiles) => {
  const {
    BaseClass,
    IArrow,
    IVisualCreator,
    IBoundsProvider,
    Rect,
    Point,
    SvgVisual,
    GeneralPath,
  } = yFiles;

  return class CustomEdgeArrow extends BaseClass(IArrow, IVisualCreator, IBoundsProvider) {
    #stroke = 'black';
    #arrowFigure = null;
    #anchor = Point.ORIGIN;
    #direction = Point.ORIGIN;

    constructor(stroke) {
      super();
      this.#stroke = stroke;
    }

    get arrowFigure() {
      return this.#arrowFigure;
    }

    set arrowFigure(value) {
      this.#arrowFigure = value;
    }

    get length() {
      return 0;
    }

    get cropLength() {
      return 0;
    }

    getVisualCreator(edge, atSource, anchor, direction) {
      this.#anchor = anchor;
      this.#direction = direction;
      return this;
    }

    getBounds(context) {
      return new Rect(this.#anchor.x - 8, this.#anchor.y - 8, 32, 32);
    }

    getBoundsProvider(edge, atSource, anchor, direction) {
      this.#anchor = anchor;
      this.#direction = direction;
      return this;
    }

    createVisual(context) {
      if (this.arrowFigure === null) {
        this.arrowFigure = new GeneralPath();
        this.arrowFigure.moveTo(new Point(10, 5));
        this.arrowFigure.lineTo(new Point(10, -5));
        this.arrowFigure.lineTo(new Point(23, 0));
        this.arrowFigure.close();
      }

      const path = this.arrowFigure.createSvgPath();
      const { x, y } = this.#direction;
      const { x: ax, y: ay } = this.#anchor;
      path.setAttribute('stroke', this.#stroke);
      path.setAttribute('fill', 'var(--background_main)');
      path.setAttribute('transform', `matrix(${-x} ${-y} ${y} ${-x} ${ax} ${ay})`);

      return new SvgVisual(path);
    }

    updateVisual(context, oldVisual) {
      return this.createVisual(context);
    }
  }
};
