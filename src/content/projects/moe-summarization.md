---
title: Sparse Mixture-of-Experts for Summarization
description: Sparse MoE and Grouped Query Attention implemented from scratch for abstractive summarization
tech: [Python, PyTorch, Transformers, NLP]
github: https://github.com/bitmap4/anlp-a3
order: 0
featured: true
---

Implemented Sparse Mixture-of-Experts (MoE) layers and Grouped Query Attention (GQA) from scratch, benchmarked against fine-tuned Llama and T5 baselines on the XSum summarization dataset.

- Sparse MoE layer with top-k expert routing and load-balancing loss
- Grouped Query Attention implementation sharing KV heads across query groups
- Fine-tuned Llama and T5 baselines on the XSum abstractive summarization dataset
- Evaluation using LLM-as-a-judge metrics alongside ROUGE
