import { Plan } from "./plan";

export class User {

  username: string;
  plan: Plan

  constructor(username: string, plan: Plan) {
    this.username = username;
    this.plan = plan;
  }

  toJSON(): any {
    return {
      username: this.username,
      plan: this.plan.toJSON()
    };
  }

}
