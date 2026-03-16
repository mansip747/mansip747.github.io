import crimeOverTime from "./project-6-images/crime_over_time.png";
import geoOffenseMap from "./project-6-images/geo_offense_map.png";
import victimMap from "./project-6-images/victim_map.png";
import top5Categories from "./project-6-images/top5_categories.png";
import districtAverage from "./project-6-images/district_average.png";
import districtRange from "./project-6-images/district_range.png";
import neighborhoodChart from "./project-6-images/neighborhood_chart.png";
import crimeTrends from "./project-6-images/crime_trends.png";
import safetyClassification from "./project-6-images/safety_classification.png";
import offenseByDistrict from "./project-6-images/offense_by_district.png";
import dashboardFinal1 from "./project-6-images/dashboard_final1.png";

export const project6 = {
  id: 6,
  slug: "denver-crime-visualization",
  title: "Illuminating Denver's Crime Landscape",
  category: "Data Analytics & Visualization",
  shortDescription: "How our team transformed 10,000+ crime incidents into an interactive Tableau dashboard that helps law enforcement make smarter, data-driven decisions about resource allocation.",
  publishDate: "2023-12-01",
  readTime: "8 min read",
  heroImage: dashboardFinal1,
  type: "internal" as const,

  sections: [
    {
      title: "The Challenge: Making Sense of Complex Crime Data",
      content: `
        As part of my Master's program in Information Technology at Arizona State University, I led a comprehensive data visualization project analyzing crime patterns in Denver, Colorado.

        The Denver crime dataset presented significant challenges due to its complexity and size. Spanning six years of criminal activities, the dataset contained over 10,000 incidents with 20 different attributes — ranging from geographic coordinates to offense types and victim counts.

        Our team needed to convert this raw data into meaningful visualizations that could answer critical questions about crime patterns, geographic distributions, and temporal trends — all in a way that law enforcement agencies could actually act on.
      `,
      image: {
        url: dashboardFinal1,
        caption: "The full 4-step project process — Dataset Selection, Schema Definition, User & Question Analysis, and Dashboard Plot Design."
      }
    },
    {
      title: "Who Is This For? Defining Our Users",
      content: `
        Before building a single chart, we asked: who needs this information and why?

        We identified two primary users:

        --> Denver Police Department: The DPD could use the dashboard to develop and implement targeted crime prevention strategies. For example, if the dashboard shows a spike in car thefts in a particular neighborhood, the DPD can deploy more officers to patrol and deter crime.

        --> Federal Bureau of Investigation: The FBI could use the dashboard to learn about the different demographic groups most likely to be affected by crime in Denver — informing broader national intelligence strategies.

        From these users, we derived 11 research questions that would drive every visualization decision we made.
      `
    },
    {
      title: "Visualization 1: How Does Crime Vary Throughout the Year?",
      content: `
        Our first question tackled temporal trends. Using a line chart with month on the x-axis and incident count on the y-axis, we revealed a clear seasonal pattern.

        Crime peaks sharply in August with 1,030 incidents — the highest point of the year — while December sees the lowest volume at just 642 incidents. The average line sits at approximately 845 incidents per month.

        This insight alone has direct operational value: law enforcement can anticipate summer surges and pre-position resources accordingly rather than reacting after the fact.
      `,
      image: {
        url: crimeOverTime,
        caption: "Crime Trends throughout 2017 — August peaks at 1,030 incidents while December drops to 642, revealing clear seasonal policing opportunities."
      }
    },
    {
      title: "Visualization 2: Where Are Crimes Happening?",
      content: `
        Geographic concentration was immediately visible when we plotted all 8,129 incidents on a Denver map, color-coded by offense type.

        The density is highest in the central Denver area — particularly around the Five Points, Capitol Hill, and East Colfax neighborhoods. Crimes thin out significantly toward the suburban periphery.

        Users can filter this map by offense type using a dropdown, instantly revealing which crime types cluster in which neighborhoods. Drug-related offenses show a very different geographic pattern than property crimes.
      `,
      image: {
        url: geoOffenseMap,
        caption: "Geographic offense map — 8,129 incidents plotted across Denver, color-coded by offense type with interactive filtering by category."
      }
    },
    {
      title: "Visualization 3: How Many Victims Are Impacted by Location?",
      content: `
        Moving beyond incident counts, we visualized victim impact geographically. Each dot on this map is sized proportionally to the number of victims at that location — making high-impact incidents immediately visible even if they represent a single incident.

        Users can adjust a victim count slider to filter for incidents above a certain threshold, helping law enforcement focus on the highest-impact locations first.

        The central Denver concentration remains, but this view reveals several outlier locations outside the urban core with surprisingly high victim counts per incident.
      `,
      image: {
        url: victimMap,
        caption: "Victim Counts by Location — dot size reflects total victims per incident, scaled from 2 up to 112, with an interactive threshold slider."
      }
    },
    {
      title: "Visualization 4: What Are the Top 5 Crime Categories?",
      content: `
        A bar chart with an interactive slider lets users dynamically define what counts as a "top" category. At the default setting, the top 5 are:

        --> Mischief: 2,780 incidents — by far the most common.
        --> Other: 2,407 incidents.
        --> Meth possession: 1,167 incidents.
        --> Paraphernalia possession: 1,058 incidents.
        --> Hallucinogen possession: 574 incidents.

        Drug possession offenses dominate three of the top five slots — a finding with significant implications for how the DPD allocates its resources between property crime and drug enforcement.
      `,
      image: {
        url: top5Categories,
        caption: "Top 5 Denver Crime Categories — mischief leads at 2,780 incidents, with drug possession offenses claiming 3 of the top 5 spots (highlighted in red)."
      }
    },
    {
      title: "Visualization 5: District-Level Crime Rates",
      content: `
        To help law enforcement understand district-level disparities, we built a bar chart showing incident counts per district with average, median, maximum, and minimum reference lines overlaid.

        The findings were striking:

        --> District 6 is the highest crime area with 2,616 incidents — nearly 4.5x the average of 1,451.
        --> District 7 had only 58 incidents — the safest by a wide margin.
        --> Districts 1, 2, 3, and 4 all cluster around or above the average line.

        This visualization makes it immediately clear which districts need more resources and which are already relatively safe.
      `,
      image: {
        url: districtAverage,
        caption: "Denver Crime Rates by District — with Maximum (2,616), Average (1,451), Median, and Minimum (58) reference lines overlaid for instant comparison."
      }
    },
    {
      title: "Visualization 6: District Crime Range Analysis",
      content: `
        A companion view to the district rates chart, this visualization focuses on the full range of crime values across districts — showing how far the outliers sit from the central tendency.

        The shaded band between median and average makes it visually obvious that Districts 5 and 7 are statistical outliers on the low end, while District 6 is a dramatic outlier on the high end.

        This range framing helps stakeholders understand not just who has the most crime, but how unusual the distribution actually is — which matters for resource allocation decisions.
      `,
      image: {
        url: districtRange,
        caption: "Denver District Crime Range — the shaded band highlights the median-to-average zone, making District 6's outlier status visually unmistakable."
      }
    },
    {
      title: "Visualization 9: Safety Classification by District",
      content: `
        Building on the district analysis, we classified all seven districts into three safety tiers using statistical thresholds:

        --> Not Safe: Districts 3 and 6 — above average by a significant margin, shown against an orange background.
        --> Safe: Districts 1, 2, and 4 — near the average, shown against a yellow background.
        --> Safest: Districts 5 and 7 — well below average, shown against a green background.

        This color-coded classification gives law enforcement and city planners a direct, actionable safety rating — no interpretation required.
      `,
      image: {
        url: safetyClassification,
        caption: "Denver District Safety Classification — color-coded zones (Not Safe / Safe / Safest) translate raw crime counts into immediate actionable tiers."
      }
    },
    {
      title: "Visualization 7: Top 5 Neighborhoods Most Affected",
      content: `
        Zooming in from districts to neighborhoods, an interactive bar chart reveals the most crime-affected communities.

        The top 5 neighborhoods are Five Points (845 incidents), Capitol Hill (604), East Colfax (467), Civic Center (385), and CBD (336) — all highlighted in red.

        The full chart shows all 78 neighborhoods ranked from most to least affected, giving community leaders granular insight into their specific area and enabling hyper-targeted resource deployment.
      `,
      image: {
        url: neighborhoodChart,
        caption: "Top 5 Denver Neighborhood Crime Counts — Five Points leads at 845 incidents, with the top 5 highlighted in red against the full neighborhood ranking."
      }
    },
    {
      title: "Visualization 8: Crime Trends by Category Over Time",
      content: `
        We explored how specific crime categories fluctuate month to month. Drug-alcohol offenses peak in August at 486 before dropping dramatically to 243 in December. Public disorder offenses follow a different pattern — peaking in June at 552 and remaining relatively elevated through the summer.

        These diverging seasonal patterns suggest that different crime types require different seasonal policing strategies — a nuance that aggregate crime statistics completely obscure.
      `,
      image: {
        url: crimeTrends,
        caption: "Denver Crime Trends by Category — drug-alcohol peaks in August while public disorder peaks in June, revealing category-specific seasonal patterns."
      }
    },
    {
      title: "Visualization 10: Offense Type by District",
      content: `
        Our most granular visualization shows the full offense type breakdown for each of the seven districts as a crosstab small multiples chart.

        While mischief and drug possession dominate everywhere, the relative mix shifts significantly by district. District 6 shows particularly high mischief (409) and meth possession (548) counts — suggesting a different crime profile than District 1 where mischief (480) and other offenses (390) dominate.

        This district-level breakdown enables the DPD to tailor enforcement priorities per district rather than applying a city-wide one-size-fits-all approach.
      `,
      image: {
        url: offenseByDistrict,
        caption: "Denver Offense Counts by District and Type — crosstab view revealing how the crime type mix differs across all 7 districts."
      }
    },
    {
      title: "Lessons Learned",
      content: `
        This project transformed my understanding of data visualization and its power to illuminate complex information.

        1. Start with the question, not the chart
        Every visualization decision flowed from a specific research question. This prevented us from building pretty but purposeless charts.

        2. Pre-attentive attributes are everything
        The difference between a chart people instantly understand and one they have to study comes down to thoughtful use of color, size, and position.

        3. Interactivity multiplies value
        Our four interactive visualizations generated far more insight than the seven static ones combined — users explored combinations we never anticipated.

        4. Data quality is non-negotiable
        Removing the redundant IS_TRAFFIC and IS_CRIME columns and handling the 50%+ missing values in LAST_OCCURRENCE was unglamorous work, but it was what made the entire analysis valid.

        5. Ethical responsibility matters
        Visualizing crime data carries real risk of reinforcing negative perceptions of specific neighborhoods. We were deliberate about framing our insights as resource allocation tools, not neighborhood rankings.
      `
    },
    {
      title:"Conclusion",
      content: `
      This project transformed my understanding of data visualization and its power to illuminate complex information. By converting raw crime data into intuitive, interactive visualizations, we created a resource that could potentially help law enforcement agencies make more informed decisions about resource allocation and crime prevention.
      Beyond the technical skills gained in Tableau and data preprocessing, I developed a deeper appreciation for the art and science of visual communication. The project reinforced that effective data visualization is not just about creating attractive charts—it's about thoughtfully transforming data into actionable insights that can drive meaningful decisions.
      As I continue my career in technology, the lessons learned from this project—particularly around data quality, visualization principles, and user-centered design—will remain invaluable assets in my professional toolkit.
      `
    }
  ],

  impact: [
    "11 visualizations answering distinct law enforcement research questions",
    "District 6 identified as highest crime area with 2,616 incidents",
    "August peak (1,030 incidents) vs December low (642) revealed for resource planning",
    "Five Points, Capitol Hill, East Colfax identified as top 3 affected neighborhoods",
    "7 districts classified into actionable safety tiers for DPD use"
  ],

  technologies: ["Tableau", "Python", "Pandas", "SQL", "Excel", "NIBRS Data", "Geographic Mapping", "Interactive Dashboards"],

  myRole: `
    Led a four-person team as project lead for the Denver Crime Data Visualization project in EEE554 at Arizona State University. Responsible for dataset selection, data preprocessing pipeline, Tableau dashboard architecture, and overall project coordination. Personally built the SQL validation queries and the safety classification visualization. Presented final findings to faculty and peers.
  `
};