import { Plan } from "./models/plan";
import { FreePlan } from "./models/free-plan";
import { PublicPlan } from "./models/public-plan";
import { DeveloperPlan } from "./models/developer-plan";
import { OrganizationPlan } from "./models/organization-plan";
import { User } from "./models/user";
import { App } from "./models/app";

export class PlanFactory {
  static createPlanByName(name: string): Plan {
    switch(name) {
      case 'Free Plan': {
        return new FreePlan();
      }
      case 'Public': {
        return new PublicPlan();
      }
      case 'Developer': {
        return new DeveloperPlan();
      }
      case 'Organization': {
        return new OrganizationPlan();
      }
      default: {
        throw new Error('Plan not found');
      }
    }
  }
}

export class UserFactory {
  static createUserWithPlan(username: string, planName: string): User {
    return new User(username, PlanFactory.createPlanByName(planName));
  }
}

export class Program {

  static createUserAccounts() {
    console.info('TEST#1 Creating plans');
    console.log("\n");
    const plans = ['Free Plan', 'Public', 'Developer', 'Organization'];

    plans.forEach((planName: string, i) => {
      console.log("Creating user with plan", planName);
      console.log(UserFactory.createUserWithPlan('username#' + i, planName).toJSON());
    });

    console.log("Throwing exception on Uknown plan");
    try {
      UserFactory.createUserWithPlan('test','uknown');
      console.error('No error');
    } catch(e) {
      console.log('Error thrown:', e.message);
    }
    console.log("\n");
    console.log('-----------------------');
    console.log("\n");
  }

  static createPublicAndPrivateAppForUser() {
    console.info('TEST#2 Creating public and private apps');
    console.log("\n");
    console.log('Creating user');
    const user = UserFactory.createUserWithPlan('username#1', 'Organization');
    console.log('User created', user.toJSON());
    console.log('Creating app');
    const app = new App('app#1', user);
    console.log('App created', app.name, app.limits.planName);
    console.log('Creating user');
    const user2 = UserFactory.createUserWithPlan('username#2', 'Organization');
    console.log('User created', user.toJSON());
    console.log('Creating app');
    const app2 = new App('app#2', user, new FreePlan());
    console.log('App created', app2.name, app2.limits.planName);
    console.log("\n");
    console.log('-----------------------');
    console.log("\n");
  }

  static setCustomLimitForPublicApp() {
    console.info('TEST#3 Setting custom limit for public app');
    console.log("\n");
    const user = UserFactory.createUserWithPlan('username#1', 'Organization');
    console.log('User created', user.toJSON());
    console.log('Creating app');
    const app = new App('app#1', user);
    console.log('App created', app.name, app.limits);
    console.log('Setting concurrent build number to 10');
    app.limits = {
      ...app.limits,
      concurrentBuildNumber: 10
    };
    console.log('App updated', app.name, app.limits);
    const user2 = UserFactory.createUserWithPlan('username#2', 'Organization');
    console.log('User created', user.toJSON());
    console.log('Creating app');
    const app2 = new App('app#2', user, new FreePlan());
    console.log('App created', app2.name, app2.limits.planName);
    console.log('Should throw on limit update');
    try {
      app2.limits = {
        ...app2.limits,
        concurrentBuildNumber: 10
      };
      console.error('No error');
    } catch(e) {
      console.log('Error thrown:', e.message);
    }
    console.log("\n");
    console.log('-----------------------');
    console.log("\n");
  }

  static upgradePlan() {
    console.info('TEST#4 Inheriting owners plan for app');
    console.log("\n");
    const user = UserFactory.createUserWithPlan('username#1', 'Organization');
    console.log('User created', user.toJSON());
    console.log('Creating app');
    const app = new App('app#1', user);
    console.log('App created', app.name, app.limits);
    app.inheritLimits();
    console.log('App limits inherited from user', app.name, app.limits);
    console.log("\n");
    console.log('-----------------------');
    console.log("\n");
  }

  static main(): void {
    this.createUserAccounts();
    this.createPublicAndPrivateAppForUser();
    this.setCustomLimitForPublicApp();
    this.upgradePlan();
  }

}

Program.main();
