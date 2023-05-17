/** Represents a set of key value pairs associated with the current request actor */
export interface Session {
  get(key: string): any;
  set(key: string, value: any): void;
  delete(key: string): void;
}