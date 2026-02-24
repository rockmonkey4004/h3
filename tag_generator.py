#!/usr/bin/env python

'''
tag_generator.py

Copyright 2017 Long Qian
Contact: lqian8@jhu.edu

This script creates tags for your Jekyll blog hosted by Github page.
No plugins required.
'''

import glob
import os

def main():
    post_dir = '_posts/'
    tag_dir = 'tag/'

    # Glob files with .md extension in post_dir
    filenames = glob.glob(os.path.join(post_dir, '*.md'))

    total_tags = []
    for filename in filenames:
        with open(filename, 'r', encoding='utf8') as f:
            crawl = False
            for line in f:
                stripped_line = line.strip()
                if crawl:
                    current_tags = stripped_line.split()
                    if current_tags and current_tags[0] == 'tags:':
                        total_tags.extend(current_tags[1:])
                        crawl = False
                        break
                if stripped_line == '---':
                    if not crawl:
                        crawl = True
                    else:
                        crawl = False
                        break

    # Use a set to remove duplicates
    unique_tags = set(total_tags)

    # Remove old tag files
    old_tags = glob.glob(os.path.join(tag_dir, '*.md'))
    for tag_file in old_tags:
        os.remove(tag_file)

    # Ensure tag directory exists
    if not os.path.exists(tag_dir):
        os.makedirs(tag_dir)

    # Create new tag files
    for tag in unique_tags:
        tag_filename = os.path.join(tag_dir, f'{tag}.md')
        with open(tag_filename, 'w', encoding='utf8') as f:
            write_str = (
                f"---\n"
                f"layout: tagpage\n"
                f"title: \"{tag}\"\n"
                f"tag: {tag}\n"
                f"robots: noindex\n"
                f"---\n"
            )
            f.write(write_str)

    print(f"Tags generated, count {len(unique_tags)}")

if __name__ == "__main__":
    main()
