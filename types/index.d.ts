declare interface LoadNumberOptions {
  allowNaN?: boolean;
  allowInfinity?: boolean;
  defaultValue?: number;
}

declare interface LoadStringOptions {
  defaultValue?: number;
}

declare module "load-env-var" {
  export function loadNumber(name: string, options?: LoadNumberOptions): number;
  export function loadString(name: string, options?: LoadStringOptions): string;
}
