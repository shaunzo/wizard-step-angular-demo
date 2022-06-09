export interface Step {
  index: number;
  number: number;
  text: string;
  active: boolean;
  hasNext: boolean;
  hasPrev: boolean;
}
