import type { DevProject } from './types';

export const mllm: DevProject = {
  id: 'increase-mllm-ability',
  name: "Increasing Multilingual Language Model's Ability",
  description:
    'Researching methods to mitigate English-centric bias in LLMs and improve multilingual performance.',
  url: 'https://github.com/songjeongjun320/Increase_MLLM_Ability',
  stack: ['Python', 'Gemini', 'GCP', 'LLM', 'PyTorch'],
  logs: [
    {
      id: 'mllm-2025-08-12',
      date: '2025-08-12',
      summary: 'Optimized ToW data generation with a two-stage, batch-processing pipeline using Gemini 2.0 Flash Lite.',
      details: `Transitioned the ToW data generation process to a more robust and efficient two-stage pipeline leveraging the speed and cost-effectiveness of the Gemini 2.0 Flash Lite model on Google Cloud Vertex AI. This new pipeline is fully automated and designed for scalability.

**Stage 1: Gold Word Prediction**
- **Objective:** Identify the single most unpredictable, yet logically sound, next word in a given Korean sentence. This word becomes the target for the ToW explanation.
- **Process:** A script (\`generate_gold_word_with_gemini.py\`) feeds sentences from Korean datasets (like **KoNovel** and **KLUE**) to Gemini. Using a few-shot prompt, the model identifies and extracts the "unpredictable word".
- **Optimization:** Implemented asynchronous batch processing (\`asyncio.gather\`) to handle multiple sentences in parallel, dramatically increasing throughput. The results are saved periodically to prevent data loss during long runs.

**Stage 2: ToW Token Generation**
- **Objective:** Generate the English reasoning (\`<ToW>...</ToW>\`) that explains why the "gold word" from Stage 1 is the logical continuation of the preceding context.
- **Process:** A second script (\`generate_tow_batch.py\`) takes the context and the gold word, and uses another detailed few-shot prompt to ask Gemini to generate the cross-lingual reasoning.
- **Key Feature:** The entire reasoning process happens in English, forcing the model to rely on its English capabilities to understand and explain Korean linguistic nuances. This is the core of the cross-lingual transfer hypothesis.
- **Stability:** This script also uses async batching, periodic saving, and can resume from a previously interrupted job, making it reliable for generating large-scale datasets.`,
      tags: ['ToW', 'Gemini', 'Pipeline', 'Optimization', 'Dataset', 'GCP']
    },
    {
      id: 'mllm-2025-07-25',
      date: '2025-07-25',
      summary: 'Developed the fine-tuning script to train base models with ToW-augmented data.',
      details: `Created the training script (\`5_training/finetune_with_tow.py\`) responsible for fine-tuning the base language models (DeepSeek-R1-Distill-Qwen-7B, Qwen2.5-7B-Instruct) on the newly generated ToW-augmented dataset. The script is configured via \`config_option2.yaml\` to manage hyperparameters like batch size, learning rate, and the ratio of ToW data used in training.`,
      tags: ['Training', 'Fine-tuning', 'PyTorch', 'ToW']
    },
    {
      id: 'mllm-2025-07-15',
      date: '2025-07-15',
      summary: 'Implemented the core ToW data generation pipeline using GPT-OSS models.',
      details: `Built the scripts in \`4_tow_generation/\` to generate the ToW-augmented training data. This includes a prompt generator (\`tow_prompt_generator.py\`) that creates 5-shot prompts following the methodology of Zhikun et al. (2024), and a main generator (\`korean_tow_generator.py\`) that uses a large model (GPT-OSS) to produce the English reasoning for Korean text.`,
      tags: ['ToW', 'Data Generation', 'GPT-OSS', 'Python']
    },
    {
      id: 'mllm-2025-06-30',
      date: '2025-06-30',
      summary: 'Established the evaluation framework and baseline measurement scripts.',
      details: `Developed the evaluation scripts within the \`3_evaluation/\` directory. This includes \`baseline_evaluation.py\` to measure the zero-shot performance of the base models on Korean benchmarks (KMMLU, KLUE) before any ToW training. A second script, \`compare_baseline_vs_tow.py\`, was created to perform a statistical "before-and-after" comparison to quantify the effectiveness of the ToW fine-tuning.`,
      tags: ['Evaluation', 'Benchmark', 'KLUE', 'KMMLU', 'Statistics']
    },
    {
      id: 'mllm-2025-06-15',
      date: '2025-06-15',
      summary: 'Created scripts to download and prepare all required models and datasets.',
      details: `Set up the initial project structure and created download scripts for all dependencies.
- **Models (\`1_models/\`):** Wrote Python scripts to download the large ToW generation models (GPT-OSS-20B/120B) and the smaller base models for fine-tuning (DeepSeek, Qwen).
- **Datasets (\`2_datasets/\`):** Implemented a downloader for the Korean evaluation benchmarks (KMMLU, KLUE, etc.) and organized the Korean story corpus needed for ToW augmentation.`,
      tags: ['Setup', 'Data', 'Models', 'Python']
    },
    {
      id: 'mllm-2025-05-28',
      date: '2025-05-28',
      summary: "Pivoted research to a 'Thoughts of Words' (ToW) data generation strategy.",
      details: `Shifted the research direction to focus on a more structured and proven methodology for cross-lingual transfer. The new approach is based on generating synthetic "thoughts" to guide the model's predictions.

**New Methodology:**
- **Data Source:** Instead of translating English datasets, we will use existing, high-quality Korean story corpora (e.g., C4-based).
- **ToW Generation:** A large, powerful LLM (e.g., GPT-OSS) will be used to generate English-only reasoning steps (\`<ToW>\` tokens) for the Korean text.
- **Core Hypothesis:** Forcing the model to "think" in English before predicting the next Korean word will improve its reasoning and contextual understanding in Korean.`,
      tags: ['Research', 'Methodology', 'ToW', 'Data Generation', 'LLM']
    },
    {
      id: 'mllm-2025-03-16',
      date: '2025-03-16',
      summary: 'Conducted initial fine-tuning experiments on the OLMo-7B model using a subtitle-context dataset.',
      details: `Performed the first set of experiments to test the hypothesis of teaching a model language through contextual association.

**Experiment Setup:**
- **Model:** OLMo-7B was chosen for its open nature and architecture.
- **Dataset:** A custom dataset was created by pairing Korean drama subtitles with textual descriptions of the visual scene. The visual context was extracted from video frames using a vision model (Llama3.2-Vision).
- **Hypothesis:** Treating visual 'circumstance' as a third language (i.e., Korean text ↔ English text ↔ Circumstance) could improve the model's contextual understanding.
- **Fine-Tuning:** Used LoRA for parameter-efficient fine-tuning.
- **Initial Findings:** The model showed a promising ability to generate contextually relevant sentences but sometimes produced overly dramatic or irrelevant details. A more structured evaluation using the KLUE benchmark was planned as the next step.`,
      tags: ['Fine-tuning', 'OLMo', 'LoRA', 'Multimodal', 'Experiment']
    },
    {
      id: 'mllm-2025-02-28',
      date: '2025-02-28',
      summary: 'Researched and evaluated foundational models and addressed copyright concerns for the dataset.',
      details: `Conducted foundational research to select the right tools and ensure the project was on solid legal ground.

**Model Evaluation:**
- Analyzed various open-source models, including BERT, T5, GPT-2, and OLMo.
- **Conclusion:** OLMo was selected as the most promising candidate. Although it lacked pre-existing Korean knowledge, its open architecture and recent release made it ideal for a novel fine-tuning task.

**Data Sourcing & Copyright:**
- **Source:** Investigated using Netflix video frames and subtitles as the primary data source.
- **Risk Assessment:** A thorough analysis of copyright and Fair Use was conducted. It was concluded that using images *only* to generate textual descriptions (and not publishing the images themselves) and using subtitles for pattern learning would be a low-risk approach under Fair Use for non-commercial research.`,
      tags: ['Research', 'Model Selection', 'OLMo', 'Copyright', 'Fair Use']
    },
    {
      id: 'mllm-2025-02-09',
      date: '2025-02-09',
      summary: 'Initial project conception: Can an LLM acquire a new language by combining audio with situational context?',
      details: `The project began with a fundamental research question inspired by human language acquisition.

**Core Idea:**
- Can a Large Language Model learn a new language more effectively if it's provided not just with text/audio, but also with the context of the situation in which the language is used?
- This was inspired by how models like HuBERT can learn sound patterns from audio but lack true understanding because they have no connection to what those sounds *mean* in the real world.

**Initial Challenges & Approach:**
- **Problem:** LLMs cannot directly process video streams to understand context.
- **Proposed Solution:** The initial plan was to bridge this gap by using a vision model to describe scenes from images, and then link these text-based "situations" to the corresponding subtitles.
- **Conceptual Analogy:** The problem was framed as connecting two distinct vector spaces: one for linguistic data and another for situational/contextual data.`,
      tags: ['Ideation', 'Research', 'LLM', 'Language Acquisition', 'Multimodal']
    }
  ]
};
