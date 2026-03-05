#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.9"
# ///

'''
tag_generator.py

Copyright 2017 Long Qian
Contact: lqian8@jhu.edu

This script creates tags for your Jekyll blog hosted by Github page.
No plugins required.
'''

from pathlib import Path

post_dir = Path("_posts")
tag_dir = Path("tag")

filenames = post_dir.glob("*md")

total_tags = []
for filename in filenames:
    with filename.open("r", encoding="utf8") as f:
        crawl = False
        for line in f:
            if crawl:
                current_tags = line.strip().split()
                if current_tags and current_tags[0] == "tags:":
                    total_tags.extend(current_tags[1:])
                    crawl = False
                    break
            if line.strip() == "---":
                if not crawl:
                    crawl = True
                else:
                    crawl = False
                    break
total_tags = set(total_tags)

old_tags = tag_dir.glob("*.md")
for tag in old_tags:
    tag.unlink()

tag_dir.mkdir(parents=True, exist_ok=True)

for tag in total_tags:
    tag_filename = tag_dir / f"{tag}.md"
    write_str = (
        f'---\nlayout: tagpage\ntitle: "{tag}"\ntag: {tag}\nrobots: noindex\n---\n'
    )
    tag_filename.write_text(write_str, encoding="utf8")

print("Tags generated, count", len(total_tags))
