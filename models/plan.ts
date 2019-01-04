
export enum PlanType {
    PUBLIC,
    PRIVATE
  }
  
  export abstract class Plan {
  
    private _type: PlanType;
    private _concurrentBuildNumber: number;
    private 
  
    get type() {
      return this._type;
    }
  
    get isReadyOnly() {
      return this.type === PlanType.PRIVATE;
    }
  
  }
  