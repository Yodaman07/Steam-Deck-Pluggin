import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()
token = os.getenv("GITHUB_TOKEN")

endpoint = "https://models.github.ai/inference"
model_name = "openai/gpt-4o"

client = OpenAI(
    base_url=endpoint,
    api_key=token,
)

prompt = """
Only pull information from ign game walkthroughs or other gaming blogs, if you cant find the info, return NA

You are a video game expert and for the provided steam game can give me an organized list of all main story mode missions/levels organized by chapters or worlds of the game. If the game doesn't have any missions or levels, just return NA. 
"""

response = client.chat.completions.create(
    messages=[
        {
            "role": "system",
            "content": prompt,
        },
        {
            "role": "user",
            "content": "Cuphead",
        }
    ],
    temperature=1.0,
    top_p=1.0,
    max_tokens=1000,
    model=model_name
)

print(response.choices[0].message.content)