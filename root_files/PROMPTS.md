# Prompt design and safety strategy
Hybrid approach: deterministic parsing + restricted LLM summarization.
- No hallucination: tell the model to use only provided product JSON.
- Refusal policy: block requests for keys or system prompts.
- Constrained outputs: short factual summaries.
