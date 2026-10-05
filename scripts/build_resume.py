"""Build the one-page portfolio resume. Requires PyMuPDF (`pip install pymupdf`)."""

from pathlib import Path

import fitz


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public/pdf/JeongJun_Resume_V52.pdf"
LEFT, RIGHT = 42, 570
BLUE = (0.09, 0.36, 0.72)
DARK = (0.12, 0.16, 0.23)
MUTED = (0.33, 0.38, 0.45)

document = fitz.open()
page = document.new_page(width=612, height=792)


def write(text, x, y, size=8.7, bold=False, color=DARK, link=None):
    font = "hebo" if bold else "helv"
    page.insert_text((x, y), text, fontname=font, fontsize=size, color=color)
    width = fitz.get_text_length(text, fontname=font, fontsize=size)
    if link:
        page.insert_link(
            {"kind": fitz.LINK_URI, "from": fitz.Rect(x, y - size, x + width, y + 2), "uri": link}
        )
    return width


def lines_for(text, width, size=8.7, bold=False):
    font = "hebo" if bold else "helv"
    lines = []
    current = ""
    for word in text.split():
        candidate = f"{current} {word}" if current else word
        if current and fitz.get_text_length(candidate, fontname=font, fontsize=size) > width:
            lines.append(current)
            current = word
        else:
            current = candidate
    if current:
        lines.append(current)
    return lines


def paragraph(text, y, x=LEFT, width=RIGHT - LEFT, size=8.7, line_height=11.5):
    for line in lines_for(text, width, size):
        write(line, x, y, size=size)
        y += line_height
    return y


def bullet(text, y):
    page.draw_circle((LEFT + 4, y - 3.1), 1.7, color=BLUE, fill=BLUE)
    return paragraph(text, y, x=LEFT + 13, width=RIGHT - LEFT - 13) + 2.6


def section(title, y):
    write(title.upper(), LEFT, y, size=9.2, bold=True, color=BLUE)
    page.draw_line((LEFT, y + 4), (RIGHT, y + 4), color=(0.76, 0.82, 0.89), width=0.7)
    return y + 16


def entry(name, role, dates, y, details):
    write(name, LEFT, y, size=9, bold=True)
    date_width = fitz.get_text_length(dates, fontname="helv", fontsize=8)
    write(dates, RIGHT - date_width, y, size=8, color=MUTED)
    y += 11.5
    write(role, LEFT, y, size=8, color=MUTED)
    y += 12
    for detail in details:
        y = bullet(detail, y)
    return y + 3


write("JeongJun Song", LEFT, 43, size=21, bold=True, color=BLUE)
write("Founding Engineer at Rapidflare  |  AI agents, evaluation, and safety", LEFT, 60, size=9.3)
contact_prefix = "San Francisco, CA  |  (623) 889-4796  |  "
email_x = LEFT + write(contact_prefix, LEFT, 77, size=8, color=MUTED)
write("songjeongjun320@gmail.com", email_x, 77, size=8, color=BLUE, link="mailto:songjeongjun320@gmail.com")
write("GitHub", LEFT, 89, size=8, color=BLUE, link="https://github.com/songjeongjun320")
write("  |  ", LEFT + 27, 89, size=8, color=MUTED)
write("LinkedIn", LEFT + 39, 89, size=8, color=BLUE, link="https://www.linkedin.com/in/junsong0602/")
write("  |  ", LEFT + 75, 89, size=8, color=MUTED)
write("Portfolio", LEFT + 87, 89, size=8, color=BLUE, link="https://junswebsite.vercel.app/")

y = section("Profile", 106)
y = paragraph(
    "Founding engineer building enterprise AI agents, evaluation systems, and safety controls. "
    "Lead customer projects from requirements through launch, connecting technical architecture with product delivery.",
    y,
)
y += 7

y = section("Experience", y)
y = entry(
    "Rapidflare, Inc.",
    "Founding Engineer  |  San Francisco, CA",
    "Oct 2025 - Present",
    y,
    [
        "Built the AI Safety Filter to classify incoming messages before retrieval, detect multi-turn jailbreaks, and apply customer-configurable policies.",
        "Designed customer-specific evaluation pipelines to compare Rapidflare agents with alternatives and trace answer quality to source evidence.",
        "Automated pre-sales onboarding with AI agents, cutting a week of manual work to within three hours and increasing the sales-call acceptance rate more than 10x versus the prior process.",
        "Lead the AMD ROCm Developer Assistant across Discord and Discourse, delivering source-backed answers for developer communities.",
        "Own requirements and delivery across five customer projects, from discovery through implementation and iteration.",
        "Built inline citations so technical answers point to supporting documentation users can verify.",
    ],
)
y = entry(
    "ARC Lab, Arizona State University",
    "Research Assistant  |  Tempe, AZ",
    "Dec 2024 - Present",
    y,
    [
        "Research multilingual language models under Prof. Ben Zhou, using data mining, model training, and evaluation on HPC clusters.",
    ],
)
y = entry(
    "Arizona State University",
    "Research Aide, Software Engineering  |  Tempe, AZ",
    "May 2024 - Dec 2024",
    y,
    [
        "Built an OCR workflow with Next.js, Flask, AWS Textract, and YOLOv8 that reduced truck gate processing from five minutes to 5-10 seconds.",
    ],
)
y = entry(
    "NGL Transportation Inc.",
    "Software Engineering Intern  |  Phoenix, AZ",
    "Jan 2022 - Jan 2023",
    y,
    [
        "Built ML-backed yard management automation for real-time tracking of more than 1,000 daily transactions using SQL and AWS S3.",
    ],
)

y = section("Selected projects", y)
y = bullet("Rebil: Built a vehicle rental marketplace for Indonesia, owning full-stack development and GCP infrastructure.", y)
y = bullet("Atoms: Developed MCP server and AI agent workflows to automate business processes with Next.js and n8n.", y)
y = bullet("Llama Socrates: Built a fine-tuning pipeline that improved math accuracy 32% and reduced perplexity 25%.", y)
y += 3

y = section("Technical skills", y)
y = paragraph("AI: Agent architecture, evaluation, safety, RAG, model training, RL, computer vision, CAPTCHA", y)
y = paragraph("Engineering: Python, TypeScript, Next.js, React, Flask, Elasticsearch, Redis, GCP, AWS, Supabase, Docker, Git, LangSmith", y)
y += 5

y = section("Education", y)
write("Arizona State University", LEFT, y, size=8.8, bold=True)
write("B.S. Computer Science, Dec 2025  |  GPA: 3.76/4.0", LEFT, y + 11.5, size=8.2)
write("Dean's List (2023-2025)  |  NamU Scholarship (2023-2025)", LEFT, y + 23, size=8.2, color=MUTED)
y += 37

y = section("Selected writing", y)
writing = [
    ("AI Safety Filter", "https://blog.rapidflare.ai/blog/responsible-ai-safety-filter/"),
    ("Enterprise Agent Evaluation", "https://blog.rapidflare.ai/blog/proving-it-without-a-trusted-answer-key/"),
    ("Inline Citations", "https://blog.rapidflare.ai/blog/introducing-inline-citations/"),
]
x = LEFT
for index, (label, url) in enumerate(writing):
    if index:
        x += write("  |  ", x, y, size=8, color=MUTED)
    x += write(label, x, y, size=8, color=BLUE, link=url)

if y > 758:
    raise RuntimeError(f"Resume content extends too close to the bottom: {y:.1f}")

document.set_metadata({"title": "JeongJun Song - Resume", "author": "JeongJun Song"})
OUTPUT.parent.mkdir(parents=True, exist_ok=True)
document.save(OUTPUT, garbage=4, deflate=True)
document.close()
print(f"Wrote {OUTPUT} (last baseline: {y:.1f})")
