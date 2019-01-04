import { User } from "./user";
import { Plan, IPlan } from "./plan";
import { PublicPlan } from "./public-plan";

export class App {
  name: string;
  user: User;
  plan: Plan;

  constructor(name: string, user: User, plan?: Plan) {
    this.name = name;
    this.user = user;
    this.plan = plan || new PublicPlan();
  }

  get limits(): IPlan {
    return this.plan.toJSON();
  }

  set limits(value: IPlan) {
    this.plan.setLimits(value.concurrentBuildNumber, value.buildsPerMonth, value.maxBuildTime, value.teamMembers);
  }

  inheritLimits() {
    this.plan = this.user.plan.clone();
  }

}
