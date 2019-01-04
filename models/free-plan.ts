import { Plan, PlanType } from "./plan";

export class FreePlan extends Plan {
  planName = 'Free Plan';
  type = PlanType.PRIVATE
  concurrentBuildNumber = 1;
  maxBuildTime = 10;
  buildsPerMonth = 200;
  teamMembers = 2;

  clone(): Plan {
    return new FreePlan();
  }
}
