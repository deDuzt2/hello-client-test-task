declare module "*.svg?url" {
  const content: {
    src: string;
  };
  export default content;
}

declare module "*.svg" {
  import * as React from "react";
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
