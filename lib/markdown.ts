import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import remarkRehype from "remark-rehype";

const contentDirectory = path.join(process.cwd(), "content");

export interface Data {
  content: string;
  frontmatter: Frontmatter;
}

interface Frontmatter {
  heading?: string;
  date?: string;
  message?: string;
  buttonName?: string;
  buttonLink?: string;
  buttonName2?: string;
  buttonLink2?: string;
  submissionMessage?: string;
  location?: string;
  ogMessage?: string;
  ogTitle?: string;
  dressCodeDescription?: string;
}

export async function getMarkdownData(fileName: string): Promise<Data> {
  // read file
  const filePath = path.join(contentDirectory, `${fileName}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  // process with matter
  const { data, content } = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const contentHtml = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw) // *Parse* the raw HTML strings embedded in the tree
    .use(rehypeStringify)
    .process(content)
    .then((file) => String(file));

  return { content: contentHtml, frontmatter: data };
}
