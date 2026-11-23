import operationsDashboard from "./project-4-images/operations.dashboard.png";
import heroImg from "./project-4-images/hero.img.png";
import attendanceMeeting from "./project-4-images/attendance.meeting.png";
import employeeDirectory from "./project-4-images/employee.directory.png";
import fixedScopeModel from "./project-4-images/fixed.scope.model.png";
import shiftPlanning from "./project-4-images/shift.planning.png";

export const project4 = {
  id: 4,
  slug: "warehouse-workforce-platform",
  title: "Centralizing Workforce Operations Across 25+ Warehouses",
  category: "Business Analysis",
  shortDescription: "How I turned scattered HR spreadsheets across 25+ warehouses into one cloud platform for scheduling, attendance, overtime and compliance, with GenAI alerts that warn managers before certifications lapse.",
  publishDate: "2023-6-15",
  readTime: "4 min read",
  heroImage: heroImg,
  type: "internal" as const,

  sections: [
    {
      title: "The Problem: 25 Warehouses, 25 Ways of Tracking People",
      content: `
        Picture a logistics company with more than 25 warehouses. Every site managed its people in its own way: a separate HR system at one, a spreadsheet at another, and at most of them a weekly report someone built by hand.

        No one in leadership could answer basic questions quickly. How many people are short on Saturday's night shift? Which site is burning through overtime? Whose forklift certification expires next week?

        By the time the answers came back, the problem had usually already happened.

        The company was asked to build one cloud platform for its whole warehouse network. I worked on that team as the business analyst.
      `,
      image: {
        url: operationsDashboard,
        caption: "Project overview: one platform for scheduling, attendance, overtime and compliance across 25+ warehouses."
      }
    },
    {
      title: "My Role: Start With the People Doing the Work",
      content: `
        I owned the work between the client and our engineers. That covered discovery, requirements, prioritization, the roadmap, dashboards, the GenAI alerts, and the OKRs and KPIs we used to measure success.

        Before writing a single requirement, I interviewed HR leads, warehouse managers and shift supervisors across multiple sites. I asked each of them to walk me through a normal week. How do you build next week's schedule? What happens when someone calls in sick? How do you find out a certification is about to expire?

        Three patterns came up again and again:

        --> Rebuilding the same data: Attendance lived in one place, schedules in another and certifications in a third, so supervisors stitched them together by hand.

        --> Overtime was a surprise: Managers only saw it after the cost was already locked in.

        --> Compliance ran on memory: Renewals were caught by whoever happened to remember, so some slipped through.
      `
    },
    {
      title: "From Interviews to Requirements",
      content: `
        I turned those conversations into a business requirements document, user stories with clear acceptance criteria, and process maps showing how scheduling, attendance and compliance worked today and how they should work in the new platform.

        One requirement shaped the whole design: every warehouse needed its own view and controls, but leadership needed to see all of them in one place. That single need drove our location-level permissions, our role-based access and the way we structured the data.
      `
    },
    {
      title: "Being the Bridge Between Client and Engineering",
      content: `
        HR managers and .NET developers don't talk about problems the same way. A supervisor might say "I need to know who's short on Saturday." Engineering needs that as a rule: compare scheduled headcount to required headcount per shift, per site, and flag any gap over a threshold.

        Much of my week went to that translation. I ran weekly syncs with the client, turned their feedback into specs, and cleared up open questions before they turned into rework.
      `
    },
    {
      title: "Deciding What to Build First",
      content: `
        Discovery left us with a long list of feature requests. Building everything at once would have pushed launch back by months. I scored each request on business impact against engineering effort, then sorted them with the client into three groups:

        --> Must have at launch: A central employee database, attendance and overtime tracking, shift scheduling for each site, and role-based access.

        --> Should have, right after: Multi-site dashboards, leave and approval workflows, GenAI compliance alerts and document management.

        --> Later: Anything that didn't clearly connect to a problem we heard in discovery went to the backlog for a future phase.

        Saying "not yet" was the hardest part. What helped was tying every request back to the discovery findings. If a feature didn't improve staffing visibility, admin time or compliance, it waited.
      `
    },
    {
      title: "A Roadmap Built to Scale",
      content: `
        I helped build a phased roadmap so each release laid the groundwork for the next:

        1. Foundation
        A unified employee database, cloud setup on Azure and role-based access.

        2. Operations
        Scheduling, attendance, overtime and leave workflows.

        3. Insight
        Dashboards and reporting for each site and for the whole company.

        4. Intelligence
        Azure OpenAI compliance alerts with a manager review step.

        Because the platform was designed for many locations from day one, a new warehouse could be added through setup instead of new code.
      `,
      image: {
        url: fixedScopeModel,
        caption: "How I prioritized features, the phased roadmap, and the OKRs we tracked."
      }
    },
    {
      title: "Designing Dashboards People Would Actually Open",
      content: `
        I designed the dashboards around the questions managers asked in interviews, not around whatever data happened to be available. Each view had to answer one question in a few seconds:

        --> Are we staffed? Open shifts and staffing gaps for the next 7 days, worst first.

        --> Where is overtime building up? Overtime as a share of hours, by warehouse, against the target.

        --> Who's at risk on compliance? Certifications and training due in the next 7, 21 and 30 days.

        Site managers saw their own warehouse. Leadership saw all 25+ sites side by side.
      `,
      image: {
        url: employeeDirectory,
        caption: "Multi-location workforce dashboard (recreated with sample data): staffing gaps, overtime by site and AI compliance alerts."
      }
    },
    {
      title: "Adding GenAI to Compliance",
      content: `
        The compliance problem was a good fit for AI. The data already existed (employee records, certification dates, training requirements), but nobody had time to watch it.

        I defined the requirements for Azure OpenAI alerts. They scan workforce records for upcoming certification renewals and training deadlines, then write a plain-language alert a manager can act on. For example: "9 forklift certifications at one site expire next week, and 4 of those operators are on the weekend schedule."

        The AI makes suggestions and people make the decisions. Every alert goes to a manager for review before anyone is notified, and the scheduling screen flags anyone whose certification would lapse before their shift.
      `,
      image: {
        url: shiftPlanning,
        caption: "Shift scheduling screen (recreated with sample data), with a built-in check for certifications that would lapse before a shift."
      }
    },
    {
      title: "Measuring Success: OKRs & KPIs",
      content: `
        I set OKRs with the client before launch so we agreed on what "working" meant, and I reported progress to client leadership through our regular syncs.

        --> One source of workforce truth: Every warehouse running on the same platform.

        --> Less manual HR admin: Time HR and site teams spent building reports by hand.

        --> Real adoption: How many HR and site managers used the platform week to week.

        --> Staying ahead of compliance: The share of certifications and training renewed before they expired.

        --> Better staffing decisions: How quickly open shifts were filled.
      `
    },
    {
      title: "The Results",
      content: `
        The platform rolled out across the client's whole warehouse network, and HR teams and warehouse managers adopted it quickly for day-to-day work.

        --> One place for everything: Employee records, schedules, attendance and compliance now live in one system instead of scattered spreadsheets.

        --> Faster reporting: Reports come straight from the platform instead of being built by hand each week.

        --> Fewer compliance surprises: Managers hear about expiring certifications before they turn into a risk on the floor.
      `
    },
    {
      title: "Lessons Learned",
      content: `
        1. Data Problems Are Really Process Problems
        The spreadsheets weren't the issue. Each site had built its own process to cope without a shared system, and fixing that meant agreeing on one way of working before we wrote any code.

        2. Prioritization Is Easier When Everyone Shares the Same Evidence
        Tying every request to what we heard in discovery turned "no" into "not yet, and here's why."

        3. AI Earns Trust When People Stay in Control
        Managers adopted the alerts because they reviewed them, not because they ran automatically.
      `,
      image: {
        url: attendanceMeeting,
        caption: "Attendance tracking view (recreated with sample data)."
      }
    }
  ],

  impact: [
    "Rolled out one workforce platform across 25+ warehouses",
    "Replaced manual, site-by-site reporting with live dashboards",
    "Gave managers early warning on expiring certifications through GenAI alerts",
    "Made it possible to add a new warehouse through setup instead of new code"
  ],

  technologies: ["Angular", ".NET Core", "Microsoft SQL Server", "Microsoft Azure", "Azure OpenAI"],

  myRole: `
    As the Business Analyst on the team, I owned the work between the client and engineering: stakeholder interviews, requirements and documentation, feature prioritization, the long-term roadmap, dashboard design, requirements for the GenAI compliance alerts, and the OKRs and KPIs we used to measure success.
  `,
}