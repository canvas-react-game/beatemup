import { FC } from "react";

export function compose(...hocs: Function[]) {
    return function(WrappedComponent: FC) {
      return hocs.reduceRight((component, hoc) => hoc(component), WrappedComponent);
    }
} 