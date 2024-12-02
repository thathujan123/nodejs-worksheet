"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const server = (0, http_1.createServer)((req, res) => {
    res.end("hello world");
});
server.listen(3000, () => console.log("listening on port 3000"));
// import pandas as pd
// import numpy as np
// file_path="data.csv"
// df=pd.read_csv(file_path)
// df.head()
// age_array = np.array(df['age'])
// age_array
// age_mean = np.mean(age_array)
// age_mean
// age_median = np.median(age_array)
// age_median
// age_std = np.std(age_array)
// age_std
// age_max = np.max(age_array)
// age_max
// age_min = np.min(age_array)
// age_min
// salary_array = np.array(df['salary'])
// salary_array
// salary_in_cure = salary_array * 0.92
// salary_in_cure
// summary_stat = df.describe()
// summary_stat
// salary_greater = df[df["salary"] > 70000]
// salary_greater
// it_employees = df[df["department"] == "IT"]
// it_employees
// df.loc[df["experience"] <= 10, "Annual Bonus"] = df["salary"] * 0.10
// df 
// np.random.seed(42)
// random.indices = np.random.choice(df.index, size=3, replace=False)
// df.loc[random_indices , "age"]=np.nan 
// np.random.seed(42)
// random.indices = np.random.choice(df.index, size=3, replace=False)
// df.loc[random_indices , "city"]=""
// df["city"].replace("","unknown")
// departments_counts = df["Department"].value_counts()
// departments_counts
// departments_counts.plot(kind="bar",title="Employees per department")
// df["age"].fillna(df["age"].mean(), inplace=True)
// average_salary_by_department = df.groupby("Department")["Salary"].mean()
// average_salary_by_department
