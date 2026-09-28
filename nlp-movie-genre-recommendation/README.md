# 🎬 Intelligent Movie Genre Classification & Recommendation System

### A Natural Language Processing and Machine Learning Approach

This project develops an intelligent movie analysis system that uses **movie descriptions** to predict their possible genres and recommend similar movies from the dataset.

The system combines **Natural Language Processing (NLP)**, **TF-IDF feature extraction**, **multi-label classification**, and **cosine similarity** to perform both genre prediction and content-based movie recommendation.

---

## 📌 Project Overview

Given a movie description, the system performs two main tasks:

1. **Genre Classification** – Predicts one or more genres that best describe the movie.
2. **Movie Recommendation** – Finds existing movies in the dataset whose descriptions are most similar to the given description.

### Overall Workflow

```text
Movie Description
        │
        ▼
Text Preprocessing
        │
        ▼
TF-IDF Feature Extraction
        │
        ├──────────────────┐
        ▼                  ▼
Genre Classification   Cosine Similarity
        │                  │
        ▼                  ▼
Predicted Genres      Similar Movies
        │                  │
        └────────┬─────────┘
                 ▼
          Final Movie Analysis
```

---

## 🎯 Objectives

- Clean and preprocess movie descriptions.
- Analyze the distribution of movie genres.
- Convert textual descriptions into numerical features using TF-IDF.
- Perform multi-label movie genre classification.
- Evaluate the classification model using appropriate metrics.
- Compare a new movie description with existing movies.
- Recommend similar movies using cosine similarity.
- Build a combined movie genre prediction and recommendation system.

---

## 🗂️ Dataset

The dataset contains information related to movies, including attributes such as:

| Column | Description |
|---|---|
| `movie title - year` | Movie title and year information |
| `genre` | Genre information |
| `expanded-genres` | Expanded/multiple genre labels |
| `rating` | Movie rating where available |
| `description` | Movie plot/description |

The **movie description** is the primary textual input used for NLP processing.

---

## 🧠 Methodology

### 1. Text Preprocessing

Movie descriptions are cleaned before being used by the machine learning models.

The preprocessing includes:

- Converting text to lowercase
- Removing HTML tags
- Removing special characters
- Removing unnecessary whitespace

### 2. Exploratory Data Analysis

Genre distributions are analyzed to understand the most common genres and the distribution of multiple genre labels.

### 3. Multi-Label Encoding

A movie can belong to multiple genres simultaneously. `MultiLabelBinarizer` converts genre lists into binary labels.

### 4. TF-IDF Feature Extraction

**TF-IDF (Term Frequency–Inverse Document Frequency)** converts movie descriptions into numerical feature vectors, giving greater importance to informative terms.

### 5. Genre Classification

A **One-vs-Rest Logistic Regression** classifier is used for multi-label genre prediction.

The model learns:

```text
Movie Description → Genre(s)
```

### 6. Model Evaluation

The classification system is evaluated using:

- Precision
- Recall
- F1-score
- Hamming Loss
- Classification Report

### 7. Content-Based Movie Recommendation

Movie descriptions are represented using TF-IDF and compared using **cosine similarity**. The movies with the highest similarity scores are returned as recommendations.

```text
User Description
       ↓
TF-IDF Vector
       ↓
Cosine Similarity
       ↓
Similarity Scores
       ↓
Top Similar Movies
```

---

## 🔄 Project Pipeline

```text
1. Import Libraries
        ↓
2. Load Dataset
        ↓
3. Explore Dataset
        ↓
4. Select Relevant Features
        ↓
5. Handle Missing Values
        ↓
6. Clean Movie Descriptions
        ↓
7. Process Genre Data
        ↓
8. Clean Genre Labels
        ↓
9. Genre Distribution Analysis
        ↓
10. Prepare Features and Labels
        ↓
11. Multi-Label Encoding
        ↓
12. Train-Test Split
        ↓
13. TF-IDF Feature Extraction
        ↓
14. Train Classification Model
        ↓
15. Generate Predictions
        ↓
16. Hamming Loss
        ↓
17. Precision / Recall / F1
        ↓
18. Classification Report
        ↓
19. Actual vs Predicted Genres
        ↓
20. Test New Movie Descriptions
        ↓
21. Prepare Movie-Level Recommendation Data
        ↓
22. Build Recommendation System
        ↓
23. Test Movie Recommendations
        ↓
24. Combine Genre Prediction + Recommendation
        ↓
25. Final System Test
        ↓
26. Conclusion
```

---

## 🛠️ Technologies Used

- Python
- Pandas
- NumPy
- Matplotlib
- Seaborn
- Scikit-learn
- TF-IDF
- Logistic Regression
- MultiLabelBinarizer
- Cosine Similarity
- Joblib
- Jupyter Notebook / Google Colab

---

## 📊 Expected Output

For a description such as:

```text
A detective investigates a mysterious murder and discovers
a dangerous conspiracy involving several powerful people.
```

the system predicts relevant genres and recommends similar movies from the dataset.

Example:

| Movie | Genre(s) | Similarity |
|---|---|---:|
| Similar Movie 1 | Crime, Thriller | 0.xx |
| Similar Movie 2 | Mystery, Drama | 0.xx |
| Similar Movie 3 | Crime, Mystery | 0.xx |

The actual results depend on the dataset and trained model.

---

## 📈 Model Evaluation

### Precision
Measures how many predicted genre labels are relevant.

### Recall
Measures how many relevant genre labels were successfully identified.

### F1-Score
Balances precision and recall.

### Hamming Loss
Measures the fraction of incorrectly predicted labels across all samples and genres. Lower values indicate fewer label-level errors.

---

## 📁 Project Structure

```text
movie-genre-recommendation/
│
├── README.md
├── Movie_Genre_Classification_Recommendation.ipynb
│
├── data/
│   └── dataset.xlsx
│
├── models/
│   ├── tfidf_vectorizer.pkl
│   ├── genre_classifier.pkl
│   └── genre_encoder.pkl
│
└── requirements.txt
```

> If the dataset is large or has redistribution restrictions, do not upload the raw dataset to GitHub. Provide the original dataset source or instructions for obtaining it instead.

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/movie-genre-recommendation.git
cd movie-genre-recommendation
```

Install the required packages:

```bash
pip install pandas numpy matplotlib seaborn scikit-learn openpyxl joblib
```

Or:

```bash
pip install -r requirements.txt
```

---

## ▶️ Running the Project

### Jupyter Notebook

```bash
jupyter notebook
```

Open:

```text
Movie_Genre_Classification_Recommendation.ipynb
```

### Google Colab

Upload the notebook to Google Colab, upload the dataset, and run the notebook cells sequentially.

---

## 🚀 Future Improvements

- Experiment with transformer-based text representations.
- Test additional classification algorithms.
- Improve handling of rare genres.
- Add a web-based user interface.
- Incorporate additional movie metadata.
- Deploy the recommendation system as a web application.
- Compare TF-IDF recommendations with semantic embedding approaches.

---

## 🎓 Project Summary

This project demonstrates the application of **Natural Language Processing and Machine Learning to movie understanding and recommendation**.

The final system takes a movie description as input, predicts its possible genres, and identifies similar movies from the dataset using content-based similarity.

### Final System

```text
Movie Description
       ↓
   NLP Processing
       ↓
     TF-IDF
       ↓
 ┌─────┴──────┐
 ↓            ↓
Genre       Similarity
Prediction   Analysis
 ↓            ↓
Genres     Movie Recommendations
```

---

## 👨‍💻 Author

**Biswajit Sahoo**

B.Tech – Computer Science & Engineering  
Specialization: Artificial Intelligence & Machine Learning

---

## ⭐ Acknowledgement

This project was developed as an academic machine learning/NLP case study to explore text classification and content-based recommendation techniques using movie descriptions.
