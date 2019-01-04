
export enum PlanType {
  PUBLIC,
  PRIVATE
}

export interface IPlan {
  planName: string;
  type: number;
  concurrentBuildNumber: number;
  maxBuildTime: number;
  buildsPerMonth: number;
  teamMembers: number;
}

export abstract class Plan {

  protected planName: string;
  protected type: PlanType;
  protected concurrentBuildNumber: number;
  protected maxBuildTime: number;
  protected buildsPerMonth: number;
  protected teamMembers: number;

  toJSON(): IPlan {
    return {
      planName: this.planName,
      type: this.type,
      concurrentBuildNumber: this.concurrentBuildNumber,
      maxBuildTime: this.maxBuildTime,
      buildsPerMonth: this.buildsPerMonth,
      teamMembers: this.teamMembers
    };
  }

  abstract clone(): Plan;

  setLimits(concurrentBuildNumber: number, buildsPerMonth: number, maxBuildTime: number, teamMembers: number): void {
    if (this.type != PlanType.PUBLIC ) {
      throw new Error('Plan is not public, limits are read only.');
    }
    this.concurrentBuildNumber = concurrentBuildNumber;
    this.buildsPerMonth = buildsPerMonth;
    this.maxBuildTime = maxBuildTime;
    this.teamMembers = teamMembers;
  }

}
