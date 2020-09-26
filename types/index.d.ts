declare interface LoadNumberOptions {
  allowNaN?: boolean;
  allowInfinity?: boolean;
}

declare module "load-env-var" {
  export function loadNumber(
    name: string,
    defaultValue?: undefined,
    options?: LoadNumberOptions
  ): number;
}
