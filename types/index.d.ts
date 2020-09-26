declare interface LoadNumberOptions {
  allowNaN?: boolean;
  allowInfinity?: boolean;
  defaultValue: number;
}

declare module "load-env-var" {
  export function loadNumber(name: string, options?: LoadNumberOptions): number;
}
