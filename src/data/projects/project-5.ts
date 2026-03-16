import heroImagep5 from "./project-5-images/hero_image_p5.png";
// import datasetOverview from "./project-5-images/dataset_overview.png";
// import logregResults from "./project-5-images/logreg_results.png";
// import svmResults from "./project-5-images/svm_results.png";
// import cnnResults from "./project-5-images/cnn_results.png";
// import confusionMatrix from "./project-5-images/confusion_matrix.png";
// import pcaResults from "./project-5-images/pca_results.png";
// import finalComparison from "./project-5-images/final_comparison.png";
// import researchPaper from "./project-5-images/EEE549_FinalProject.pdf";

export const project5 = {
  id: 5,
  slug: "statistical-machine-learning",
  title: "From Theory to Practice: Statistical Machine Learning",
  category: "Research & Analytics",
  shortDescription: "How our team implemented, optimized, and compared four machine learning model classes across three real-world datasets — and what the results taught us about the art of statistical learning.",
  publishDate: "2024-05-10",
  readTime: "10 min read",
  heroImage: heroImagep5, 
  type: "internal" as const,

  // Highlighted keywords for the about-section style rendering
  highlights: [
    "Logistic Regression",
    "Support Vector Machines",
    "Neural Networks",
    "PCA + k-NN",
    "Fashion MNIST",
    "Wisconsin Breast Cancer",
    "UCI Adult Dataset",
    "hyperparameter tuning",
    "cross-validation",
    "regularization",
    "99.12% accuracy",
    "statistical learning",
  ],

  sections: [
    {
      title: "The Challenge Before Us",
      content: `
        It was the final semester of my Master's program, and the capstone project for our Statistical Machine Learning course loomed large on the horizon. Professor Sankar had a reputation for challenging assignments, but this one was particularly ambitious: implement, optimize, and compare four different machine learning model classes across three diverse datasets, all within an eight-week timeframe.

        The complexity was clear from day one. We needed to build a comprehensive machine learning pipeline that would showcase not just our technical skills, but our ability to extract meaningful insights from data using statistical learning principles. The stakes were high — this project would account for 40% of our final grade and serve as a portfolio piece for future job applications.
      `,
      // image: { url: heroChart, caption: "Overview of our four model classes and three datasets." }
    },
    {
      title: "Assembling the Dream Team",
      content: `
        Given the project's scope, I knew team composition would be crucial. I reached out to Mansi, whose meticulous attention to detail and strong mathematical background would be invaluable for implementing complex algorithms. Abhinav, with his deep neural network expertise and previous research experience, was my next call. Together, we formed a three-person team with complementary skills and a shared commitment to excellence.

        As the designated team lead, my responsibilities extended beyond technical contributions. I needed to coordinate our efforts, establish clear communication channels, manage deadlines, and ensure we maintained a cohesive vision throughout the project lifecycle.
      `
    },
    {
      title: "Understanding the Problem Space",
      content: `
        Our project required implementing four distinct model classes:

        --> Logistic Regression: Both with and without regularization techniques (L1 and L2).

        --> Support Vector Machines: Exploring both linear and non-linear kernel approaches.

        --> PCA + k-Nearest Neighbors: Combining dimensionality reduction with instance-based learning.

        --> Neural Networks: Implementing both feedforward (FNN) and convolutional (CNN) architectures.

        We applied these models to three datasets representing different real-world challenges:

        --> UCI Adult Dataset: A tabular dataset with mixed numerical and categorical features. Task: predict whether an individual's income exceeds $50,000 based on census data.

        --> Wisconsin Breast Cancer Dataset: A medical dataset with 30 features describing cellular characteristics. Task: classify tumors as malignant or benign.

        --> Fashion MNIST: A large-scale image dataset containing 70,000 grayscale images across 10 clothing categories. Task: accurately classify clothing items from pixel data.
      `,
      // image: { url: datasetOverview, caption: "Three datasets, three different challenges — tabular, medical, and image data." }
    },
    {
      title: "Dividing and Conquering",
      content: `
        Our first team meeting was dedicated to project planning. We mapped out responsibilities, established weekly milestones, and created a shared repository for code and documentation. We divided labor to play to our individual strengths:

        --> Javier focused on implementing and optimizing the SVM models across all datasets.

        --> Abhinav tackled the neural network implementations, including both FNN and CNN architectures.

        --> I handled Logistic Regression and PCA + k-NN models, while coordinating the overall project and ensuring consistency across implementations.

        We established a standardized approach to model evaluation — including cross-validation strategies, performance metrics, and visualization techniques — to allow for fair comparisons across different model classes.
      `
    },
    {
      title: "Data Preprocessing Challenges",
      content: `
        Our first hurdle appeared immediately: the datasets required significantly different preprocessing approaches.

        The UCI Adult dataset contained missing values and categorical features that needed encoding. The Breast Cancer dataset, while cleaner, required careful normalization to ensure that features with larger scales didn't dominate the models. The Fashion MNIST dataset presented the challenge of efficiently handling high-dimensional image data.

        I developed a preprocessing pipeline that standardized numerical features, encoded categorical variables using one-hot encoding, and handled missing values through imputation. For the image data, we implemented normalization and explored dimensionality reduction techniques to make the computational load manageable.
      `
    },
    {
      title: "Implementation and Optimization",
      content: `
        As we moved into implementation, the complexity became even more apparent. Each model class required careful consideration of hyperparameters and optimization strategies.

        For Logistic Regression, I experimented with different regularization strengths (L1 and L2) and solver algorithms, finding the right balance between model complexity and generalization ability.

        Javier encountered difficulties with SVM implementations, particularly when applying kernel methods to larger datasets. We collaborated on implementing efficient kernel approximation techniques using the RBF Sampler, which significantly reduced computation time while maintaining performance.

        Abhinav faced challenges with neural network architecture design for the CNN models on Fashion MNIST. After several iterations and late-night debugging sessions, he developed a robust architecture with convolutional layers, batch normalization, and dropout regularization that achieved impressive accuracy.
      `,
      // image: { url: svmResults, caption: "SVM kernel approximation results across datasets — RBF Sampler vs. full kernel." }
    },
    {
      title: "Cross-Validation and Hyperparameter Tuning",
      content: `
        One of our most significant technical challenges was implementing efficient hyperparameter tuning across all models. With multiple hyperparameters per model and the need for cross-validation, the computational requirements quickly became daunting.

        We developed a grid search approach with 5-fold cross-validation, carefully selecting hyperparameter ranges based on domain knowledge and preliminary experiments. To manage computational resources, we implemented parallel processing where possible and used strategic sampling for initial hyperparameter exploration.

        The results were illuminating. For the Breast Cancer dataset, logistic regression with L1 regularization and a relatively small regularization strength (alpha = 0.001) consistently outperformed more complex models — reinforcing the principle that simpler models often work better for smaller, well-structured datasets.
      `,
      // image: { url: logregResults, caption: "Logistic Regression with L1 regularization — validation curves across regularization strengths." }
    },
    {
      title: "Overcoming Obstacles",
      content: `
        1. Computational Limitations
        About midway through the project, training the neural network models on Fashion MNIST was taking prohibitively long on our personal computers. After exploring several options, we secured access to the university's high-performance computing cluster, which dramatically accelerated our training times. This taught us an important lesson about planning for computational resources in machine learning projects.

        2. Integration Challenges
        As we approached our integration deadline, we discovered inconsistencies in how each team member had implemented performance metrics and visualization routines. I organized an emergency team meeting where we standardized our evaluation framework and refactored our code to ensure consistent metrics. This experience highlighted the importance of establishing clear coding standards at the project's outset.

        3. Balancing Depth and Breadth
        With four model classes and three datasets, we struggled to find the right balance between exploring each model in depth and ensuring comprehensive coverage. After consulting with our professor, we decided to focus our deepest analysis on the most promising model-dataset pairs, while still providing baseline implementations for all combinations.
      `
    },
    {
      title: "Results: Dataset-Specific Findings",
      content: `
        Wisconsin Breast Cancer Dataset:
        --> Logistic Regression with L1 regularization achieved remarkable 99.12% accuracy.
        --> SVM models performed admirably at 96.5% accuracy.
        --> Neural networks demonstrated excellent performance with AUC scores of 0.99.
        --> The simplicity of the dataset favored less complex models, with logistic regression offering the best balance of performance and interpretability.

        UCI Adult Dataset:
        --> All models achieved similar performance in the 83–85% accuracy range.
        --> Logistic Regression without regularization slightly edged out other approaches at 85.03% accuracy.
        --> Feature importance analysis revealed that education level, age, and hours-per-week were the most predictive features.

        Fashion MNIST Dataset:
        --> CNN models excelled with 86% accuracy, particularly distinguishing between similar clothing items like shirts and t-shirts.
        --> Traditional models performed surprisingly well — SVM with kernel approximation reached 81.7% accuracy.
        --> PCA + k-NN with 20 principal components achieved 85% accuracy, demonstrating the effectiveness of dimensionality reduction.
        --> Confusion matrices revealed that certain classes (shirts vs. t-shirts) remained challenging for all models.
      `,
      // image: { url: confusionMatrix, caption: "Fashion MNIST confusion matrix — CNN model performance across all 10 clothing categories." }
    },
    {
      title: "Cross-Cutting Insights",
      content: `
        Our comparative analysis yielded several important insights:

        --> No Universal Winner: No single model class dominated across all datasets, reinforcing the "no free lunch" theorem in machine learning.

        --> Preprocessing Impact: The quality of preprocessing and feature engineering often had a greater impact on performance than the choice of model architecture.

        --> Regularization Benefits: Across almost all models and datasets, appropriate regularization improved generalization performance, particularly for smaller datasets.

        --> Computational Tradeoffs: More complex models like neural networks offered marginal improvements in accuracy but at significantly higher computational costs for certain datasets.

        --> Interpretability Considerations: For the medical dataset, the interpretability of logistic regression provided additional value beyond raw accuracy metrics.
      `,
      // image: { url: finalComparison, caption: "Final model comparison across all three datasets — accuracy, AUC, and computational cost." }
    },
    {
      title: "Lessons Learned",
      content: `
        Technical Lessons:

        --> Systematic Approach Matters: Our structured approach to hyperparameter tuning and evaluation was crucial for making valid comparisons across models.

        --> Start Simple: Beginning with simpler models provided valuable baselines and often revealed insights that informed more complex implementations.

        --> Visualization is Key: Effective visualization of model performance and behavior was essential for understanding tradeoffs and communicating results.

        --> Computational Planning: Anticipating computational requirements and planning accordingly can prevent significant delays in machine learning projects.

        Teamwork and Leadership Lessons:

        --> Clear Communication: Regular check-ins and standardized documentation were essential for maintaining alignment across team members.

        --> Playing to Strengths: Assigning responsibilities based on individual strengths while ensuring knowledge sharing led to better overall results.

        --> Balance Oversight with Autonomy: I learned to provide guidance and maintain standards while giving team members the freedom to explore creative solutions.
      `
    },
    {
      title: "Beyond the Classroom",
      content: `
        The impact of this project extended beyond our final grade — which, I'm proud to say, was an A.

        Javier went on to apply her SVM expertise in a healthcare analytics role, developing models for early disease detection. Abhinav leveraged his neural network experience to secure a position at a leading AI research lab. I've incorporated the systematic approach to model evaluation and selection in my work as a product manager, helping bridge the gap between data science teams and business stakeholders.

        Perhaps most importantly, this project transformed my understanding of machine learning from a collection of algorithms to a systematic approach for solving real-world problems. It taught me that successful machine learning is as much about asking the right questions and understanding data as it is about implementing sophisticated models.
      `
    }
  ],

  impact: [
    "99.12% accuracy on Wisconsin Breast Cancer Dataset with Logistic Regression",
    "86% CNN accuracy on Fashion MNIST image classification",
    "85% PCA + k-NN accuracy using only 20 principal components",
    "5-fold cross-validation across all 4 model classes and 3 datasets",
    "Final grade: A — project used as a portfolio piece"
  ],

  technologies: [
    "Python", "scikit-learn", "TensorFlow", "Keras", "NumPy", "Pandas",
    "Matplotlib", "Seaborn", "HPC Cluster", "Grid Search CV", "PCA", "SVM", "CNN"
  ],

  myRole: `
    Served as team lead for a three-person group in EEE549 Statistical Machine Learning. Led implementation of Logistic Regression and PCA + k-NN models, coordinated project planning and weekly milestones, standardized the evaluation framework across all team members, and presented final results to faculty. Also managed integration of all model outputs into a unified comparative analysis.
  `,

  testimonial: {
    quote: "Successful machine learning is as much about asking the right questions and understanding your data as it is about implementing sophisticated models.",
    author: "Maansi Patel",
    role: "EEE549 Statistical Machine Learning, ASU",
  },

  paperLink: {
    label: "Read the Full Research Paper",
    url: "/Patel-PerezTorres-Rawat_EEE549_FinalProject.pdf"
  }
}
