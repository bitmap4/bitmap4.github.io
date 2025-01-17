---
title: Language Identification Analysis
description: A comparative study of various language classifiers based on different combinations of linguistic features vs a baseline n-grams based model
---

## About the Project

A machine learning system for identifying Hindi and Marathi text written in Devanagari script using multiple feature extraction techniques and classification models for a comparative study. The classifiers used were both Naive Bayes. This is my course project for the course CL2 (Computational Linguistics 2).

[`GitHub`](https://github.com/bitmap4/language-identification-analysis)
[`Report`](https://drive.google.com/file/d/1AOhGJupvoLIHYv3SttUXIJ8m7ax3K5HE)


## Features

- Supports Hindi and Marathi language identification
- Multiple feature extraction methods:
  - Character frequency analysis 
  - Word length statistics
  - Character class distribution (vowels, consonants, matras)
  - N-gram analysis
  - Morphological analysis
  - POS tagging features (optional)
  - TF-IDF features

## Setup

Run `setup.sh` to install required packages and download necessary data files.

## Usage

Run all cells in `model_comparison.ipynb`
> Create a directory named `<data_size>` in case it is not created automatically on running the notebook.

## Results

Results of the model comparison are available in `results/<data_size>` where `<data_size>` is the configured size of the training + testing data used for the models.