declare interface LoadNumberOptions {
  allowNaN?: boolean;
  allowInfinity?: boolean;
  defaultValue?: number;
}

declare interface LoadStringOptions {
  defaultValue?: string;
}

declare interface LoadArrayOptions {
  /* Item types of array elements */
  type?: "string" | "number";
  /* Default value is "," */
  delimiter?: string;
}

declare module "load-env-var" {
  export function loadNumber(name: string, options?: LoadNumberOptions): number;
  export function loadString(name: string, options?: LoadStringOptions): string;
  export function loadArray(name: string, options?: LoadArrayOptions): any[];
}
