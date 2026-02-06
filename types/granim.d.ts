declare module 'granim' {
  interface GranimOptions {
    element: string;
    direction?: string;
    isPausedWhenNotInView?: boolean;
    image?: {
      source: string;
      blendingMode: string;
    };
    states: {
      [key: string]: {
        gradients: string[][];
        transitionSpeed?: number;
      };
    };
  }

  class Granim {
    constructor(options: GranimOptions);
    destroy(): void;
  }

  export default Granim;
}
